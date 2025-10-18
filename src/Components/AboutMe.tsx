interface AboutMeProps {
  label: string;
  description: string;
}

export const AboutMe = ({ label, description }: AboutMeProps) => (
  <section
    className="profile section"
    id="profile"
  >
    <h2 className="section-title">{label}</h2>
    <p className="profile__description">{description}</p>
  </section>
);
