const Button = ({ name, onClick, style }) => (
   <button style={style} onClick={onClick}>
      {name}
   </button>
);
export default Button;
