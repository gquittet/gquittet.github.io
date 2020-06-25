import React from "react"
import style from "./style.scss"
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
