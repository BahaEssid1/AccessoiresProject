"use client"
import React, { useState } from "react";

const Checkout = () => {
    const [form, setForm] = useState({
        name: "",
        address: "",
        cardNumber: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Checkout data:", form);
        alert("Order placed successfully!");
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            style={{ display: "block", width: "100%", padding: "8px" }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleInputChange}
                            placeholder="Enter your address"
                            style={{ display: "block", width: "100%", padding: "8px" }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        Card Number:
                        <input
                            type="text"
                            name="cardNumber"
                            value={form.cardNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your card number"
                            style={{ display: "block", width: "100%", padding: "8px" }}
                            required
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
