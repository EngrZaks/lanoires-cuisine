import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import "./App.css";
import banner from "./media/banner.jpg";
import Menu from "./components/menu";
import MenuPage from "./components/menupage";
import PriceList from "./components/price";
import Home from "./components/home";
import Contacts from "./components/contact";
import About from "./components/about";
import { Order } from "./components/order";
import { Booking } from "./components/order";

function App() {
   const [menuItem, setMenuItem] = useState(false);
   const toggleMenu = (e) => {
      e.preventDefault();
      console.log("something");
      setMenuItem(!menuItem);
   };
   return (
      <div className='App'>
         <img src={banner} className='banner' alt='logo' />;
         <div className='menu'>
            <a href='#' onClick={toggleMenu}>
               <Menu />
            </a>
         </div>
         <Router>
            {menuItem && (
               <MenuPage
                  onClick={toggleMenu}
                  click={() => setMenuItem(!menuItem)}
               />
            )}
            <Switch>
               <Route exact path='/price' component={PriceList} />
               <Route exact path='/about' component={About} />
               <Route exact path='/contacts' component={Contacts} />
               <Route exact path='/order' component={Order} />
               <Route exact path='/booking' component={Booking} />
               <Route exact path='/' component={Home} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
