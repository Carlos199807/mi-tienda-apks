// ===========================
// CONFIGURACIÓN SERVIDOR
// ===========================
const USE_SERVER = true;

// ===========================
// 65 TEMAS DE COLOR
// ===========================
const THEMES = [
  { id:"green",        label:"Verde",         color:"#1a8a2e" },
  { id:"blue",         label:"Azul",          color:"#1565c0" },
  { id:"red",          label:"Rojo",          color:"#c62828" },
  { id:"purple",       label:"Morado",        color:"#6a1b9a" },
  { id:"orange",       label:"Naranja",       color:"#e65100" },
  { id:"teal",         label:"Teal",          color:"#00695c" },
  { id:"pink",         label:"Rosa",          color:"#ad1457" },
  { id:"yellow",       label:"Amarillo",      color:"#f9a825" },
  { id:"indigo",       label:"Índigo",        color:"#283593" },
  { id:"cyan",         label:"Cian",          color:"#00838f" },
  { id:"lime",         label:"Lima",          color:"#558b2f" },
  { id:"brown",        label:"Marrón",        color:"#4e342e" },
  { id:"gray",         label:"Gris",          color:"#424242" },
  { id:"amber",        label:"Ámbar",         color:"#ff6f00" },
  { id:"navy",         label:"Marino",        color:"#0a1628" },
  { id:"crimson",      label:"Carmesí",       color:"#b71c1c" },
  { id:"emerald",      label:"Esmeralda",     color:"#00695c" },
  { id:"violet",       label:"Violeta",       color:"#4527a0" },
  { id:"rose",         label:"Rosa fuerte",   color:"#c2185b" },
  { id:"sky",          label:"Cielo",         color:"#0277bd" },
  { id:"forest",       label:"Bosque",        color:"#2e7d32" },
  { id:"gold",         label:"Dorado",        color:"#f57f17" },
  { id:"slate",        label:"Pizarra",       color:"#37474f" },
  { id:"coral",        label:"Coral",         color:"#d84315" },
  { id:"mint",         label:"Menta",         color:"#00897b" },
  { id:"lavender",     label:"Lavanda",       color:"#7b1fa2" },
  { id:"ruby",         label:"Rubí",          color:"#c62828" },
  { id:"ocean",        label:"Océano",        color:"#01579b" },
  { id:"sage",         label:"Salvia",        color:"#558b2f" },
  { id:"bronze",       label:"Bronce",        color:"#6d4c41" },
  { id:"midnight",     label:"Medianoche",    color:"#1a237e" },
  { id:"sunset",       label:"Atardecer",     color:"#bf360c" },
  { id:"arctic",       label:"Ártico",        color:"#006064" },
  { id:"magenta",      label:"Magenta",       color:"#880e4f" },
  { id:"olive",        label:"Oliva",         color:"#827717" },
  { id:"sapphire",     label:"Zafiro",        color:"#0d47a1" },
  { id:"turquoise",    label:"Turquesa",      color:"#00796b" },
  { id:"maroon",       label:"Granate",       color:"#4a148c" },
  { id:"copper",       label:"Cobre",         color:"#bf360c" },
  { id:"cobalt",       label:"Cobalto",       color:"#1565c0" },
  { id:"plum",         label:"Ciruela",       color:"#6a1b9a" },
  { id:"pine",         label:"Pino",          color:"#1b5e20" },
  { id:"cherry",       label:"Cereza",        color:"#ad1457" },
  { id:"steel",        label:"Acero",         color:"#546e7a" },
  { id:"sand",         label:"Arena",         color:"#8d6e63" },
  { id:"neon-green",   label:"Verde neón",    color:"#00c853" },
  { id:"neon-blue",    label:"Azul neón",     color:"#2979ff" },
  { id:"neon-pink",    label:"Rosa neón",     color:"#f50057" },
  { id:"neon-orange",  label:"Naranja neón",  color:"#ff6d00" },
  { id:"neon-purple",  label:"Morado neón",   color:"#d500f9" },
  { id:"dark-green",   label:"Verde oscuro",  color:"#194d19" },
  { id:"dark-blue",    label:"Azul oscuro",   color:"#0a237e" },
  { id:"dark-red",     label:"Rojo oscuro",   color:"#7f0000" },
  { id:"dark-purple",  label:"Morado osc.",   color:"#4a0072" },
  { id:"dark-teal",    label:"Teal oscuro",   color:"#004d40" },
  { id:"pastel-blue",  label:"Azul pastel",   color:"#5c85d6" },
  { id:"pastel-pink",  label:"Rosa pastel",   color:"#c2688a" },
  { id:"pastel-green", label:"Verde past.",   color:"#5a9e6f" },
  { id:"pastel-purple",label:"Morado past.",  color:"#8e6ab5" },
  { id:"pastel-orange",label:"Naranja past.", color:"#d4845a" },
  { id:"black",        label:"Negro",         color:"#1a1a1a" },
  { id:"charcoal",     label:"Carbón",        color:"#2d2d2d" },
  { id:"warm-gray",    label:"Gris cálido",   color:"#5d5045" },
  { id:"cool-gray",    label:"Gris frío",     color:"#3d4f5c" },
  { id:"silver",       label:"Plata",         color:"#607d8b" }
];

// ===========================
// DATOS POR DEFECTO
// ===========================
const DEFAULT_DATA = {
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
  ultimas:[], tendencias:[], recomendado:[], juegos:[], apps:[], blog:[]
};

const DEFAULT_CATS = [
  "Entretenimiento","Acción","Aventura","Carreras",
  "Música y audio","Herramientas","Productividad",
  "Aplicaciones de video","Juegos","Otros"
];

const DEFAULT_SECS = [
  { id:"ultimas",     label:"Últimas actualizaciones" },
  { id:"tendencias",  label:"Tendencias" },
  { id:"recomendado", label:"Recomendado" },
  { id:"juegos",      label:"Juegos" },
  { id:"apps",        label:"Apps" }
];

// ===========================
// VARIABLE GLOBAL DE DATOS
// ===========================
let ADMIN_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));

// ===========================
// CARGAR DATOS DEL SERVIDOR
// ===========================
async function loadDataFromServer() {
  try {
    const res  = await fetch("load.php");
    const json = await res.json();
    if (json && !json.empty) ADMIN_DATA = Object.assign({}, DEFAULT_DATA, json);
    else ADMIN_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch(e) {
    const saved = localStorage.getItem("tiendaData");
    if (saved) ADMIN_DATA = Object.assign({}, DEFAULT_DATA, JSON.parse(saved));
    else ADMIN_DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

// ===========================
// GUARDAR DATOS EN SERVIDOR
// ===========================
async function saveData(data) {
  localStorage.setItem("tiendaData", JSON.stringify(data));
  ADMIN_DATA = data;
  if (!USE_SERVER) return true;
  fetch("save.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).catch(() => {});
  return true;
}

function loadData() { return ADMIN_DATA; }

// ===========================
// LOGIN
// ===========================
function getCredentials() {
  return {
    user: localStorage.getItem("adminUser") || "admin",
    pass: localStorage.getItem("adminPass") || "admin123"
  };
}

function doLogin() {
  const user  = document.getElementById("login-user").value.trim();
  const pass  = document.getElementById("login-pass").value.trim();
  const creds = getCredentials();
  if (user === creds.user && pass === creds.pass) {
    sessionStorage.setItem("adminLogged","1");
    document.getElementById("login-screen").style.display  = "none";
    document.getElementById("admin-panel").classList.add("active");
    updateStats();
    renderCategorySelect("app-category");
    renderSectionSelect("app-section");
  } else {
    document.getElementById("login-error").style.display = "block";
    setTimeout(() => document.getElementById("login-error").style.display = "none", 3000);
  }
}

function doLogout() {
  sessionStorage.removeItem("adminLogged");
  document.getElementById("login-screen").style.display = "flex";
  document.getElementById("admin-panel").classList.remove("active");
  document.getElementById("login-user").value = "";
  document.getElementById("login-pass").value = "";
}

function saveCredentials() {
  const user = document.getElementById("config-admin-user").value.trim();
  const pass = document.getElementById("config-admin-pass").value.trim();
  if (!user||!pass) { showToast("⚠️ Rellena usuario y contraseña","error"); return; }
  localStorage.setItem("adminUser", user);
  localStorage.setItem("adminPass", pass);
  document.getElementById("config-admin-user").value = "";
  document.getElementById("config-admin-pass").value = "";
  showToast("✅ Credenciales actualizadas correctamente");
}

// ===========================
// MOSTRAR PANEL
// ===========================
function showPanel(name, el) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".sidebar-menu a").forEach(a => a.classList.remove("active"));
  document.getElementById("panel-" + name).classList.add("active");
  const titles = {
    dashboard:"Dashboard", apps:"Gestionar Apps", blog:"Gestionar Blog",
    apariencia:"Apariencia", configuracion:"Configuración", contacto:"Contacto",
    pwa:"PWA / App"
  };
  document.getElementById("panel-title").textContent = titles[name] || name;
  if (el) el.classList.add("active");
  if (name === "apps")          { renderAppsTable(); renderCategorySelect("app-category"); renderSectionSelect("app-section"); }
  if (name === "blog")          renderBlogTable();
  if (name === "apariencia")    renderColors();
  if (name === "configuracion") loadConfig();
  if (name === "dashboard")     updateStats();
  if (name === "contacto")      loadContact();
  if (name === "pwa")           loadPWA();
}

// ===========================
// DASHBOARD
// ===========================
function updateStats() {
  const data = loadData();
  const secs = loadSections();
  let totalApps = 0;
  secs.forEach(s => { totalApps += (data[s.id]||[]).length; });
  document.getElementById("stat-apps").textContent       = totalApps;
  document.getElementById("stat-juegos").textContent     = (data.juegos||[]).length;
  document.getElementById("stat-blog").textContent       = (data.blog||[]).length;
  document.getElementById("stat-tendencias").textContent = (data.tendencias||[]).length;
}

// ===========================
// CATEGORÍAS
// ===========================
function loadCategories() {
  const saved = localStorage.getItem("tiendaCategorias");
  return saved ? JSON.parse(saved) : [...DEFAULT_CATS];
}

function saveCategories(cats) {
  localStorage.setItem("tiendaCategorias", JSON.stringify(cats));
}

function renderCategorySelect(selectId) {
  const cats   = loadCategories();
  const select = document.getElementById(selectId);
  if (!select) return;
  const current = select.value;
  select.innerHTML = cats.map(c =>
    `<option value="${c}" ${current===c?"selected":""}>${c}</option>`
  ).join("");
}

function showCatManager() {
  renderCatsChips();
  document.getElementById("modal-cats").classList.add("active");
}

function renderCatsChips() {
  const cats = loadCategories();
  document.getElementById("cats-chips").innerHTML = cats.map((c,i) => `
    <div class="tag-chip">
      <span>${c}</span>
      <button onclick="deleteCat(${i})" title="Eliminar">✕</button>
    </div>
  `).join("");
}

function deleteCat(index) {
  const cats = loadCategories();
  if (cats.length <= 1) { showToast("⚠️ Debe haber al menos una categoría","error"); return; }
  cats.splice(index,1);
  saveCategories(cats);
  renderCatsChips();
  renderCategorySelect("app-category");
  renderCategorySelect("edit-app-category");
  showToast("🗑️ Categoría eliminada");
}

function addCatFromModal() {
  const input = document.getElementById("new-cat-input");
  const val   = input.value.trim();
  if (!val) { showToast("⚠️ Escribe el nombre","error"); return; }
  const cats = loadCategories();
  if (cats.includes(val)) { showToast("⚠️ Esa categoría ya existe","error"); return; }
  cats.push(val);
  saveCategories(cats);
  input.value = "";
  renderCatsChips();
  renderCategorySelect("app-category");
  renderCategorySelect("edit-app-category");
  showToast("✅ Categoría añadida: " + val);
}

// ===========================
// SECCIONES
// ===========================
function loadSections() {
  const saved = localStorage.getItem("tiendaSecciones");
  return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_SECS));
}

function saveSections(secs) {
  localStorage.setItem("tiendaSecciones", JSON.stringify(secs));
}

function renderSectionSelect(selectId) {
  const secs   = loadSections();
  const select = document.getElementById(selectId);
  if (!select) return;
  const current = select.value;
  select.innerHTML = secs.map(s =>
    `<option value="${s.id}" ${current===s.id?"selected":""}>${s.label}</option>`
  ).join("");
}

function showSecManager() {
  renderSecsChips();
  document.getElementById("modal-secs").classList.add("active");
}

function renderSecsChips() {
  const secs = loadSections();
  document.getElementById("secs-chips").innerHTML = secs.map((s,i) => `
    <div class="tag-chip">
      <span>${s.label}</span>
      <button onclick="deleteSec(${i})" title="Eliminar">✕</button>
    </div>
  `).join("");
}

function deleteSec(index) {
  const secs = loadSections();
  if (secs.length <= 1) { showToast("⚠️ Debe haber al menos una sección","error"); return; }
  secs.splice(index,1);
  saveSections(secs);
  renderSecsChips();
  renderSectionSelect("app-section");
  showToast("🗑️ Sección eliminada");
}

function addSecFromModal() {
  const input = document.getElementById("new-sec-input");
  const val   = input.value.trim();
  if (!val) { showToast("⚠️ Escribe el nombre","error"); return; }
  const secs = loadSections();
  const id   = val.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");
  if (secs.find(s => s.id===id)) { showToast("⚠️ Esa sección ya existe","error"); return; }
  secs.push({ id, label:val });
  saveSections(secs);
  input.value = "";
  renderSecsChips();
  renderSectionSelect("app-section");
  showToast("✅ Sección añadida: " + val);
}

// ===========================
// GALERÍA
// ===========================
let currentGallery = [];
let editGallery    = [];

function addGalleryItem(gridId) {
  const menu = document.createElement("div");
  menu.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;";
  menu.innerHTML = `
    <div style="background:white;border-radius:16px;padding:24px;width:90%;max-width:400px;display:flex;flex-direction:column;gap:12px;">
      <h3 style="margin:0;font-size:1rem;font-weight:700;">Añadir imagen</h3>
      <input type="text" id="gallery-url-input" placeholder="Pega URL de imagen..."
        style="padding:10px;border:1px solid #e0e0e0;border-radius:8px;font-size:0.9rem;"/>
      <div style="display:flex;gap:8px;">
        <button onclick="confirmGalleryUrl('${gridId}',this)" class="btn-primary" style="flex:1;margin-top:0;">Añadir URL</button>
        <button onclick="this.closest('[style*=fixed]').remove()" class="btn-secondary" style="margin-top:0;">Cancelar</button>
      </div>
    </div>`;
  document.body.appendChild(menu);
}

function confirmGalleryUrl(gridId, btn) {
  const overlay = btn.closest("[style*=fixed]");
  const input = overlay ? overlay.querySelector("#gallery-url-input") : null;
  const url = input ? input.value.trim() : "";
  if (!url) { showToast("⚠️ Pega una URL primero","error"); return; }
  overlay.remove();
  pushGalleryItem(gridId, url);
}

function handleGalleryFileUpload(event, gridId, overlay) {
  const file = event.target.files[0];
  if (!file) return;
  readImageFile(file, base64 => {
    overlay.remove();
    pushGalleryItem(gridId, base64);
  }, 400);
}

function pushGalleryItem(gridId, url) {
  if (gridId === "add-gallery-grid") {
    currentGallery.push(url);
    renderGalleryGrid("add-gallery-grid", currentGallery, false);
  } else {
    editGallery.push(url);
    renderGalleryGrid("edit-gallery-grid", editGallery, true);
  }
}

function removeGalleryItem(gridId, index) {
  if (gridId === "add-gallery-grid") {
    currentGallery.splice(index,1);
    renderGalleryGrid("add-gallery-grid", currentGallery, false);
  } else {
    editGallery.splice(index,1);
    renderGalleryGrid("edit-gallery-grid", editGallery, true);
  }
}

function renderGalleryGrid(gridId, images, isEdit) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = images.map((url,i) => `
    <div class="gallery-item">
      <img src="${url}" alt="img ${i+1}" onerror="this.src=''"/>
      <button class="remove-gallery" onclick="removeGalleryItem('${gridId}',${i})">✕</button>
    </div>
  `).join("") + `
    <div class="gallery-add" onclick="addGalleryItem('${gridId}')">
      <i class="fas fa-plus" style="font-size:1.2rem"></i>
      <span>Añadir</span>
    </div>`;
}

// ===========================
// AÑADIR APP
// ===========================
async function addApp() {
  const name       = document.getElementById("app-name").value.trim();
  const category   = document.getElementById("app-category").value;
  const section    = document.getElementById("app-section").value;
  const tag        = document.getElementById("app-tag").value;
  const tagLabel   = document.getElementById("app-taglabel").value.trim() || tag.toUpperCase();
  const rating     = document.getElementById("app-rating").value.trim() || "4.5";
  const size       = document.getElementById("app-size").value.trim() || "50M";
  const icon       = document.getElementById("app-icon").value.trim() || "📱";
  const link       = document.getElementById("app-link").value.trim() || "#";
  const iconImg    = document.getElementById("app-iconimg").value.trim();
  const bannerImg  = document.getElementById("app-bannerimg").value.trim();
  const desc       = document.getElementById("app-desc").value.trim();
  const ratingType = document.getElementById("app-rating-type").value;
  const extraLabel = document.getElementById("app-extra-label").value.trim();
  const extraLink  = document.getElementById("app-extra-link").value.trim();

  if (!name) { showToast("⚠️ Escribe el nombre de la app","error"); return; }

  const data   = loadData();
  const newApp = {
    id:Date.now(), name, category, tag, tagLabel,
    rating, size, icon, link, desc, ratingType,
    banner:icon, gallery:[...currentGallery],
    userRatings:[], userLikes:0,
    extraLabel: extraLabel,
    extraLink:  extraLink
  };
  if (iconImg)   newApp.iconImg   = iconImg;
  if (bannerImg) newApp.bannerImg = bannerImg;

  if (!data[section]) data[section] = [];
  data[section].push(newApp);

  const ok = await saveData(data);
  if (ok) {
    ["app-name","app-rating","app-size","app-icon","app-link",
     "app-iconimg","app-bannerimg","app-taglabel","app-desc","app-extra-label","app-extra-link"]
      .forEach(id => document.getElementById(id).value = "");
    document.getElementById("app-rating-type").value = "none";
    currentGallery = [];
    renderGalleryGrid("add-gallery-grid",[],false);
    renderAppsTable();
    updateStats();
    showToast("✅ App añadida correctamente");
  }
}

// ===========================
// TABLA APPS
// ===========================
function renderAppsTable() {
  const data    = loadData();
  const secs    = loadSections();
  const secMap  = {};
  secs.forEach(s => secMap[s.id] = s.label);
  const ratingIcons = { none:"—", stars:"⭐", hearts:"❤️" };
  let rows = "";

  secs.forEach(sec => {
    (data[sec.id]||[]).forEach((app,idx) => {
      rows += `
        <tr>
          <td><b>${app.name}</b></td>
          <td>${app.category}</td>
          <td>${secMap[sec.id]||sec.id}</td>
          <td><span class="tag tag-${app.tag}">${app.tagLabel}</span></td>
          <td>⭐ ${app.rating}</td>
          <td>${(app.gallery||[]).length > 0 ? "🖼️ "+app.gallery.length : "—"}</td>
          <td style="display:flex;gap:6px;flex-wrap:wrap;">
            <button class="btn-edit" onclick="openEditApp('${sec.id}',${idx})">
              <i class="fas fa-edit"></i> Editar
            </button>
            <button class="btn-danger" onclick="deleteApp('${sec.id}',${idx})">
              <i class="fas fa-trash"></i> Eliminar
            </button>
          </td>
        </tr>`;
    });
  });

  document.getElementById("apps-table").innerHTML = rows ||
    `<tr><td colspan="7" style="text-align:center;color:#999;padding:24px;">No hay apps publicadas aún</td></tr>`;
}

// ===========================
// BUSCADOR APPS
// ===========================
function filterAppsTable(query) {
  const q    = query.toLowerCase().trim();
  const rows = document.querySelectorAll("#apps-table tr");
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = !q || text.includes(q) ? "" : "none";
  });
}

// ===========================
// EDITAR APP
// ===========================
function openEditApp(section, index) {
  const data = loadData();
  const app  = (data[section]||[])[index];
  if (!app) return;

  document.getElementById("edit-app-section").value     = section;
  document.getElementById("edit-app-index").value       = index;
  document.getElementById("edit-app-name").value        = app.name        || "";
  document.getElementById("edit-app-tag").value         = app.tag         || "free";
  document.getElementById("edit-app-taglabel").value    = app.tagLabel    || "";
  document.getElementById("edit-app-rating").value      = app.rating      || "";
  document.getElementById("edit-app-size").value        = app.size        || "";
  document.getElementById("edit-app-icon").value        = app.icon        || "";
  document.getElementById("edit-app-link").value        = app.link        || "";
  document.getElementById("edit-app-desc").value        = app.desc        || "";
  document.getElementById("edit-app-iconimg").value     = app.iconImg     || "";
  document.getElementById("edit-app-bannerimg").value   = app.bannerImg   || "";
  document.getElementById("edit-app-rating-type").value = app.ratingType  || "none";
  document.getElementById("edit-app-extra-label").value = app.extraLabel || "";
  document.getElementById("edit-app-extra-link").value  = app.extraLink  || "";

  renderCategorySelect("edit-app-category");
  document.getElementById("edit-app-category").value = app.category || "";

  editGallery = [...(app.gallery||[])];
  renderGalleryGrid("edit-gallery-grid", editGallery, true);

  document.getElementById("modal-app").classList.add("active");
}

async function saveEditApp() {
  const section = document.getElementById("edit-app-section").value;
  const index   = parseInt(document.getElementById("edit-app-index").value);
  const data    = loadData();
  const app     = (data[section]||[])[index];
  if (!app) return;

  app.name       = document.getElementById("edit-app-name").value.trim();
  app.category   = document.getElementById("edit-app-category").value;
  app.tag        = document.getElementById("edit-app-tag").value;
  app.tagLabel   = document.getElementById("edit-app-taglabel").value.trim();
  app.rating     = document.getElementById("edit-app-rating").value.trim();
  app.size       = document.getElementById("edit-app-size").value.trim();
  app.icon       = document.getElementById("edit-app-icon").value.trim();
  app.link       = document.getElementById("edit-app-link").value.trim();
  app.desc       = document.getElementById("edit-app-desc").value.trim();
  app.iconImg    = document.getElementById("edit-app-iconimg").value.trim();
  app.bannerImg  = document.getElementById("edit-app-bannerimg").value.trim();
  app.ratingType = document.getElementById("edit-app-rating-type").value;
  app.extraLabel = document.getElementById("edit-app-extra-label").value.trim();
  app.extraLink  = document.getElementById("edit-app-extra-link").value.trim();
  app.banner     = app.icon;
  app.gallery    = [...editGallery];

  const ok = await saveData(data);
  if (ok) {
    closeModal("modal-app");
    renderAppsTable();
    showToast("✅ App actualizada correctamente");
  }
}

async function deleteApp(section, index) {
  if (!confirm("¿Eliminar esta app?")) return;
  const data = loadData();
  (data[section]||[]).splice(index,1);
  const ok = await saveData(data);
  if (ok) { renderAppsTable(); updateStats(); showToast("🗑️ App eliminada"); }
}

// ===========================
// BLOG
// ===========================
async function addBlog() {
  const title    = document.getElementById("blog-title").value.trim();
  const author   = document.getElementById("blog-author").value.trim() || "Admin";
  const image    = document.getElementById("blog-image").value.trim()  || "📰";
  const imageUrl = document.getElementById("blog-imageurl").value.trim();
  const link     = document.getElementById("blog-link").value.trim()   || "#";
  const content  = document.getElementById("blog-content").value.trim();

  if (!title) { showToast("⚠️ Escribe el título","error"); return; }

  const data    = loadData();
  const dateStr = new Date().toLocaleDateString("es-ES",{ day:"2-digit", month:"short", year:"numeric" });
  const newPost = { id:Date.now(), title, author, image, link, content, date:dateStr, views:0, gallery:[...currentBlogGallery] };
  if (imageUrl) newPost.imageUrl = imageUrl;

  if (!data.blog) data.blog = [];
  data.blog.unshift(newPost);

  const ok = await saveData(data);
  if (ok) {
    ["blog-title","blog-author","blog-image","blog-imageurl","blog-link","blog-content"]
      .forEach(id => document.getElementById(id).value = "");
      currentBlogGallery = [];
      renderBlogGalleryGrid("add-blog-gallery-grid", []);
    renderBlogTable();
    updateStats();
    showToast("✅ Artículo publicado");
  }
}

function renderBlogTable() {
  const data  = loadData();
  const posts = data.blog || [];
  document.getElementById("blog-table").innerHTML = posts.map((post,idx) => `
    <tr>
      <td><b>${post.title}</b></td>
      <td>${post.author}</td>
      <td>${post.date}</td>
      <td style="display:flex;gap:6px;flex-wrap:wrap;">
        <button class="btn-edit" onclick="openEditBlog(${idx})"><i class="fas fa-edit"></i> Editar</button>
        <button class="btn-danger" onclick="deleteBlog(${idx})"><i class="fas fa-trash"></i> Eliminar</button>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="4" style="text-align:center;color:#999;padding:24px;">No hay artículos aún</td></tr>`;
}

function openEditBlog(index) {
  const data = loadData();
  const post = data.blog[index];
  if (!post) return;
  document.getElementById("edit-blog-index").value    = index;
  document.getElementById("edit-blog-title").value    = post.title    || "";
  document.getElementById("edit-blog-author").value   = post.author   || "";
  document.getElementById("edit-blog-image").value    = post.image    || "";
  document.getElementById("edit-blog-imageurl").value = post.imageUrl || "";
  document.getElementById("edit-blog-link").value     = post.link     || "";
  document.getElementById("edit-blog-content").value  = post.content  || "";
  editBlogGallery = [...(post.gallery||[])];
  renderBlogGalleryGrid("edit-blog-gallery-grid", editBlogGallery);
  document.getElementById("modal-blog").classList.add("active");
}

async function saveEditBlog() {
  const index = parseInt(document.getElementById("edit-blog-index").value);
  const data  = loadData();
  const post  = data.blog[index];
  if (!post) return;
  post.title    = document.getElementById("edit-blog-title").value.trim();
  post.author   = document.getElementById("edit-blog-author").value.trim();
  post.image    = document.getElementById("edit-blog-image").value.trim();
  post.imageUrl = document.getElementById("edit-blog-imageurl").value.trim();
  post.link     = document.getElementById("edit-blog-link").value.trim();
  post.content  = document.getElementById("edit-blog-content").value.trim();
  post.gallery = [...editBlogGallery];
  const ok = await saveData(data);
  if (ok) { closeModal("modal-blog"); renderBlogTable(); showToast("✅ Artículo actualizado"); }
}

async function deleteBlog(index) {
  if (!confirm("¿Eliminar este artículo?")) return;
  const data = loadData();
  data.blog.splice(index,1);
  const ok = await saveData(data);
  if (ok) { renderBlogTable(); updateStats(); showToast("🗑️ Artículo eliminado"); }
}

// ===========================
// MODALES
// ===========================
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal-overlay"))
    e.target.classList.remove("active");
});

// ===========================
// COLORES
// ===========================
function renderColors() {
  const saved = localStorage.getItem("tiendaTheme") || "green";
  document.getElementById("colors-grid").innerHTML = THEMES.map(t => `
    <button class="color-btn ${saved===t.id?"selected":""}"
      style="background:${t.color}" onclick="applyTheme('${t.id}')" title="${t.label}">
      ${t.label}
    </button>
  `).join("");
}

async function applyTheme(themeId) {
  localStorage.setItem("tiendaTheme", themeId);
  const data = loadData();
  data.theme = themeId;
  const ok = await saveData(data);
  if (ok) { renderColors(); showToast("🎨 Color: " + THEMES.find(t=>t.id===themeId).label); }
}

function setMode(mode) {
  localStorage.setItem("theme", mode);
  showToast(mode==="dark" ? "🌙 Modo oscuro activado" : "☀️ Modo claro activado");
}

// ===========================
// LOGO
// ===========================
function previewLogo() {
  const url     = document.getElementById("config-logo-url").value.trim();
  const preview = document.getElementById("logo-preview");
  if (url) { preview.src = url; preview.style.display = "block"; }
  else      { preview.style.display = "none"; }
}

function uploadLogo() {
  const file = document.getElementById("config-logo-file").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async e => {
    const data = loadData();
    data.logoUrl = e.target.result;
    const ok = await saveData(data);
    if (ok) {
      document.getElementById("logo-preview").src = e.target.result;
      document.getElementById("logo-preview").style.display = "block";
      showToast("✅ Logo subido correctamente");
    }
  };
  reader.readAsDataURL(file);
}

async function removeLogo() {
  if (!confirm("¿Eliminar el logo?")) return;
  const data = loadData();
  data.logoUrl = "";
  const ok = await saveData(data);
  if (ok) {
    document.getElementById("config-logo-url").value = "";
    document.getElementById("logo-preview").style.display = "none";
    showToast("✅ Logo eliminado");
  }
}

// ===========================
// ===========================
// BANNERS CARRUSEL
// ===========================
function loadBannersList() {
  const data    = loadData();
  const banners = data.banners || [];
  const list    = document.getElementById("banners-list");
  if (!list) return;
  list.innerHTML = banners.map((b,i) => `
    <div class="banner-item">
      <input type="text" value="${b.url&&!b.url.startsWith("data:")?"[imagen subida]":b.url||""}" placeholder="URL o ruta de imagen"
        id="banner-url-${i}" onchange="updateBannerUrl(${i},this.value)"/>
      <label style="background:#1565c0;color:white;padding:7px 12px;border-radius:6px;cursor:pointer;font-size:0.8rem;white-space:nowrap;display:inline-flex;align-items:center;gap:4px;">
        <i class="fas fa-upload"></i> Subir
        <input type="file" accept="image/*" style="display:none"
          onchange="handleBannerImageUpload(${i}, this)"/>
      </label>
      ${b.url ? `<img src="${b.url}" style="height:36px;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'"/>` : ""}
      <input type="text" value="${b.link||""}" placeholder="Link al hacer clic"
        style="max-width:160px" onchange="updateBannerLink(${i},this.value)"/>
      <button class="btn-danger" onclick="removeBannerItem(${i})"><i class="fas fa-trash"></i></button>
    </div>
  `).join("") || `<p style="color:#999;margin-bottom:12px">No hay banners añadidos aún</p>`;
  const mode = document.getElementById("banner-mode");
  if (mode) mode.value = data.bannerMode || "auto";
}

function handleBannerImageUpload(index, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async e => {
    const data = loadData();
    if (data.banners[index]) data.banners[index].url = e.target.result;
    await saveData(data);
    loadBannersList();
    showToast("✅ Imagen subida correctamente");
  };
  reader.readAsDataURL(file);
}

async function addBannerItem() {
  const data = loadData();
  if (!data.banners) data.banners = [];
  data.banners.push({ url:"", link:"" });
  const ok = await saveData(data);
  if (ok) loadBannersList();
}

async function updateBannerUrl(index, url) {
  const data = loadData();
  if (data.banners[index]) data.banners[index].url = url;
  await saveData(data);
  loadBannersList();
}

async function updateBannerLink(index, link) {
  const data = loadData();
  if (data.banners[index]) data.banners[index].link = link;
  await saveData(data);
}

async function removeBannerItem(index) {
  const data = loadData();
  data.banners.splice(index,1);
  const ok = await saveData(data);
  if (ok) { loadBannersList(); showToast("🗑️ Banner eliminado"); }
}

async function saveBanners() {
  const data = loadData();
  data.bannerMode = document.getElementById("banner-mode").value;
  const ok = await saveData(data);
  if (ok) showToast("✅ Banners guardados");
}

// ===========================
// REDES SOCIALES
// ===========================
const REDES_ICONS = {
  telegram:"fab fa-telegram", whatsapp:"fab fa-whatsapp",
  instagram:"fab fa-instagram", facebook:"fab fa-facebook",
  youtube:"fab fa-youtube", x:"fab fa-x-twitter",
  tiktok:"fab fa-tiktok", discord:"fab fa-discord",
  twitch:"fab fa-twitch", github:"fab fa-github",
  otro:"fas fa-link"
};

function loadRedesList() {
  const data  = loadData();
  const redes = data.redes || [];
  const list  = document.getElementById("redes-list");
  if (!list) return;
  list.innerHTML = redes.map((r,i) => `
    <div class="red-item">
      <select onchange="updateRedType(${i},this.value)">
        ${Object.keys(REDES_ICONS).map(k =>
          `<option value="${k}" ${r.red===k?"selected":""}>${k==="otro"?"➕ Otro":k.charAt(0).toUpperCase()+k.slice(1)}</option>`
        ).join("")}
      </select>
      ${r.red==="otro"?`<input type="text" value="${r.customName||""}" placeholder="Nombre personalizado" style="max-width:130px" onchange="updateRedCustomName(${i},this.value)"/>`:""}
      <i class="${REDES_ICONS[r.red]||"fas fa-link"}" style="font-size:1.2rem;width:20px;text-align:center"></i>
      <input type="text" value="${r.url||""}" placeholder="URL de tu perfil" onchange="updateRedUrl(${i},this.value)"/>
      <button class="toggle-btn ${r.activa?"toggle-on":"toggle-off"}" onclick="toggleRed(${i})">
        ${r.activa?"✅ Activa":"❌ Inactiva"}
      </button>
      <button class="btn-danger" onclick="removeRed(${i})"><i class="fas fa-trash"></i></button>
    </div>
  `).join("") || `<p style="color:#999;margin-bottom:12px">No hay redes añadidas aún</p>`;
}

async function addRedItem() {
  const data = loadData();
  if (!data.redes) data.redes = [];
  data.redes.push({ red:"telegram", url:"", activa:false, customName:"" });
  await saveData(data);
  loadRedesList();
  showToast("✅ Red social añadida");
}

async function updateRedType(index, tipo) {
  const data = loadData();
  if (data.redes[index]) data.redes[index].red = tipo;
  await saveData(data);
  loadRedesList();
}

async function updateRedUrl(index, url) {
  const data = loadData();
  if (data.redes[index]) data.redes[index].url = url;
  await saveData(data);
}

async function updateRedCustomName(index, name) {
  const data = loadData();
  if (data.redes[index]) data.redes[index].customName = name;
  await saveData(data);
}

async function toggleRed(index) {
  const data = loadData();
  if (data.redes[index]) data.redes[index].activa = !data.redes[index].activa;
  const ok = await saveData(data);
  if (ok) loadRedesList();
}

async function removeRed(index) {
  const data = loadData();
  data.redes.splice(index,1);
  const ok = await saveData(data);
  if (ok) { loadRedesList(); showToast("🗑️ Red eliminada"); }
}

async function saveRedes() {
  const data = loadData();
  const ok = await saveData(data);
  if (ok) showToast("✅ Redes guardadas correctamente");
}

// ===========================
// CONFIGURACIÓN GENERAL
// ===========================
function loadConfig() {
  const data = loadData();
  document.getElementById("config-sitename").value   = data.siteName       || "";
  document.getElementById("config-logo-url").value   = (!data.logoUrl||data.logoUrl.startsWith("data:")) ? "" : data.logoUrl;
  document.getElementById("config-banner").value     = data.bannerText     || "";
  document.getElementById("config-comm-title").value = data.communityTitle || "";
  document.getElementById("config-comm-desc").value  = data.communityDesc  || "";
  document.getElementById("config-comm-btn").value   = data.communityBtn   || "";
  document.getElementById("config-comm-link").value  = data.communityLink  || "";
  document.getElementById("config-comm-bg").value    = data.communityBg    || "";
  document.getElementById("config-footer").value     = data.footerCopy     || "";
  const preview = document.getElementById("logo-preview");
  if (data.logoUrl) { preview.src = data.logoUrl; preview.style.display = "block"; }
  else              { preview.style.display = "none"; }
  loadBannersList();
  loadRedesList();
  loadLegal();
  loadNavItems();
}

async function saveConfig() {
  const siteName = document.getElementById("config-sitename").value.trim();
  if (!siteName) { showToast("⚠️ El nombre no puede estar vacío","error"); return; }
  const data = loadData();
  data.siteName       = siteName;
  data.bannerText     = document.getElementById("config-banner").value.trim();
  data.communityTitle = document.getElementById("config-comm-title").value.trim();
  data.communityDesc  = document.getElementById("config-comm-desc").value.trim();
  data.communityBtn   = document.getElementById("config-comm-btn").value.trim();
  data.communityLink  = document.getElementById("config-comm-link").value.trim();
  data.communityBg    = document.getElementById("config-comm-bg").value.trim();
  data.footerCopy     = document.getElementById("config-footer").value.trim();
  const logoUrl = document.getElementById("config-logo-url").value.trim();
  if (logoUrl) data.logoUrl = logoUrl;
  const ok = await saveData(data);
  if (ok) showToast("✅ Configuración guardada correctamente");
}

// ===========================
// PÁGINAS LEGALES
// ===========================
function loadLegal() {
  const data = loadData();
  const p = document.getElementById("legal-privacidad");
  const c = document.getElementById("legal-cookies");
  const d = document.getElementById("legal-dmca");
  const a = document.getElementById("legal-acerca");
  if (p) p.value = data.legalPrivacidad || "";
  if (c) c.value = data.legalCookies    || "";
  if (d) d.value = data.legalDmca       || "";
  if (a) a.value = data.legalAcerca     || "";
}

async function saveLegal() {
  const data = loadData();
  data.legalPrivacidad = document.getElementById("legal-privacidad").value.trim();
  data.legalCookies    = document.getElementById("legal-cookies").value.trim();
  data.legalDmca       = document.getElementById("legal-dmca").value.trim();
  data.legalAcerca     = document.getElementById("legal-acerca").value.trim();
  const ok = await saveData(data);
  if (ok) showToast("✅ Páginas legales guardadas");
}

// ===========================
// NAVBAR EDITABLE
// ===========================
const DEFAULT_NAV = [
  { label:"Inicio",   href:"#",               icon:"fas fa-home" },
  { label:"Juegos",   href:"#section-juegos",  icon:"fas fa-gamepad" },
  { label:"Apps",     href:"#section-apps",    icon:"fas fa-layer-group" },
  { label:"Blog",     href:"#blog",            icon:"fas fa-newspaper" },
  { label:"Contacto", href:"#contacto",        icon:"fas fa-envelope" }
];

function loadNavItems() {
  const data  = loadData();
  const items = data.navItems || DEFAULT_NAV;
  const list  = document.getElementById("nav-items-list");
  if (!list) return;
  list.innerHTML = items.map((item,i) => `
    <div style="background:#f8f9fa;padding:10px;border-radius:8px;margin-bottom:8px;border:1px solid #e0e0e0;">
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        <input type="text" value="${item.label}" placeholder="Texto"
          style="flex:1;min-width:80px;padding:8px;border:1px solid #e0e0e0;border-radius:6px;"
          onchange="updateNavItem(${i},'label',this.value)"/>
        <input type="text" value="${item.href}" placeholder="ej: #section-apps"
          style="flex:2;min-width:120px;padding:8px;border:1px solid #e0e0e0;border-radius:6px;"
          onchange="updateNavItem(${i},'href',this.value)"/>
        <input type="text" value="${item.icon}" placeholder="fas fa-home"
          style="flex:2;min-width:120px;padding:8px;border:1px solid #e0e0e0;border-radius:6px;"
          onchange="updateNavItem(${i},'icon',this.value)"/>
        <i class="${item.icon}" style="font-size:1.2rem;color:#666;width:20px;text-align:center"></i>
        <button class="btn-warning" onclick="addSubMenuItem(${i})" style="padding:6px 10px;font-size:0.75rem;">
          <i class="fas fa-plus"></i> Submenú
        </button>
        <button class="btn-danger" onclick="deleteNavItem(${i})" style="padding:6px 10px;">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      ${(item.children||[]).length > 0 ? `
        <div style="margin-top:8px;padding-left:16px;border-left:3px solid #e0e0e0;">
          ${(item.children||[]).map((child,j) => `
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px;">
              <input type="text" value="${child.label}" placeholder="Texto submenú"
                style="flex:1;min-width:80px;padding:6px;border:1px solid #e0e0e0;border-radius:6px;font-size:0.85rem;"
                onchange="updateSubNavItem(${i},${j},'label',this.value)"/>
              <input type="text" value="${child.href}" placeholder="#seccion"
                style="flex:2;min-width:120px;padding:6px;border:1px solid #e0e0e0;border-radius:6px;font-size:0.85rem;"
                onchange="updateSubNavItem(${i},${j},'href',this.value)"/>
              <input type="text" value="${child.icon||'fas fa-link'}" placeholder="fas fa-link"
                style="flex:1;min-width:100px;padding:6px;border:1px solid #e0e0e0;border-radius:6px;font-size:0.85rem;"
                onchange="updateSubNavItem(${i},${j},'icon',this.value)"/>
              <button class="btn-danger" onclick="deleteSubNavItem(${i},${j})" style="padding:4px 8px;font-size:0.75rem;">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `).join("") + `
    <button class="btn-primary" style="margin-top:8px;" onclick="addNavItem()">
      <i class="fas fa-plus"></i> Añadir enlace al menú
    </button>
  `;
}

function addSubMenuItem(parentIndex) {
  const data = loadData();
  if (!data.navItems) data.navItems = [...DEFAULT_NAV];
  if (!data.navItems[parentIndex].children) data.navItems[parentIndex].children = [];
  data.navItems[parentIndex].children.push({ label:"Submenú", href:"#", icon:"fas fa-link" });
  saveData(data);
  loadNavItems();
}

function updateSubNavItem(parentIndex, childIndex, field, value) {
  const data = loadData();
  if (!data.navItems) data.navItems = [...DEFAULT_NAV];
  if (!data.navItems[parentIndex].children) return;
  data.navItems[parentIndex].children[childIndex][field] = value;
  saveData(data);
}

function deleteSubNavItem(parentIndex, childIndex) {
  const data = loadData();
  if (!data.navItems) data.navItems = [...DEFAULT_NAV];
  data.navItems[parentIndex].children.splice(childIndex, 1);
  saveData(data);
  loadNavItems();
  showToast("🗑️ Submenú eliminado");
}

function addNavItem() {
  const data = loadData();
  if (!data.navItems) data.navItems = [...DEFAULT_NAV];
  data.navItems.push({ label:"Nuevo", href:"#", icon:"fas fa-link" });
  saveData(data);
  loadNavItems();
}

function deleteNavItem(index) {
  const data = loadData();
  if (!data.navItems) data.navItems = [...DEFAULT_NAV];
  if (data.navItems.length <= 1) { showToast("⚠️ Debe haber al menos un enlace","error"); return; }
  data.navItems.splice(index,1);
  saveData(data);
  loadNavItems();
  showToast("🗑️ Enlace eliminado");
}

function updateNavItem(index, field, value) {
  const data = loadData();
  if (!data.navItems) data.navItems = [...DEFAULT_NAV];
  data.navItems[index][field] = value;
  saveData(data);
}

async function saveNavItems() {
  const data = loadData();
  const ok   = await saveData(data);
  if (ok) showToast("✅ Menú guardado correctamente");
}

// ===========================
// CONTACTO
// ===========================
function loadContact() {
  const data = loadData();
  document.getElementById("contact-title").value     = data.contactTitle    || "";
  document.getElementById("contact-desc").value      = data.contactDesc     || "";
  document.getElementById("contact-email").value     = data.contactEmail    || "";
  document.getElementById("contact-form-show").value = data.contactFormShow || "yes";
}

async function saveContact() {
  const data = loadData();
  data.contactTitle    = document.getElementById("contact-title").value.trim();
  data.contactDesc     = document.getElementById("contact-desc").value.trim();
  data.contactEmail    = document.getElementById("contact-email").value.trim();
  data.contactFormShow = document.getElementById("contact-form-show").value;
  const ok = await saveData(data);
  if (ok) showToast("✅ Contacto guardado correctamente");
}

// ===========================
// GALERÍA BLOG
// ===========================
let currentBlogGallery = [];
let editBlogGallery    = [];

function addBlogGalleryItem(gridId) {
  const menu = document.createElement("div");
  menu.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;";
  menu.innerHTML = `
    <div style="background:white;border-radius:16px;padding:24px;width:90%;max-width:400px;display:flex;flex-direction:column;gap:12px;">
      <h3 style="margin:0;font-size:1rem;font-weight:700;">Añadir imagen al blog</h3>
      <input type="text" id="blog-gallery-url-input" placeholder="Pega URL de imagen..."
        style="padding:10px;border:1px solid #e0e0e0;border-radius:8px;font-size:0.9rem;"/>
      <div style="display:flex;gap:8px;">
        <button onclick="confirmBlogGalleryUrl('${gridId}',this)" class="btn-primary" style="flex:1;margin-top:0;">Añadir URL</button>
        <button onclick="this.closest('[style*=fixed]').remove()" class="btn-secondary" style="margin-top:0;">Cancelar</button>
      </div>
    </div>`;
  document.body.appendChild(menu);
}

function confirmBlogGalleryUrl(gridId, btn) {
  const overlay = btn.closest("[style*=fixed]");
  const input = overlay ? overlay.querySelector("#blog-gallery-url-input") : null;
  const url = input ? input.value.trim() : "";
  if (!url) { showToast("⚠️ Pega una URL primero","error"); return; }
  overlay.remove();
  pushBlogGalleryItem(gridId, url);
}

function handleBlogGalleryFileUpload(event, gridId, overlay) {
  const file = event.target.files[0];
  if (!file) return;
  readImageFile(file, base64 => {
    overlay.remove();
    pushBlogGalleryItem(gridId, base64);
  }, 400);
}

function pushBlogGalleryItem(gridId, url) {
  if (gridId === "add-blog-gallery-grid") {
    currentBlogGallery.push(url);
    renderBlogGalleryGrid("add-blog-gallery-grid", currentBlogGallery);
  } else {
    editBlogGallery.push(url);
    renderBlogGalleryGrid("edit-blog-gallery-grid", editBlogGallery);
  }
}

function removeBlogGalleryItem(gridId, index) {
  if (gridId === "add-blog-gallery-grid") {
    currentBlogGallery.splice(index,1);
    renderBlogGalleryGrid("add-blog-gallery-grid", currentBlogGallery);
  } else {
    editBlogGallery.splice(index,1);
    renderBlogGalleryGrid("edit-blog-gallery-grid", editBlogGallery);
  }
}

function renderBlogGalleryGrid(gridId, images) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = images.map((url,i) => `
    <div class="gallery-item">
      <img src="${url}" alt="img ${i+1}" onerror="this.src=''"/>
      <button class="remove-gallery" onclick="removeBlogGalleryItem('${gridId}',${i})">✕</button>
    </div>
  `).join("") + `
    <div class="gallery-add" onclick="addBlogGalleryItem('${gridId}')">
      <i class="fas fa-plus" style="font-size:1.2rem"></i>
      <span>Añadir</span>
    </div>`;
}

// ===========================
// SUBIR IMAGEN UNIVERSAL
// ===========================
function readImageFile(file, callback, maxWidth = 600) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let w = img.width, h = img.height;
      if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL("image/jpeg", 0.6));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function uploadBlogImage(input) {
  const file = input.files[0];
  if (!file) return;
  readImageFile(file, base64 => {
    document.getElementById("blog-imageurl").value = base64;
    const prev = document.getElementById("blog-imageurl-preview");
    if (prev) { prev.src = base64; prev.style.display = "block"; }
    showToast("✅ Imagen cargada");
  });
}

function uploadEditBlogImage(input) {
  const file = input.files[0];
  if (!file) return;
  readImageFile(file, base64 => {
    document.getElementById("edit-blog-imageurl").value = base64;
    showToast("✅ Imagen cargada");
  });
}

function uploadCommBg(input) {
  const file = input.files[0];
  if (!file) return;
  readImageFile(file, base64 => {
    document.getElementById("config-comm-bg").value = base64;
    showToast("✅ Imagen de fondo cargada");
  });
}

function uploadAppIcon(input, fieldId) {
  const file = input.files[0];
  if (!file) return;
  readImageFile(file, base64 => {
    try {
      document.getElementById(fieldId).value = base64;
      const prev = document.getElementById(fieldId + "-preview");
      if (prev) { prev.src = base64; prev.style.display = "inline-block"; }
      showToast("✅ Icono cargado");
    } catch(e) {
      showToast("⚠️ Imagen demasiado grande, usa una URL","error");
    }
  }, 400);
}

// ===========================
// PWA
// ===========================
function loadPWA() {
  const data = loadData();
  document.getElementById("pwa-favicon").value      = data.pwaFavicon    || "";
  document.getElementById("pwa-name").value         = data.pwaName       || data.siteName || "";
  document.getElementById("pwa-desc").value         = data.pwaDesc       || "";
  document.getElementById("pwa-color").value        = data.pwaColor      || "#1a8a2e";
  document.getElementById("pwa-install-btn").value  = data.pwaInstallBtn || "yes";
  const prev = document.getElementById("pwa-favicon-preview");
  if (data.pwaFavicon) { prev.src = data.pwaFavicon; prev.style.display = "inline-block"; }
  else prev.style.display = "none";
}

async function savePWA() {
  const data = loadData();
  data.pwaFavicon    = document.getElementById("pwa-favicon").value.trim();
  data.pwaName       = document.getElementById("pwa-name").value.trim();
  data.pwaDesc       = document.getElementById("pwa-desc").value.trim();
  data.pwaColor      = document.getElementById("pwa-color").value;
  data.pwaInstallBtn = document.getElementById("pwa-install-btn").value;
  const ok = await saveData(data);
  if (ok) {
    const prev = document.getElementById("pwa-favicon-preview");
    if (data.pwaFavicon) { prev.src = data.pwaFavicon; prev.style.display = "inline-block"; }
    showToast("✅ PWA guardada correctamente");
  }
}

// ===========================
// TOAST
// ===========================
function showToast(msg, type) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.background = type==="error" ? "#c62828" : "#1a8a2e";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ===========================
// INICIALIZAR
// ===========================
document.addEventListener("DOMContentLoaded", async () => {
  await loadDataFromServer();
  if (sessionStorage.getItem("adminLogged") === "1") {
    document.getElementById("login-screen").style.display  = "none";
    document.getElementById("admin-panel").classList.add("active");
    updateStats();
    renderCategorySelect("app-category");
    renderSectionSelect("app-section");
  }
});