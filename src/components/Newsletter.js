import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const subscribe = (e) => {
    e.preventDefault();
    toast.success('Subscribed successfully');
    setEmail('');
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get 15% Off Your First Order</h2>
        <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 mt-6">
          <input
            className="input-field flex-1"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className="btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}