'use client';
import { Headerlocalization } from '@/components/Constants/localization/localization';

export default function Header() {
  return (
    <nav className="sticky top-4 z-50 mx-5 sm:mx-20 md:mx-32 lg:mx-44 xl:mx-72">
      <div className="bg-custom-100/80 backdrop-blur py-2.5 rounded-4xl shadow-sm flex gap-6 justify-center sm:gap-14 md:gap-24 lg:gap-32 xl:gap-44">
        <a
          href="#AboutMe"
          className="text-custom-400 font-semibold py-2 px-3 text-sm lg:text-base xl:text-lg rounded-4xl transition hover:bg-custom-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200"
          aria-label="Go to About Me section"
        >
          {Headerlocalization.aboutMe}
        </a>
        <a
          href="#MySkills"
          className="text-custom-400 font-semibold py-2 px-3 text-sm lg:text-base xl:text-lg rounded-4xl transition hover:bg-custom-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200"
          aria-label="Go to My Skills section"
        >
          {Headerlocalization.mySkills}
        </a>
        <a
          href="#MyProjects"
          className="text-custom-400 font-semibold py-2 px-3 text-sm lg:text-base xl:text-lg rounded-4xl transition hover:bg-custom-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200"
          aria-label="Go to My Projects section"
        >
          {Headerlocalization.myProjects}
        </a>
      </div>
    </nav>
  );
}
