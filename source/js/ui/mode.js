// ref https://blog.skk.moe/post/hello-darkmode-my-old-friend/
const rootElement = document.documentElement;
const darkModeStorageKey = "user-color-scheme";
const darkModeMediaQueryKey = "--hty-mode";
const rootElementDarkModeAttributeName = "data-user-color-scheme";

const setLS = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch (e) {}
};

const removeLS = (k) => {
  try {
    localStorage.removeItem(k);
  } catch (e) {}
};

const getLS = (k) => {
  try {
    return localStorage.getItem(k);
  } catch (e) {
    return null;
  }
};

const getModeFromCSSMediaQuery = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const resetRootDarkModeAttributeAndLS = () => {
  rootElement.removeAttribute(rootElementDarkModeAttributeName);
  removeLS(darkModeStorageKey);
};

const validColorModeKeys = {
  dark: true,
  light: true,
};

const applyCustomDarkModeSettings = (mode) => {
  const currentSetting = mode || getLS(darkModeStorageKey);

  if (currentSetting === getModeFromCSSMediaQuery()) {
    resetRootDarkModeAttributeAndLS();
  } else if (validColorModeKeys[currentSetting]) {
    rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
  } else {
    resetRootDarkModeAttributeAndLS();
  }
};

const invertDarkModeObj = {
  dark: "light",
  light: "dark",
};

const toggleCustomDarkMode = () => {
  let currentSetting = getLS(darkModeStorageKey);

  if (validColorModeKeys[currentSetting]) {
    currentSetting = invertDarkModeObj[currentSetting];
  } else if (currentSetting === null) {
    currentSetting = invertDarkModeObj[getModeFromCSSMediaQuery()];
  } else {
    return;
  }
  setLS(darkModeStorageKey, currentSetting);

  return currentSetting;
};

applyCustomDarkModeSettings();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle-mode-btn").addEventListener("click", () => {
    applyCustomDarkModeSettings(toggleCustomDarkMode());
  });
});
