import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'radial-gradient(circle at 50% 30%, var(--bg-gradient-center) 0%, var(--bg-main) 70%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Декоративное свечение на фоне */}
      <div style={{
        position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px', background: 'var(--accent)', 
        filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%', zIndex: 0
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h1 className="animate-fade-up delay-1" style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
          fontWeight: 800, 
          lineHeight: 1.1,
          marginBottom: '1.5rem'
        }}>
          Надежный сервис для <br />
          <span style={{ 
            background: 'linear-gradient(to right, #F59E0B, #FCD34D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            вашего автомобиля
          </span>
        </h1>
        <p className="animate-fade-up delay-2" style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
          color: 'var(--text-secondary)',
          maxWidth: '600px', 
          margin: '0 auto 3rem'
        }}>
          Профессиональное обслуживание и ремонт легковых авто. 
          Качество дилерского центра без переплат и скрытых услуг.
        </p>
        <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#booking" className="btn btn-primary">Записаться на сервис</a>
          <a href="#benefits" className="btn btn-secondary">Подробнее</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;