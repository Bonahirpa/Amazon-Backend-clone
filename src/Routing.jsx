import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from "./Pages/Results/Results"
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from './Pages/Auth/Auth';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function Routing() {
const stripePromise = loadStripe(
  "pk_test_51QSGFtJBNDw7WM0K0QZsCgpJfNDFtx4mnuVGKN2IN43g8MTe2fHjeVVgqzAwV6RM00sSue4dN8N8mabbRLE40ZAG00PVo4F5Oq"
);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/payments" element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>} /> */}

        <Route
          path="/payments"
          element={
            // wrap payment component by Element from stripe and provide stripe prop with a value of stripePromise and hold that in protectedRoute
            <ProtectedRoute
              msg={
                "Please sign in to complete your payment. (You'll be redirected to the checkout page)"
              }
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={
                "Please sign in to your orders (You'll be redirected to orders page)"
              }
              redirect={"/orders"}
            >
              <Elements stripe={stripePromise}>
                <Orders />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        {/* <Route path="/category/:categoryName" element={<Results />} /> */}
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing

