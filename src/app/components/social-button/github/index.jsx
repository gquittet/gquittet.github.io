import React from "react";
import * as style from "./style.module.scss"
import { ButtonIcon } from "../../button";

export function GithubSocialButton({username}) {
  return <ButtonIcon className={style.buttonIcon} name="GitHub" color="#24292e" url={`https://github.com/${username}`}/>
}
