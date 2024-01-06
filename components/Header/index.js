import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context";
import { ShoppingCart, Smile, Search } from "lucide-react";

export default function Header() {
  const { cartItems } = useContext(Context);

  return (
    <ul className="flex p-5 gap-4 justify-between items-center text-white font-bold bg-black">
      {/* "HappyCart" text in the left corner */}
      <div className="flex items-center">
        <Smile size={24} className="mr-2 text-yellow-500" />
        <span className="ml-1">Happy CART</span>
      </div>

      <div className="header__search flex items-center p-0.5">
        <input
          className="header__searchInput text-black flex-grow rounded-l-full p-2 outline-nonep-1 pl-20 pr-6"
          type="text"
          placeholder="Search..."
        />
        <div className="bg-yellow-500 rounded-r-full p-2 bg-yellow-500">
          <Search  />
        </div>
      </div>
      <div className="flex items-center">
        <li className="text-white hover:text-yellow-200">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="text-white hover:text-yellow-200 ml-4">
          <Link href={"/products"}>Products</Link>
        </li>

        <li className="text-white hover:text-yellow-200 ml-4">
          <Link href={"/cart"}>Cart</Link>
        </li>

        <Link href={"/checkout"}>
        <div className="flex hover:text-yellow-200 ml-4">
          <ShoppingCart />
        </div>
        </Link>
        <span className="ml-1 text-white hover:text-yellow-200">
          {cartItems.length}
        </span>
      </div>
    </ul>
  );
}
