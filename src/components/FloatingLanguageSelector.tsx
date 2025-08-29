'use client';

import LanguageSwitcher from "./LanguageSwitcher";

export default function FloatingLanguageSelector() {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <LanguageSwitcher />
    </div>
  );
}
