import React from "react";
import { ChildrenProp } from "./children";

export const Bloc = ({ children }: ChildrenProp) => {
  return <div className="bloc">{children}</div>;
};
