import React from "react";
import style from "./style.scss"
import { ButtonIcon } from "../../button";

export function LinkedinSocialButton({username}) {
  return <ButtonIcon className={style.buttonIcon} name="LinkedIn" color="#2867B2" url={`https://www.linkedin.com/in/${username}`}/>
}
