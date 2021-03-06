import { NavLink } from "react-router-dom";

import Button from "./button";
import Greeting from "./greeting";
import meat from "../media/meat1.jpg";

export const buttonStyle = {
   background: "rgba(0, 0, 0, 1)",
   boxShadow: "0 2px 2px 2px rgba(255, 255, 255, 0.2)",
   color: "tomato",
   padding: "15px",
   fontWeight: "bold",
   margin: "5px",
   borderRadius: "5px",
   border: "none",
   textTransform: "capitalize",
   width: "95%",
};
export default function Home() {
   setTimeout(() => {
      document.querySelector(".home").style.opacity = 1;
      setTimeout(() => {
         document.querySelector(".welcome").style.transform = "translateY(0)";
         setTimeout(() => {
            document.querySelector(".moto").style.transform = "translateY(0)";
         }, 600);
      }, 400);
   }, 10);

   const About = () => {
      return (
         <div
            className='home-about'
            style={{
               position: "absolute",
               top: "63%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               background: "rgba(255, 255, 255, 0.603)",
               padding: "15px",
               borderRadius: "10px",
               width: "80%",
               maxWidth: "500px",
            }}>
            <p style={{ fontWeight: "bold" }}>
               Let us serve you the best soups and all kinds of peppered meats
               with Love and Care.
            </p>
            <img
               src={meat}
               alt='meat'
               width='80%'
               style={{ borderRadius: "10px", maxWidth: "250px" }}
            />
         </div>
      );
   };
   return (
      <div className='home'>
         <Greeting />
         <About />
         <div className='buttons'>
            <NavLink to='/order'>
               <Button name='Order Now' style={buttonStyle} />
            </NavLink>
            <NavLink to='/booking'>
               <Button name='Book Us' style={buttonStyle} />
            </NavLink>
         </div>
      </div>
   );
}
