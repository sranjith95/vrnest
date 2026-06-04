import { useState } from 'react';
import toast from 'react-hot-toast';
import { Star, ShoppingCart, Heart, Share2, Check } from 'lucide-react';

export default function ProductPage({ product }) {
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity += qty;
    else cart.push({ ...product, quantity: qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Added to cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      <div>
        <img src={product.images[0]} alt={product.name} className="w-full rounded-2xl shadow-lg" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{product.category}</p>
        <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
        <div className="flex items-center gap-2 mt-4">
          <Star size={18} className="text-yellow-400 fill-yellow-400" />
          <span>{product.rating}</span>
          <span className="text-gray-500">({product.reviewCount} reviews)</span>
        </div>
        <p className="text-3xl font-bold mt-6">₹{product.price.toLocaleString('en-IN')}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="flex items-center gap-3 mt-6">
          <button className="w-10 h-10 border rounded-lg" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span className="w-10 text-center">{qty}</span>
          <button className="w-10 h-10 border rounded-lg" onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button onClick={addToCart} className="btn-primary flex-1 flex items-center justify-center gap-2">
            <ShoppingCart size={18} /> Add to Cart
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2"><Heart size={18} /> Wishlist</button>
          <button className="btn-secondary flex items-center justify-center gap-2"><Share2 size={18} /> Share</button>
        </div>

        <div className="mt-8 space-y-2 text-gray-700">
          {product.features?.map((f, i) => (
            <p key={i} className="flex items-center gap-2"><Check size={16} className="text-green-500" /> {f}</p>
          ))}
        </div>
      </div>
    </div>
  );
}