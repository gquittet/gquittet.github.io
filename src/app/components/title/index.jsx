import React from "react";
import style from "./style.scss"

export function Title({ children }) {
  return <h1 className={style.title}>{children}</h1>
}
