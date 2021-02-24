import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FiTwitter, FiInstagram } from "react-icons/fi";
const contacts = {
   location: "Zaria, Kaduna State",
   email: "inafisat97@gmail.com",
   phone: "+2349056131945",
   twitter: "chef_feesah",
   ig: "@lanoirescuisine_",
};
const Contacts = () => {
   const arr = [];
   for (const key in contacts) {
      let icon;
      let link;
      switch (key) {
         case "location":
            icon = <GoLocation />;
            break;
         case "email":
            icon = <HiOutlineMail />;
            link = `mailto:${contacts.email}`;
            break;
         case "phone":
            icon = <HiOutlinePhone />;
            link = `tel:${contacts.phone}`;
            break;
         case "twitter":
            icon = <FiTwitter />;
            link = `https://twitter.com/${contacts.twitter}`;
            break;
         case "ig":
            icon = <FiInstagram />;
            link = `https://instagram.com/${contacts.ig.substr(1)}`;
            break;
         default:
            icon = key + ": ";
            link = "#";
            break;
      }
      if (Object.hasOwnProperty.call(contacts, key)) {
         const element = contacts[key];
         arr.push(
            <a href={link} key={key} className='contact'>
               <span className='icon'>{icon} </span>{" "}
               <span className='element'> {element}</span>
            </a>
         );
      }
   }
   setTimeout(() => {
      document.querySelector(".contacts").style.opacity = 1;
   }, 10);
   return (
      <div className='contacts'>
         <h2>contact us</h2>
         <small style={{ color: "#666" }}>
            click any of our social media links below 👇
         </small>
         {arr}
      </div>
   );
};

export default Contacts;
