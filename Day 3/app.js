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

//React.createelement gives an object which converted to html puts in dom

//jsx uses react.createelement then its gets convetred to object then it conveted again to htmldom

// NORMAL VARIBLE
const heading = (
  <h1 id="title" key="h2">
    "Hello Everyone from Gora"
  </h1>
);
// FUNCTIONAL COMPONENT
const Title = () => (
  <h1 id="title" key="h2">
    "Hello Everyone from Gourob"
  </h1>
);
// we are going to use an array

// React Component
// Functional - New
const HeaderComponent1 = () => {
  return (
    <div>
      {heading}
      <Title />
      <h1>Namaste React Functional Component</h1>
      <h2>This is a H2 Tag</h2>
    </div>
  );
};
// Both are same and will work
const HeaderComponent2 = () => (
  <div>
    <h1>Namaste React Functional Component</h1>
    <h2>This is a H2 Tag</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);// for react element
root.render(<HeaderComponent1 />); // for react component
// root.render(<HeaderComponent2 />);
