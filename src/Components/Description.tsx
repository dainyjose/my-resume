interface DescriptionProps {
  desc: string;
}

export const Description: React.FC<DescriptionProps> = ({ desc }) => (
  <li className="description">
    <p className="experience__description">{desc}</p>
  </li>
);
