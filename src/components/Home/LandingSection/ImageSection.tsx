import Image from "next/image";
import React from "react";
import myPic from "../../../../public/my-picture.jpg";

export default function ImageSection() {
  return (
    <div>
      <Image src={myPic} alt="profile-picture" />
    </div>
  );
}
