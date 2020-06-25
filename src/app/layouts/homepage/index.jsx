import React from "react"
import style from "./style.scss"
import { ProfilePicture } from "../../components/profile-picture";
import profilePicture from "../../assets/pictures/profile-picture.svg";
import { TypedQuote } from "../../components/typed-quote";
import { Title } from "../../components/title";
import { GithubSocialButton } from "../../components/social-button/github";
import { EmailSocialButton } from "../../components/social-button/email";
import { LinkedinSocialButton } from "../../components/social-button/linkedin";
import { WhatsappSocialButton } from "../../components/social-button/whatsapp";


export function HomePage() {
  return <>
    <div className={style.background}/>
    <div className={style.content}>
      <ProfilePicture image={profilePicture} size="175px"/>
      <Title>Guillaume Quittet</Title>
      <TypedQuote>
        A lovely passionate developer who want to make your ideas to be alive.
      </TypedQuote>
      <div className={style.buttonIcons}>
        <GithubSocialButton username="gquittet"/>
        <LinkedinSocialButton username="gquittet"/>
        <WhatsappSocialButton phone="32472084236"/>
        <EmailSocialButton email="guillaume.quittet@gmail.com"/>
      </div>
      <footer>Made with ❤ by Guillaume Quittet</footer>
    </div>
  </>
}
