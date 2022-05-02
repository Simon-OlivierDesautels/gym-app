import Image from "next/image";
import Link from "next/link";
import ico from "../assets/Ico.png";

export const Navbar = () => {
  return (
    <nav>
      <ul className="wrapper">
        <Link href={"/"}>
          <li>
            <a href="" className="nav__li__a">
              <div>
                <Image
                  alt="Home"
                  src={ico}
                  className={"small-ico"}
                  width={35}
                  height={35}
                />
                <p>Landing page</p>
              </div>
              <div className="nav__li__a__progress" />
            </a>
          </li>
        </Link>
        <Link href={"dashboard"}>
          <li>
            <a href="" className="nav__li__a">
              <div>
                <Image
                  alt="Home"
                  src={ico}
                  className={"small-ico"}
                  width={35}
                  height={35}
                />
                <p>Dashboard</p>
              </div>
              <div className="nav__li__a__progress" />
            </a>
          </li>
        </Link>
        <Link href={"exercises"}>
          <li>
            <a href="" className="nav__li__a">
              <div>
                <Image
                  alt="Home"
                  src={ico}
                  className={"small-ico"}
                  width={35}
                  height={35}
                />
                <p>Exercises</p>
              </div>
              <div className="nav__li__a__progress" />
            </a>
          </li>
        </Link>
        <Link href={"profile"}>
          <li>
            <a href="" className="nav__li__a">
              <div>
                <Image
                  alt="Home"
                  src={ico}
                  className={"small-ico"}
                  width={35}
                  height={35}
                />
                <p>Profile</p>
              </div>
              <div className="nav__li__a__progress" />
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
