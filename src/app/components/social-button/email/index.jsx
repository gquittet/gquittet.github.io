import React from "react";
import * as style from "./style.module.scss"
import { ButtonIcon } from "../../button";

export function EmailSocialButton({email}) {
  return <ButtonIcon className={style.buttonIcon} name="Email" color="#DB4437" url={`mailto:${email}`}/>
}
