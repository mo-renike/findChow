import React from "react";
import "./Headings.scss";

export const Heading = ({ title }) => <h1 className="heading">{title}</h1>;

export const SubHeading = ({ title }) => (
  <h2 className="subHeading">{title}</h2>
);
export const Text = ({ title }) => (
  <p className="text">{title}</p>
);
