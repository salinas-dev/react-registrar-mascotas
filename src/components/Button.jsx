  // Button.js
  const Button = ({ nombre, clase }) => {
    return (
      <button className={`btn btn-${clase}`}>{nombre}</button>
    );
  };
  
  export default Button;