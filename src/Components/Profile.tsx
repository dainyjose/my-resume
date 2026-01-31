import { BoxIcon } from "./BoxIcon";
import { Options } from "./Options";
import profileImg from "../assets/dainy_jose.jpg";

type SocialItem = {
  label: string;
  name: string;
  url: string;
  className: string;
};

interface ProfileProps {
  name: string;
  occupation: string;
  location: string;
  email: string;
  telephone: string;
  image: string;
  social: SocialItem[];
  isMobileView: boolean;
}

export const Profile = ({
  name,
  occupation,
  location,
  email,
  telephone,
  image,
  social,
  isMobileView,
}: ProfileProps) => {
  return (
    <section className="home section" id="home">
      <Options />
      <div className="home__container bd-grid">
        <div className="home__data bd-grid">
          <img
            src={profileImg}
            alt="profile_image"
            className="home__img no-print"
          />
          <h1 className="home__title">{name}</h1>
          <h3 className="home__profession">{occupation}</h3>
          <span className="home__information no-print">
            <i className="bx bx-map home__icon" /> {location}
          </span>
        </div>
        <div className="home__contact bd-grid">
          <span className="social__link print">
            <i className="bx bx-map social__icon" /> {location}
          </span>
          <BoxIcon
            className="home__icon bx-envelope"
            label={`Send an email to ${name}`}
            url={`mailto:${email}`}
          />
          <BoxIcon
            className="home__icon bx-phone"
            label={`Call by phone to ${name}`}
            url={`tel:${telephone}`}
          />
          {true &&
            social.map((social) => <BoxIcon key={social.name} {...social} />)}
        </div>
      </div>
    </section>
  );
};
