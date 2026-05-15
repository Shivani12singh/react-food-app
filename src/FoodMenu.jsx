import React from "react";
import { useState } from "react";
import './FoodMenu.css';

const foodData = [
  {
    id: 1,
    name: "Pizza",
    price: 199,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    id: 2,
    name: "Burger",
    price: 99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 3,
    name: "Pasta",
    price: 149,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    id: 4,
    name: "Sandwich",
    price: 79,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f"
  },
  {
    id: 5,
    name: "Fries",
    price: 59,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  }
];

export default function FoodMenu() {
const [quantity, setQuantity] = useState({});

  const handleAdd = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleRemove = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0
    }));
  };
    
    return (
      <>
        <div className="menu-container">
        <h1>Food Menu</h1>

        <div className="menu-grid">
            {foodData.map((item) => (
            <div className="food-card" key={item.id}>
                
                {/* Image */}
                <img src={item.image} alt={item.name} className="food-img" />

                {/* Name */}
                <h3>{item.name}</h3>

                {/* Price */}
                <p className="price">₹{item.price}</p>

                {/* Add / Remove buttons */}
                <div className="counter">
                <button onClick={() => handleRemove(item.id)}>-</button>
                <span>{quantity[item.id]}</span>
                <button onClick={() => handleAdd(item.id)}>+</button>
                </div>

            </div>
            ))}
        </div>
        </div>
      </>
    )
}