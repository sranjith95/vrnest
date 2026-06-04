import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductPage from '@/components/ProductPage';
import { products } from '@/data/products';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(
    (p) => p.slug === id || String(p.id) === String(id)
  );

  if (!product) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ProductPage product={product} />
      <Footer />
    </>
  );
}