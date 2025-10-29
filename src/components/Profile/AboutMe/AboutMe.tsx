import { AboutMelocalization } from '@/components/Constants/localization/localization';

export default function AboutMe() {
  return (
    <div className="bg-white shadow-t-md rounded-t-4xl p-6 -mt-6 relative z-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">
        {AboutMelocalization.aboutMe}
      </h2>
      <p className="text-custom-300 sm:text-lg lg:text-xl">
        {AboutMelocalization.description}
      </p>
    </div>
  );
}
