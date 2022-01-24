import React from "react";
import {Circles} from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles 
        heigth="50"
        width="200"
        color='#00BFFF'
        ariaLabel='loading'
      />

      <p className="text-lg text-center px-2 m-5">{message}</p>
    </div>
  );
};

export default Spinner;
