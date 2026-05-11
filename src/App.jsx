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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const paintings = [
    {
      id: 1,
      title: 'The Tree of Life',
      medium: 'Madhubani Style • Natural Dyes on Handmade Paper',
      price: '₹5,500 INR',
      img: '/painting1.png'
    },
    {
      id: 2,
      title: 'Royal Procession',
      medium: 'Tanjore Art • Gold Foil and Poster Color on Silk',
      price: '₹12,000 INR',
      img: '/painting2.png'
    },
    {
      id: 3,
      title: 'Devbhoomi Folk Celebration',
      medium: 'Pahari Style • Natural Stone Colors on Canvas',
      price: '₹15,000 INR',
      img: '/uttarakhand_1.png'
    },
    {
      id: 4,
      title: 'Himalayan Temple Serenity',
      medium: 'Garhwal School • Watercolors with Gold Detail',
      price: '₹9,500 INR',
      img: '/uttarakhand_2.png'
    },
    {
      id: 5,
      title: 'Divine Lotus Pond',
      medium: 'Traditional Watercolor • Fine Canvas',
      price: '₹8,200 INR',
      img: '/painting3.png'
    }
  ];

  return (
    <>
      <div className="hero-wrapper">
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
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

      <section id="home" className="section container" style={{ paddingTop: '2rem', position: 'relative', zIndex: 10 }}>
          <div className="hero">
            <div className="hero-content glass-panel animate-on-scroll fade-up">
              <span style={{ display: 'inline-block', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Essence of Devbhoomi</span>
              <h1 className="hero-title">Timeless Art,<br/>Handcrafted with Love.</h1>
              <p className="hero-subtitle">
                Discover exclusive, traditional Indian paintings inspired by the serene beauty of Uttarakhand. Every stroke tells a story of heritage, spirituality, and meticulous craftsmanship passed down through generations.
              </p>
              <a href="#gallery" className="btn">Explore Gallery</a>
            </div>
            <div className="hero-image-wrapper animate-on-scroll fade-scale stagger-2">
              <img src="/painting1.png" alt="Hero Featured Painting" className="hero-image aipan-border" />
            </div>
          </div>
        </section>
      </div>

      <main>

        <section id="gallery" className="gallery-section section">
          <div className="container">
            <h2 className="animate-on-scroll fade-up" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>The Collection</h2>
            <p className="animate-on-scroll fade-up stagger-1" style={{ textAlign: 'center', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              A curated selection of authentic, handmade artworks bringing cultural richness to modern spaces.
            </p>
            
            <div className="gallery-grid">
              {paintings.map((painting, index) => (
                <div key={painting.id} className={`painting-card animate-on-scroll fade-up stagger-${(index % 5) + 1}`}>
                  <div className="painting-img-wrapper">
                    <img src={painting.img} alt={painting.title} />
                  </div>
                  <div className="painting-info">
                    <h3 className="painting-title">{painting.title}</h3>
                    <p className="painting-medium">{painting.medium}</p>
                    <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-primary)', marginTop: '0.8rem', letterSpacing: '0.5px' }}>
                      {painting.price}
                    </div>
                    <a href={`https://wa.me/919760046127?text=${encodeURIComponent(`Namaste DhAnshu Arts! 🙏 I am interested in purchasing the painting '${painting.title}' (${painting.price}). Can you please confirm its availability?`)}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '1rem', width: '100%', fontSize: '0.9rem', padding: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxSizing: 'border-box', fontWeight: 'bold', backgroundColor: '#25D366', color: 'white', border: 'none' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path></svg>
                      Buy via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="section container animate-on-scroll fade-up" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }} className="animate-on-scroll fade-scale stagger-1">
              <img src="/painting3.png" alt="Artist at work" className="aipan-border" style={{ borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }} className="animate-on-scroll fade-up stagger-2">
              <h2 style={{ fontSize: '2.5rem' }}>Our Heritage</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                Founded by Anshu and Dheeraj Agarwal—a lovely couple united by their profound love for art—DhAnshu Arts is a testament to India's rich cultural legacy. For over three decades, they have dedicated their lives to preserving and promoting traditional art forms. What started as a shared passion has blossomed into a magnificent collection of exquisite handmade paintings.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                Together, they ensure every single masterpiece is entirely <strong>handmade</strong> using techniques rooted in ancient traditions—from grinding natural stones for colors to delicately applying genuine gold foils by hand. To Anshu and Dheeraj, this handmade art is not just decoration; it's a blessing and a timeless piece of history for your home.
              </p>
            </div>
          </div>
        </section>

        <section id="policies" className="section container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="animate-on-scroll fade-up stagger-1" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', borderTop: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Transparent Pricing</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>Our authentic art pieces are fairly and transparently priced, reflecting hundreds of hours of intricate craftsmanship and the use of premium, genuine materials.</p>
            </div>
            <div className="animate-on-scroll fade-up stagger-2" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', borderTop: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Fast Delivery</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>We ensure safe, fully insured <strong>Pan-India delivery within 7 working days</strong>. Your masterpiece will be meticulously packaged and delivered right to your doorstep.</p>
            </div>
            <div className="animate-on-scroll fade-up stagger-3" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', borderTop: '3px solid var(--color-accent)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Purchase Policy</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>To maintain the exclusivity and pristine gallery condition of our handcrafted paintings, all sales are final. We maintain a strict <strong>no return, no exchange</strong> policy.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="section container animate-on-scroll fade-up" style={{ backgroundColor: 'white', padding: '4rem 2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', marginBottom: '4rem', textAlign: 'center', borderTop: '4px solid var(--color-accent)' }}>
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
            <a href="https://wa.me/919760046127" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: 'white', border: '2px solid #25D366', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', padding: '12px 24px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path></svg>
              Message on WhatsApp
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
