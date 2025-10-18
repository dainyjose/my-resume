import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import { Menu } from "./Components/Menu";
import { Profile } from "./Components/Profile";
import { AboutMe } from "./Components/AboutMe";
import { Skills } from "./Components/Skills";
import { Works } from "./Components/Works";
import { Academic } from "./Components/Academic";
import { Projects } from "./Components/Projects";
import { menuData } from "./data/Menu";
import { resumeData } from "./data/resumeData";

const App = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience } = resumeData;
  return (
    <>
      <Header
        name={profile.name}
        role={profile.occupation}
        location={profile.location}
        social={socialMedia.social}
      />

      <Hero
        {...profile}
        {...aboutMe}
      />
      {!matches && <Menu {...menuData} />}
      <main
        className="l-main bd-container"
        id="bd-container"
      >
        <div
          className="resume"
          id="area-cv"
        >
          <div className="resume__left">
            <Profile
              {...profile}
              {...socialMedia}
              isMobileView={!matches}
            />
            <Profile
              name={profile.name}
              occupation={profile.occupation}
              location={profile.location}
              email={profile.email}
              telephone={profile.telephone}
              image={profile.image}
              social={socialMedia.social}
              isMobileView={!matches}
            />
            <AboutMe {...aboutMe} />
            <Skills {...skills} />
          </div>
          <div className="resume__right">
            <Works {...experience} />
            <Academic {...experience} />
            <Projects {...experience} />
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
