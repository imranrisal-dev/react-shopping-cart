import React from "react";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { ProductGrid } from "./components/ProductGrid";
import { Cart } from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <ProductGrid />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
