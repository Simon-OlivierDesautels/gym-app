import Image from "next/image";
import ico from "../assets/Ico.png";
type SocialLinkProps = {
  image: string;
  social: string;
  text: string;
};

export const SocialLink = ({ image, social, text }: SocialLinkProps) => {
  return (
    <a href={social} className="footer__social-link">
      <Image
        alt={image}
        src={ico}
        className={"footer__social-link__social-ico"}
        width={35}
        height={35}
      />
      <p>{text}</p>
    </a>
  );
};
