/* ==========================================================================
   Advaya Advisory — hero & closing background: a soft particle "trust network"
   Degrades gracefully: skipped for reduced-motion, and silently no-ops if
   three.js can't be loaded (e.g. offline), leaving the CSS gradient in place.
   ========================================================================== */

(async () => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const heroCanvas = document.getElementById("heroCanvas");
  const closingCanvas = document.getElementById("closingCanvas");
  if (!heroCanvas && !closingCanvas) return;

  let THREE;
  try {
    THREE = await import("three");
  } catch (err) {
    console.warn("Advaya: decorative 3D background unavailable (three.js failed to load).", err);
    return;
  }

  function createNetworkScene(canvas, { count, color, lineColor, spread, speed, cameraZ, opacity }) {
    if (!canvas) return null;
    const host = canvas.parentElement;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
    } catch (err) {
      return null;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = cameraZ;

    const group = new THREE.Group();
    scene.add(group);

    const base = new Float32Array(count * 3);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread * 1.7;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread * 0.6;
      base[i * 3] = positions[i * 3] = x;
      base[i * 3 + 1] = positions[i * 3 + 1] = y;
      base[i * 3 + 2] = positions[i * 3 + 2] = z;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color, size: 0.06, transparent: true, opacity, sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    group.add(points);

    const edges = [];
    const maxDist = spread * 0.32;
    for (let i = 0; i < count; i++) {
      let linked = 0;
      for (let j = i + 1; j < count && linked < 3; j++) {
        const dx = base[i * 3] - base[j * 3];
        const dy = base[i * 3 + 1] - base[j * 3 + 1];
        const dz = base[i * 3 + 2] - base[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < maxDist) {
          edges.push(i, j);
          linked++;
        }
      }
    }
    const linePositions = new Float32Array((edges.length / 2) * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: lineColor, transparent: true, opacity: opacity * 0.6 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    function resize() {
      const rect = host.getBoundingClientRect();
      const w = Math.max(rect.width, 1);
      const h = Math.max(rect.height, 1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    let mouseX = 0, mouseY = 0;
    host.addEventListener("mousemove", (e) => {
      const rect = host.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    function update(t) {
      const time = t * 0.001 * speed;
      const pos = pointsGeo.getAttribute("position");
      for (let i = 0; i < count; i++) {
        pos.array[i * 3] = base[i * 3] + Math.sin(time + i) * 0.25;
        pos.array[i * 3 + 1] = base[i * 3 + 1] + Math.cos(time * 0.8 + i * 1.3) * 0.25;
        pos.array[i * 3 + 2] = base[i * 3 + 2] + Math.sin(time * 0.6 + i * 0.7) * 0.2;
      }
      pos.needsUpdate = true;

      const lp = lineGeo.getAttribute("position");
      let seg = 0;
      for (let e = 0; e < edges.length; e += 2) {
        const a = edges[e], b = edges[e + 1];
        const o = seg * 6;
        lp.array[o] = pos.array[a * 3];
        lp.array[o + 1] = pos.array[a * 3 + 1];
        lp.array[o + 2] = pos.array[a * 3 + 2];
        lp.array[o + 3] = pos.array[b * 3];
        lp.array[o + 4] = pos.array[b * 3 + 1];
        lp.array[o + 5] = pos.array[b * 3 + 2];
        seg++;
      }
      lp.needsUpdate = true;

      group.rotation.y = time * 0.12 + mouseX * 0.15;
      group.rotation.x = mouseY * 0.08;

      renderer.render(scene, camera);
    }

    return { update };
  }

  const heroScene = createNetworkScene(heroCanvas, {
    count: 70, color: 0xc49b44, lineColor: 0x3a4a63, spread: 9, speed: 0.15, cameraZ: 7, opacity: 0.85,
  });
  const closingScene = createNetworkScene(closingCanvas, {
    count: 50, color: 0xe3c684, lineColor: 0x2a3850, spread: 8, speed: 0.1, cameraZ: 6.5, opacity: 0.6,
  });

  if (!heroScene && !closingScene) return;

  let running = true;
  document.addEventListener("visibilitychange", () => {
    running = document.visibilityState === "visible";
  });

  function loop(t) {
    requestAnimationFrame(loop);
    if (!running) return;
    if (heroScene) heroScene.update(t);
    if (closingScene) closingScene.update(t);
  }
  requestAnimationFrame(loop);
})();
