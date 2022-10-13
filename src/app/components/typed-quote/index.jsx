import React from "react"
import * as style from "./style.module.scss"
import TypeIt from "typeit-react";

const typeItOptions = {
  speed: 35,
  waitUntilVisible: false,
}

export function TypedQuote({ children }) {
  return <div className={style.quote}>
    <TypeIt options={{ ...typeItOptions }}>
      {children}
    </TypeIt>
  </div>
}
