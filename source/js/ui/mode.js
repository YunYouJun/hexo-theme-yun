// ref https://blog.skk.moe/post/hello-darkmode-my-old-friend/
const rootElement = document.documentElement;
const darkModeStorageKey = "user-color-scheme";
const darkModeMediaQueryKey = "--hty-mode";
const rootElementDarkModeAttributeName = "data-user-color-scheme";

const setLS = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch (e) {
    console.log(e.message);
  }
};

const removeLS = (k) => {
  try {
    localStorage.removeItem(k);
  } catch (e) {
    console.log(e.message);
  }
};

const getLS = (k) => {
  try {
    return localStorage.getItem(k);
  } catch (e) {
    console.log(e.message);
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

/**
 * get target mode
 */
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

/**
 * bind click event for toggle button
 */
function bindToggleButton() {
  if (window["toggle-mode-btn"]) {
    window["toggle-mode-btn"].addEventListener("click", () => {
      const mode = toggleCustomDarkMode();
      applyCustomDarkModeSettings(mode);
      toggleCodeblockCss(mode);
    });
  }
}

/**
 * toggle prism css for light and dark
 * @param {*} mode 模式
 */
function toggleCodeblockCss(mode) {
  const invertMode = invertDarkModeObj[mode];
  document
    .getElementById(`${invertMode}-prism-css`)
    .setAttribute("media", "(prefers-color-scheme: no-preference)");
  document.getElementById(`${mode}-prism-css`).removeAttribute("media");
}

document.addEventListener("DOMContentLoaded", bindToggleButton);
document.addEventListener("pjax:success", bindToggleButton);
