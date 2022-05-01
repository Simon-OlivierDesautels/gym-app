import Image from "next/image";
import Link from "next/link";
import ico from "../assets/Ico.png";

export const Navbar = () => {
  return (
    <nav className="wrapper">
      <ul>
        <Link href={"/"}>
          <li>
            <div className="sbs">
              <Image
                alt="Home"
                src={ico}
                className={"small-ico"}
                width={35}
                height={35}
              />
              Landing page
            </div>
            <div className="nav__span--active"></div>
          </li>
        </Link>
        <li>
          <Link href={"dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"exercises"}>Exercises</Link>
        </li>
        <li>
          <Link href={"profile"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};
