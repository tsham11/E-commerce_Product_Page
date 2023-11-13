import { useState } from "react";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import cartIcon from "../assets/button-cart.svg";

function Description({ addToCart, setIsClicked }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      count: count,
    };

    if (count === 0) {
      alert("Please select a quantity greater than 0.");
    } else {
      setIsClicked(true);
      addToCart(item);
      setCount(0);
    }
    // console.log("Adding to Cart:", item);
  };

  return (
    <div className="w-[327px] xl:w-28rem">
      <div>
        <h3 className="text-sm text-orange font-bold uppercase">
          Sneaker Company
        </h3>
        <h1 className="mt-[19px] mb-[15px] text-[28px] xl:mt-7 xl:mb-8 xl:text-44px xl:leading-48px text-black font-bold">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[#69707D]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex mt-6 mb-6 w-[326px] h-[34px] justify-between items-center xl:mb-8 xl:flex-col xl:w-44 xl:h-[68px] xl:items-start">
          <div className="flex items-center gap-4 xl:mb-2.5 font-bold">
            <span className="text-28px leading-7 text-black">$125.00</span>
            <span className="w-51px px-2 rounded-md text-orange bg-[#FFEEE2]">
              50%
            </span>
          </div>
          <span className="text-[#B6BCC8] line-through font-bold">$250.00</span>
        </div>
        <div className="flex flex-col gap-4 font-bold xl:flex-row">
          <div className="flex w-[327px] h-[56px] xl:w-40 items-center bg-[#F6F8FD] rounded-lg justify-around">
            <button className="hover:cursor-pointer" onClick={decrement}>
              <img src={minus} alt="minus" />
            </button>
            <div className="text-black">{count}</div>
            <button className="hover:cursor-pointer" onClick={increment}>
              <img src={plus} alt="plus" />
            </button>
          </div>

          <button
            className="bg-orange w-[327px] h-[56px] mb-[88px] rounded-lg flex items-center justify-center gap-4 button-shadow xl:w-272px xl:mb-[0]  hover:cursor-pointer hover:bg-[#FFAB6A]"
            onClick={handleAddToCart}
          >
            <img src={cartIcon} alt="cart" />
            <span className="text-white">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Description;
