const LANG_KEY = "mk22_lang";

const translations = {
  hi: {
    nav: {
      mainLabel: "मुख्य नेविगेशन",
      home: "होम",
      admin: "एडमिन पैनल",
      backMohallas: "शहर/गांव के मोहल्ले",
    },
    lang: {
      label: "भाषा",
      hi: "हिंदी",
      en: "English",
    },
    common: {
      cityVillage: "शहर/गांव",
      mohalla: "मोहल्ला",
      noMohalla: "बिना मोहल्ला",
      cancel: "रद्द करें",
      save: "सेव करें",
      edit: "Edit",
      delete: "Delete",
      close: "बंद करें",
      view: "देखें",
      newRecord: "नया रिकॉर्ड",
      excelExport: "Excel Export",
      action: "Action",
      login: "Login",
      logout: "Logout",
      search: "Search",
      morning: "Subah",
      evening: "Shaam",
    },
    home: {
      eyebrow: "Community Directory",
      tagline: "हर शहर/गांव की मकान और शादी जानकारी के लिए सुरक्षित स्थानीय रिकॉर्ड",
      selectCity: "शहर/गांव चुनें",
      selectCityDesc: "मकान और शादी की सूची शहर/गांव के हिसाब से अलग-अलग देखें।",
      cityList: "शहर/गांव लिस्ट",
      cityCount: "{count} शहर/गांव",
      makanList: "मकान लिस्ट",
      shadiList: "शादी लिस्ट",
      mohallas: "मोहल्ले",
      makanCount: "{makan} मकान | {shadi} शादी रिकॉर्ड",
      title: "Muslim Khatri 22 Nukh Jamaat",
    },
    makan: {
      eyebrow: "MAKAN DIRECTORY",
      subtitle: "{city} की मकान सूची",
      searchMukhiya: "मुखिया नाम",
      searchMakan: "मकान नंबर / मोहल्ला",
      searchMukhiyaPh: "नाम लिखें",
      searchMakanPh: "नंबर या मोहल्ला लिखें",
      empty: "अभी कोई रिकॉर्ड नहीं है।",
      newRecord: "नया मकान रिकॉर्ड",
      editRecord: "मकान रिकॉर्ड Edit करें",
      newMohalla: "नया मोहल्ला लिखें",
      confirmDelete: "क्या आप यह रिकॉर्ड डिलीट करना चाहते हैं?",
      colSerial: "क्र.",
      colHouse: "H.N.",
      colLakab: "लक़ब",
      colName: "नाम",
      colFather: "वल्द नाम",
      colChaap: "छाप *",
      colMobile: "मोबाईल न.",
      labelMohalla: "Mohalla Name",
      labelNewMohalla: "New Mohalla Name",
      labelHouse: "House Number",
      labelLakab: "Lakab",
      labelMukhiya: "Mukhiya Name",
      labelFather: "Father Name",
      labelChaap: "Chaap",
      labelMobile: "Mobile Number",
      labelBade: "Bade",
      labelChote: "Chote",
      title: "मकान सूची - Muslim Khatri 22 Nukh Jamaat",
    },
    shadi: {
      eyebrow: "Marriage Directory",
      subtitle: "{city} की शादी सूची",
      heading: "शादी सूची",
      desc: "नाम, छाप, दिन या समय से खोजें।",
      newShadi: "नई शादी",
      sortDate: "Date Sort",
      searchPh: "खोजें",
      empty: "अभी कोई शादी रिकॉर्ड नहीं है।",
      newRecord: "नई शादी रिकॉर्ड",
      editRecord: "शादी रिकॉर्ड Edit करें",
      confirmDelete: "क्या आप यह शादी रिकॉर्ड डिलीट करना चाहते हैं?",
      colDate: "Date",
      colDay: "Day",
      colName: "Name",
      colChaap: "Chaap",
      colTime: "Subah/Shaam",
      labelDate: "Date",
      labelDay: "Day",
      labelName: "Name",
      labelChaap: "Chaap",
      labelTime: "Subah/Shaam",
      title: "शादी सूची - Muslim Khatri 22 Nukh Jamaat",
    },
    city: {
      eyebrow: "Mohalla Directory",
      subtitle: "{city} के मोहल्ले",
      heading: "मोहल्ला लिस्ट",
      desc: "इस शहर/गांव में रिकॉर्ड add करते समय लिखे गए मोहल्ले यहां दिखेंगे।",
      addMakan: "मकान रिकॉर्ड जोड़ें",
      shadiList: "शादी सूची",
      empty: "अभी इस शहर/गांव में कोई मोहल्ला नहीं है। पहले मकान रिकॉर्ड में मोहल्ला add करें।",
      makanCount: "{count} मकान",
      title: "मोहल्ला सूची - Muslim Khatri 22 Nukh Jamaat",
    },
    mohalla: {
      eyebrow: "Mohalla Makan Directory",
      subtitle: "{mohalla} - {city}",
      heading: "मोहल्ले की मकान सूची",
      desc: "इस पेज पर सिर्फ चुने हुए मोहल्ले के मकान दिखेंगे।",
      empty: "अभी इस मोहल्ले में कोई रिकॉर्ड नहीं है।",
      title: "मोहल्ला मकान सूची - Muslim Khatri 22 Nukh Jamaat",
    },
    admin: {
      eyebrow: "Admin Panel",
      tagline: "शहर/गांव, मकान और शादी रिकॉर्ड मैनेज करें",
      loginHeading: "एडमिन लॉगिन",
      loginHint: "Username: admin | Password: admin123",
      loginError: "गलत username या password",
      dashboard: "एडमिन डैशबोर्ड",
      dashboardDesc: "सभी बदलाव इसी browser में save होंगे।",
      cities: "शहर/गांव",
      addCity: "Add City/Village",
      recordMgmt: "रिकॉर्ड मैनेजमेंट",
      citySelect: "City/Village Select",
      makanManage: "Makan Manage",
      shadiManage: "Shadi Manage",
      newCity: "नया शहर/गांव",
      editCity: "शहर/गांव Edit करें",
      cityName: "City/Village Name",
      enterName: "नाम लिखें",
      minOneCity: "कम से कम एक शहर/गांव रखना जरूरी है",
      confirmDeleteCity: "क्या आप यह शहर/गांव डिलीट करना चाहते हैं?",
      title: "एडमिन पैनल - Muslim Khatri 22 Nukh Jamaat",
    },
    footer: {
      text: "© {year} Muslim Khatri 22 Nukh Jamaat. Data इस browser में सुरक्षित रहता है।",
    },
  },
  en: {
    nav: {
      mainLabel: "Main navigation",
      home: "Home",
      admin: "Admin Panel",
      backMohallas: "City/Village Mohallas",
    },
    lang: {
      label: "Language",
      hi: "हिंदी",
      en: "English",
    },
    common: {
      cityVillage: "City/Village",
      mohalla: "Mohalla",
      noMohalla: "No Mohalla",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      close: "Close",
      view: "View",
      newRecord: "New Record",
      excelExport: "Excel Export",
      action: "Action",
      login: "Login",
      logout: "Logout",
      search: "Search",
      morning: "Morning",
      evening: "Evening",
    },
    home: {
      eyebrow: "Community Directory",
      tagline: "Secure local records for house and marriage information in every city/village",
      selectCity: "Select City/Village",
      selectCityDesc: "View house and marriage lists separately for each city/village.",
      cityList: "City/Village List",
      cityCount: "{count} cities/villages",
      makanList: "House List",
      shadiList: "Marriage List",
      mohallas: "Mohallas",
      makanCount: "{makan} houses | {shadi} marriage records",
      title: "Muslim Khatri 22 Nukh Jamaat",
    },
    makan: {
      eyebrow: "MAKAN DIRECTORY",
      subtitle: "House list of {city}",
      searchMukhiya: "Head of family name",
      searchMakan: "House number / Mohalla",
      searchMukhiyaPh: "Enter name",
      searchMakanPh: "Enter number or mohalla",
      empty: "No records yet.",
      newRecord: "New house record",
      editRecord: "Edit house record",
      newMohalla: "Enter new mohalla",
      confirmDelete: "Do you want to delete this record?",
      colSerial: "Sr.",
      colHouse: "H.N.",
      colLakab: "Lakab",
      colName: "Name",
      colFather: "Father's name",
      colChaap: "Chaap *",
      colMobile: "Mobile no.",
      labelMohalla: "Mohalla Name",
      labelNewMohalla: "New Mohalla Name",
      labelHouse: "House Number",
      labelLakab: "Lakab",
      labelMukhiya: "Mukhiya Name",
      labelFather: "Father Name",
      labelChaap: "Chaap",
      labelMobile: "Mobile Number",
      labelBade: "Adults",
      labelChote: "Children",
      title: "House List - Muslim Khatri 22 Nukh Jamaat",
    },
    shadi: {
      eyebrow: "Marriage Directory",
      subtitle: "Marriage list of {city}",
      heading: "Marriage List",
      desc: "Search by name, chaap, day or time.",
      newShadi: "New Marriage",
      sortDate: "Sort by Date",
      searchPh: "Search",
      empty: "No marriage records yet.",
      newRecord: "New marriage record",
      editRecord: "Edit marriage record",
      confirmDelete: "Do you want to delete this marriage record?",
      colDate: "Date",
      colDay: "Day",
      colName: "Name",
      colChaap: "Chaap",
      colTime: "Morning/Evening",
      labelDate: "Date",
      labelDay: "Day",
      labelName: "Name",
      labelChaap: "Chaap",
      labelTime: "Morning/Evening",
      title: "Marriage List - Muslim Khatri 22 Nukh Jamaat",
    },
    city: {
      eyebrow: "Mohalla Directory",
      subtitle: "Mohallas of {city}",
      heading: "Mohalla List",
      desc: "Mohallas entered while adding records in this city/village will appear here.",
      addMakan: "Add house record",
      shadiList: "Marriage list",
      empty: "No mohalla in this city/village yet. Add a mohalla in house records first.",
      makanCount: "{count} houses",
      title: "Mohalla List - Muslim Khatri 22 Nukh Jamaat",
    },
    mohalla: {
      eyebrow: "Mohalla Makan Directory",
      subtitle: "{mohalla} - {city}",
      heading: "House list of mohalla",
      desc: "This page shows only houses from the selected mohalla.",
      empty: "No records in this mohalla yet.",
      title: "Mohalla House List - Muslim Khatri 22 Nukh Jamaat",
    },
    admin: {
      eyebrow: "Admin Panel",
      tagline: "Manage cities/villages, house and marriage records",
      loginHeading: "Admin Login",
      loginHint: "Username: admin | Password: admin123",
      loginError: "Incorrect username or password",
      dashboard: "Admin Dashboard",
      dashboardDesc: "All changes will be saved in this browser.",
      cities: "Cities/Villages",
      addCity: "Add City/Village",
      recordMgmt: "Record Management",
      citySelect: "City/Village Select",
      makanManage: "Manage Houses",
      shadiManage: "Manage Marriages",
      newCity: "New city/village",
      editCity: "Edit city/village",
      cityName: "City/Village Name",
      enterName: "Enter name",
      minOneCity: "At least one city/village is required",
      confirmDeleteCity: "Do you want to delete this city/village?",
      title: "Admin Panel - Muslim Khatri 22 Nukh Jamaat",
    },
    footer: {
      text: "© {year} Muslim Khatri 22 Nukh Jamaat. Data is stored securely in this browser.",
    },
  },
};

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return saved === "en" ? "en" : "hi";
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

function t(key, params = {}) {
  const lang = getLang();
  let text = getNestedValue(translations[lang], key)
    || getNestedValue(translations.hi, key)
    || key;
  Object.entries(params).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value ?? ""));
  });
  return text;
}

function applyI18nAttributes() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    document.title = t(el.dataset.i18nTitle);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  const footer = document.querySelector("[data-i18n-footer]");
  if (footer) {
    const year = document.getElementById("year")?.textContent || new Date().getFullYear();
    footer.innerHTML = t("footer.text", { year });
  }
}

function updateMakanTableHeaders() {
  const headerRow = document.querySelector("#makanTableContainer thead tr, .makan-register thead tr");
  if (!headerRow) return;
  const keys = [
    "makan.colSerial",
    "makan.colHouse",
    "makan.colLakab",
    "makan.colName",
    "makan.colFather",
    "makan.colChaap",
    "makan.colMobile",
  ];
  const cells = Array.from(headerRow.children);
  keys.forEach((key, index) => {
    if (cells[index]) cells[index].textContent = t(key);
  });
  const actionCell = cells.length > keys.length ? cells[cells.length - 1] : null;
  if (actionCell) actionCell.textContent = t("common.action");
}

function updateShadiTableHeaders() {
  const headerRow = document.querySelector("#shadiTable")?.closest("table")?.querySelector("thead tr");
  if (!headerRow) return;
  const keys = [
    "shadi.colDate",
    "shadi.colDay",
    "shadi.colName",
    "shadi.colChaap",
    "shadi.colTime",
    "common.action",
  ];
  Array.from(headerRow.children).forEach((cell, index) => {
    if (keys[index]) cell.textContent = t(keys[index]);
  });
}

function updatePageSubtitles() {
  const cityEl = document.getElementById("pageCity");
  const cityName = cityEl?.textContent?.trim() || t("common.cityVillage");

  const makanSubtitle = document.getElementById("makanSubtitle");
  if (makanSubtitle) {
    makanSubtitle.innerHTML = t("makan.subtitle", { city: `<span id="pageCity">${cityName}</span>` });
  }

  const citySubtitle = document.getElementById("citySubtitle");
  if (citySubtitle) {
    citySubtitle.innerHTML = t("city.subtitle", { city: `<span id="pageCity">${cityName}</span>` });
  }

  const shadiSubtitle = document.getElementById("shadiSubtitle");
  if (shadiSubtitle) {
    shadiSubtitle.innerHTML = t("shadi.subtitle", { city: `<span id="pageCity">${cityName}</span>` });
  }

  const mohallaSubtitle = document.getElementById("mohallaSubtitle");
  if (mohallaSubtitle) {
    const mohallaEl = document.getElementById("pageMohalla");
    const mohallaName = mohallaEl?.textContent?.trim() || t("common.mohalla");
    mohallaSubtitle.innerHTML = t("mohalla.subtitle", {
      mohalla: `<span id="pageMohalla">${mohallaName}</span>`,
      city: `<span id="pageCity">${cityName}</span>`,
    });
  }
}

function applyTranslations() {
  document.documentElement.lang = getLang();
  applyI18nAttributes();
  updateMakanTableHeaders();
  updateShadiTableHeaders();
  updatePageSubtitles();
  updateLanguageSwitcher();
  updateShadiTimeOptions();
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: getLang() } }));
}

function updateShadiTimeOptions() {
  const select = document.querySelector('#shadiForm select[name="time"]');
  if (!select || select.options.length < 2) return;
  select.options[0].textContent = t("common.morning");
  select.options[1].textContent = t("common.evening");
}

function updateLanguageSwitcher() {
  const switcher = document.getElementById("langSwitcher");
  if (!switcher) return;
  switcher.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.textContent = t(`lang.${btn.dataset.lang}`);
    btn.classList.toggle("active", btn.dataset.lang === getLang());
    btn.setAttribute("aria-pressed", btn.dataset.lang === getLang() ? "true" : "false");
  });
  switcher.setAttribute("aria-label", t("lang.label"));
}

function setLanguage(lang) {
  if (lang !== "hi" && lang !== "en") return;
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
}

function initLanguageSwitcher() {
  const nav = document.querySelector(".top-nav");
  if (!nav || document.getElementById("langSwitcher")) return;

  const wrap = document.createElement("div");
  wrap.className = "lang-switcher";
  wrap.id = "langSwitcher";
  wrap.setAttribute("role", "group");
  wrap.setAttribute("aria-label", t("lang.label"));

  ["hi", "en"].forEach((lang) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn";
    btn.dataset.lang = lang;
    btn.textContent = t(`lang.${lang}`);
    btn.addEventListener("click", () => setLanguage(lang));
    wrap.appendChild(btn);
  });

  nav.appendChild(wrap);
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  applyTranslations();
});

window.t = t;
window.getLang = getLang;
window.setLanguage = setLanguage;
window.applyTranslations = applyTranslations;
const STORAGE_KEY = "mk22_jamaat_data_v1"; // kept for backward, but Firebase is primary now
const ADMIN_KEY = "mk22_admin_logged_in";
const defaultCities = ["Khandwa", "Indore", "Gogawan", "Burhanpur", "Khargone"];

// ==================== FIREBASE SETUP ====================
// Firebase config for khatri-community project (Realtime Database)
// All makan/shadi data is saved under /communityData in the Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBn2IhtLq7lOVjkGCVyzzTBaaIRSRxZVN4",
  authDomain: "khatri-community.firebaseapp.com",
  databaseURL: "https://khatri-community-default-rtdb.firebaseio.com",
  projectId: "khatri-community",
  storageBucket: "khatri-community.firebasestorage.app",
  messagingSenderId: "88902934083",
  appId: "1:88902934083:web:69e67a61d7b6be45353ef6",
  measurementId: "G-NYCQQ6QHND"
};

let firebaseInitialized = false;
let dbRef = null; // reference to 'communityData'
let currentData = null; // in-memory data

function initFirebase() {
  if (firebaseInitialized || !window.firebase) return;

  // Firebase config loaded
  if (!firebaseConfig.apiKey || firebaseConfig.apiKey.length < 20) {
    console.warn("%c[FIREBASE] Config missing or invalid - data will be local only!", "color:red;font-size:14px");
    return;
  }

  try {
    firebase.initializeApp(firebaseConfig);
    dbRef = firebase.database().ref('communityData');
    firebaseInitialized = true;
  } catch (e) {
    console.error("Firebase init failed. Did you add your config?", e);
  }
}

function createDefaultData() {
  const cities = defaultCities.map((name) => ({ id: slugify(name), name }));
  const data = { cities, makan: {}, shadi: {} };
  cities.forEach((city) => {
    data.makan[city.id] = [];
    data.shadi[city.id] = [];
  });
  return data;
}

function ensureDataStructure(data) {
  if (!data || !Array.isArray(data.cities)) {
    return createDefaultData();
  }
  data.makan = data.makan || {};
  data.shadi = data.shadi || {};
  data.cities.forEach((city) => {
    data.makan[city.id] = data.makan[city.id] || [];
    data.shadi[city.id] = data.shadi[city.id] || [];
  });
  return data;
}

// Listen for real-time changes from any device
function setupFirebaseListener() {
  if (!dbRef) return;
  dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data && Array.isArray(data.cities)) {
      currentData = ensureDataStructure(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData)); // keep local backup
    } else {
      currentData = createDefaultData();
      dbRef.set(currentData); // seed if empty
    }
    // Auto refresh UI when data changes (from any device!)
    if (typeof refreshPageContent === 'function') {
      refreshPageContent();
    }
  });
}

function getData() {
  if (currentData) return ensureDataStructure(currentData);

  // Fallback if Firebase not ready yet
  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (parsed && Array.isArray(parsed.cities)) {
        return ensureDataStructure(parsed);
      }
    }
  } catch {}
  return createDefaultData();
}

function saveData(data) {
  currentData = ensureDataStructure(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData)); // keep local cache

  if (dbRef) {
    // Write to Firebase - this will sync to ALL devices instantly
    dbRef.set(currentData)
      .then(() => {
        console.log("[FIREBASE] Data saved to cloud successfully");
      })
      .catch(err => console.error("Firebase save error:", err));
  } else {
    console.warn("%c[FIREBASE] Not connected - saving only locally!", "color:orange");
  }
}

// Force load fresh data from Firebase on every page load/refresh
// This fixes the issue of not seeing saved records on home after save or refresh
function loadFreshDataFromFirebase() {
  // Always render immediately with current data (local or default) so cities show right away
  currentData = ensureDataStructure(getData());
  renderAllPages();

  if (!dbRef) {
    return;
  }

  // Then pull fresh from Firebase and update
  dbRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (data && Array.isArray(data.cities)) {
        currentData = ensureDataStructure(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
      } else {
        currentData = createDefaultData();
        dbRef.set(currentData);
      }
      console.log("[FIREBASE] Fresh data loaded from cloud");
      renderAllPages();
    })
    .catch(err => {
      console.error("Firebase load error, using local:", err);
      // already rendered fallback above
    });
}

function renderAllPages() {
  setYear();
  renderHome();
  renderMakan();
  renderShadi();
  renderCityMohallas();
  renderMohallaPage();
  if (sessionStorage.getItem(ADMIN_KEY) === "yes") renderAdmin();
}

let editingMakanId = null;
let editingShadiId = null;
let editingCityId = null;
let shadiSortAsc = true;

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097f]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  }[char]));
}

function params() {
  return new URLSearchParams(window.location.search);
}

function listPage(type, city) {
  // Always use query param style (no more duplicated per-city HTML files)
  return `${type}.html?city=${encodeURIComponent(city.id)}`;
}

function cityPage(city) {
  return `city.html?city=${encodeURIComponent(city.id)}`;
}

function currentCity() {
  const data = getData();
  // Prefer ?city= query param. Filename matching removed (we use single HTML files + query)
  const cityId = params().get("city") || data.cities[0]?.id;
  return data.cities.find((city) => city.id === cityId) || data.cities[0];
}

function mohallaSlug(value) {
  return slugify(value) || "bina-mohalla";
}

function mohallaPage(city, mohallaName) {
  return `mohalla.html?city=${encodeURIComponent(city.id)}&mohalla=${encodeURIComponent(mohallaSlug(mohallaName))}`;
}

function recordMohallaName(record) {
  const fallback = typeof t === "function" ? t("common.noMohalla") : "बिना मोहल्ला";
  return String(record.mohallaName || record.mohalla || fallback).trim() || fallback;
}

function groupRecordsByMohalla(records) {
  const groups = [];
  const groupMap = new Map();

  records.forEach((record) => {
    const name = recordMohallaName(record);
    const slug = mohallaSlug(name);
    if (!groupMap.has(slug)) {
      const group = { name, slug, records: [] };
      groupMap.set(slug, group);
      groups.push(group);
    }
    groupMap.get(slug).records.push(record);
  });

  groups.forEach((group) => {
    group.records.sort((a, b) => String(a.houseNumber || "").localeCompare(String(b.houseNumber || ""), "hi", { numeric: true }));
  });
  return groups.sort((a, b) => a.name.localeCompare(b.name, "hi"));
}

function showModal(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeModal(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function updatePageCity(city) {
  const pageCity = document.getElementById("pageCity");
  if (pageCity && city) pageCity.textContent = city.name;
  if (typeof updatePageSubtitles === "function") updatePageSubtitles();
}

function getMakanRecords(city) {
  const data = getData();
  return data.makan[city.id] || [];
}

function getMohallaNames(city) {
  const names = new Map();
  getMakanRecords(city).forEach((record) => {
    const name = recordMohallaName(record);
    names.set(mohallaSlug(name), name);
  });
  if (!names.size) names.set("bina-mohalla", t("common.noMohalla"));
  return Array.from(names.values()).sort((a, b) => a.localeCompare(b, "hi"));
}

function renderHome() {
  const cityList = document.getElementById("cityList");
  if (!cityList) return;

  const data = getData();
  const cityCount = document.getElementById("cityCount");
  if (cityCount) cityCount.textContent = t("home.cityCount", { count: data.cities.length });

  cityList.innerHTML = data.cities.map((city) => {
    const totalMakan = (data.makan[city.id] || []).length;
    const totalShadi = (data.shadi[city.id] || []).length;
    return `
      <div class="city-row">
        <a class="btn primary" href="${listPage("makan", city)}">${escapeHtml(t("home.makanList"))}</a>
        <div>
          <div class="city-name">${escapeHtml(city.name)}</div>
          <div class="city-info">${escapeHtml(t("home.makanCount", { makan: totalMakan, shadi: totalShadi }))}</div>
        </div>
        <a class="btn secondary" href="${cityPage(city)}">${escapeHtml(t("home.mohallas"))}</a>
        <a class="btn secondary" href="${listPage("shadi", city)}">${escapeHtml(t("home.shadiList"))}</a>
      </div>
    `;
  }).join("");
}

function populateMakanMohallas(selectedName = "") {
  const select = document.getElementById("mohallaSelect");
  if (!select) return;

  const city = currentCity();
  const names = getMohallaNames(city);
  if (selectedName && !names.includes(selectedName)) names.unshift(selectedName);
  select.innerHTML = [
    ...names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`),
    `<option value="__new__">${escapeHtml(t("makan.newMohalla"))}</option>`,
  ].join("");
  select.value = selectedName || names[0] || t("common.noMohalla");
}

function toggleNewMohallaField() {
  const select = document.getElementById("mohallaSelect");
  const field = document.getElementById("newMohallaField");
  if (!select || !field) return;
  field.classList.toggle("hidden", select.value !== "__new__");
  if (select.value === "__new__") field.querySelector("input")?.focus();
}

function renderMakan() {
  const table = document.getElementById("makanTable");
  if (!table) return;

  const city = currentCity();
  updatePageCity(city);

  const headerRow = document.querySelector("#makanTableContainer thead tr");
  if (headerRow && headerRow.children.length === 7) {
    headerRow.insertAdjacentHTML("beforeend", `<th>${escapeHtml(t("common.action"))}</th>`);
  }

  const records = getMakanRecords(city);
  let serial = 1;
  table.innerHTML = groupRecordsByMohalla(records).map((group) => {
    const rows = group.records.map((item) => `
      <tr>
        <td>${serial++}</td>
        <td>${escapeHtml(item.houseNumber)}</td>
        <td>${escapeHtml(item.lakab)}</td>
        <td>${escapeHtml(item.mukhiyaName)}</td>
        <td>${escapeHtml(item.fatherName)}</td>
        <td>${escapeHtml(item.chaap)}</td>
        <td>${escapeHtml(item.mobileNumber || "---")}</td>
        <td>
          <button class="icon-action" type="button" onclick="editMakan('${item.id}')" title="${escapeHtml(t("common.edit"))}">${escapeHtml(t("common.edit"))}</button>
          <button class="icon-action danger" type="button" onclick="deleteMakan('${item.id}')" title="${escapeHtml(t("common.delete"))}">${escapeHtml(t("common.delete"))}</button>
        </td>
      </tr>
    `).join("");
    return `<tr class="mohalla-heading"><td colspan="8">${escapeHtml(group.name)}</td></tr>${rows}`;
  }).join("");

  const empty = document.getElementById("makanEmpty");
  if (empty) empty.style.display = records.length ? "none" : "block";
}

function openMakanForm(record) {
  const form = document.getElementById("makanForm");
  if (!form) return;

  form.reset();
  editingMakanId = record?.id || null;
  populateMakanMohallas(record ? recordMohallaName(record) : "");
  toggleNewMohallaField();

  const title = document.getElementById("makanModalTitle");
  if (title) title.textContent = record ? t("makan.editRecord") : t("makan.newRecord");

  if (record) {
    Object.keys(record).forEach((key) => {
      if (form.elements[key]) form.elements[key].value = record[key];
    });
    if (form.elements.mohallaName) form.elements.mohallaName.value = recordMohallaName(record);
  }
  showModal(document.getElementById("makanModal"));
}

window.editMakan = function(id) {
  const city = currentCity();
  const record = getMakanRecords(city).find((item) => item.id === id);
  if (record) openMakanForm(record);
};

window.deleteMakan = function(id) {
  if (!confirm(t("makan.confirmDelete"))) return;
  const data = getData();
  const city = currentCity();
  data.makan[city.id] = (data.makan[city.id] || []).filter((item) => item.id !== id);
  saveData(data);
  renderMakan();
};

function exportTableCsv(tableSelector, filePrefix) {
  const table = document.querySelector(tableSelector);
  if (!table) return;
  const rows = Array.from(table.querySelectorAll("tr")).map((row) => {
    return Array.from(row.children)
      .map((cell) => `"${cell.textContent.trim().replace(/"/g, '""')}"`)
      .join(",");
  });
  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filePrefix}-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

// --- Data JSON backup support (for safety / moving data) ---
function exportDataJson() {
  const data = getData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "data.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importDataJson(file) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!imported || !Array.isArray(imported.cities)) {
        throw new Error("Invalid file: cities array missing");
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
      alert("Data imported! Reloading page...");
      location.reload();
    } catch (e) {
      alert("Import failed: " + e.message);
    }
  };
  reader.readAsText(file);
}

function setupMakan() {
  if (!document.getElementById("makanTable")) return;

  document.getElementById("addMakanBtn")?.addEventListener("click", () => openMakanForm());
  document.getElementById("exportMakanBtn")?.addEventListener("click", () => exportTableCsv("#makanTableContainer", "makan-list"));
  document.getElementById("mohallaSelect")?.addEventListener("change", toggleNewMohallaField);

  const form = document.getElementById("makanForm");
  form?.elements.mobileNumber?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    form.elements.bade?.focus();
    form.elements.bade?.select();
  });
  form?.elements.bade?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    form.elements.chote?.focus();
    form.elements.chote?.select();
  });

  // Fix: After entering "Chote" (children), pressing Enter should save the record
  // Previously there was no handler, and browser default would not reliably trigger
  // the primary Save button (especially with <form method="dialog"> + multiple submit buttons).
  form?.elements.chote?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const saveBtn = form.querySelector('button[value="default"]');
    if (saveBtn && typeof form.requestSubmit === "function") {
      form.requestSubmit(saveBtn);
    } else {
      // Fallback for older environments
      form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.submitter?.value === "cancel") {
      closeModal(document.getElementById("makanModal"));
      return;
    }

    const data = getData();
    const city = currentCity();
    const record = Object.fromEntries(new FormData(form).entries());
    const newMohalla = String(record.newMohallaName || "").trim();
    record.mohallaName = record.mohallaName === "__new__" ? newMohalla : record.mohallaName;
    record.mohallaName = record.mohallaName || t("common.noMohalla");
    delete record.newMohallaName;
    ["houseNumber", "lakab", "mukhiyaName", "fatherName", "chaap", "mobileNumber"].forEach((key) => {
      record[key] = String(record[key] || "").trim();
    });
    record.bade = Number(record.bade || 0);
    record.chote = Number(record.chote || 0);

    if (editingMakanId) {
      data.makan[city.id] = data.makan[city.id].map((item) => item.id === editingMakanId ? { ...item, ...record } : item);
    } else {
      data.makan[city.id].push({ id: uid(), ...record });
    }
    saveData(data);
    closeModal(document.getElementById("makanModal"));
    renderMakan();
  });

  renderMakan();
}

function filteredShadiRecords(records) {
  const search = document.getElementById("searchShadi")?.value.trim().toLowerCase() || "";
  let output = records.filter((record) => {
    const text = `${record.date || ""} ${record.day || ""} ${record.name || ""} ${record.chaap || ""} ${record.time || ""}`.toLowerCase();
    return !search || text.includes(search);
  });
  output = [...output].sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
  return shadiSortAsc ? output : output.reverse();
}

function renderShadi() {
  const table = document.getElementById("shadiTable");
  if (!table) return;

  const data = getData();
  const city = currentCity();
  updatePageCity(city);
  const records = filteredShadiRecords(data.shadi[city.id] || []);

  table.innerHTML = records.map((item) => `
    <tr>
      <td>${escapeHtml(item.date)}</td>
      <td>${escapeHtml(item.day)}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.chaap)}</td>
      <td>${escapeHtml(item.time)}</td>
      <td>
        <button class="icon-action" type="button" onclick="editShadi('${item.id}')">${escapeHtml(t("common.edit"))}</button>
        <button class="icon-action danger" type="button" onclick="deleteShadi('${item.id}')">${escapeHtml(t("common.delete"))}</button>
      </td>
    </tr>
  `).join("");

  const empty = document.getElementById("shadiEmpty");
  if (empty) empty.style.display = records.length ? "none" : "block";
}

function openShadiForm(record) {
  const form = document.getElementById("shadiForm");
  if (!form) return;
  form.reset();
  editingShadiId = record?.id || null;
  const title = document.getElementById("shadiModalTitle");
  if (title) title.textContent = record ? t("shadi.editRecord") : t("shadi.newRecord");
  if (record) {
    Object.keys(record).forEach((key) => {
      if (form.elements[key]) form.elements[key].value = record[key];
    });
  }
  showModal(document.getElementById("shadiModal"));
}

window.editShadi = function(id) {
  const data = getData();
  const city = currentCity();
  const record = (data.shadi[city.id] || []).find((item) => item.id === id);
  if (record) openShadiForm(record);
};

window.deleteShadi = function(id) {
  if (!confirm(t("shadi.confirmDelete"))) return;
  const data = getData();
  const city = currentCity();
  data.shadi[city.id] = (data.shadi[city.id] || []).filter((item) => item.id !== id);
  saveData(data);
  renderShadi();
};

function setupShadi() {
  if (!document.getElementById("shadiTable")) return;

  document.getElementById("addShadiBtn")?.addEventListener("click", () => openShadiForm());
  document.getElementById("searchShadi")?.addEventListener("input", renderShadi);
  document.getElementById("sortDateBtn")?.addEventListener("click", () => {
    shadiSortAsc = !shadiSortAsc;
    renderShadi();
  });

  document.getElementById("shadiForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.submitter?.value === "cancel") {
      closeModal(document.getElementById("shadiModal"));
      return;
    }

    const data = getData();
    const city = currentCity();
    const record = Object.fromEntries(new FormData(event.currentTarget).entries());
    Object.keys(record).forEach((key) => record[key] = String(record[key] || "").trim());

    if (editingShadiId) {
      data.shadi[city.id] = data.shadi[city.id].map((item) => item.id === editingShadiId ? { ...item, ...record } : item);
    } else {
      data.shadi[city.id].push({ id: uid(), ...record });
    }
    saveData(data);
    closeModal(document.getElementById("shadiModal"));
    renderShadi();
  });

  renderShadi();
}

function renderCityMohallas() {
  const list = document.getElementById("mohallaList");
  if (!list) return;

  const city = currentCity();
  updatePageCity(city);
  const groups = groupRecordsByMohalla(getMakanRecords(city));

  const makanLink = document.getElementById("cityMakanLink");
  const shadiLink = document.getElementById("cityShadiLink");
  if (makanLink) makanLink.href = listPage("makan", city);
  if (shadiLink) shadiLink.href = listPage("shadi", city);

  list.innerHTML = groups.map((group) => `
    <a class="mohalla-row" href="${mohallaPage(city, group.name)}">
      <div>
        <div class="city-name">${escapeHtml(group.name)}</div>
        <div class="city-info">${escapeHtml(t("city.makanCount", { count: group.records.length }))}</div>
      </div>
      <span class="btn secondary">${escapeHtml(t("common.view"))}</span>
    </a>
  `).join("");

  const empty = document.getElementById("mohallaEmpty");
  if (empty) empty.style.display = groups.length ? "none" : "block";
}

function renderMohallaPage() {
  const table = document.getElementById("mohallaTable");
  if (!table) return;

  const city = currentCity();
  const selectedSlug = params().get("mohalla") || "";
  const groups = groupRecordsByMohalla(getMakanRecords(city));
  const group = groups.find((item) => item.slug === selectedSlug) || groups[0];
  const records = group?.records || [];

  updatePageCity(city);
  const pageMohalla = document.getElementById("pageMohalla");
  if (pageMohalla) pageMohalla.textContent = group?.name || t("common.mohalla");

  const backLink = document.getElementById("backCityLink");
  const addLink = document.getElementById("mohallaAddLink");
  if (backLink) backLink.href = cityPage(city);
  if (addLink) addLink.href = listPage("makan", city);

  table.innerHTML = records.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.houseNumber)}</td>
      <td>${escapeHtml(item.lakab)}</td>
      <td>${escapeHtml(item.mukhiyaName)}</td>
      <td>${escapeHtml(item.fatherName)}</td>
      <td>${escapeHtml(item.chaap)}</td>
      <td>${escapeHtml(item.mobileNumber || "---")}</td>
    </tr>
  `).join("");

  const empty = document.getElementById("mohallaTableEmpty");
  if (empty) empty.style.display = records.length ? "none" : "block";
  document.getElementById("exportMohallaBtn")?.addEventListener("click", () => exportTableCsv(".makan-register", "mohalla-list"), { once: true });
}

function setupAdmin() {
  const loginPanel = document.getElementById("loginPanel");
  if (!loginPanel) return;

  const adminPanel = document.getElementById("adminPanel");
  const syncPanels = () => {
    const loggedIn = sessionStorage.getItem(ADMIN_KEY) === "yes";
    loginPanel.classList.toggle("hidden", loggedIn);
    adminPanel?.classList.toggle("hidden", !loggedIn);
    if (loggedIn) renderAdmin();
  };

  document.getElementById("loginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.username.value === "admin" && form.password.value === "admin123") {
      sessionStorage.setItem(ADMIN_KEY, "yes");
      syncPanels();
    } else {
      document.getElementById("loginError").textContent = t("admin.loginError");
    }
  });

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    sessionStorage.removeItem(ADMIN_KEY);
    syncPanels();
  });
  document.getElementById("addCityBtn")?.addEventListener("click", () => openCityForm());
  document.getElementById("cityForm")?.addEventListener("submit", saveCityForm);
  document.getElementById("adminCitySelect")?.addEventListener("change", updateAdminManageLinks);

  // Data JSON backup
  document.getElementById("exportJsonBtn")?.addEventListener("click", exportDataJson);
  const importInput = document.getElementById("importJsonInput");
  importInput?.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      importDataJson(e.target.files[0]);
      e.target.value = ""; // reset
    }
  });

  // Note: Firebase handles real-time sync now. Backup buttons are for safety.
  syncPanels();
}

function updateAdminManageLinks() {
  const select = document.getElementById("adminCitySelect");
  if (!select) return;
  const city = getData().cities.find((item) => item.id === select.value);
  const makanLink = document.getElementById("adminMakanLink");
  const shadiLink = document.getElementById("adminShadiLink");
  if (city && makanLink) makanLink.href = listPage("makan", city);
  if (city && shadiLink) shadiLink.href = listPage("shadi", city);
}

function renderAdmin() {
  const data = getData();
  const list = document.getElementById("adminCityList");
  const select = document.getElementById("adminCitySelect");

  if (list) {
    list.innerHTML = data.cities.map((city) => `
      <div class="admin-city-row">
        <strong>${escapeHtml(city.name)}</strong>
        <div class="row-actions">
          <button class="btn secondary small" type="button" onclick="editCity('${city.id}')">${escapeHtml(t("common.edit"))}</button>
          <button class="btn danger small" type="button" onclick="deleteCity('${city.id}')">${escapeHtml(t("common.delete"))}</button>
        </div>
      </div>
    `).join("");
  }

  if (select) {
    const oldValue = select.value;
    select.innerHTML = data.cities.map((city) => `<option value="${city.id}">${escapeHtml(city.name)}</option>`).join("");
    select.value = data.cities.some((city) => city.id === oldValue) ? oldValue : data.cities[0]?.id;
    updateAdminManageLinks();
  }
}

function openCityForm(city) {
  editingCityId = city?.id || null;
  const form = document.getElementById("cityForm");
  if (!form) return;
  form.reset();
  const title = document.getElementById("cityModalTitle");
  if (title) title.textContent = city ? t("admin.editCity") : t("admin.newCity");
  if (city) form.cityName.value = city.name;
  showModal(document.getElementById("cityModal"));
}

function saveCityForm(event) {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    closeModal(document.getElementById("cityModal"));
    return;
  }

  const name = event.currentTarget.cityName.value.trim();
  if (!name) {
    alert(t("admin.enterName"));
    return;
  }

  const data = getData();
  if (editingCityId) {
    data.cities = data.cities.map((city) => city.id === editingCityId ? { ...city, name } : city);
  } else {
    let id = slugify(name) || uid();
    if (data.cities.some((city) => city.id === id)) id += `-${uid()}`;
    data.cities.push({ id, name });
    data.makan[id] = [];
    data.shadi[id] = [];
  }
  saveData(data);
  closeModal(document.getElementById("cityModal"));
  renderAdmin();
};

window.editCity = function(id) {
  const city = getData().cities.find((item) => item.id === id);
  if (city) openCityForm(city);
};

window.deleteCity = function(id) {
  if (!confirm(t("admin.confirmDeleteCity"))) return;
  const data = getData();
  if (data.cities.length <= 1) {
    alert(t("admin.minOneCity"));
    return;
  }
  data.cities = data.cities.filter((city) => city.id !== id);
  delete data.makan[id];
  delete data.shadi[id];
  saveData(data);
  renderAdmin();
};

function refreshPageContent() {
  renderHome();
  renderMakan();
  renderShadi();
  renderCityMohallas();
  renderMohallaPage();
  if (sessionStorage.getItem(ADMIN_KEY) === "yes") renderAdmin();
}

window.addEventListener("languagechange", refreshPageContent);

initFirebase();
setupFirebaseListener();  // keeps listening for changes while on page

// Always pull fresh data from Firebase on load or refresh
// This ensures cities and records show immediately on GitHub Pages
loadFreshDataFromFirebase();
