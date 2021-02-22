const MenuLine = () => (
   <div
      style={{
         height: "4px",
         width: "30px",
         background: "tomato",
         margin: "3px 0",
      }}></div>
);
const Menu = () => (
   <div>
      <MenuLine />
      <MenuLine />
      <MenuLine />
   </div>
);

export default Menu;
