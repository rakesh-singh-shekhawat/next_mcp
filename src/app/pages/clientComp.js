"use client";
import React, { useEffect } from "react";
import { Name } from "my-js-library";
import "./button.css";

const ClientComponent = () => {
  useEffect(() => {
    const nameInstance = new Name();
    console.log(nameInstance.printName()); // Output should be "Rakesh"
  }, []);
  const HandleClick = () => {
    const nameInstance = new Name();
    console.log(nameInstance.printName());
  };
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <button className="primary-button" onClick={HandleClick}>
        Print Name
      </button>
    </div>
  );
};

export default ClientComponent;
