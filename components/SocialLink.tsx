type SocialLinkProps = {
  image: string;
  social: string;
  text: string;
};

export const SocialLink = ({ image, social, text }: SocialLinkProps) => {
  return (
    <a href={social}>
      <img src={image} alt="SocialImage" />
      <p>{text}</p>
    </a>
  );
};
