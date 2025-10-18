import { Description } from "./Description";
interface WorkItem {
  title: string;
  period: string;
  company: string;
  description: string[];
}

interface WorksProps {
  works: WorkItem[];
}

interface SingleWorkProps extends WorkItem {}

export const Works = ({ works }: WorksProps) => {
  return (
    <section
      className="work-experience section"
      id="experience"
    >
      <h2 className="section-title">Experience</h2>
      <div className="experience__container bd-grid">
        {works.map((work) => (
          <Work
            key={work.company}
            {...work}
          />
        ))}
      </div>
    </section>
  );
};

const Work = ({ title, period, company, description }: SingleWorkProps) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <div className="experience__company__period">
          <span className="experience__company">{company}</span>
          <span className="experience__company">{period}</span>
        </div>
        {description.map((desc, i) => (
          <Description
            key={i}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};
