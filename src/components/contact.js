import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FiTwitter, FiInstagram } from "react-icons/fi";
const contacts = {
   location: "Zaria, Kaduna State",
   email: "inafisat97@gmail.com",
   phone: "+2349056131945",
   twitter: "chef_feesah",
   ig: "@lanoirescuisine",
};
const Contacts = () => {
   const arr = [];
   for (const key in contacts) {
      let icon;
      switch (key) {
         case "location":
            icon = <GoLocation />;
            break;
         case "email":
            icon = <HiOutlineMail />;
            break;
         case "phone":
            icon = <HiOutlinePhone />;
            break;
         case "twitter":
            icon = <FiTwitter />;
            break;
         case "ig":
            icon = <FiInstagram />;
            break;
         default:
            break;
      }
      if (Object.hasOwnProperty.call(contacts, key)) {
         const element = contacts[key];
         arr.push(
            <div key={key} className='contact'>
               <span className='icon'>{icon} </span>{" "}
               <span className='element'> {element}</span>
            </div>
         );
      }
   }
   return (
      <div className='contacts'>
         <h2>contact us</h2>
         {arr}
      </div>
   );
};

export default Contacts;
