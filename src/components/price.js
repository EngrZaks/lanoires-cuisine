const priceList = [
   { name: "pepper soup", price: "NGN 1500" },
   { name: "Peppered Kpomo", price: "NGN 1500" },
   { name: "Peppered beef/Goat meat", price: "NGN 1500" },
   { name: "Peppered chicken", price: "NGN 1500" },
   { name: "Peppered full chicken", price: "NGN 3500" },
   { name: "fish/beef stew 1.4 liters", price: "NGN 3000" },
   { name: "chicken stew 1.4 liters", price: "NGN 4000" },
   { name: "fish/beef stew 2.4 liters", price: "NGN 5000" },
   { name: "chicken stew 2.4 liters", price: "NGN 6000" },
   { name: "vegetable soup 1.4 liters, (beef/goat meat)", price: "NGN 3200" },
   { name: "vegetable soup 2.4 liters, (beef/goat meat)", price: "NGN 5000" },
   { name: "okro soup 1.4 liters, (beef/goat/fish)", price: "NGN 2000" },
   { name: "okro soup 2.4 liters, (beef/goat/fish)", price: "NGN 3000" },
];

const PriceList = () => {
   const lists = priceList.map((item) => (
      <div className='list' key={item.name}>
         <span className='item'>{item.name}</span>{" "}
         <span className='price'>{item.price}</span>
      </div>
   ));
   return (
      <div className='priceList'>
         <div className='title'>Price List</div>
         {lists}
      </div>
   );
};

export default PriceList;
