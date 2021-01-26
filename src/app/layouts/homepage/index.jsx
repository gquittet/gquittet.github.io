import React from "react";
import style from "./style.scss";
import { ProfilePicture } from "../../components/profile-picture";
import profilePicture from "../../assets/pictures/profile-picture.svg";
import { TypedQuote } from "../../components/typed-quote";
import { Title } from "../../components/title";
import { GithubSocialButton } from "../../components/social-button/github";
import { EmailSocialButton } from "../../components/social-button/email";
import { LinkedinSocialButton } from "../../components/social-button/linkedin";

export function HomePage() {
  return (
    <>
      <div className={style.content}>
        <div className={style.background} />
        <div className={style.whiteFilter} />
        <ProfilePicture image={profilePicture} size="150px" />
        <Title>Guillaume Quittet</Title>
        <TypedQuote>A lovely passionate developer who want to make your ideas to be alive.</TypedQuote>
        <div className={style.buttonIcons}>
          <GithubSocialButton username="gquittet" />
          <LinkedinSocialButton username="gquittet" />
          <EmailSocialButton email="guillaume.quittet@gmail.com" />
        </div>
        <footer>Made with ❤ by Guillaume Quittet</footer>
      </div>
    </>
  );
}
