import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";
import ProfileCard from "./ProfileCard/ProfileCard";

export default function Profile() {
  return (
    <div className="relative">
      <ProfileCard />
      <AboutMe />
      <MySkills/>
    </div>
  );
}
