import React from "react";

export const Hobbies = ({ hobbies }) => (
  <section className="hobbies section" id="hobbies">
    <h2 className="section-title">Hobbies</h2>
    <p className="hobbies__text">{hobbies.join(", ")}</p>
  </section>
);
