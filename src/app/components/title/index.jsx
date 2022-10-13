import React from "react";
import * as style from "./style.module.scss"

export function Title({ children }) {
  return <h1 className={style.title}>{children}</h1>
}
