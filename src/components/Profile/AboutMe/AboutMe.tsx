import { aboutMelocalization } from "@/components/Constants/localization/localization";

export default function AboutMe() {
   return (
     <div className="bg-white shadow-t-md rounded-t-4xl p-6 -mt-6 relative z-10">
       <h2 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">
         {aboutMelocalization.aboutMe}
       </h2>
       <p className="text-custom-300 sm:text-lg lg:text-xl">
         {aboutMelocalization.description}
       </p>
     </div>
   );
}
