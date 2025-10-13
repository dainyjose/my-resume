import { useState, useEffect } from "react";
import { Profile } from "./Components/Profile";
import { Academic } from "./Components/Academic";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Works } from "./Components/Works";
import { AboutMe } from "./Components/AboutMe";
import { Menu } from "./Components/Menu";
import Hero from "./Components/Hero";

import { resumeData as dataSchema } from "./data/resumeData";
import { Menu as menuSchema } from "./data/Menu";
import { resumeData } from "./data/resumeData";
import { Header } from "./Components/Header";

const App = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;
  return (
    <>
      <Header
        name={resumeData.name}
        role={resumeData.role}
        location={resumeData.location}
        social={resumeData.social}
      />
      <Hero
        {...profile}
        {...aboutMe}
      />
      {!matches && <Menu {...menuSchema} />}
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
