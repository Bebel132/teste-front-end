import './index.scss'
import Header from './components/header/header.tsx'
import Banner from './components/banner/banner.tsx'
import Categories from './components/categories/categories.tsx'
import RelatedProducts from './components/relatedProducts/relatedProducts.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Banner />
      <Categories />
      <RelatedProducts />
    </QueryClientProvider>
  )
}

export default App
