import React from "react";
import style from "./style.scss"
import { ButtonIcon } from "../../button";

export function EmailSocialButton({email}) {
  return <ButtonIcon className={style.buttonIcon} name="Email" color="#DB4437" url={`mailto:${email}`}/>
}
