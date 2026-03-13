import { get, writable } from 'svelte/store';

export const THEME_STORAGE_KEY = 'velora-theme-preference';

export const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' }
];

export const themePreference = writable('system');

function normalizeThemePreference(value) {
  return themeOptions.some((option) => option.value === value) ? value : 'system';
}

function resolveTheme(preference, prefersDark) {
  return preference === 'system' ? (prefersDark ? 'dark' : 'light') : preference;
}

function persistThemePreference(preference) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, preference);
}

function readStoredThemePreference() {
  if (typeof window === 'undefined') {
    return 'system';
  }

  return normalizeThemePreference(window.localStorage.getItem(THEME_STORAGE_KEY));
}

function getPrefersDark() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyThemeAttributes(preference) {
  if (typeof document === 'undefined') {
    return;
  }

  const resolvedTheme = resolveTheme(preference, getPrefersDark());
  const root = document.documentElement;

  root.dataset.themePreference = preference;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
}

export function setThemePreference(preference, options = {}) {
  const normalizedTheme = normalizeThemePreference(preference);

  applyThemeAttributes(normalizedTheme);
  themePreference.set(normalizedTheme);

  if (options.persist !== false) {
    persistThemePreference(normalizedTheme);
  }

  return normalizedTheme;
}

export function initializeThemePreference() {
  return setThemePreference(readStoredThemePreference(), { persist: false });
}

export function bindSystemThemeListener() {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleThemeChange = () => {
    if (get(themePreference) === 'system') {
      setThemePreference('system', { persist: false });
    }
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }

  mediaQuery.addListener(handleThemeChange);

  return () => {
    mediaQuery.removeListener(handleThemeChange);
  };
}