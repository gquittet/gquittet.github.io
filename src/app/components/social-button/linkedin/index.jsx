import React from "react";
import * as style from "./style.module.scss"
import { ButtonIcon } from "../../button";

export function LinkedinSocialButton({username}) {
  return <ButtonIcon className={style.buttonIcon} name="LinkedIn" color="#2867B2" url={`https://www.linkedin.com/in/${username}`}/>
}
