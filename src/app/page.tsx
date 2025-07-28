'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Vše pro stavby s.r.o. | Rekonstrukce a stavební práce";
    
    const faviconUrl = "https://via.placeholder.com/32x32/2563EB/FFFFFF?text=VS";
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      document.head.appendChild(link);
    }
    link.setAttribute('href', faviconUrl);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#o-nas', text: 'O nás' },
    { href: '#sluzby', text: 'Služby' },
    { href: '#reference', text: 'Reference' },
    { href: '#kontakt', text: 'Kontakt' },
  ];

  const services = [
    {
      name: 'Rekonstrukce bytových jader a koupelen',
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/bath.svg',
    },
    {
      name: 'Stavební a zednické práce',
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-wall.svg',
    },
    {
      name: 'Obkladačské práce',
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layout-grid.svg',
    },
    {
      name: 'Malířské a lakýrnické práce',
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/paint.svg',
    },
    {
      name: 'Instalatérské a topenářské práce',
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tool.svg',
    },
    {
      name: 'Elektrikářské práce',
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/plug.svg',
    },
    { name: 'Podlahářské práce', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layers-subtract.svg' },
  ];
  
   const galleryImages = [
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/gallery-9.jpg',
    '/images/gallery-10.jpg',
    '/images/gallery-11.jpg',
    '/images/gallery-12.jpg',
    '/images/gallery-13.jpg',
    '/images/gallery-14.jpg',
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-blue-600">Vše pro stavby</a>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                  {link.text}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                <img
                  src={isMenuOpen ? "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" : "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg"}
                  alt="Menu Icon"
                  className="w-8 h-8 text-gray-700"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={toggleMenu} className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center bg-gray-700">
            <img src="/images/content-3.jpg" alt="Moderní koupelna" className="absolute inset-0 w-full h-full object-cover z-0"/>
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="relative z-20 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">Kompletní rekonstrukce a stavební práce</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">Specializujeme se na rekonstrukce koupelen, bytových jader a veškeré stavební činnosti v Praze a okolí.</p>
                <a href="#kontakt" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">Nezávazná poptávka</a>
            </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose lg:prose-lg max-w-none text-gray-600">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O naší společnosti</h2>
                <p>
                  Společnost VŠE PRO STAVBY s.r.o. zahájila svoji činnost v roce 2012. Zaměřujeme se na kompletní rekonstrukce bytových jader a koupelen, a dále také na stavební, obkladačské, malířské, lakýrnické, instalatérské, topenářské, elektrikářské a podlahářské práce.
                </p>
                <p>
                  Naší prioritou je dobře odvedená práce, individuální přístup a spokojenost všech našich zákazníků. Pracujeme s moderními materiály a technologickými postupy.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-xl">
                 <img src="/images/content-2.jpg" alt="Stavební práce" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nabídka služeb</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Nabízíme komplexní portfolio služeb pro vaši stavbu či rekonstrukci.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <img src={service.icon} alt={`${service.name} icon`} className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="reference" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Reference naší práce</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Prohlédněte si ukázky našich dokončených projektů a přesvědčte se o kvalitě.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img src={src} alt={`Realizace ${index + 1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Kontaktujte nás</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Máte dotaz nebo zájem o naše služby? Neváhejte se nám ozvat.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
                <div className="bg-gray-700 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Kontaktní údaje</h3>
                    <div className="space-y-4 text-gray-200">
                        <div className="flex items-center">
                            <img src='https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg' alt="Phone Icon" className="w-6 h-6 mr-3 text-blue-400"/>
                            <span>+420 774 425 425</span>
                        </div>
                        <div className="flex items-center">
                             <img src='https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg' alt="Email Icon" className="w-6 h-6 mr-3 text-blue-400"/>
                            <span>info@vseprostavby.cz</span>
                        </div>
                         <div className="flex items-start">
                            <img src='https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg' alt="Address Icon" className="w-6 h-6 mr-3 mt-1 text-blue-400 shrink-0"/>
                            <span>Poděbradská 574/101, Hloubětín, 198 00 Praha 9</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-700 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Fakturační údaje</h3>
                     <div className="space-y-4 text-gray-200">
                        <div className="flex items-center">
                             <img src='https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-skyscraper.svg' alt="Address Icon" className="w-6 h-6 mr-3 text-blue-400"/>
                            <span>VŠE PRO STAVBY s.r.o.</span>
                        </div>
                        <p><strong>IČ:</strong> 242 35 125</p>
                        <p><strong>DIČ:</strong> CZ24235125</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
            <p className="mt-2 text-sm">
                Vytvořeno s ♥ od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">DigitalFusion</a>
            </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
