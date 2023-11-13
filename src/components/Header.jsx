import { useState } from "react";
import Cart from "./Cart";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-menu.svg";
import Close from "../assets/icon-close.svg";
import CartIcon from "../assets/icon-cart.svg";
import CartIconHover from "../assets/icon-cart-hover.svg";
import Pfp from "../assets/image-avatar.png";

function Header({ isClicked, setIsClicked, cart, deleteItem }) {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  const [showIcon, setShowIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowIcon(true);
  };

  return (
    <>
      <div className=" h-[68px] px-[24px] flex justify-between items-center border-b border-b-gray-200 xl:h-20 xl:px-[0] xl:items-start">
        <div className="flex items-end gap-[16px]">
          <img
            src={Menu}
            alt="menu"
            onClick={toggleMenu}
            className="xl:hidden"
          />
          <div className="flex xl:items-start xl:gap-12">
            <img src={Logo} alt="logo" className="hover:cursor-pointer" />
            {showMenu ? (
              <span className="bg-[#000] bg-opacity-75 w-full h-full z-[999] absolute top-0 left-0">
                <ul className="pt-[25px] px-[25px] bg-white w-[250px] h-full flex flex-col gap-[20px] text-black font-bold ">
                  {showMenu && (
                    <img
                      src={Close}
                      alt="close"
                      onClick={toggleMenu}
                      className="w-[13.435px] h-[13.435px]"
                    />
                  )}
                  {links.map((item, index) => (
                    <li key={index} className="h-[26px] cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            ) : (
              <ul className="flex gap-8 text-slate-400 hidden xl:flex ">
                {links.map((item, index) => (
                  <li
                    key={index}
                    className="h-20 hover:text-black cursor-pointer hover:border-b-4 border-orange"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center gap-[22.18px] xl:gap-8">
          <div className="relative">
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 w-19px h-13px bg-orange text-white text-10px  font-bold flex items-center justify-center rounded-md">
                {cart.length}
              </div>
            )}
            <img
              src={showIcon ? CartIconHover : CartIcon}
              alt="cart"
              className=" xl:w-4 xl:h-4 hover:cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <img
            src={Pfp}
            alt="pfp"
            className="w-6 h-6 xl:w-12 xl:h-12 hover:cursor-pointer hover:border-2 rounded-full border-orange"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        {isClicked && <Cart cart={cart} deleteItem={deleteItem} />}
      </div>
    </>
  );
}

export default Header;
