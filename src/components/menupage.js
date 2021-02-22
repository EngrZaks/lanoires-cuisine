import { NavLink } from "react-router-dom";
import Button from "../components/button";
const MenuList = ({ text, to, click }) => (
   <NavLink to={to} onClick={click}>
      {text}
   </NavLink>
);
const MenuPage = ({ onClick, click }) => {
   setTimeout(() => {
      document.querySelector(".menuPage").classList.add("animate");
   }, 300);
   return (
      <div className='menuPage'>
         <div className='menuContainer'>
            <MenuList click={click} to='/' text='Home' />
            <MenuList click={click} to='/price' text='Price List' />
            {/* <MenuList click={click} to='/gallery' text='Gallery' /> */}
            <MenuList click={click} to='/contacts' text='Contacts' />
            <MenuList click={click} to='/about' text='About Us' />
            <Button className='closebtn' onClick={onClick} name='X' />
         </div>
         <small style={{ color: "white" }}>made with ❤ by Zaks</small>
      </div>
   );
};

export default MenuPage;
