import { useState, useEffect } from "react";
import { resumeData } from "./data/resumeData";
import { menuData } from "./data/MenuData";
import { Menu } from "./Components/Menu";
import { Profile } from "./Components/Profile";
import { AboutMe } from "./Components/AboutMe";
import { Skills } from "./Components/Skills";
import { DevBlogs } from "./Components/DevBlogs";
import { Hobbies } from "./Components/Hobbies";
import { Works } from "./Components/Works";
import { Academic } from "./Components/Academic";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

const App = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const {
    profile,
    aboutMe,
    skills,
    socialMedia,
    experience,
    devBlogs,
    footer,
  } = resumeData;
  return (
    <>
      {!matches && <Menu {...menuData} />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
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
            <DevBlogs blogs={devBlogs} />
            <Hobbies {...resumeData} />
          </div>
          <div className="resume__right">
            <Works {...experience} />
            <Academic {...experience} />
            <Projects {...experience} />
          </div>
        </div>
        <Footer footer={footer} />
      </main>
    </>
  );
};
export default App;
