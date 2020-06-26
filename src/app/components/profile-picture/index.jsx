import React from "react"

export function ProfilePicture({ image, size, className }) {
  return <>
    <img className={className} src={image} width={size} height={size} alt="Profile picture"/>
  </>
}
