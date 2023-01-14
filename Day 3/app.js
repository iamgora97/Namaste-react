/*
 *
 * HMR- Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFYING
 * Cleaning our code
 * Dev and Production Build
 * Super Fast Build algorithm
 * Image Optimization
 * Cashing while development
 * Compressing
 * Compatible with older version of browser
 * HTTPS on dev
 *  Port Number
 * Constituting hashing algorithm
 * Zero Config
 * Transitive Dependencies
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "h1" }, "Hello Everyone");
const heading2 = React.createElement(
  "h2",
  { id: "h2" },
  "Hello Everyone from Gora"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]); // we are going to use an array
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
