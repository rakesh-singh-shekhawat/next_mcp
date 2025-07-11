"use client";
import React, { useEffect } from "react";
import { AnnModalInstance } from "my-js-library";
import "./button.css";
const ModalClientComponent = () => {
  useEffect(() => {
    // const nameInstance = new AnnModalInstance();
    // console.log(nameInstance.openModal()); // Output should be "Rakesh"
  }, []);
  const HandleClick = () => {
    const nameInstance = new AnnModalInstance();
    nameInstance.openModal();
  };
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <button className="primary-button" onClick={HandleClick}>
        Open Modal
      </button>
    </div>
  );
};

export default ModalClientComponent;
