import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  // Add more languages as needed
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { lang } = useParams();

  return (
    <div className="language-switcher">
      <select 
        value={lang} 
        onChange={(e) => {
          const newLang = e.target.value;
          router.push(`/${newLang}${window.location.pathname.replace(/^\/[^\/]+/, '')}`);
        }}
        className="p-2 rounded border border-gray-300"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}