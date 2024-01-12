import { getAllProducts } from "@/utils";
import { useRouter } from "next/router";

export async function getStaticProps() {
//asynchronously fetches the list of products using the getAllProducts function
  const listOfProducts = await getAllProducts();
  return {
    props: {
      listOfProducts,
    },
  };
}

export default function Products(props) {
  const { listOfProducts } = props;
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center p-5 gap-4 bg-gray-100">
      {listOfProducts && listOfProducts.length > 0 ? (
        listOfProducts.map((productItem) => (
          <div
            className="w-80 border border-black p-5 rounded-lg shadow-md"
            key={productItem.id}
          >
            <p className="text-lg font-bold">{productItem.title}</p>
            <div>
              <img
                className="h-20 mt-3 object-cover"
                src={productItem.image}
              ></img>
            </div>
            <p className="mx-0 mt-3 font-bold">Price: ${productItem.price}</p>
            <div className="w-fit">
              <button
                onClick={() => router.push(`/products/${productItem.id}`)}
                className="p-2 flex h-fit justify-between mt-3 mb-5 mx-10 border border-black rounded-md bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}
