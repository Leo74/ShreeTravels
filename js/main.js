/* =====================================================================
   Shree Travels — main.js
   Language toggle, dynamic rendering, gallery lightbox, tabs, filters,
   animated counters, scroll-reveal and callback forms.
   Depends on translations.js (I18N, DATA, CONFIG).
   ===================================================================== */
(function () {
  "use strict";
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const LS_KEY = "shree_lang";

  let lang = localStorage.getItem(LS_KEY) || "en";
  let booted = false;

  // Destination / service options for the callback forms (bilingual)
  const DESTS = [
    { v: "Local Cab",         en: "Local Cab",             mr: "स्थानिक कॅब" },
    { v: "Local Sightseeing", en: "Local Sightseeing",     mr: "स्थानिक स्थलदर्शन" },
    { v: "Tirupati",          en: "Tirupati",              mr: "तिरुपती" },
    { v: "South India",       en: "South India",           mr: "दक्षिण भारत" },
    { v: "Bangalore",         en: "Bangalore – Mysore",    mr: "बंगळुरू – म्हैसूर" },
    { v: "Ooty",              en: "Ooty – Coorg",          mr: "उटी – कूर्ग" },
    { v: "North India",       en: "North India",           mr: "उत्तर भारत" },
    { v: "Shimla",            en: "Shimla – Manali",       mr: "शिमला – मनाली" },
    { v: "Other",             en: "Other / Custom Trip",   mr: "इतर / सानुकूल सहल" }
  ];

  const t = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.en[k] || "");
  const L = (item) => item[lang] || item.en;      // pick language block from a data item
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- render dynamic sections ---------------- */
  function renderServices() {
    $("#servicesGrid").innerHTML = DATA.services.map((s) => {
      const c = L(s);
      return `<article class="scard">
        <div class="scard__ic"><svg class="ic"><use href="#i-${s.icon}"/></svg></div>
        <h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></article>`;
    }).join("");
  }

  function vehicleCard(v) {
    const c = L(v);
    return `<article class="vcard">
      <div class="vcard__media">
        <img src="${v.img}" alt="${esc(c.t)}" loading="lazy" />
        <span class="vcard__seats"><svg class="ic"><use href="#i-group"/></svg>${esc(v.seats)} ${esc(t("label_seats"))}</span>
      </div>
      <div class="vcard__body">
        <h3>${esc(c.t)}</h3>
        <div class="tags">${c.f.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        <button class="btn btn--primary btn--sm js-enquire" data-kind="vehicle" data-name="${esc(c.t)}">${esc(t("label_enquire"))}</button>
      </div></article>`;
  }
  let fleetTab = "buses";
  function renderFleet() {
    const list = fleetTab === "buses" ? DATA.buses : DATA.cars;
    $("#fleetGrid").innerHTML = list.map(vehicleCard).join("");
  }

  let galleryFilter = "all";
  function currentGallery() {
    return DATA.gallery.filter((g) => galleryFilter === "all" || g.type === galleryFilter);
  }
  function renderGallery() {
    $("#galleryGrid").innerHTML = currentGallery().map((g, i) => {
      const c = L(g);
      const vid = g.type === "video";
      return `<figure class="gitem" data-index="${i}" data-type="${g.type}">
        <img src="${g.img}" alt="${esc(c.t)}" loading="lazy" />
        ${vid ? `<span class="gitem__type"><svg class="ic"><use href="#i-play"/></svg>${esc(t("video_badge"))}</span>
          <span class="gitem__play"><span><svg class="ic"><use href="#i-play"/></svg></span></span>` : ""}
        <figcaption class="gitem__cap"><b>${esc(c.t)}</b><span>${esc(c.s)}</span></figcaption>
      </figure>`;
    }).join("");
  }

  function renderPackages() {
    $("#packagesGrid").innerHTML = DATA.packages.map((p) => {
      const c = L(p);
      const badge = p.badge ? `<span class="pcard__badge">${esc(t("badge_" + p.badge))}</span>` : "";
      return `<article class="pcard">
        <div class="pcard__media">
          <img src="${p.img}" alt="${esc(c.t)}" loading="lazy" />
          ${badge}
          <span class="pcard__dur"><svg class="ic"><use href="#i-clock"/></svg>${esc(c.dur)}</span>
        </div>
        <div class="pcard__body">
          <h3>${esc(c.t)}</h3>
          <ul class="pcard__hl">${c.h.map((x) => `<li><svg class="ic"><use href="#i-check"/></svg>${esc(x)}</li>`).join("")}</ul>
          <div class="pcard__foot">
            <div class="price"><small>${esc(t("label_from"))}</small><b>${esc(p.price)}</b><sup>*</sup></div>
            <button class="btn btn--primary btn--sm js-enquire" data-kind="package" data-name="${esc(c.t)}" data-dest="${esc(p.dest)}">${esc(t("btn_enquire_now"))}</button>
          </div>
        </div></article>`;
    }).join("");
  }

  function renderWhy() {
    $("#whyGrid").innerHTML = DATA.why.map((w) => {
      const c = L(w);
      return `<article class="wcard">
        <div class="wcard__ic"><svg class="ic"><use href="#i-${w.icon}"/></svg></div>
        <div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div></article>`;
    }).join("");
  }

  function renderReviews() {
    $("#reviewsGrid").innerHTML = DATA.reviews.map((r) => {
      const c = L(r);
      const stars = '<svg class="ic"><use href="#i-star"/></svg>'.repeat(5);
      return `<article class="rcard">
        <div class="rcard__stars">${stars}</div>
        <p class="rcard__q">${esc(c.q)}</p>
        <div class="rcard__who"><div class="rcard__av">${esc(c.n.trim().charAt(0))}</div>
          <div><b>${esc(c.n)}</b><span>${esc(c.c)}</span></div></div>
      </article>`;
    }).join("");
  }

  function populateDests() {
    $$(".js-dest").forEach((sel) => {
      const prev = sel.value;
      sel.innerHTML = `<option value="" disabled ${prev ? "" : "selected"}>${esc(t("form_dest_ph"))}</option>` +
        DESTS.map((d) => `<option value="${d.v}">${esc(d[lang] || d.en)}</option>`).join("");
      if (prev) sel.value = prev;
    });
  }

  function renderDynamic() {
    renderServices(); renderFleet(); renderGallery();
    renderPackages(); renderWhy(); renderReviews(); populateDests();
  }

  /* ---------------- i18n application ---------------- */
  const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || t("wa_default"))}`;

  function setHref(id, href, text) {
    const el = document.getElementById(id);
    if (!el) return;
    if (href) el.setAttribute("href", href);
    if (text != null) el.textContent = text;
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.title = t("page_title");

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPh)); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

    // business details from CONFIG
    const tel = "tel:" + CONFIG.phoneHref, mail = "mailto:" + CONFIG.email;
    setHref("topPhone", tel); $("#topPhone span").textContent = CONFIG.phone;
    setHref("topMail", mail); $("#topMail span").textContent = CONFIG.email;
    setHref("infoPhone", tel, CONFIG.phone);
    setHref("infoEmail", mail, CONFIG.email);
    setHref("footPhone", tel, CONFIG.phone);
    setHref("footMail", mail, CONFIG.email);

    // social links
    const S = CONFIG.social;
    const socials = { fb: S.facebook, ig: S.instagram, tw: S.twitter, yt: S.youtube, wa: waLink() };
    ["", "-top", "-f"].forEach((sfx) => {
      Object.keys(socials).forEach((k) => setHref(`soc-${k}${sfx}`, socials[k]));
    });
    setHref("waFab", waLink());
    setHref("waFormBtn", waLink());

    const map = $("#mapFrame");
    if (map && map.getAttribute("src") !== CONFIG.mapEmbed) map.setAttribute("src", CONFIG.mapEmbed);
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(LS_KEY, lang);
    renderDynamic();
    applyI18n();
    if (booted) observeReveals();
  }

  /* ---------------- forms ---------------- */
  function digits(s) { return (s || "").replace(/\D/g, ""); }
  function validPhone(s) {
    let d = digits(s);
    if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
    return d.length === 10 && /^[6-9]/.test(d);
  }
  function showMsg(form, text, ok) {
    const m = form.querySelector('[data-role="msg"]');
    if (!m) return;
    m.textContent = text;
    m.className = "form-msg " + (ok ? "ok" : "err");
  }
  function buildLeadMessage(data) {
    const lines = [t("form_title") + " — Shree Travels"];
    const add = (label, val) => { if (val) lines.push(`${label}: ${val}`); };
    add(t("form_name"), data.name);
    add(t("form_phone"), data.phone);
    add(t("form_email"), data.email);
    add(t("form_destination"), data.destination);
    add(t("form_date"), data.date);
    add(t("form_people"), data.people);
    add(t("form_message"), data.message);
    return lines.join("\n");
  }
  function readForm(form) {
    const d = {};
    $$("input,select,textarea", form).forEach((el) => { if (el.name) d[el.name] = el.value.trim(); });
    return d;
  }
  function markInvalid(form, name, bad) {
    const el = form.querySelector(`[name="${name}"]`);
    if (el && el.closest(".field")) el.closest(".field").classList.toggle("invalid", bad);
  }

  function handleLead(form, openWA) {
    const d = readForm(form);
    let bad = false;
    if (!d.name) { markInvalid(form, "name", true); bad = true; } else markInvalid(form, "name", false);
    if (!validPhone(d.phone)) { markInvalid(form, "phone", true); bad = true; } else markInvalid(form, "phone", false);
    if (bad) {
      showMsg(form, !d.name ? t("form_err_name") : t("form_err_phone"), false);
      return;
    }
    // Persist locally so nothing is lost (no backend in this demo).
    try {
      const leads = JSON.parse(localStorage.getItem("shree_leads") || "[]");
      leads.push({ ...d, at: new Date().toISOString() });
      localStorage.setItem("shree_leads", JSON.stringify(leads));
    } catch (e) { /* ignore */ }

    showMsg(form, t("form_success"), true);
    // Deliver the enquiry via WhatsApp (replace with a real backend/Formspree if preferred).
    if (openWA) window.open(waLink(buildLeadMessage(d)), "_blank", "noopener");
    const kept = { destination: form.querySelector('[name="destination"]') };
    form.reset();
    populateDests();
  }

  /* ---------------- gallery lightbox ---------------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let lbList = [], lbIndex = 0;
  function openLB(i) {
    lbList = currentGallery();
    lbIndex = i;
    showLB();
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function showLB() {
    const g = lbList[lbIndex]; if (!g) return;
    const c = L(g);
    lbImg.src = g.img; lbImg.alt = c.t;
    lbCap.textContent = c.t + " — " + c.s;
  }
  function closeLB() {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function stepLB(n) { lbIndex = (lbIndex + n + lbList.length) % lbList.length; showLB(); }

  /* ---------------- counters ---------------- */
  function runCounters() {
    $$(".stat__num").forEach((el) => {
      const target = parseFloat(el.dataset.count) || 0;
      const suffix = el.dataset.suffix || "";
      const dur = 1500, start = performance.now();
      function frame(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  /* ---------------- reveal + scrollspy ---------------- */
  let revealObs;
  function observeReveals() {
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
      }, { threshold: 0.12 });
    }
    $$(".reveal:not(.in)").forEach((el) => revealObs.observe(el));
  }

  function initScrollspy() {
    const links = $$(".nav__links a");
    const map = {};
    links.forEach((a) => { map[a.getAttribute("href").slice(1)] = a; });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          if (map[e.target.id]) map[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id], #home").forEach((s) => obs.observe(s));
  }

  /* ---------------- boot ---------------- */
  function init() {
    // mark dynamic grids + key blocks as reveal targets
    ["servicesGrid", "fleetGrid", "galleryGrid", "packagesGrid", "whyGrid", "reviewsGrid"]
      .forEach((id) => { const el = document.getElementById(id); if (el) el.classList.add("reveal"); });

    renderDynamic();
    applyI18n();

    // language toggle
    $("#langToggle").addEventListener("click", () => setLang(lang === "en" ? "mr" : "en"));

    // mobile menu
    const burger = $("#hamburger"), navLinks = $("#navLinks");
    burger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
    });
    $$(".nav__links a").forEach((a) => a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      burger.querySelector("use").setAttribute("href", "#i-menu");
    }));

    // fleet tabs
    $$(".tab").forEach((tab) => tab.addEventListener("click", () => {
      $$(".tab").forEach((x) => x.classList.remove("is-active"));
      tab.classList.add("is-active");
      fleetTab = tab.dataset.tab;
      renderFleet(); observeReveals();
    }));

    // gallery filters
    $$(".chip").forEach((chip) => chip.addEventListener("click", () => {
      $$(".chip").forEach((x) => x.classList.remove("is-active"));
      chip.classList.add("is-active");
      galleryFilter = chip.dataset.filter;
      renderGallery(); observeReveals();
    }));

    // delegated clicks: gallery open + enquire buttons
    document.addEventListener("click", (e) => {
      const gi = e.target.closest(".gitem");
      if (gi && $("#galleryGrid").contains(gi)) { openLB(parseInt(gi.dataset.index, 10)); return; }

      const enq = e.target.closest(".js-enquire");
      if (enq) {
        const msgField = $('#callbackForm [name="message"]');
        const destField = $('#callbackForm [name="destination"]');
        if (enq.dataset.kind === "package") {
          if (destField && enq.dataset.dest) destField.value = enq.dataset.dest;
          if (msgField) msgField.value = (lang === "mr" ? "मला या पॅकेजमध्ये रस आहे: " : "I'm interested in this package: ") + enq.dataset.name;
        } else {
          if (destField) destField.value = "Other";
          if (msgField) msgField.value = (lang === "mr" ? "वाहनाबद्दल चौकशी: " : "Enquiry about vehicle: ") + enq.dataset.name;
        }
        $("#contact").scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { const n = $('#callbackForm [name="name"]'); if (n) n.focus({ preventScroll: true }); }, 500);
      }
    });

    // lightbox controls
    $("#lbClose").addEventListener("click", closeLB);
    $("#lbPrev").addEventListener("click", () => stepLB(-1));
    $("#lbNext").addEventListener("click", () => stepLB(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") stepLB(-1);
      if (e.key === "ArrowRight") stepLB(1);
    });

    // forms
    $("#quickForm").addEventListener("submit", (e) => { e.preventDefault(); handleLead(e.target, true); });
    $("#callbackForm").addEventListener("submit", (e) => { e.preventDefault(); handleLead(e.target, true); });
    $("#waFormBtn").addEventListener("click", (e) => {
      e.preventDefault();
      const d = readForm($("#callbackForm"));
      window.open(waLink(d.name || d.phone ? buildLeadMessage(d) : ""), "_blank", "noopener");
    });
    $("#newsForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = e.target.querySelector("input");
      if (!input.value || !/^\S+@\S+\.\S+$/.test(input.value)) { input.focus(); return; }
      showMsg(e.target, t("footer_news_done"), true);
      e.target.reset();
    });

    // nav scrolled state + back-to-top
    const nav = $("#nav"), toTop = $("#toTop");
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 8);
      toTop.classList.toggle("show", window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // stats counters (once)
    const stats = $(".stats");
    if (stats) {
      const so = new IntersectionObserver((entries, o) => {
        entries.forEach((e) => { if (e.isIntersecting) { runCounters(); o.disconnect(); } });
      }, { threshold: 0.4 });
      so.observe(stats);
    }

    observeReveals();
    initScrollspy();
    booted = true;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
