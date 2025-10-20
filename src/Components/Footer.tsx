interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface FooterProps {
  footer: {
    developer: string;
    socials: SocialLink[];
  };
}

export const Footer: React.FC<FooterProps> = ({ footer }) => {
  const { developer, socials } = footer;
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className="resume-footer no-print">
      <div className="footer__row">
        <div className="footer__left">
          <span>
            Made with <span className="footer__heart">❤️</span> by {developer}
          </span>
        </div>

        <div className="footer__center">
          <span>
            &copy; {getYear()} {developer}. All rights reserved.
          </span>
        </div>

        <div className="footer__right">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon-link"
              aria-label={item.name}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="footer__download">
        <button
          className="generate__btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(() => {
              window.print();
            }, 300);
          }}
        >
          <span>Download Resume</span>
          <i className="bx bx-download"></i>
        </button>
      </div>
    </footer>
  );
};
