import { useEffect, useState } from 'react';

const BrandName = () => (
  <span>
    <span style={{ color: 'var(--color-primary)', fontWeight: '900', fontStyle: 'italic', fontSize: '1.2em' }}>D</span>h
    <span style={{ color: 'var(--color-primary)', fontWeight: '900', fontStyle: 'italic', fontSize: '1.2em' }}>A</span>nshu Arts
  </span>
);

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
            <BrandName />
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
                    <a href={`mailto:contact@dhanshuarts.com?subject=Inquiry: ${painting.title}`} className="btn" style={{ marginTop: '1rem', width: '100%', fontSize: '0.9rem', padding: '10px', display: 'inline-block', textAlign: 'center', boxSizing: 'border-box' }}>
                      Inquire Details
                    </a>
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
                Founded by Anshu and Dheeraj Agarwal—a lovely couple united by their profound love for art—DhAnshu Arts is a testament to India's rich cultural legacy. For over three decades, they have dedicated their lives to preserving and promoting traditional art forms. What started as a shared passion has blossomed into a magnificent collection of exquisite handmade paintings.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                Together, they ensure every piece is created using techniques rooted in ancient traditions—from grinding natural stones for colors to delicately applying genuine gold foils. To Anshu and Dheeraj, art is not just decoration; it's a blessing and a piece of history for your home.
              </p>
            </div>
          </div>
        </section>

        <section id="policies" className="section container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', borderTop: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Transparent Pricing</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>Our authentic art pieces are fairly and transparently priced, reflecting hundreds of hours of intricate craftsmanship and the use of premium, genuine materials.</p>
            </div>
            <div style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', borderTop: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Fast Delivery</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>We ensure safe, fully insured **Pan-India delivery within 7 working days**. Your masterpiece will be meticulously packaged and delivered right to your doorstep.</p>
            </div>
            <div style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', borderTop: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Purchase Policy</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>To maintain the exclusivity and pristine gallery condition of our handcrafted paintings, all sales are final. We maintain a strict **no return, no exchange** policy.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="section container" style={{ backgroundColor: 'white', padding: '4rem 2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', marginBottom: '4rem', textAlign: 'center', borderTop: '4px solid var(--color-accent)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Visit Our Studio</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We'd love to welcome you. Experience the rich heritage of our artwork in person or reach out for commissions and inquiries.
          </p>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', backgroundColor: 'var(--color-bg)', padding: '1.5rem 2.5rem', borderRadius: '15px', boxShadow: 'var(--box-shadow-hover)', border: '1px solid rgba(0,0,0,0.05)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong style={{ display: 'block', color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '4px' }}>DhAnshu Arts</strong>
              <span style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: '1.5' }}>Near Bajaj World, Girital Road,<br/>Kashipur, Uttarakhand, India.</span>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:contact@dhanshuarts.com" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '14px 32px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Email Us
            </a>
            <a href="tel:+919760046127" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', border: '2px solid var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', padding: '12px 24px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Anshu: +91 9760046127
            </a>
            <a href="tel:+919897646127" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', border: '2px solid var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', padding: '12px 24px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Dheeraj: +91 9897646127
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <img src="/logo.png" alt="DhAnshu Arts Logo" style={{ height: '50px', width: 'auto', mixBlendMode: 'multiply' }} />
            <h2 className="navbar-logo" style={{ margin: 0, fontSize: '1.5rem' }}><BrandName /></h2>
          </div>
          <p>© {new Date().getFullYear()} DhAnshu Arts. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Handcrafted in India</p>
        </div>
      </footer>
    </>
  );
}

export default App;
