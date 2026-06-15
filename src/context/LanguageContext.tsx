import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '../translations';

type CtxType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (path: string) => string;
};

const Ctx = createContext<CtxType>(null!);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  function t(path: string): string {
    const keys = path.split('.');
    let val: unknown = translations[lang];
    for (const k of keys) {
      val = (val as Record<string,unknown>)?.[k];
    }
    return typeof val === 'string' ? val : path;
  }
  return (
    <Ctx.Provider value={{ lang, setLang, t }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
