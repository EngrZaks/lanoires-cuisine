import { NavLink } from "react-router-dom";
import Button from "../components/button";
import { FiTwitter, FiMail, FiPhone } from "react-icons/fi";

const closeBtnStyle = {
   background: "rgba(0, 0, 0, 1)",
   color: "tomato",
   padding: "15px",
   fontWeight: "bold",
   margin: "3px",
   borderRadius: "5px",
   border: "none",
   textTransform: "capitalize",
   width: "40%",
   fontSize: "larger",
};
const orderBtnStyle = {
   margin: "5px",
   border: "none",
   color: "white",
   background: " rgba(255, 99, 71, 0.2)",
   padding: "5px",
   fontWeight: closeBtnStyle.fontWeight,
   textTransform: "uppercase",
};
const MenuList = ({ text, to, click }) => (
   <NavLink to={to} onClick={click}>
      {text}
   </NavLink>
);
const MenuPage = ({ onClick, click }) => {
   setTimeout(() => {
      document.querySelector(".menuPage").classList.add("animate");
   }, 10);
   return (
      <div className='menuPage'>
         <div className='menuContainer'>
            <MenuList click={click} to='/' text='Home' />
            <MenuList click={click} to='/price' text='Price List' />
            {/* <MenuList click={click} to='/gallery' text='Gallery' /> */}
            <MenuList click={click} to='/contacts' text='Contacts' />
            <MenuList click={click} to='/about' text='About Us' />
            <div className='orderbuttons'>
               <NavLink to='/order' onClick={click}>
                  <Button name='Order Now' style={orderBtnStyle} />
               </NavLink>
               <NavLink to='/booking' onClick={click}>
                  <Button name='Book Us' style={orderBtnStyle} />
               </NavLink>
            </div>
            <Button
               className='closebtn'
               onClick={onClick}
               name='X'
               style={closeBtnStyle}
            />
         </div>
         <small style={{ color: "white" }}>
            made with ❤ by Zaks{" "}
            <a href='tel:08023767822'>
               {" "}
               <FiPhone />
            </a>{" "}
            <a href='mailto:abzakariyya@gmail.com'>
               {" "}
               <FiMail />
            </a>{" "}
            <a href='https://twitter.com/DevZaks'>
               {" "}
               <FiTwitter />
            </a>{" "}
         </small>
      </div>
   );
};

export default MenuPage;
