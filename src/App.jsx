import Header from "./components/Header";
import Images from "./components/Images";
import Description from "./components/Description";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const deleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="xl:mt-12 xl:ml-36 xl:mr-48 xl:mb-21">
      <Header
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        cart={cart}
        deleteItem={deleteItem}
      />
      <div className="flex flex-col items-center justify-between gap-[24px] xl:flex-row xl:gap-24 xl:mt-20 xl:mx-12 xl:mb-28">
        <Images />
        <Description addToCart={addToCart} setIsClicked={setIsClicked} />
      </div>
    </div>
  );
}

export default App;
