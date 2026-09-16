/* ==========================================================================
   Advaya Advisory — content data, rendering & interactions
   ========================================================================== */

/* ---------------- Icon library (inline SVG, stroke-based, 24x24) ---------------- */
const ICONS = {
  scale: '<path d="M12 3v18M5 7l-3 7a3.5 3.5 0 0 0 7 0l-3-7zm14 0l-3 7a3.5 3.5 0 0 0 7 0l-3-7zM5 7h6m2 0h6M9 21h6"/>',
  gavel: '<path d="m14 5 5 5M3 21l7-7M7 13l4-4 5 5-4 4-5-5zM17 3l4 4-2 2-4-4 2-2z"/>',
  file: '<path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1M10 21v-4h4v4"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="18" cy="9" r="2.6"/><path d="M15.5 20a5.5 5.5 0 0 1 6.9-5.3"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  growth: '<path d="M4 18l5-5 4 4 7-8"/><path d="M15 9h5v5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  cert: '<circle cx="12" cy="9" r="6"/><path d="M9 14.5 7 21l5-3 5 3-2-6.5"/>',
  clipboard: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 12l2 2 4-4"/>',
  handshake: '<path d="M2 12l4-3 3 2 4-3 3 2 4-2M2 12l4 6h3l2-2M22 12l-4 6h-3l-1.5-1.7"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 8l9 5 9-5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z"/>',
  factory: '<path d="M3 21V11l5 3v-3l5 3V8l6 4v9H3z"/><path d="M6 17h2M10 17h2M14 17h2"/>',
  store: '<path d="M3 9l1.5-5h15L21 9M4 9h16v11H4z"/><path d="M9 20v-6h6v6M4 9a3 3 0 0 0 6 0M10 9a3 3 0 0 0 6 0"/>',
  heart: '<path d="M12 20s-7.5-4.7-9.8-9.4C.7 7 2.4 3.8 5.8 3.2 8 2.8 10.3 4 12 6.3 13.7 4 16 2.8 18.2 3.2c3.4.6 5.1 3.8 3.6 7.4C19.5 15.3 12 20 12 20z"/>',
  home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v10h12V10"/>',
  bed: '<path d="M3 18v-8a2 2 0 0 1 2-2h5v5M3 18h18v-4a3 3 0 0 0-3-3h-6M3 18v3M21 18v3"/>',
  truck: '<rect x="2" y="7" width="13" height="10" rx="1"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="1.6"/><circle cx="18" cy="19" r="1.6"/>',
  rocket: '<path d="M12 2c3 1.5 5 5 5 9 0 2-1 3.5-1 3.5H8s-1-1.5-1-3.5c0-4 2-7.5 5-9z"/><path d="M8.5 14 6 17l1 3 3-2M15.5 14 18 17l-1 3-3-2"/><circle cx="12" cy="10" r="1.6"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H12v18H5.5A1.5 1.5 0 0 1 4 19.5v-15z"/><path d="M20 4.5A1.5 1.5 0 0 0 18.5 3H12v18h6.5a1.5 1.5 0 0 0 1.5-1.5v-15z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  refresh: '<path d="M4 4v5h5M20 20v-5h-5"/><path d="M5 9a7.5 7.5 0 0 1 12.5-3.5L20 8M19 15a7.5 7.5 0 0 1-12.5 3.5L4 16"/>',
  star: '<path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 17l-5.6 3 1.3-6.2L3 9.5l6.3-.7L12 3z"/>',
  network: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6.7 7.2 10.5 16M17.3 7.2 13.5 16M7 6h10"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  flag: '<path d="M5 3v18M5 4h13l-3 4 3 4H5"/>',
  mapPin: '<path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
};
function icon(name, cls) {
  return `<svg class="${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.check}</svg>`;
}

/* ---------------- Content data ---------------- */

const SOLUTIONS = [
  { icon: "scale", title: "Corporate & Business Legal Advisory", desc: "Structuring, agreements and day-to-day legal support for growing businesses." },
  { icon: "file", title: "Contract Drafting & Review", desc: "Commercial contracts, vendor agreements and terms drafted to protect your interests." },
  { icon: "gavel", title: "Litigation & Dispute Resolution", desc: "Representation and strategy across civil, commercial and recovery matters." },
  { icon: "building", title: "Company Incorporation & Registration", desc: "Private Limited, LLP, OPC and Partnership formation, start to finish." },
  { icon: "clipboard", title: "Company Secretarial Services", desc: "ROC filings, MCA compliance, board and shareholder documentation." },
  { icon: "calc", title: "Accounting & Bookkeeping", desc: "Accurate books, reconciliations and MIS reporting for informed decisions." },
  { icon: "cert", title: "Statutory & Tax Audit", desc: "Independent audits that satisfy regulators, lenders and stakeholders." },
  { icon: "file", title: "Income Tax Advisory & Filing", desc: "Return filing, planning and representation before tax authorities." },
  { icon: "layers", title: "GST Registration, Filing & Advisory", desc: "Registration, periodic returns, reconciliation and advisory support." },
  { icon: "refresh", title: "TDS Compliance & Returns", desc: "Deduction, deposit and quarterly return filing, handled accurately and on time." },
  { icon: "users", title: "Payroll Management", desc: "End-to-end payroll processing with statutory deductions built in." },
  { icon: "shield", title: "Labour Law & Employment Compliance", desc: "PF, ESI, Shops & Establishment and state-specific labour obligations." },
  { icon: "briefcase", title: "HR Policy & Employment Contracts", desc: "Employment agreements, HR policy manuals and workplace documentation." },
  { icon: "star", title: "Trademark, Copyright & IP Registration", desc: "Protecting brand names, logos and creative work through IP registration." },
  { icon: "flag", title: "Licences, Permits & Government Approvals", desc: "Navigating applications and approvals across central and state authorities." },
  { icon: "check", title: "Business Compliance Audits & Due Diligence", desc: "Structured reviews that surface risk before it becomes a liability." },
  { icon: "chart", title: "Virtual CFO & Financial Advisory", desc: "Financial strategy, budgeting and reporting without a full-time CFO." },
];

const SERVICE_TABS = [
  {
    id: "legal",
    label: "Legal & Litigation",
    icon: "scale",
    intro: "From day-to-day legal support to representation in court, our advocates help you manage risk before it escalates and respond decisively when it does.",
    items: [
      "Contract Drafting & Vetting",
      "Legal Notices & Replies",
      "Civil & Commercial Litigation",
      "Recovery of Dues",
      "Property & Title Due Diligence",
      "Corporate Legal Retainer Services",
      "Arbitration & Mediation Support",
      "Corporate Legal Advisory",
    ],
  },
  {
    id: "ca",
    label: "CA, Tax & Audit",
    icon: "calc",
    intro: "Our Chartered Accountants and tax professionals keep your accounting, audit and tax obligations accurate, current and defensible.",
    items: [
      "Accounting & Bookkeeping",
      "Statutory & Internal Audit",
      "Income Tax Return Filing",
      "Tax Planning & Advisory",
      "GST Registration & Return Filing",
      "TDS / TCS Compliance",
      "Virtual CFO Services",
      "Financial Statement Preparation",
    ],
  },
  {
    id: "secretarial",
    label: "Company Secretarial",
    icon: "building",
    intro: "Company Secretaries manage the corporate governance backbone of your business — from incorporation through every annual filing that follows.",
    items: [
      "Company / LLP Incorporation",
      "ROC & Annual Filings",
      "Board & Shareholder Meetings",
      "Corporate Governance Advisory",
      "FEMA & RBI Compliance",
      "Mergers, Acquisitions & Restructuring",
      "Trademark & IP Registration",
      "Due Diligence & Documentation",
    ],
  },
  {
    id: "labour",
    label: "Labour & Payroll",
    icon: "users",
    intro: "We manage the statutory and operational side of employment so your workforce stays compliant and your payroll runs without surprises.",
    items: [
      "PF & ESI Registration and Returns",
      "Payroll Processing",
      "Shops & Establishment Compliance",
      "Contract Labour Compliance",
      "Factory Act Compliance",
      "HR Policy & Employment Contracts",
      "Statutory Registers & Records",
      "Labour Law Audits",
    ],
  },
];

const COMPLIANCE_STEPS = [
  { title: "Assess", desc: "Compliance assessment & gap analysis" },
  { title: "Plan", desc: "Compliance calendar & roadmap" },
  { title: "Implement", desc: "Documentation & registrations" },
  { title: "Execute", desc: "Periodic filings & returns" },
  { title: "Monitor", desc: "Continuous tracking & alerts" },
  { title: "Renew", desc: "Renewals, audits & review" },
];

const GOV_FLOW = [
  { title: "Assess", desc: "Requirement & eligibility check" },
  { title: "Prepare", desc: "Documentation & drafting" },
  { title: "File", desc: "Application with the authority" },
  { title: "Liaise", desc: "Follow-up & clarifications" },
  { title: "Approve", desc: "Licence / approval granted" },
  { title: "Support", desc: "Post-approval compliance" },
];

const GOV_CHIPS = [
  "Company / LLP Registration", "GST Registration", "MSME / Udyam Registration",
  "Shops & Establishment Licence", "Trade Licence", "FSSAI Licence",
  "Import Export Code (IEC)", "Professional Tax Registration", "PF & ESI Registration",
  "Trademark Registration", "Fire & Safety NOC", "Pollution Control Consent (CTE / CTO)",
  "Factory Licence", "Startup India Recognition", "Labour Licences",
  "Digital Signature Certificate (DSC)",
];

const INDUSTRIES = [
  { icon: "factory", title: "Manufacturing", desc: "Factory licensing, labour and environmental compliance." },
  { icon: "chart", title: "IT & Technology", desc: "Corporate structuring, IP protection and contracts." },
  { icon: "store", title: "Retail & E-commerce", desc: "GST, registrations and consumer-facing compliance." },
  { icon: "heart", title: "Healthcare", desc: "Licensing, statutory approvals and regulatory advisory." },
  { icon: "home", title: "Real Estate & Construction", desc: "Approvals, title diligence and project compliance." },
  { icon: "bed", title: "Hospitality", desc: "Licences, labour compliance and operational advisory." },
  { icon: "book", title: "Education", desc: "Institutional registration and regulatory compliance." },
  { icon: "truck", title: "Logistics & Transportation", desc: "Licensing, labour and statutory obligations." },
  { icon: "building", title: "Financial Services", desc: "Regulatory, tax and corporate governance support." },
  { icon: "rocket", title: "Startups & MSMEs", desc: "Formation, funding-readiness and ongoing compliance." },
];

const WHO_WE_SERVE = [
  { icon: "rocket", label: "Startups" },
  { icon: "briefcase", label: "MSMEs" },
  { icon: "building", label: "Private Limited Companies" },
  { icon: "handshake", label: "LLPs & Partnerships" },
  { icon: "heart", label: "NGOs & Trusts" },
  { icon: "users", label: "Individuals & Professionals" },
  { icon: "layers", label: "Large Enterprises" },
  { icon: "globe", label: "NRIs & Foreign Investors" },
];

const WHY_US = [
  { icon: "network", title: "Multidisciplinary Expertise", desc: "Advocates, CAs, CSs and specialists working together under one platform." },
  { icon: "shield", title: "Proactive Risk Management", desc: "We identify obligations and risks before they become problems." },
  { icon: "check", title: "Transparent & Ethical Practice", desc: "Clear scope, clear pricing and honest advice at every stage." },
  { icon: "handshake", title: "Dedicated Relationship Manager", desc: "One point of contact who understands your business end to end." },
  { icon: "mapPin", title: "Pan-India Network", desc: "On-ground support and coordination across jurisdictions." },
  { icon: "growth", title: "Technology-Enabled Delivery", desc: "Structured processes and tracking for predictable turnaround." },
  { icon: "lock", title: "Confidentiality & Data Security", desc: "Your information is handled with strict professional discretion." },
  { icon: "clock", title: "Timely & Responsive Service", desc: "Deadlines tracked and met, without last-minute surprises." },
];

const SERVICE_PROMISE = [
  { icon: "clock", title: "Timely Delivery", desc: "Every engagement tracked against clear milestones." },
  { icon: "file", title: "Transparent Pricing", desc: "No hidden costs — scope and fees agreed upfront." },
  { icon: "handshake", title: "Dedicated Point of Contact", desc: "One relationship manager for every engagement." },
  { icon: "lock", title: "Confidentiality Guaranteed", desc: "Strict data protection and professional discretion." },
];

const VALUES = ["Integrity", "Trust", "Confidentiality", "Professionalism", "Transparency"];

/* ---------------- Render helpers ---------------- */

function staggerStyle(i, step = 0.06, max = 0.42) {
  return `--reveal-delay:${Math.min(i * step, max)}s`;
}

function renderSolutions() {
  const grid = document.getElementById("solutionGrid");
  if (!grid) return;
  grid.innerHTML = SOLUTIONS.map((s, i) => `
    <div class="sol-tile reveal tilt" data-num="${String(i + 1).padStart(2, "0")}" style="${staggerStyle(i, 0.04, 0.4)}">
      <div class="sol-icon">${icon(s.icon)}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");
}

function renderServiceTabs() {
  const tabList = document.getElementById("tabList");
  const panels = document.getElementById("tabPanels");
  if (!tabList || !panels) return;

  tabList.innerHTML = SERVICE_TABS.map((t, i) => `
    <button class="tab-btn" role="tab" id="tab-${t.id}" aria-controls="panel-${t.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
      ${icon(t.icon)}<span>${t.label}</span>
    </button>
  `).join("");

  panels.innerHTML = SERVICE_TABS.map((t, i) => `
    <div class="tab-panel${i === 0 ? " is-active" : ""}" role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}" ${i === 0 ? "" : "hidden"}>
      <div class="tab-intro">
        <h3>${t.label}</h3>
        <p>${t.intro}</p>
      </div>
      <div class="tab-items">
        ${t.items.map(item => `<div class="tab-item">${icon("check")}<span>${item}</span></div>`).join("")}
      </div>
    </div>
  `).join("");

  const buttons = Array.from(tabList.querySelectorAll(".tab-btn"));
  function activate(idx) {
    buttons.forEach((btn, i) => {
      const selected = i === idx;
      btn.setAttribute("aria-selected", String(selected));
      btn.tabIndex = selected ? 0 : -1;
    });
    SERVICE_TABS.forEach((t, i) => {
      const panel = document.getElementById(`panel-${t.id}`);
      if (!panel) return;
      panel.classList.toggle("is-active", i === idx);
      if (i === idx) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    });
  }
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => activate(i));
    btn.addEventListener("keydown", (e) => {
      let next = null;
      if (e.key === "ArrowRight") next = (i + 1) % buttons.length;
      if (e.key === "ArrowLeft") next = (i - 1 + buttons.length) % buttons.length;
      if (next !== null) {
        e.preventDefault();
        buttons[next].focus();
        activate(next);
      }
    });
  });
}

function renderFlow(containerId, steps) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = steps.map((s, i) => `
    <div class="flow-step reveal" style="${staggerStyle(i, 0.08, 0.5)}">
      <div class="flow-num">${i + 1}</div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join("");
}

function renderChips() {
  const el = document.getElementById("govChips");
  if (!el) return;
  el.innerHTML = GOV_CHIPS.map((c, i) => `<span class="chip reveal" style="${staggerStyle(i, 0.03, 0.3)}">${c}</span>`).join("");
}

function renderIndustries() {
  const grid = document.getElementById("industryGrid");
  const wws = document.getElementById("wwsGrid");
  if (grid) {
    grid.innerHTML = INDUSTRIES.map((it, i) => `
      <div class="industry-card reveal tilt" style="${staggerStyle(i, 0.04, 0.4)}">
        <div class="sol-icon">${icon(it.icon)}</div>
        <h4>${it.title}</h4>
        <p>${it.desc}</p>
      </div>
    `).join("");
  }
  if (wws) {
    wws.innerHTML = WHO_WE_SERVE.map((w, i) => `
      <div class="wws-item reveal" style="${staggerStyle(i, 0.04, 0.4)}">
        ${icon(w.icon)}<span>${w.label}</span>
      </div>
    `).join("");
  }
}

function renderWhy() {
  const grid = document.getElementById("whyGrid");
  const promise = document.getElementById("promiseGrid");
  if (grid) {
    grid.innerHTML = WHY_US.map((w, i) => `
      <div class="why-card reveal tilt" style="${staggerStyle(i, 0.04, 0.4)}">
        <div class="sol-icon">${icon(w.icon)}</div>
        <h4>${w.title}</h4>
        <p>${w.desc}</p>
      </div>
    `).join("");
  }
  if (promise) {
    promise.innerHTML = SERVICE_PROMISE.map((p, i) => `
      <div class="promise-item reveal" style="${staggerStyle(i, 0.06, 0.4)}">
        ${icon(p.icon)}
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>
    `).join("");
  }
}

function renderValuesLine() {
  const el = document.getElementById("valuesLine");
  if (!el) return;
  el.textContent = VALUES.join("  •  ");
}

function renderStaticIcons() {
  document.querySelectorAll(".phil-icon[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
  });
}

/* ---------------- Interactions ---------------- */

function initHeader() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!header) return;

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    const backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      backdrop.classList.toggle("visible", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    backdrop.addEventListener("click", () => setOpen(false));
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }
}

function initProgressBar() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    bar.style.width = height > 0 ? `${(scrolled / height) * 100}%` : "0%";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  items.forEach((el) => io.observe(el));
}

function initTilt() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;
  document.addEventListener("mousemove", (e) => {
    const el = e.target.closest && e.target.closest(".tilt");
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-2px)`;
  });
  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest && e.target.closest(".tilt");
    if (!el) return;
    if (el.contains(e.relatedTarget)) return;
    el.style.transform = "";
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  const onScroll = () => btn.classList.toggle("visible", window.scrollY > 600);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

/* ---------------- Boot ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderSolutions();
  renderServiceTabs();
  renderFlow("complianceFlow", COMPLIANCE_STEPS);
  renderFlow("govFlow", GOV_FLOW);
  renderChips();
  renderIndustries();
  renderWhy();
  renderValuesLine();
  renderStaticIcons();
  initFooterYear();

  initHeader();
  initProgressBar();
  initBackToTop();
  initTilt();
  initReveal();
});
