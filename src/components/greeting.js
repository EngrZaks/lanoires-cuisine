const Welcome = () => {
   return <div className='greet'>Welcome to Lanoire's Cuisine</div>;
};
const Moto = () => {
   return <div className='greet'>Your Satisfaction is our Delight</div>;
};

const Greeting = () => {
   return (
      <div className='greeting'>
         <div className='welcome'>
            {" "}
            <Welcome />{" "}
         </div>
         <div className='moto'>
            {" "}
            <Moto />
         </div>
      </div>
   );
};
export default Greeting;
