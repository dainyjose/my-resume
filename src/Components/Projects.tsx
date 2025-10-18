interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string;
  github?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section
      className="projects-experience section"
      id="projects"
    >
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {projects.map((project) => (
          <Project
            key={project.company}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

const Project = ({ title, description, technologies }: ProjectItem) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__project">{description}</span>
        <span className="experience__project">
          Technologies :- {technologies}
        </span>
      </div>
    </div>
  );
};
