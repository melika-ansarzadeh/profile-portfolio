import AboutMe from "./AboutMe/AboutMe";
import ProfileCard from "./ProfileCard/ProfileCard";

export default function Profile() {
  return (
    <div className="relative">
      <ProfileCard />
      <AboutMe />
    </div>
  );
}
