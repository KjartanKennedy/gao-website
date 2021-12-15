import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../styles/classTile.scss";

const ClassTile = ({
  className,
  name,
  image,
  price,
  numSessions,
  description,
}) => {
  const hero = getImage(image);
  return (
    <div class={className + " classTile"}>
      <div
        class="aspect-16-9 flex-bottom-left padding-medium dark spacing-small class-tile-image-overlay"
        style={{
          background: "rgba(17, 17, 17, 0.5)",
          // backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <GatsbyImage class="class-tile-image" image={hero} alt="" />
        {/* <p>{image}</p> */}
        {/* <img src={image} alt="" class="cover" style={{ opacity: "50%" }} /> */}
        <h3 class="large spacing-tiny">{name}</h3>
        <div class="">
          <strong>${price}</strong> — meets {numSessions} times
        </div>
        {/* <a href="">Class Details</a> */}
      </div>

      {/* image */}

      <p class="text-secondary spacing-medium">*Financial support available</p>
      {/* <MDXRenderer> */}
      {/* <p>Hidden - {description}</p> */}
      {/* </MDXRenderer> */}

      <h4 class="spacing-x-small">Sessions</h4>
      <p class="text-large">Sessions coming soon</p>
      {/* <ul>
        <li>Session 1</li>
        <li>Session 2</li>
        <li>Session 3</li>
      </ul>
      <button>Register</button> */}
    </div>
  );
};

export default ClassTile;
