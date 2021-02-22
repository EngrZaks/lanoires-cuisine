const Button = ({ name, onClick }) => (
   <button
      style={{
         background: "rgba(0, 0, 0, 1)",
         color: "tomato",
         padding: "15px",
         fontWeight: "bold",
         margin: "3px",
         borderRadius: "5px",
         border: "none",
         textTransform: "capitalize",
         width: "40%",
         // fontSize: "large",
      }}
      onClick={onClick}>
      {name}
   </button>
);
export default Button;
