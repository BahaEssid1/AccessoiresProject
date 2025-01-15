"use client"
import React, { useState } from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: "Wireless Earbuds", price: 50, quantity: 1 },
        { id: 2, name: "Phone Case - Galaxy S22", price: 20, quantity: 2 },
    ]);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} style={{ marginBottom: "15px" }}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <label>
                                Quantity:
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, parseInt(e.target.value))
                                    }
                                    style={{ marginLeft: "5px", width: "50px" }}
                                />
                            </label>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                style={{ marginLeft: "10px", color: "red" }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                    <button
                        onClick={() => alert("Proceeding to checkout")}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
