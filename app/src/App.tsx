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

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Banner />
      <Categories />

      <RelatedProducts />
      <Partners />

      <RelatedProducts />
      <Partners />

      <Brands />
      <RelatedProducts />

      <Newsletter />

      <Footer />
    </QueryClientProvider>
  )
}

export default App
