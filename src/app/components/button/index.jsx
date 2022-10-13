import React from "react";
import * as style from "./style.module.scss"

export function ButtonIcon({ className, name, color, url }) {
  return <>
    <a style={{ backgroundColor: color}} className={`${style.buttonIcon} ${className}`} href={url}
       target="_blank" rel="noopener">{name}</a>
  </>
}
