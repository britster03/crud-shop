//working with fake-store api


export async function getAllProducts(){
    const apiResponse= await fetch('https://fakestoreapi.com/products')
    const result= await apiResponse.json()

    return result;
}


export async function getAllProductDetailsById(getCurrentId){
    const apiResponse= await fetch(`https://fakestoreapi.com/products/${getCurrentId}`)
    const result= await apiResponse.json()

    return result;
}