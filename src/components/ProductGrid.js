const products = [
  { name: 'VR Glasses Pro', price: '$299', rating: '4.9', category: 'VR' },
  { name: 'Noise Cancel Headset', price: '$149', rating: '4.8', category: 'Audio' },
  { name: 'Smart Speaker Mini', price: '$79', rating: '4.7', category: 'Home' },
  { name: 'Gaming Mouse X', price: '$59', rating: '4.8', category: 'Gaming' },
  { name: '4K Action Camera', price: '$249', rating: '4.9', category: 'Camera' },
  { name: 'Fitness Band Max', price: '$99', rating: '4.6', category: 'Wearable' },
];

const categories = ['All', 'VR', 'Audio', 'Gaming', 'Wearable', 'Camera', 'Home'];

export default function ProductGrid() {
  return (
    <main className="bg-gray-50">
      <section id="categories" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Browse by category</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Popular categories</h2>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button key={item} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600">
              {item}
            </button>
          ))}
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Featured collection</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Products made for modern shoppers</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-5">
                <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow">
                  {product.category}
                </span>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/80 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-semibold text-gray-900">{product.rating} / 5</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-indigo-600" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <button id={product.name === 'VR Glasses Pro' ? 'cart' : undefined} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}