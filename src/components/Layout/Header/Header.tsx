'use client';
import { headerlocalization } from '@/components/Constants/localization/localization';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <div>
      <nav className="bg-custom-100 py-2.5 m-5 rounded-4xl flex gap-6 justify-center justify-items-center">
        <Link
          href=""
          className={`text-custom-400 font-semibold py-2 px-3 text-sm rounded-4xl transition ${
            pathname === '' ? 'bg-custom-400 text-white' : 'hover:bg-amber-700'
          }`}
        >
          {headerlocalization.aboutMe}
        </Link>
        <Link
          href=""
          className={`text-custom-400 font-semibold py-2 px-3 text-sm rounded-4xl transition ${
            pathname === '/' ? 'bg-custom-400 text-white' : 'hover:bg-amber-700'
          }`}
        >
          {headerlocalization.mySkills}
        </Link>
        <Link
          href=""
          className={`text-custom-400 font-semibold py-2 px-3 text-sm rounded-4xl transition ${
            pathname === '' ? 'bg-custom-400 text-white' : 'hover:bg-amber-700'
          }`}
        >
          {headerlocalization.myProjects}
        </Link>
      </nav>
    </div>
  );
}
