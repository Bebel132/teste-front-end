import './index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/header.tsx'
import Banner from './components/banner/banner.tsx'
import Categories from './components/categories/categories.tsx'
import RelatedProducts from './components/relatedProducts/relatedProducts.tsx';
import Partners from './components/partners/partners.tsx';
import Brands from './components/brands/brands.tsx';
import Newsletter from './components/newsletter/newsletter.tsx';
import Footer from './components/footer/footer.tsx';
import type IProduct from './interfaces/product.ts';
import { useState } from 'react';
import PopUp from './components/popup/popUp.tsx';

function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Banner />
      <main>
        <Categories />

        <RelatedProducts withOptions={true} setSelectedProduct={setSelectedProduct} />
        <Partners />

        <RelatedProducts withOptions={false} setSelectedProduct={setSelectedProduct} />
        <Partners />

        <Brands />
        <RelatedProducts withOptions={false} setSelectedProduct={setSelectedProduct} />

        <Newsletter />
      </main>
      
      <PopUp selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />

      <Footer />
    </QueryClientProvider>
  )
}

export default App
