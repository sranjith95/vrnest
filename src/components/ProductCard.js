import toast from 'react-hot-toast';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Added to cart');
  };

  return (
    <div className="card overflow-hidden group">
      <div className="relative aspect-square bg-gray-100">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        <button onClick={() => setLiked(!liked)} className="absolute top-3 right-3 p-2 rounded-full bg-white">
          <Heart size={18} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-red-500' : ''} />
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500">{product.category}</p>
        <h3 className="font-semibold text-gray-900 mt-1">{product.name}</h3>
        <div className="flex items-center gap-1 mt-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm">{product.rating}</span>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="font-bold text-lg">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm line-through text-gray-500">₹{product.compareAtPrice.toLocaleString('en-IN')}</span>
        </div>
        <button onClick={addToCart} className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
          <ShoppingBag size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}