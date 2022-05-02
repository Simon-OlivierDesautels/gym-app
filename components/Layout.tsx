import type { NextPage } from "next";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import {ChildrenProp} from './children'


export const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
