import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Solutions } from './components/pages/Solutions';
import { Services } from './components/pages/Services';
import { Products } from './components/pages/Products';
import { Partners } from './components/pages/Partners';
import { Contact } from './components/pages/Contact';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Ensure body has dark background
    document.body.style.backgroundColor = '#000000';
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'solutions':
        return <Solutions onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'partners':
        return <Partners onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}
