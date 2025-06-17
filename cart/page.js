// File: app/cart/page.tsx (or pages/cart.js if using Pages Router)

import Link from "next/link";
import Image from "next/image";
import style from './../style/home.css';


export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Tom And Jerry: Thinking Tom",
      price: 499,
      image: "/Dress_1.jpg",
    },
    {
      id: 2,
      name: "PRSIZHE Black Hoodie",
      price: 799,
      image: "/Dress_2.jpeg",
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="p-4">
      <h1 id="ved">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="container"
              style={{
                padding: "10px",
                marginBottom: "20px",
                border: "4px solid #333",
                backgroundColor: "#F8F9F9",
              }}
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={200}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#E74C3C",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4">
            <h3>Total: ₹{total}/-</h3>
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#2ECC71",
                color: "white",
                border: "none",
                fontSize: "16px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      <footer className="mt-10">
        <Link href="/">
          <h5 style={{ textDecoration: "underline", color: "blue" }}>
            ← Continue Shopping
          </h5>
        </Link>
      </footer>
    </main>
  );
}
