import React from "react";
import { SocialLink } from "./SocialLink";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <SocialLink
            image={"Ico.png"}
            social={"#"}
            text={"simonolivier.desautels@gmail.com"}
          />
        </li>
        <li>
          <SocialLink
            image={"#"}
            social={"#"}
            text={"Simon-OlivierDesautels"}
          />
        </li>
        <li>
          <SocialLink
            image={"#"}
            social={"#"}
            text={"Simon-Olivier Desautels"}
          />
        </li>
      </ul>
      <p>© Simon-Olivier Desautels 2022 tous droits réservés</p>
      <Link href={"reportbug"}>
        <img src="#" alt="Bug" />
      </Link>
    </footer>
  );
};
