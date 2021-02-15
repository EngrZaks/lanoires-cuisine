import React, { useState } from "react";
import "./App.css";
import backgroundVideo from "./media/backgroundVideo1.mp4";
import banner from "./media/banner.jpg";
import Button from "./components/button";
import Menu from "./components/menu";
import MenuPage from "./components/menupage";
import Greeting from "./components/welcome";

const showMenu = () => {};
function App() {
   const [menuItem, setMenuItem] = useState(false);
   const toggleMenu = (e) => {
      e.preventDefault();
      console.log("something");
      setMenuItem(!menuItem);
   };
   return (
      <div className='App'>
         <img src={banner} className='banner' alt='logo' />
         <div className='menu'>
            <a href='#' onClick={toggleMenu}>
               <Menu />
            </a>
         </div>
         {menuItem && <MenuPage onClick={toggleMenu} />}
         <video
            className='backgroundVideo'
            autoPlay
            loop
            src={backgroundVideo}
         />
         <Greeting />
         <div className='buttons'>
            <Button name='Order Now' />
            <Button name='Book Us' />
         </div>
      </div>
   );
}

export default App;
