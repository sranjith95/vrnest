import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="card p-4 flex justify-between">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}