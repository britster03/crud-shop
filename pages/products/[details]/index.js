import { getAllProductDetailsById, getAllProducts } from "@/utils";
import { useContext } from "react";
import { Context } from "@/context";

export async function getStaticPaths() {
  //function responsible for generating paths for all the product details pages during the build process
  const listOfProducts = await getAllProducts(); //fetches a list of all products using getAllProducts()
  const createdPaths =
    listOfProducts && listOfProducts.length > 0
      ? listOfProducts.map((item) => ({
          params: {
            details: item.id.toString(),
          },
        }))
      : [];
  //it creates an array of paths based on the product IDs

  console.log("Generated Paths:", createdPaths);

  /*Generated Paths: [
  { params: { details: '1' } },
  { params: { details: '2' } },
  { params: { details: '3' } },
  { params: { details: '4' } },
  { params: { details: '5' } },
  { params: { details: '6' } },
  { params: { details: '7' } },
  { params: { details: '8' } },
  { params: { details: '9' } },
  { params: { details: '10' } },
  { params: { details: '11' } },
  { params: { details: '12' } },
  { params: { details: '13' } },
  { params: { details: '14' } },
  { params: { details: '15' } },
  { params: { details: '16' } },
  { params: { details: '17' } },
  { params: { details: '18' } },
  { params: { details: '19' } },
  { params: { details: '20' } }
] */

  return {
    paths: createdPaths,
    fallback: false,
  };
}


//function responsible for fetching data for a specific product details page based on the path parameter
export async function getStaticProps(context) {
  const { params } = context;
  const { details } = params; //extracts the details parameter from the context, which represents the product ID
  const productDetailsData = await getAllProductDetailsById(details); 
  //fetches the product details for the specified ID using getAllProductDetailsById(details)
  console.log(productDetailsData);
  return {
    props: {
      productDetailsData 
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
          cartItems.findIndex((item) => item.id === productDetailsData.id) !==
          -1
        }
        onClick={() => handleAddToCart(productDetailsData)}
        className="mt-3 mb-5 mx-10 border border-black disabled:opacity-50 rounded-md bg-yellow-500 hover:bg-yellow-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
