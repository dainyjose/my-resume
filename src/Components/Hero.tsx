import { Helmet } from "react-helmet";

type HeroProps = {
  name: string;
  occupation: string;
  description: string;
};

const Hero = ({ name, occupation, description }: HeroProps) => {
  return (
    <Helmet>
      <title>
        {name} - {occupation}
      </title>
      <meta
        name="description"
        content={description}
      />
    </Helmet>
  );
};
export default Hero;
