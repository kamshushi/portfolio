import Image from "next/image";
import React from "react";
import myPic from "../../../../../public/my-picture.jpg";
import classes from "./styles.module.css";

export default function ImageSection() {
  return (
    <div className={classes.frameContainer}>
      <Image src={myPic} alt="profile-picture" className={classes.mainImage} />
      {/* -------------------------------------------------- */}
      {/* <figure className={classes.snip1113}>
        <Image
          src={myPic}
          alt="profile-picture"
          //   className={classes.mainImage}
        />

        <figcaption>
          <h3>
            Ahmed <span>Elkamshoushy</span>
          </h3>
          <h4>Dev</h4>
        </figcaption>
      </figure> */}
    </div>
  );
}
