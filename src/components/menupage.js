import Button from "../components/button";
const MenuList = ({ text, onClick }) => (
   <a href='#' onClick={onClick}>
      {text}
   </a>
);
const MenuPage = ({ onClick }) => {
   return (
      <div className='menuPage'>
         <div className='menuContainer'>
            <MenuList text='Price List' />
            <MenuList text='Gallery' />
            <MenuList text='Contacts' />
            <MenuList text='About Us' />
            <Button className='closebtn' onClick={onClick} name='X' />
         </div>
      </div>
   );
};

export default MenuPage;
