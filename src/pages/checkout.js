import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Checkout() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <p>Checkout form goes here.</p>
      </div>
      <Footer />
    </>
  );
}