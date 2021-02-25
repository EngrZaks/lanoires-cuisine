import { priceList } from "./price";
import Button from "./button";
priceList.unshift({ name: "select item", price: "" });
const SelectOptions = () => {
   const selectOptions = priceList.map((list) => (
      <option key={list.name}>{list.name}</option>
   ));
   return (
      <select name='item' required>
         {selectOptions}
      </select>
   );
};
const OrderOrBookBase = ({ title, details = false, select = false }) => {
   setTimeout(() => {
      document.querySelector(".order").style.opacity = 1;
   }, 10);
   const buttonTitle = () => {
      return "Send " + title;
   };
   return (
      <div className='order'>
         <h2>{title}</h2>
         <form name={title} method='post'>
            <input type='hidden' name={title} value={title} />
            <input type='text' name='name' placeholder='Your Name' required />
            <input
               type='tel'
               name='phone'
               placeholder='Your phone number'
               required
            />
            {select && <SelectOptions />}
            <input
               type='email'
               name='email'
               placeholder='Your Email (optional)'
            />{" "}
            {details && (
               <textarea
                  name='details'
                  placeholder='How do you want our service(s)'
                  rows='5'
                  required
               />
            )}
            <Button name={buttonTitle()} />
         </form>
      </div>
   );
};

export const Order = () => <OrderOrBookBase title='Order' select={true} />;
export const Booking = () => <OrderOrBookBase title='Booking' details={true} />;
