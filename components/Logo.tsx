import React from "react";
import Image from 'next/image';

export default function Logo() {
  return (
     <Image
    src={"/images/logo-ffcam.png"}
    alt="FFCAM"
    width={160}
    height={53}
    priority
    />
  )
}