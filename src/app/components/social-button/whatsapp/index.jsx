import React from "react";
import * as style from "./style.module.scss"
import { ButtonIcon } from "../../button";

export function WhatsappSocialButton({phone}) {
  return <ButtonIcon className={style.buttonIcon} name="WhatsApp" color="#4AC959" url={`https://api.whatsapp.com/send?phone=${phone}`}/>
}
