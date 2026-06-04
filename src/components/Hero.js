import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90">
            New season drops are here
          </span>
          <h1 className="max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Discover tech, style, and essentials at <span className="text-indigo-300">VR Nest</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
            A modern ecommerce front page built for quick browsing, clean discovery, and smooth shopping across categories.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#featured" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-gray-100">
              Shop featured
            </Link>
            <Link href="#categories" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
              Explore categories
            </Link>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
            {[
              ['10K+', 'Products'],
              ['24/7', 'Support'],
              ['Fast', 'Delivery'],
            ].map(([a, b]) => (
              <div key={b} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">{a}</div>
                <div className="mt-1 text-sm text-white/70">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Wireless Headphones', price: '$129', tag: 'Best Seller' },
                { title: 'Smart Watch', price: '$199', tag: 'Trending' },
                { title: 'VR Headset', price: '$349', tag: 'New Arrival' },
                { title: 'Gaming Keyboard', price: '$89', tag: 'Top Rated' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 text-slate-900 shadow-lg">
                  <div className="mb-3 h-32 rounded-xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{item.tag}</p>
                  <h3 className="mt-1 font-semibold">{item.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold">{item.price}</span>
                    <button className="rounded-full bg-slate-950 px-3 py-2 text-sm text-white">Add</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}