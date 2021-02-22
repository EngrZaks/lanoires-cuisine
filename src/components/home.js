import Button from "./button";
import Greeting from "./greeting";
export default function Home() {
   const About = () => {
      return (
         <div
            className='about'
            style={{
               position: "absolute",
               top: "55%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               background: "rgba(255, 255, 255, 0.603)",
               padding: "5px",
               borderRadius: "10px",
               width: "80%",
            }}>
            <h2>About Us</h2>
            <p style={{ fontWeight: "bold" }}>
               Let us serve you the best soups and all kinds of peppered meats
               with Love and Care.
            </p>
            <p>
               La Noire's Cuisine is known for it's interaction with clients to
               be able to serve them better
            </p>
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
