This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Shopping Cart : CRUD

## Project Overview : 
This project is a simple e-commerce application built using Next.js, Tailwind CSS, and JavaScript. It allows users to browse products, add them to a cart, and simulate a checkout process. The product data is fetched from the Fake Store API.

## Local Development : 

To run the application locally, follow these steps:

1. Clone the repository:

```git clone <repository-url>```

2. Navigate to the project directory:
```cd <project-directory> ```

3. Install dependencies:
```npm install``` or ```yarn install```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Structure

The project structure is organized as follows:

   - components: Contains reusable components such as the Header component.

   - context: Manages the global state using React context.

   - pages: Contains pages such as Home, Products, Cart, and Checkout.

   - /products/[details]: Dynamic route for individual product details.
   - /products/index.js: Displays a list of products with a "View Details" button.
   - /cart.js: Displays the shopping cart and allows users to remove items.
   - /checkout.js: Simulates the checkout process, including a form for user details.
   - utils: Contains utility functions for API calls.

   - getAllProducts: Fetches a list of all products from the Fake Store API.
   - getAllProductDetailsById: Fetches details for a specific product by ID.

## Header Component

The `Header.js` component is responsible for rendering the application header, including the navigation links, search bar, and shopping cart icon. Users can navigate to the Home, Products, Cart, and Checkout pages.

## Global State Management

The `Context.js` file defines a global state using React context to manage the shopping cart's items. It includes functions to add items to the cart and remove items from the cart.

## Cart Page
The `Cart.js` page displays the items added to the shopping cart. Users can remove items and proceed to the checkout page. The subtotal is calculated dynamically based on the items in the cart.

Checkout Page
The `Checkout.js` page simulates the checkout process. Users provide their name, address, payment details, and a coupon code (optional). After submission, a confirmation message displays the order summary.

## Products Pages
/products/index.js: Displays a list of products fetched from the Fake Store API. Users can click the "View Details" button to navigate to individual product pages.
/products/[details]/index.js: Dynamic route for individual product details. Displays the product image, title, price, and an "Add to Cart" button.

## Home Page
The `Home.js` component is displayed on the landing page. It includes a background image and buttons to navigate to the Products and Cart pages.

## Utility Functions
The utils folder contains utility functions for making API calls to the Fake Store API.

## Accessing the App

- Frontend: http://localhost:3000 or https://crud-shop.vercel.app
- Backend (API): https://fakestoreapi.com/products/

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated!
