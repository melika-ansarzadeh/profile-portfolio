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
    <section className="px-6 my-5">
      <h2 className="text-2xl font-bold mb-5 ml-0.5 sm:text-3xl lg:text-4xl">
        {MySkillslocalization.myskills}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-custom-50 p-6 rounded-xl
               transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={600}
              className="w-24 h-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
