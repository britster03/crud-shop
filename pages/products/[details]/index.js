import { getAllProductDetailsById, getAllProducts } from "@/utils";
import { useContext } from "react";
import { Context } from "@/context";

export async function getStaticPaths() {
  const listOfProducts = await getAllProducts();
  const createdPaths =
    listOfProducts && listOfProducts.length > 0
      ? listOfProducts.map((item) => ({
          params: {
            details: item.id.toString(),
          },
        }))
      : [];
  console.log('Generated Paths:', createdPaths);
  return {
    paths: createdPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { details } = params;
  const productDetailsData = await getAllProductDetailsById(details);

  return {
    props: {
      productDetailsData,
    },
  };
}

export default function ProductDetails(props) {
  const { productDetailsData } = props;

  const { handleAddToCart, cartItems } = useContext(Context);

  return (
    <div className="flex w-80 m-auto mt-3 flex-col border border-black">
      <img className="h-41" src={productDetailsData.image} />
      <p className="text-center mt-3 font-bold">{productDetailsData.title}</p>
      <p className="text-center mt-3">Price: ${productDetailsData.price}</p>
      <button
        disabled={
          cartItems.findIndex(
            (item) => item.id === productDetailsData.id
          ) !== -1
        }
        onClick={() => handleAddToCart(productDetailsData)}
        className="mt-3 mb-5 mx-10 border border-black disabled:opacity-50 rounded-md bg-yellow-500 hover:bg-yellow-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
