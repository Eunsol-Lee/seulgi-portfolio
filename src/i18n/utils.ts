import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'ko';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ko' ? 'en' : 'ko';
}

export function getAlternateUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const alternateLang = getAlternateLang(lang);
  const pathWithoutLang = url.pathname.replace(/^\/(ko|en)/, '');
  return `/${alternateLang}${pathWithoutLang}`;
}
