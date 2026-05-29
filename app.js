// ===========================
// CONFIGURACIÓN SERVIDOR
// ===========================
const USE_SERVER = true;

// ===========================
// DATOS POR DEFECTO
// ===========================
const DATA = {
  siteName:"Mi Tienda APKs", logoUrl:"",
  bannerText:"Juegos y aplicaciones para Android – descarga apps gratis sin virus",
  bannerMode:"auto", banners:[],
  communityTitle:"Únete a nuestra comunidad",
  communityDesc:"Recibe las últimas actualizaciones y noticias directamente.",
  communityBtn:"Únete ahora →", communityLink:"#", communityBg:"",
  footerCopy:"Copyright © 2025 Mi Tienda APKs",
  theme:"green", redes:[],
  contactTitle:"Contáctanos",
  contactDesc:"Puedes contactarnos a través de nuestras redes sociales o formulario.",
  contactEmail:"", contactFormShow:"yes",
  ultimas:[
    { id:1, name:"App de Ejemplo 1", category:"Entretenimiento", rating:"4.6", size:"50M", tag:"mod", tagLabel:"MOD", banner:"🎮", icon:"🎮", link:"#", desc:"Descripción de ejemplo.", ratingType:"stars", userRatings:[], userLikes:0, gallery:[] },
    { id:2, name:"App de Ejemplo 2", category:"Acción", rating:"4.5", size:"120M", tag:"free", tagLabel:"GRATIS", banner:"🚀", icon:"🚀", link:"#", desc:"", ratingType:"hearts", userRatings:[], userLikes:0, gallery:[] },
    { id:3, name:"App de Ejemplo 3", category:"Carreras", rating:"4.3", size:"200M", tag:"pro", tagLabel:"PRO", banner:"🏎️", icon:"🏎️", link:"#", desc:"", ratingType:"none", userRatings:[], userLikes:0, gallery:[] }
  ],
  tendencias:[
    { id:4, name:"App Tendencia 1", category:"Aplicaciones de video", rating:"4.7", size:"270M", tag:"mod", tagLabel:"FUNCIONES ADICIONALES", icon:"✂️", link:"#", ratingType:"stars", userRatings:[], userLikes:0, gallery:[] },
    { id:5, name:"App Tendencia 2", category:"Acción", rating:"4.4", size:"2.4GB", tag:"free", tagLabel:"DINERO ILIMITADO", icon:"🎮", link:"#", ratingType:"none", userRatings:[], userLikes:0, gallery:[] },
    { id:6, name:"App Tendencia 3", category:"Aventura", rating:"4.2", size:"680M", tag:"pro", tagLabel:"PRO", icon:"🛡️", link:"#", ratingType:"none", userRatings:[], userLikes:0, gallery:[] }
  ],
  recomendado:[
    { id:7, name:"Recomendada 1", category:"Música y audio", rating:"4.6", size:"50M", tag:"mod", tagLabel:"FUNCIONES ADICIONALES", icon:"🎵", link:"#", ratingType:"hearts", userRatings:[], userLikes:0, gallery:[] },
    { id:8, name:"Recomendada 2", category:"Entretenimiento", rating:"4.5", size:"25M", tag:"free", tagLabel:"GRATIS", icon:"📺", link:"#", ratingType:"none", userRatings:[], userLikes:0, gallery:[] }
  ],
  juegos:[
    { id:9,  name:"Juego Ejemplo 1", category:"Acción", rating:"4.5", size:"900M", tag:"free", tagLabel:"GRATIS", icon:"⚔️", link:"#", ratingType:"stars", userRatings:[], userLikes:0, gallery:[] },
    { id:10, name:"Juego Ejemplo 2", category:"Aventura", rating:"4.4", size:"610M", tag:"mod", tagLabel:"MOD", icon:"🧟", link:"#", ratingType:"none", userRatings:[], userLikes:0, gallery:[] }
  ],
  apps:[
    { id:11, name:"App Utilidad 1", category:"Herramientas", rating:"4.3", size:"20M", tag:"free", tagLabel:"GRATIS", icon:"🔧", link:"#", ratingType:"none", userRatings:[], userLikes:0, gallery:[] },
    { id:12, name:"App Utilidad 2", category:"Productividad", rating:"4.6", size:"35M", tag:"pro", tagLabel:"PRO", icon:"📊", link:"#", ratingType:"hearts", userRatings:[], userLikes:0, gallery:[] }
  ],
  blog:[
    { id:1, title:"Noticia de ejemplo 1", date:"06 May 2026", author:"Admin", views:84, image:"📰", link:"#", content:"" },
    { id:2, title:"Noticia de ejemplo 2", date:"06 May 2026", author:"Admin", views:42, image:"📱", link:"#", content:"" },
    { id:3, title:"Noticia de ejemplo 3", date:"06 May 2026", author:"Admin", views:49, image:"🎮", link:"#", content:"" },
    { id:4, title:"Noticia de ejemplo 4", date:"06 May 2026", author:"Admin", views:28, image:"🔥", link:"#", content:"" }
  ]
};

// ===========================
// SECCIONES
// ===========================
const DEFAULT_SECS = [
  { id:"ultimas",    label:"Últimas actualizaciones" },
  { id:"tendencias", label:"Tendencias" },
  { id:"recomendado",label:"Recomendado" },
  { id:"juegos",     label:"Juegos" },
  { id:"apps",       label:"Apps" }
];

function loadSections() {
  try {
    const saved = localStorage.getItem("tiendaSecciones");
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_SECS));
  } catch(e) { return JSON.parse(JSON.stringify(DEFAULT_SECS)); }
}

// ===========================
// CARGAR DATOS DEL SERVIDOR
// ===========================
async function loadDataFromServer() {
  try {
    const res  = await fetch("load.php");
    const json = await res.json();
    if (json && !json.empty) Object.assign(DATA, json);
  } catch(e) {
    try {
      const saved = localStorage.getItem("tiendaData");
      if (saved) Object.assign(DATA, JSON.parse(saved));
    } catch(e2) {}
  }
  const savedTheme = localStorage.getItem("tiendaTheme");
  if (savedTheme) DATA.theme = savedTheme;
}

// ===========================
// INICIALIZAR
// ===========================
document.addEventListener("DOMContentLoaded", async () => {
  const quickTheme = localStorage.getItem("tiendaTheme");
  if (quickTheme) document.body.classList.add("theme-" + quickTheme);
  await loadDataFromServer();
  applyConfig();
  renderCarrusel();
  renderAllSections();
  renderBlog();
  renderRedes();
  renderContacto();
  loadTheme();
});

// ===========================
// APLICAR CONFIGURACIÓN
// ===========================
function applyConfig() {
  const logoEl = document.getElementById("site-logo");
  const nameEl = document.getElementById("site-name");
  if (DATA.logoUrl && logoEl) {
    logoEl.src = DATA.logoUrl;
    logoEl.style.display = "inline-block";
    if (nameEl) nameEl.style.display = "none";
  } else {
    if (logoEl) logoEl.style.display = "none";
    if (nameEl) {
      const parts = DATA.siteName.split(" ");
      const last  = parts.pop();
      nameEl.innerHTML = parts.join(" ") + ' <span class="logo-accent">' + last + "</span>";
    }
  }

  // Navbar dinámico
  const DEFAULT_NAV_WEB = [
    { label:"Inicio",   href:"#",               icon:"fas fa-home" },
    { label:"Juegos",   href:"#section-juegos",  icon:"fas fa-gamepad" },
    { label:"Apps",     href:"#section-apps",    icon:"fas fa-layer-group" },
    { label:"Blog",     href:"#blog",            icon:"fas fa-newspaper" },
    { label:"Contacto", href:"#contacto",        icon:"fas fa-envelope" }
  ];
  const navItems  = DATA.navItems || DEFAULT_NAV_WEB;
  const navCenter = document.querySelector(".navbar-center");
  const mobileNav = document.querySelector(".mobile-nav");
  if (navCenter) {
    navCenter.innerHTML = navItems.map(item => {
      const hasChildren = item.children && item.children.length > 0;
      const submenu = hasChildren ? `
        <div class="submenu">
          ${item.children.map(child =>
            `<a href="${child.href}" onclick="smoothScroll(event,'${child.href}')">
              <i class="${child.icon||'fas fa-link'}"></i> ${child.label}
            </a>`
          ).join("")}
        </div>` : "";
      return `<a href="${item.href}" onclick="${hasChildren?'return false':''}" 
        class="${hasChildren?'has-submenu':''}"
        ${!hasChildren?`onclick="smoothScroll(event,'${item.href}')"`:""}>
        <i class="${item.icon}"></i> ${item.label}
        ${hasChildren?'<i class="fas fa-chevron-down arrow"></i>':""}
        ${submenu}
      </a>`;
    }).join("");
  }
  if (mobileNav) {
    mobileNav.innerHTML = navItems.slice(0,4).map(item =>
      `<a href="${item.href}" onclick="smoothScroll(event,'${item.href}')"><i class="${item.icon}"></i><span>${item.label}</span></a>`
    ).join("") + `<a href="#" onclick="toggleMobileMenu(event)"><i class="fas fa-bars"></i><span>Menú</span></a>`;
  }

  const bannerEl = document.getElementById("banner-text");
  if (bannerEl) bannerEl.textContent = DATA.bannerText;

  const ct = document.getElementById("community-title");
  const cd = document.getElementById("community-desc");
  const cb = document.getElementById("community-btn");
  if (ct) ct.textContent = DATA.communityTitle;
  if (cd) cd.textContent = DATA.communityDesc;
  if (cb) { cb.textContent = DATA.communityBtn; cb.href = DATA.communityLink; }

  const commBg = document.querySelector(".community-banner-bg");
  const commBanner = document.querySelector(".community-banner");
  if (commBg && commBanner) {
    if (DATA.communityBg) {
      commBg.style.backgroundImage = `url('${DATA.communityBg}')`;
      commBg.style.display = "block";
      commBanner.style.background = "transparent";
    } else {
      commBg.style.display = "none";
      commBanner.style.background = "";
    }
  }

  const fc = document.getElementById("footer-copy");
  if (fc) fc.textContent = DATA.footerCopy;

  document.body.classList.forEach(c => {
    if (c.startsWith("theme-")) document.body.classList.remove(c);
  });
  document.body.classList.add("theme-" + (DATA.theme || "green"));

  // Favicon dinámico
  if (DATA.pwaFavicon) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = DATA.pwaFavicon;
  }

  // Botón instalar PWA
  const installBanner = document.getElementById("pwa-install-banner");
  if (installBanner) {
    installBanner.style.display = DATA.pwaInstallBtn === "no" ? "none" : "";
  }
}


// ===========================
// RENDERIZAR SECCIONES
// ===========================
function renderAllSections() {
  const secs = loadSections();
  const main = document.querySelector(".container");
  if (!main) return;

  document.querySelectorAll(".dynamic-section").forEach(el => el.remove());

  const redesEl = document.getElementById("redes-container");

  secs.forEach(sec => {
    const items = DATA[sec.id] || [];
    let section = document.getElementById("section-" + sec.id);
    if (!section) {
      section = document.createElement("section");
      section.className = "section dynamic-section";
      section.id = "section-" + sec.id;
      section.style.scrollMarginTop = "100px";
      section.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">${sec.label}</h2>
          <a href="#" class="ver-todo" onclick="verTodo('${sec.id}','${sec.label}');return false;">Ver todo →</a>
        </div>
        <div class="${sec.id === "ultimas" ? "cards-grid" : "list-grid"}" id="${sec.id}-grid"></div>
      `;
      if (redesEl) main.insertBefore(section, redesEl);
      else main.appendChild(section);
    }

    if (sec.id === "ultimas") renderUltimas();
    else renderListGrid(sec.id + "-grid", items, sec.id);
  });
}

// ===========================
// CARRUSEL PRINCIPAL
// ===========================
let carruselIndex = 0;
let carruselTimer = null;

function renderCarrusel() {
  const banners = DATA.banners || [];
  const wrapper = document.getElementById("carrusel-wrapper");
  if (!wrapper) return;
  if (!banners.length) { wrapper.style.display = "none"; return; }

  wrapper.style.display = "block";
  const track = document.getElementById("carrusel-track");
  if (track) {
    track.innerHTML = banners.map((b,i) => `
      <div class="carrusel-slide" onclick="${b.link?"window.open('"+b.link+"')":""}">
        <img src="${b.url}" alt="Banner ${i+1}" onerror="this.parentElement.style.display='none'"/>
      </div>
    `).join("");
  }

  const dots = document.getElementById("carrusel-dots");
  if (dots) {
    dots.innerHTML = banners.map((_,i) =>
      `<span class="carrusel-dot ${i===0?"active":""}" onclick="goToSlide(${i})"></span>`
    ).join("");
  }

  if (carruselTimer) clearInterval(carruselTimer);
  if (DATA.bannerMode === "auto" && banners.length > 1) {
    carruselTimer = setInterval(() => nextSlide(), 4000);
  }
}

function nextSlide() {
  const banners = DATA.banners || [];
  if (!banners.length) return;
  carruselIndex = (carruselIndex + 1) % banners.length;
  updateCarrusel();
}

function prevSlide() {
  const banners = DATA.banners || [];
  if (!banners.length) return;
  carruselIndex = (carruselIndex - 1 + banners.length) % banners.length;
  updateCarrusel();
}

function goToSlide(i) {
  carruselIndex = i;
  updateCarrusel();
}

function updateCarrusel() {
  const track = document.getElementById("carrusel-track");
  if (track) track.style.transform = `translateX(-${carruselIndex * 100}%)`;
  document.querySelectorAll(".carrusel-dot").forEach((d,i) => {
    d.classList.toggle("active", i === carruselIndex);
  });
}

// ===========================
// VALORACIÓN
// ===========================
function rateApp(appId, section, type, value) {
  const secs = loadSections();
  let app = null;
  let foundSec = section;

  if (section && DATA[section]) {
    app = (DATA[section]||[]).find(a => a.id === appId);
  }
  if (!app) {
    secs.forEach(s => {
      if (!app) {
        app = (DATA[s.id]||[]).find(a => a.id === appId);
        if (app) foundSec = s.id;
      }
    });
  }
  if (!app) return;

  const voted = localStorage.getItem("voted_" + appId);
  if (voted) { showMiniToast("Ya has valorado esta app"); return; }

  if (type === "stars") {
    if (!app.userRatings) app.userRatings = [];
    app.userRatings.push(value);
    const avg = app.userRatings.reduce((a,b) => a+b,0) / app.userRatings.length;
    app.rating = avg.toFixed(1);
  } else if (type === "hearts") {
    app.userLikes = (app.userLikes || 0) + 1;
  }

  localStorage.setItem("voted_" + appId, "1");
  localStorage.setItem("tiendaData", JSON.stringify(DATA));

  // Actualizar UI en tiempo real sin recargar
  renderAllSections();
  const modal = document.getElementById("app-detail-modal");
  if (modal && modal.classList.contains("active")) {
    document.getElementById("detail-rating-box").innerHTML = renderStars(app, foundSec);
    document.getElementById("detail-rating").textContent = "★ " + app.rating + " · " + app.size;
  }

  showMiniToast(type==="stars" ? "⭐ ¡Gracias por tu valoración!" : "❤️ ¡Te encanta!");
}

function showMiniToast(msg) {
  let t = document.getElementById("mini-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "mini-toast";
    t.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:white;padding:8px 20px;border-radius:20px;font-size:0.85rem;z-index:999;display:none;box-shadow:0 4px 12px rgba(0,0,0,0.3);";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 2500);
}

function renderStars(app, section) {
  if (!app.ratingType || app.ratingType === "none") return "";
  if (app.ratingType === "stars") {
    const avg = Math.round(parseFloat(app.rating) || 0);
    return `<div class="user-rating">
      ${[1,2,3,4,5].map(s =>
        `<span onclick="event.stopPropagation();rateApp(${app.id},'${section}','stars',${s})"
          style="cursor:pointer;font-size:1rem;color:${s<=avg?"#f4b942":"#ddd"}">★</span>`
      ).join("")}
      <small style="color:#999;margin-left:4px">(${(app.userRatings||[]).length})</small>
    </div>`;
  }
  if (app.ratingType === "hearts") {
    return `<div class="user-rating">
      <span onclick="event.stopPropagation();rateApp(${app.id},'${section}','hearts',1)"
        style="cursor:pointer;font-size:1rem;color:#e91e63">❤️</span>
      <small style="color:#999;margin-left:4px">${app.userLikes||0} me encanta</small>
    </div>`;
  }
  return "";
}

// ===========================
// CARDS GRANDES
// ===========================
function renderUltimas() {
  const grid = document.getElementById("ultimas-grid");
  if (!grid) return;
  const items = DATA.ultimas || [];
  if (!items.length) {
    grid.innerHTML = `<p style="color:var(--text-secondary);padding:16px">No hay apps en esta sección aún</p>`;
    return;
  }
  grid.innerHTML = items.map(app => `
    <div class="card" onclick="openAppDetail(${app.id},'ultimas')">
      <div class="card-image">
        ${app.bannerImg
          ? `<img src="${app.bannerImg}" alt="${app.name}" onerror="this.parentElement.innerHTML='<span style=font-size:3.5rem>${app.icon}</span>'">`
          : `<span style="font-size:3.5rem">${app.banner||app.icon}</span>`}
      </div>
      ${(app.gallery||[]).length > 0 ? `
        <div class="app-gallery">
          ${app.gallery.map(url =>
            `<img src="${url}" alt="screenshot" onclick="event.stopPropagation();openGalleryImg('${url}')">`
          ).join("")}
        </div>` : ""}
      <div class="card-info">
        <div class="card-icon" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem;">
          ${app.iconImg
            ? `<img src="${app.iconImg}" alt="${app.name}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.style.display='none'">`
            : app.icon}
        </div>
        <div class="card-details">
          <div class="card-name">${app.name}</div>
          <div class="card-category">${app.category}</div>
          <div class="card-rating"><span>★</span> ${app.rating}</div>
          ${renderStars(app,"ultimas")}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
          <span class="tag tag-${app.tag}">${app.tagLabel}</span>
          <button class="btn-instalar" onclick="event.stopPropagation();window.open('${app.link}')">
            ⬇ Instalar
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ===========================
// LISTA GRID
// ===========================
function renderListGrid(containerId, items, section) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  if (!items.length) {
    grid.innerHTML = `<p style="color:var(--text-secondary);padding:16px">No hay apps en esta sección aún</p>`;
    return;
  }
  grid.innerHTML = items.map(app => `
    <div class="list-item" onclick="openAppDetail(${app.id},'${section}')">
      <div class="list-icon">
        ${app.iconImg
          ? `<img src="${app.iconImg}" alt="${app.name}" style="width:100%;height:100%;border-radius:12px;object-fit:cover;" onerror="this.style.display='none'">`
          : `<span style="font-size:1.8rem">${app.icon}</span>`}
      </div>
      <div class="list-details">
        <div class="list-name">${app.name}</div>
        <div class="list-meta">${app.category} · <span class="tag tag-${app.tag}">${app.tagLabel}</span></div>
        <div class="list-rating"><span>★</span> ${app.rating} · ${app.size}</div>
        ${renderStars(app, section)}
      </div>
      <button class="btn-instalar" onclick="event.stopPropagation();window.open('${app.link}')">
        ⬇ Instalar
      </button>
    </div>
  `).join("");
}

// ===========================
// DETALLE DE APP
// ===========================
function openAppDetail(appId, section) {
  const secs = loadSections();
  let app = null;

  if (section && DATA[section]) {
    app = (DATA[section]||[]).find(a => a.id === appId);
  }
  if (!app) {
    secs.forEach(s => { if (!app) app = (DATA[s.id]||[]).find(a => a.id === appId); });
  }
  if (!app) return;

  const modal = document.getElementById("app-detail-modal");
  if (!modal) return;

  // Banner superior
  const detailBanner = document.getElementById("detail-banner");
  if (detailBanner) {
    if (app.bannerImg) {
      detailBanner.innerHTML = `<img src="${app.bannerImg}" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML='<span style=font-size:4rem>${app.icon}</span>'">`;
    } else {
      detailBanner.innerHTML = `<span style="font-size:4rem">${app.icon}</span>`;
    }
  }

  document.getElementById("detail-icon").innerHTML = app.iconImg
    ? `<img src="${app.iconImg}" style="width:80px;height:80px;border-radius:18px;object-fit:cover;" onerror="this.style.display='none'">`
    : `<span style="font-size:3.5rem">${app.icon}</span>`;

  document.getElementById("detail-name").textContent     = app.name;
  document.getElementById("detail-category").textContent = app.category;
  document.getElementById("detail-rating").textContent   = "★ " + app.rating + " · " + app.size;
  document.getElementById("detail-tag").innerHTML        = `<span class="tag tag-${app.tag}">${app.tagLabel}</span>`;
  document.getElementById("detail-desc").textContent     = app.desc || "Sin descripción disponible.";
  document.getElementById("detail-install-btn").onclick  = () => window.open(app.link);

  const extraBtn = document.getElementById("detail-extra-btn");
if (extraBtn) {
  extraBtn.innerHTML = app.extraLink ? `
    <button onclick="window.open('${app.extraLink}')" class="btn-instalar"
      style="padding:14px 18px;font-size:1rem;border-radius:12px;background:var(--primary-dark);">
      <i class="fas fa-link"></i> ${app.extraLabel || "Recursos"}
    </button>` : "";
}

  document.getElementById("detail-rating-box").innerHTML = renderStars(app, section || "ultimas");

  // Galería carrusel
 const galBox = document.getElementById("detail-gallery");
if (galBox) {
  const gallery = app.gallery || [];
  if (gallery.length > 0) {
    galBox.style.display = "block";
    galBox.innerHTML = `
      <p style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">📸 Capturas de pantalla</p>
      <div style="position:relative;">
        <div id="gallery-carrusel-track" style="display:flex;transition:transform 0.4s ease;will-change:transform;width:${gallery.length * 100}%;">
          ${gallery.map((url,i) => `
            <div style="min-width:${100/gallery.length}%;display:flex;align-items:center;justify-content:center;background:#000;min-height:180px;">
              <img src="${url}" alt="screenshot ${i+1}"
                style="width:100%;height:200px;object-fit:cover;display:block;cursor:pointer;"
                onclick="openGalleryImg('${url}')"
                onerror="this.parentElement.style.display='none'"/>
            </div>
          `).join("")}
        </div>

        ${gallery.length > 1 ? `
          <button onclick="prevGallerySlide()" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.55);color:white;border:none;border-radius:50%;width:34px;height:34px;cursor:pointer;">‹</button>
          <button onclick="nextGallerySlide(${gallery.length})" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.55);color:white;border:none;border-radius:50%;width:34px;height:34px;cursor:pointer;">›</button>
          <div id="gallery-dots" style="display:flex;justify-content:center;gap:6px;margin-top:8px;">
            ${gallery.map((_,i) =>
              `<span onclick="goToGallerySlide(${i})" style="width:7px;height:7px;border-radius:50%;background:${i===0?"var(--primary)":"#ccc"};cursor:pointer;display:inline-block;"></span>`
            ).join("")}
          </div>
        ` : ""}
      </div>
    `;

    // SOLO UNA VEZ
    if (gallery.length > 1) {
      clearInterval(window._galleryTimer);
      window._galleryIndex = 0;
      window._galleryTotal = gallery.length;
      window._galleryTimer = setInterval(() => nextGallerySlide(gallery.length), 3000);
    }

  } else {
    galBox.style.display = "none";
  }
}

  modal.classList.add("active");
}

function closeAppDetail() {
  clearInterval(window._galleryTimer);
  const modal = document.getElementById("app-detail-modal");
  if (modal) modal.classList.remove("active");
}

// ===========================
// CARRUSEL GALERÍA
// ===========================
function nextGallerySlide(total) {
  window._galleryIndex = ((window._galleryIndex||0) + 1) % total;
  updateGallerySlide();
}

function prevGallerySlide() {
  const total = window._galleryTotal || 1;
  window._galleryIndex = ((window._galleryIndex||0) - 1 + total) % total;
  updateGallerySlide();
}

function goToGallerySlide(i) {
  window._galleryIndex = i;
  updateGallerySlide();
}

function updateGallerySlide() {
  const track = document.getElementById("gallery-carrusel-track");
  if (track) track.style.transform = `translateX(-${window._galleryIndex * (100/window._galleryTotal)}%)`;
  document.querySelectorAll("#gallery-dots span").forEach((d,i) => {
    d.style.background = i === window._galleryIndex ? "var(--primary)" : "#ccc";
  });
}

// ===========================
// VER IMAGEN GRANDE
// ===========================
function openGalleryImg(url) {
  let overlay = document.getElementById("gallery-img-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "gallery-img-overlay";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1000;display:flex;align-items:center;justify-content:center;cursor:zoom-out;";
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `<img src="${url}" style="max-width:95vw;max-height:90vh;border-radius:12px;object-fit:contain;box-shadow:0 8px 32px rgba(0,0,0,0.5);">`;
  overlay.style.display = "flex";
}

// ===========================
// VER TODO
// ===========================
function verTodo(secId, secLabel) {
  const items = DATA[secId] || [];
  const modal = document.getElementById("ver-todo-modal");
  if (!modal) return;
  document.getElementById("ver-todo-title").textContent = secLabel;
  const grid = document.getElementById("ver-todo-grid");
  if (!items.length) {
    grid.innerHTML = `<p style="color:var(--text-secondary);padding:16px">No hay apps en esta sección aún</p>`;
  } else {
    grid.innerHTML = items.map(app => `
      <div class="list-item" onclick="openAppDetail(${app.id},'${secId}');closeVerTodo()">
        <div class="list-icon">
          ${app.iconImg
            ? `<img src="${app.iconImg}" alt="${app.name}" style="width:100%;height:100%;border-radius:12px;object-fit:cover;">`
            : `<span style="font-size:1.8rem">${app.icon}</span>`}
        </div>
        <div class="list-details">
          <div class="list-name">${app.name}</div>
          <div class="list-meta">${app.category} · <span class="tag tag-${app.tag}">${app.tagLabel}</span></div>
          <div class="list-rating"><span>★</span> ${app.rating} · ${app.size}</div>
        </div>
        <button class="btn-instalar" onclick="event.stopPropagation();window.open('${app.link}')">
          ⬇ Instalar
        </button>
      </div>
    `).join("");
  }
  modal.classList.add("active");
}

function closeVerTodo() {
  const modal = document.getElementById("ver-todo-modal");
  if (modal) modal.classList.remove("active");
}

// ===========================
// BLOG
// ===========================
function renderBlog() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;
  if (!DATA.blog.length) {
    grid.innerHTML = `<p style="color:var(--text-secondary);padding:16px">No hay artículos publicados aún</p>`;
    return;
  }
  grid.innerHTML = DATA.blog.map(post => `
    <div class="blog-card" onclick="${post.content?"openBlogPost("+post.id+")":"window.open('"+post.link+"')"}">
      <div class="blog-image">
        ${post.imageUrl
          ? `<img src="${post.imageUrl}" alt="${post.title}">`
          : `<span>${post.image}</span>`}
      </div>
      <div class="blog-info">
        <div class="blog-meta">${post.date} · By ${post.author} · 👁 ${post.views}</div>
        <div class="blog-title">${post.title}</div>
      </div>
    </div>
  `).join("");
}

function openBlogPost(postId) {
  const post  = DATA.blog.find(p => p.id === postId);
  if (!post) return;
  const modal = document.getElementById("blog-detail-modal");
  if (!modal) return;
  document.getElementById("blog-detail-title").textContent = post.title;
  document.getElementById("blog-detail-meta").textContent  = post.date + " · By " + post.author;
  document.getElementById("blog-detail-content").innerHTML = post.content
    ? post.content.replace(/\n/g,"<br>")
    : "Contenido no disponible.";
  const img = document.getElementById("blog-detail-img");
  if (post.imageUrl) { img.src = post.imageUrl; img.style.display = "block"; }
  else               { img.style.display = "none"; }

  const blogGalBox = document.getElementById("blog-detail-gallery");
if (blogGalBox) {
  const gallery = post.gallery || [];
  if (gallery.length > 0) {
    blogGalBox.style.display = "block";
    blogGalBox.innerHTML = `
      <div style="display:flex;gap:8px;overflow-x:auto;padding:8px 0;margin-bottom:16px;">
        ${gallery.map(url =>
          `<img src="${url}" onclick="openGalleryImg('${url}')"
            style="height:160px;border-radius:10px;object-fit:cover;cursor:pointer;flex-shrink:0;"
            onerror="this.style.display='none'"/>`
        ).join("")}
      </div>`;
  } else {
    blogGalBox.style.display = "none";
  }
}

  modal.classList.add("active");

  const shareBox = document.getElementById("blog-share-box");
if (shareBox) {
  const url   = encodeURIComponent(window.location.href + "#blog");
  const title = encodeURIComponent(post.title);
  shareBox.innerHTML = `
    <p style="font-size:0.85rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">📤 Compartir</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <a href="https://wa.me/?text=${title}%20${url}" target="_blank"
        style="background:#25d366;color:white;padding:8px 14px;border-radius:20px;font-size:0.8rem;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank"
        style="background:#1877f2;color:white;padding:8px 14px;border-radius:20px;font-size:0.8rem;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
        <i class="fab fa-facebook"></i> Facebook
      </a>
      <a href="https://twitter.com/intent/tweet?text=${title}&url=${url}" target="_blank"
        style="background:#1a1a1a;color:white;padding:8px 14px;border-radius:20px;font-size:0.8rem;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
        <i class="fab fa-x-twitter"></i> X
      </a>
      <a href="https://telegram.me/share/url?url=${url}&text=${title}" target="_blank"
        style="background:#229ed9;color:white;padding:8px 14px;border-radius:20px;font-size:0.8rem;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">
        <i class="fab fa-telegram"></i> Telegram
      </a>
      <button onclick="navigator.clipboard.writeText(window.location.href).then(()=>showMiniToast('✅ URL copiada'))"
        style="background:var(--bg-secondary);color:var(--text);padding:8px 14px;border-radius:20px;font-size:0.8rem;font-weight:600;border:1px solid var(--border);cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
        <i class="fas fa-copy"></i> Copiar URL
      </button>
    </div>`;
}

}

function closeBlogDetail() {
  const modal = document.getElementById("blog-detail-modal");
  if (modal) modal.classList.remove("active");
}

// ===========================
// REDES SOCIALES
// ===========================
const REDES_ICONS_WEB = {
  telegram:"fab fa-telegram", whatsapp:"fab fa-whatsapp",
  instagram:"fab fa-instagram", facebook:"fab fa-facebook",
  youtube:"fab fa-youtube", x:"fab fa-x-twitter",
  tiktok:"fab fa-tiktok", discord:"fab fa-discord",
  twitch:"fab fa-twitch", github:"fab fa-github",
  otro:"fas fa-link"
};

function renderRedes() {
  const container = document.getElementById("redes-container");
  if (!container) return;
  const redes = (DATA.redes||[]).filter(r => r.activa && r.url);
  if (!redes.length) { container.style.display = "none"; return; }
  container.style.display = "flex";
  container.innerHTML = redes.map(r => {
    const label = r.red==="otro" && r.customName ? r.customName : r.red.charAt(0).toUpperCase()+r.red.slice(1);
    return `<a href="${r.url}" target="_blank" class="red-social-btn" title="${label}">
      <i class="${REDES_ICONS_WEB[r.red]||"fas fa-link"}"></i><span>${label}</span>
    </a>`;
  }).join("");
}

// ===========================
// CONTACTO
// ===========================
function renderContacto() {
  const titleEl = document.getElementById("contacto-title");
  const descEl  = document.getElementById("contacto-desc");
  if (titleEl) titleEl.textContent = DATA.contactTitle || "Contáctanos";
  if (descEl)  descEl.textContent  = DATA.contactDesc  || "";
}

function sendContact(e) {
  if (e) e.preventDefault();
  const name    = document.getElementById("contact-form-name").value.trim();
  const email   = document.getElementById("contact-form-email").value.trim();
  const message = document.getElementById("contact-form-msg").value.trim();
  if (!name||!email||!message) { showMiniToast("⚠️ Rellena todos los campos"); return; }
  const mailto = `mailto:${DATA.contactEmail}?subject=Contacto de ${name}&body=${encodeURIComponent(message+"\n\nDe: "+name+"\nEmail: "+email)}`;
  window.open(mailto);
  showMiniToast("✅ Abriendo tu cliente de correo...");
}

// ===========================
// MODO OSCURO
// ===========================
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-mode")) {
    if (icon) icon.className = "fas fa-sun";
    localStorage.setItem("theme","dark");
  } else {
    if (icon) icon.className = "fas fa-moon";
    localStorage.setItem("theme","light");
  }
}

function loadTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    const icon = document.getElementById("theme-icon");
    if (icon) icon.className = "fas fa-sun";
  }
}

// ===========================
// BUSCADOR
// ===========================
function toggleSearch() {
  const bar = document.getElementById("search-bar");
  if (!bar) return;
  bar.classList.toggle("active");
  if (bar.classList.contains("active")) {
    const input = document.getElementById("search-input");
    if (input) input.focus();
  }
}

// ===========================
// MENÚ MÓVIL
// ===========================
function smoothScroll(e, target) {
  e.preventDefault();
  if (!target || target === "#") {
    window.scrollTo({ top:0, behavior:"smooth" });
    closeMobileMenu();
    return;
  }
  const el = document.querySelector(target);
  if (el) {
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 64;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
    window.scrollTo({ top, behavior:"smooth" });
  }
  closeMobileMenu();
}

function toggleMobileMenu(e) {
  e.preventDefault();
  const panel   = document.getElementById("mobile-menu-panel");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (!panel) return;

  const isOpen = panel.style.display === "block";
  panel.style.display   = isOpen ? "none" : "block";
  overlay.style.display = isOpen ? "none" : "block";

  if (!isOpen) renderMobileMenuLinks();
}

function closeMobileMenu() {
  document.getElementById("mobile-menu-panel")?.style && (document.getElementById("mobile-menu-panel").style.display = "none");
  document.getElementById("mobile-menu-overlay")?.style && (document.getElementById("mobile-menu-overlay").style.display = "none");
}

function renderMobileMenuLinks() {
  const links = document.getElementById("mobile-menu-links");
  if (!links) return;

  const DEFAULT_NAV_WEB = [
    { label:"Inicio",   href:"#",              icon:"fas fa-home" },
    { label:"Juegos",   href:"#section-juegos", icon:"fas fa-gamepad" },
    { label:"Apps",     href:"#section-apps",   icon:"fas fa-layer-group" },
    { label:"Blog",     href:"#blog",           icon:"fas fa-newspaper" },
    { label:"Contacto", href:"#contacto",       icon:"fas fa-envelope" }
  ];

  const navItems = DATA.navItems || DEFAULT_NAV_WEB;

  links.innerHTML = navItems.map(item => `
    <a href="${item.href}"
      onclick="smoothScroll(event,'${item.href}')"
      style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:10px;">
      <i class="${item.icon}" style="width:20px;text-align:center;color:var(--primary);"></i>
      <span>${item.label}</span>
    </a>
  `).join("");
}

function searchApps() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const secs  = loadSections();
  if (query.length < 2) { renderAllSections(); return; }

  let allApps = [];
  secs.forEach(s => {
    allApps = allApps.concat((DATA[s.id]||[]).map(a => ({...a, _sec:s.id})));
  });

  const results = allApps.filter(app =>
    app.name.toLowerCase().includes(query) ||
    app.category.toLowerCase().includes(query)
  );

  const grid = document.getElementById("ultimas-grid");
  if (!grid) return;
  grid.innerHTML = results.length > 0
    ? results.map(app => `
        <div class="list-item" onclick="openAppDetail(${app.id},'${app._sec}')">
          <div class="list-icon">
            ${app.iconImg
              ? `<img src="${app.iconImg}" style="width:100%;height:100%;border-radius:12px;object-fit:cover;">`
              : `<span style="font-size:1.8rem">${app.icon}</span>`}
          </div>
          <div class="list-details">
            <div class="list-name">${app.name}</div>
            <div class="list-meta">${app.category}</div>
            <div class="list-rating">★ ${app.rating}</div>
          </div>
          <button class="btn-instalar" onclick="event.stopPropagation();window.open('${app.link}')">⬇ Instalar</button>
        </div>
      `).join("")

    : `<p style="padding:16px;color:var(--text-secondary)">No se encontraron resultados para "<b>${query}</b>"</p>`;

// ===========================
// PWA INSTALL
// ===========================
let _pwaPrompt = null;

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  _pwaPrompt = e;
  const banner = document.getElementById("pwa-install-banner");
  if (banner && DATA.pwaInstallBtn !== "no") banner.style.display = "flex";
});

function installPWA() {
  if (!_pwaPrompt) return;
  _pwaPrompt.prompt();
  _pwaPrompt.userChoice.then(() => {
    _pwaPrompt = null;
    const banner = document.getElementById("pwa-install-banner");
    if (banner) banner.style.display = "none";
  });
}

}