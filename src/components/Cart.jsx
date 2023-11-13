import Delete from "../assets/icon-delete.svg";
import Img1th from "../assets/image-product-1-thumbnail.jpg";

function Cart({ cart, deleteItem }) {
  return (
    <div className="w-360px min-h-64 bg-white border-2.5 rounded-xl custom-shadow absolute top-[76px] z-[998] xl:top-[112px] xl:right-[120px]">
      <h2 className="h-[67px] pt-6 pl-6 font-bold border-b border-b-gray-200">
        Cart
      </h2>
      {cart.length > 0 ? (
        <div className="p-6 min-h-188px flex flex-col gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="h-52px flex justify-between items-center"
            >
              <img src={Img1th} alt="" className="w-12 h-12 rounded-md" />
              <div className="text-[#69707D]">
                <p>{item.name}</p>
                <p>
                  ${item.price} x {item.count}
                  <span className="text-black font-bold ml-1.5">
                    ${item.price * item.count}
                  </span>
                </p>
              </div>
              <img
                src={Delete}
                alt="delete-icon"
                className="w-3.5 h-4 hover:cursor-pointer"
                onClick={() => deleteItem(index)}
              />
            </div>
          ))}
          <button className="bg-orange w-312px h-16 mt-2 rounded-lg flex items-center justify-center text-white font-bold hover:cursor-pointer hover:bg-[#FFAB6A]">
            Checkout
          </button>
        </div>
      ) : (
        <div className="h-188px p-6 flex justify-center items-center text-[#69707D] font-bold">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}

export default Cart;
