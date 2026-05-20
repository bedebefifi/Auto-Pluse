const Hero = () => {
  return (
    <section className="hero" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.1)'
    }}>
      <div className="section-container">
        <h1 className="animate-slide-up delay-1" style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: 800, 
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          letterSpacing: '-0.02em'
        }}>
          Надежный сервис для <br />
          <span style={{ color: 'var(--accent-10)' }}>вашего автомобиля</span>
        </h1>
        <p className="animate-slide-up delay-2" style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
          maxWidth: '800px', 
          margin: '0 auto 2.5rem',
          color: 'rgba(226, 232, 240, 0.8)'
        }}>
          Профессиональное обслуживание и ремонт легковых авто в «Авто Плюс». 
          Качество дилерского центра по доступной цене.
        </p>
        <div className="animate-slide-up delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#booking" className="btn-primary">Записаться на сервис</a>
          <a href="#prices" className="btn-secondary">Смотреть цены</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
