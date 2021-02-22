import React, { useState } from "react";
const Welcome = () => {
   setTimeout(() => {
      document.querySelector(".welcome").classList.add("display");
   }, 2000);
   setTimeout(() => {
      document.querySelector(".welcome").classList.add("animate");
   }, 2300);
   return <div className='greet'>Welcome to Lanoire's Cuisine</div>;
};
const Moto = () => {
   setTimeout(() => {
      const moto = document.querySelector(".moto");
      moto.classList.add("display");
      setTimeout(() => {
         moto.classList.add("animate");
      }, 300);
   }, 3500);

   return <div className='greet'>Your Satisfaction is our Delight</div>;
};

const Greeting = () => {
   return (
      <div className='greeting'>
         <div className='welcome'>
            {" "}
            <Welcome />{" "}
         </div>
         <div className='moto'>
            {" "}
            <Moto />
         </div>
      </div>
   );
};
export default Greeting;
