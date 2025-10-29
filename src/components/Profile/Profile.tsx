import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';
import ProfileCard from './ProfileCard/ProfileCard';

export default function Profile() {
  return (
    <div className="relative">
      <ProfileCard />
      <section id="AboutMe" className="scroll-margin-header">
        <AboutMe />
      </section>
      <section id="MySkills" className="scroll-margin-header">
        <MySkills />
      </section>
      <section id="MyProjects" className="scroll-margin-header">
        <MyProjects />
      </section>
      <ContactMe />
    </div>
  );
}
