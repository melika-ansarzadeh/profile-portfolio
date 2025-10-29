'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MyProjectslocalization } from '@/components/Constants/localization/localization';

import aika1 from '@/assets/images/aika1.png';
import aika2 from '@/assets/images/aika2.png';
import aika3 from '@/assets/images/aika3.png';

import parmisarsite1 from '@/assets/images/parmisar1.png';
import parmisarsite2 from '@/assets/images/parmisar2.png';
import parmisarsite3 from '@/assets/images/parmisar3.png';

import parmisaradmin1 from '@/assets/images/parmisaradmin1.png';
import parmisaradmin2 from '@/assets/images/parmisaradmin2.png';
import parmisaradmin3 from '@/assets/images/parmisaradmin3.png';

export default function MyProjects() {
  const projects = [
    {
      name: MyProjectslocalization.aika,
      images: [aika1, aika2, aika3],
      link: 'https://github.com/melika-ansarzadeh/maktab124-aika-gallery-ansarzadeh',
      description: MyProjectslocalization.aikaDescription,
    },
    {
      name: MyProjectslocalization.parmisarSite,
      images: [parmisarsite1, parmisarsite2, parmisarsite3],
      link: 'https://github.com/melika-ansarzadeh/Parmisar_Phone_shop',
      description: MyProjectslocalization.siteDescription,
    },
    {
      name: MyProjectslocalization.parmisarAdmin,
      images: [parmisaradmin1, parmisaradmin2, parmisaradmin3],
      link: 'https://github.com/melika-ansarzadeh/Parmisar_Phone',
      description: MyProjectslocalization.adminDescription,
    },
  ];

  const [currentImages, setCurrentImages] = useState(projects.map(() => 0));
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const selectImage = (projectIndex: number, imgIndex: number) => {
    setCurrentImages(prev => {
      const newArr = [...prev];
      newArr[projectIndex] = imgIndex;
      return newArr;
    });
  };

  const nextImage = (projectIndex: number) => {
    setCurrentImages(prev => {
      const newArr = [...prev];
      const total = projects[projectIndex].images.length;
      newArr[projectIndex] = (newArr[projectIndex] + 1) % total;
      return newArr;
    });
  };

  const prevImage = (projectIndex: number) => {
    setCurrentImages(prev => {
      const newArr = [...prev];
      const total = projects[projectIndex].images.length;
      newArr[projectIndex] = (newArr[projectIndex] - 1 + total) % total;
      return newArr;
    });
  };

  return (
    <section className="px-8 my-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">
        {MyProjectslocalization.myProjects}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-white rounded-xl border border-custom-100 shadow-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div
              className="relative w-full aspect-[16/10] cursor-pointer"
              onClick={() =>
                setFullscreenImage(project.images[currentImages[index]].src)
              }
            >
              <Image
                src={project.images[currentImages[index]]}
                alt={`${project.name} image`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-custom-400 px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                onClick={e => {
                  e.stopPropagation();
                  prevImage(index);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-custom-400 px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                onClick={e => {
                  e.stopPropagation();
                  nextImage(index);
                }}
              >
                ›
              </button>
            </div>

            <div className="flex gap-2 justify-center mt-3 mb-2 px-3">
              {project.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden cursor-pointer ring-2 ${
                    currentImages[index] === imgIndex
                      ? 'ring-custom-300'
                      : 'ring-transparent'
                  }`}
                  onClick={() => selectImage(index, imgIndex)}
                >
                  <Image
                    src={img}
                    alt={`${project.name} thumbnail`}
                    width={64}
                    height={64}
                    className="object-cover hover:opacity-95"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm mt-1 mb-2 px-4 text-custom-300">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 bg-custom-50 text-custom-400 font-semibold px-4 py-2 rounded-full hover:bg-custom-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200"
              aria-label={`Open ${project.name} repository`}
            >
              {MyProjectslocalization.seeProject}
            </a>
          </div>
        ))}
      </div>
      
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <Image
            src={fullscreenImage}
            alt="fullscreen project"
            fill
            className="object-contain"
          />
        </div>
      )}
    </section>
  );
}
