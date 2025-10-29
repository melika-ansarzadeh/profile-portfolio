import { ContactMelocalization } from '@/components/Constants/localization/localization';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function ContactMe() {
  return (
    <section className="flex justify-center mb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 ml-0.5 text-center sm:text-3xl lg:text-4xl">
          {ContactMelocalization.contactme}
        </h2>
        <p className="text-custom-300 sm:text-lg lg:text-xl">
          {ContactMelocalization.description}
        </p>

        <div className="flex justify-center mt-3 gap-6">
          <a
            href="https://github.com/melika-ansarzadeh"
            className="relative group text-4xl transition-transform transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200 rounded"
            aria-label="Open GitHub profile"
          >
            <FaGithub className="text-custom-200" />
            <span className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 px-2 py-1 bg-white dark:bg-gray-800 text-black dark:text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {ContactMelocalization.gitHub}
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/melika-ansar-7862b736b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="relative group text-4xl transition-transform transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200 rounded"
            aria-label="Open LinkedIn profile"
          >
            <FaLinkedin className="text-custom-200" />
            <span className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 px-2 py-1 bg-white dark:bg-gray-800 text-black dark:text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {ContactMelocalization.linkedIn}
            </span>
          </a>

          <a
            href="mailto:ansarzadehmelika@gmail.com"
            className="relative group text-5xl -mt-1.5 transition-transform transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-200 rounded"
            aria-label="Send email"
          >
            <HiOutlineMail className="text-custom-200" />
            <span className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 px-2 py-1 bg-white dark:bg-gray-800 text-black dark:text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {ContactMelocalization.email}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
