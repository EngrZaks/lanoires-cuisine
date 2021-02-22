import Button from "./button";
import Greeting from "./greeting";
import meat from "../media/meat1.jpg";
export default function Home() {
   const About = () => {
      return (
         <div
            className='about'
            style={{
               position: "absolute",
               top: "60%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               background: "rgba(255, 255, 255, 0.603)",
               padding: "15px",
               borderRadius: "10px",
               width: "80%",
            }}>
            <p style={{ fontWeight: "bold" }}>
               Let us serve you the best soups and all kinds of peppered meats
               with Love and Care.
            </p>
            <img src={meat} alt='meat' width='60%' />
         </div>
      );
   };
   return (
      <div>
         <Greeting />
         <About />
         <div className='buttons'>
            <Button name='Order Now' />
            <Button name='Book Us' />
         </div>
      </div>
   );
}
