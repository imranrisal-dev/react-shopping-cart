import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">TechStore</h1>
        <button className="cart-icon-btn" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={24} />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  );
};
