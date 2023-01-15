import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';

function App() {
  return (
    <>
      <Navigation />

      <div className="container mx-auto max-w-2xl pt-5" >
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
