import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <Link href={"dashboard"}>Dashboard</Link>
      <Link href={"exercises"}>Exercises</Link>
      <Link href={"profile"}>Profile</Link>
    </nav>
  );
};
