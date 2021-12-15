import * as React from "react";
import "../styles/person.scss";

const Person = ({ name, image, title, company, className }) => {
  return (
    <div class={className + " person"}>
      {/* image */}
      <div class="aspect-1-1 person-avatar">
        <img src={image} />
      </div>
      <div>
        <h3 class="spacing-tiny">{name}</h3>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{company}</p>
      </div>
    </div>
  );
};

export default Person;
