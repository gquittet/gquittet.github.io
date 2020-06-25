import React from "react";
import style from "./style.scss"
import { ButtonIcon } from "../../button";

export function GithubSocialButton({username}) {
  return <ButtonIcon className={style.buttonIcon} name="GitHub" color="#24292e" url={`https://github.com/${username}`}/>
}
