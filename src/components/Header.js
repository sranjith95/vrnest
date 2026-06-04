import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-md">
            <Image src="/logo.png" alt="VR Nest" fill className="object-cover" priority />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">VR Nest</p>
            <p className="text-xs text-gray-500">Smart shopping for your world</p>
          </div>
        </Link>

        <div className="hidden flex-1 max-w-2xl px-4 md:block">
          <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.3-4.3m1.3-5.2a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <nav className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Link href="#categories" className="rounded-full px-3 py-2 hover:bg-gray-100">Categories</Link>
          <Link href="#featured" className="rounded-full px-3 py-2 hover:bg-gray-100">Featured</Link>
          <Link href="#cart" className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Cart</Link>
        </nav>
      </div>
    </header>
  );
}