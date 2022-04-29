import type { NextPage } from "next";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <p>Footer</p>
    </>
  );
};
