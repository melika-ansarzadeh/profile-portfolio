import { MySkillslocalization } from '@/components/Constants/localization/localization';
import html from '@/assets/images/html.png';
import css from '@/assets/images/css.png';
import javascript from '@/assets/images/javascript.png';
import typescript from '@/assets/images/typescript.png';
import react from '@/assets/images/react.png';
import next from '@/assets/images/nextjs.png';
import tailwind from '@/assets/images/tailwindcss.png';
import git from '@/assets/images/git.png';
import Image from 'next/image';

export default function MySkills() {
  const skills = [
    { name: MySkillslocalization.html, image: html },
    { name: MySkillslocalization.css, image: css },
    { name: MySkillslocalization.javascript, image: javascript },
    { name: MySkillslocalization.typescript, image: typescript },
    { name: MySkillslocalization.react, image: react },
    { name: MySkillslocalization.next, image: next },
    { name: MySkillslocalization.tailwind, image: tailwind },
    { name: MySkillslocalization.git, image: git },
  ];

  return (
    <section className="px-6 my-5 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-5 ml-0.5 sm:text-3xl lg:text-4xl">
        {MySkillslocalization.myskills}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl border border-custom-100 shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 rounded-full p-2 bg-gradient-to-br from-custom-100 to-custom-50 ring-2 ring-custom-100">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <div className="h-1.5 w-16 rounded-full bg-custom-100">
              <div className="h-1.5 w-10 rounded-full bg-custom-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
