import React from 'react';

const CTASection = () => {
  return (
    <section id="booking" style={{ position: 'relative' }}>
      <div className="section-container">
        <div className="glass-card" style={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'center', 
          textAlign: 'center', padding: '4rem 2rem', background: 'rgba(30, 41, 59, 0.6)' 
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
            Запишитесь на диагностику
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '3rem' }}>
            Оставьте заявку сейчас и получите бесплатную проверку ходовой части 
            при любом виде ремонтных работ.
          </p>
          
          <form style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Ваше имя" className="modern-input" required />
            <input type="tel" placeholder="Номер телефона" className="modern-input" required />
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;