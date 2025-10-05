export const Skills = ({
  technicalLabel,
  softLabel,
  categories,
  softSkills,
}) => {
  return (
    <>
      {/* Technical Skills */}
      <section
        className="technical-skills section"
        id="skills"
      >
        <h2 className="section-title">{technicalLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {Object.entries(categories).map(([category, items]) => (
              <TechSkill
                key={category}
                category={category}
                items={items}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="soft-skills section">
        <h2 className="section-title">{softLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {softSkills.map((skill) => (
              <Skill
                key={skill}
                skill={skill}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);

const TechSkill = ({ category, items }) => (
  <li className="skills__name">
    <span className="skills__circle"></span>
    <strong>{category}:</strong> {items.join(", ")}
  </li>
);
