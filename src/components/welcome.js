import React, { useState } from "react";
const Welcome = () => <div className='greet'>Welcome to Lanoires Cuisine</div>;
const Moto = () => (
   <div className='greet'>Your Satisfaction is our Delight</div>
);

const Greeting = () => {
   const [time1, setTime1] = useState(0);
   const [time2, setTime2] = useState(0);
   setTimeout(() => {
      setTime1(1);
   }, 3000);
   setTimeout(() => {
      setTime2(2);
   }, 6000);
   //    let time1 = 0;
   //    setTimeout(() => {
   //       time1 = 1;
   //    }, 3000);
   //    setTimeout(() => {
   //       time1 = 2;
   //    }, 6000);
   return (
      <div className='greeting'>
         <div className='welcome'>{time1 === 1 && <Welcome />}</div>
         <div className='moto'>{time2 === 2 && <Moto />}</div>
      </div>
   );
};
export default Greeting;
