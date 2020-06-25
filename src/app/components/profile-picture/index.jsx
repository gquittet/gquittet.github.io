import React from "react"

export function ProfilePicture({ image, size }) {
  return <>
    <img src={image} width={size} height={size} alt="Profile picture"/>
  </>
}
