import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import MySkills from "./MySkills/MySkills";
import ProfileCard from "./ProfileCard/ProfileCard";

export default function Profile() {
  return (
    <div className="relative">
      <ProfileCard />
      <AboutMe />
      <MySkills/>
      <ContactMe/>
    </div>
  );
}
