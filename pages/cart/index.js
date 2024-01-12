import { useContext } from "react";
import { Context } from "@/context";
import { useRouter } from "next/router";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(Context);
  const router = useRouter();

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    router.push("/checkout");

    router.push({
      pathname: "/checkout",
      query: {
        subtotal: subtotal.toFixed(2),
        orderSummary: JSON.stringify(cartItems),
      },
    });
  };

  console.log(cartItems);
  return (
    <div className="flex flex-wrap gap-4 h-max p-5">
          <div className="flex w-80 mt-3 flex-col h-fit border border-black p-2">
        <p className="text-center font-bold">Order Summary</p>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mt-5">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))}

        <p className="text-center m-auto mt-3 font-bold">
          Subtotal: ${subtotal.toFixed(2)}
        </p>

        <button
          onClick={handleCheckout}
          className="mt-3 mb-5 mx-10 border border-black disabled:opacity-50 rounded-md bg-yellow-500 hover:bg-yellow-600"
        >
          Checkout
        </button>
      </div>

      {cartItems && cartItems.length > 0
        ? cartItems.map((item) => (
            <div key={item.id} className="flex w-80 mt-3 flex-col border border-black">
              <img className="h-41" src={item.image} />
              <p className="text-center mt-3 font-bold">{item.title}</p>
              <p className="text-center mt-3">Price: ${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 mb-5 mx-10 border border-black disabled:opacity-50 rounded-md bg-yellow-500 hover:bg-yellow-600"
              >
                Remove from cart
              </button>
            </div>
          ))
        : null}
        
    </div>
  );
}
