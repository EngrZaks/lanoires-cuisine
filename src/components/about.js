// import WhiteOverlay from "./overlay";
// const pStyle = {};
const About = () => {
   setTimeout(() => {
      document.querySelector(".about").style.opacity = 1;
      // document.querySelector(".App").classList.add("blur");
   }, 10);
   return (
      <div
         className='about'
         style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(255, 255, 255, 0.85)",
            padding: "20px",
            borderRadius: "10px",
            width: "80%",
            maxWidth: "500px",
            boxShadow: "4px 4px 15px 10px rgba(0, 0, 0, 0.438)",
         }}>
         {/* <WhiteOverlay /> */}
         <h2>About Us</h2>
         <p style={{ fontWeight: "bold" }}>
            Let us serve you the best soups and all kinds of peppered meats with
            Love and Care.
         </p>
         <p>
            La Noire's Cuisine is known for it's interaction with clients to be
            able to serve them better
         </p>
         <p>Believe it when we say you're going to come back for more</p>
      </div>
   );
};
export default About;
