import profile from '@/assets/images/profile.png';
import { ProfileCardlocalization } from '@/components/Constants/localization/localization';
import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';

export default function ProfileCard() {
  return (
    <div className="background h-108 sm:h-124 md:h-132 lg:h-144 xl:h-156 flex items-center justify-center ">
      <div className=" text-white flex flex-col items-center sm:flex-row sm:gap-12 md:gap-15 lg:gap-17">
        <Image
          src={profile}
          alt="profile photo"
          className="rounded-full h-60 w-60 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 mb-5
           transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        ></Image>
        <div className="flex flex-col items-center sm:gap-2 justify-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
            {ProfileCardlocalization.name}
          </h1>
          <h2 className="text-2xl xl:text-3xl font-semibold">
            {ProfileCardlocalization.job}
          </h2>
          <span className="flex md:text-lg xl:text-xl items-center justify-center gap-0.5">
            <IoLocationOutline /> {ProfileCardlocalization.location}
          </span>
        </div>
      </div>
    </div>
  );
}
