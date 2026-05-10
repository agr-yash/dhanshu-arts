import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const paintings = [
    {
      id: 1,
      title: 'The Tree of Life',
      medium: 'Natural Dyes on Handmade Paper',
      img: '/painting1.png'
    },
    {
      id: 2,
      title: 'Royal Procession',
      medium: 'Gold Foil and Poster Color on Silk',
      img: '/painting2.png'
    },
    {
      id: 3,
      title: 'Divine Lotus Pond',
      medium: 'Watercolors on Canvas',
      img: '/painting3.png'
    }
  ];

  return (
    <>
      <div className="container">
        <nav className="navbar" style={{ padding: scrolled ? '1rem 0' : '2rem 0', transition: 'all 0.3s ease' }}>
          <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="DhAnshu Arts Logo" style={{ height: '45px', width: 'auto', mixBlendMode: 'multiply' }} />
            DhAnshu Arts
          </div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <main>
        <section id="home" className="section container">
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Timeless Art,<br/>Handcrafted with Love.</h1>
              <p className="hero-subtitle">
                Discover exclusive, traditional Indian paintings. Every stroke tells a story of heritage, spirituality, and meticulous craftsmanship passed down through generations.
              </p>
              <a href="#gallery" className="btn">Explore Gallery</a>
            </div>
            <div className="hero-image-wrapper">
              <img src="/painting1.png" alt="Hero Featured Painting" className="hero-image" />
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section section">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>The Collection</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              A curated selection of authentic, handmade artworks bringing cultural richness to modern spaces.
            </p>
            
            <div className="gallery-grid">
              {paintings.map(painting => (
                <div key={painting.id} className="painting-card">
                  <div className="painting-img-wrapper">
                    <img src={painting.img} alt={painting.title} />
                  </div>
                  <div className="painting-info">
                    <h3 className="painting-title">{painting.title}</h3>
                    <p className="painting-medium">{painting.medium}</p>
                    <button className="btn" style={{ marginTop: '1rem', width: '100%', fontSize: '0.9rem', padding: '8px' }}>
                      Inquire Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="section container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <img src="/painting3.png" alt="Artist at work" style={{ borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Our Heritage</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                For over three decades, my mother has dedicated her life to preserving the traditional art forms of India. What started as a passion has blossomed into a legacy of exquisite handmade paintings.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                Each piece is created using techniques rooted in ancient traditions—from grinding natural stones for colors to using genuine gold foils. We believe art is not just decoration; it's a blessing for your home.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <img src="/logo.png" alt="DhAnshu Arts Logo" style={{ height: '50px', width: 'auto', mixBlendMode: 'multiply' }} />
            <h2 className="navbar-logo" style={{ margin: 0, fontSize: '1.5rem' }}>DhAnshu Arts</h2>
          </div>
          <p>© {new Date().getFullYear()} DhAnshu Arts. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Handcrafted in India</p>
        </div>
      </footer>
    </>
  );
}

export default App;
