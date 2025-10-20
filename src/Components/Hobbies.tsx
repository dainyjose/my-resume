import React from "react";
interface HobbiesProps {
  hobbies: string[];
}
export const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => (
  <section className="hobbies section" id="hobbies">
    <h2 className="section-title">Hobbies</h2>
    <p className="hobbies__text">{hobbies.join(", ")}</p>
  </section>
);
