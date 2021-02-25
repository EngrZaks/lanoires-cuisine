const Button = ({ name, onClick, style, type }) => (
   <button type={type} style={style} onClick={onClick}>
      {name}
   </button>
);
export default Button;
