const defaultLocale = "ru";
let locale;
let translations = {};

getValueByString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
          o = o[k];
      } else {
          return;
      }
  }
  return o;
}

document.addEventListener("DOMContentLoaded", () => {
  setLocale(defaultLocale);
  bindLocaleSwitcher(defaultLocale);
});

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations = await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  translatePage();
}

async function fetchTranslationsFor(newLocale) {
  const jsonPath = window.location.pathname.contains('templates')
    ? `../locales/${newLocale}/translation.json`
    : `locales/${newLocale}/translation.json`;
  const response = await fetch(jsonPath, {
    headers: {
      'Content-Security-Policy': 'sandbox',
    }
  });
  return await response.json();
}

function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = getValueByString(translations, key);
  
  if (element.tagName.toLowerCase() === 'input') {
    element.value = translation;
  } else {
    element.innerText = translation;
  }
}

function bindLocaleSwitcher(initialValue) {
  const switcher =
    document.querySelector("[data-i18n-switcher]");
  switcher.value = initialValue;
  switcher.onchange = (e) => {
    setLocale(e.target.value);
  };
}