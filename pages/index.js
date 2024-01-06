// components/Home.js
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative">

      <div className="home">
        <div className="home__container relative">
          <img
            className="home__image object-cover w-full h-2/3 overflow-hidden mb-4"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/0-PC_Hero_2x._CB594150943_.jpg"
            alt="hi"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>
     </div>
  
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent p-5">
        <div className="flex gap-4 mb-20 justify-center">
          <button
            onClick={() => router.push("/products")}
            className="p-5 border bg-white font-bold hover:bg-yellow-100 rounded-md"
          >
            Navigate to Products Page
          </button>
          <button
            onClick={() => router.push("/cart")}
            className="p-5 border bg-white font-bold hover:bg-yellow-100"
          >
            Navigate to Cart Page
          </button>
        </div>
      </div>
    </div>
  );
}
