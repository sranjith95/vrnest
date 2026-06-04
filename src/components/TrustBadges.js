import { Shield, Truck, RefreshCw, Star } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: <Truck size={28} />, title: 'Free Shipping', description: 'On orders over ₹999' },
    { icon: <RefreshCw size={28} />, title: 'Easy Returns', description: '30-day return policy' },
    { icon: <Shield size={28} />, title: 'Secure Payment', description: 'SSL encrypted checkout' },
    { icon: <Star size={28} />, title: 'Quality Guaranteed', description: '100% satisfaction' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {badges.map((b, i) => (
          <div key={i}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-3">
              {b.icon}
            </div>
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}