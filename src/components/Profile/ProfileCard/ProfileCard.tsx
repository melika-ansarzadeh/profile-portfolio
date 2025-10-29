import profile from '@/assets/images/profile.png';
import { ProfileCardlocalization } from '@/components/Constants/localization/localization';
import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';

export default function ProfileCard() {
  return (
    <div className="background relative h-120 sm:h-124 md:h-132 lg:h-144 xl:h-156 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative text-white flex my-10 flex-col items-center sm:flex-row sm:gap-12 md:gap-15 lg:gap-17 px-6">
        <Image
          src={profile}
          alt="profile photo"
          className="rounded-full ring-4 ring-white/60 h-60 w-60 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 mb-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        ></Image>
        <div className="flex flex-col items-center sm:gap-2 justify-center text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
            {ProfileCardlocalization.name}
          </h1>
          <h2 className="text-2xl xl:text-3xl font-semibold">
            {ProfileCardlocalization.job}
          </h2>
          <span className="flex md:text-lg xl:text-xl items-center justify-center gap-0.5">
            <IoLocationOutline className="text-custom-200 font-bold" />{' '}
            {ProfileCardlocalization.location}
          </span>
          <div className="mt-4 flex gap-3">
            <a
              href="#MyProjects"
              className="bg-custom-100 text-custom-400 font-semibold px-4 py-2 rounded-full hover:bg-custom-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200"
            >
              View Projects
            </a>
            <a
              href="#AboutMe"
              className="bg-white/90 text-custom-400 font-semibold px-4 py-2 rounded-full hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
