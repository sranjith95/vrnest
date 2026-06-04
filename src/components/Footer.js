export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-3">SHOP2026</h3>
          <p>Your trusted online store.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} SHOP2026
      </div>
    </footer>
  );
}