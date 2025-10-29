'use client';
import { headerlocalization } from '@/components/Constants/localization/localization';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <div>
      <nav
        className="bg-custom-100 py-2.5 m-5 mx-5 rounded-4xl flex gap-6 justify-center relative 
      justify-items-center sm:mx-20 md:mx-32 lg:mx-44 xl:mx-72 sm:gap-14 md:gap-24 lg:gap-32 xl:gap-44"
      >
        <Link
          href=""
          className={`text-custom-400 font-semibold py-2 px-3 text-sm lg:text-base xl:text-lg rounded-4xl transition ${
            pathname === ''
              ? 'bg-custom-400 text-white'
              : 'hover:bg-custom-50 transition-shadow duration-300'
          }`}
        >
          {headerlocalization.aboutMe}
        </Link>
        <Link
          href=""
          className={`text-custom-400 font-semibold py-2 px-3 text-sm lg:text-base xl:text-lg rounded-4xl transition ${
            pathname === '/'
              ? 'bg-custom-400 text-white'
              : 'hover:bg-custom-50 transition-shadow duration-300'
          }`}
        >
          {headerlocalization.mySkills}
        </Link>
        <Link
          href=""
          className={`text-custom-400 font-semibold py-2 px-3 text-sm lg:text-base xl:text-lg rounded-4xl transition ${
            pathname === ''
              ? 'bg-custom-400 text-white'
              : 'hover:bg-custom-50 transition-shadow duration-300'
          }`}
        >
          {headerlocalization.myProjects}
        </Link>
      </nav>
    </div>
  );
}
