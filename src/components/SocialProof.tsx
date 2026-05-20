import React from 'react';

const SocialProof = () => {
  const brands = ['BOSCH', 'CASTROL', 'SHELL', 'BREMBO', 'MOBIL 1', 'MOTUL'];

  return (
    <section style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-container" style={{ padding: '3rem 2rem' }}>
        <p style={{ 
          textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', 
          textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' 
        }}>
          Используем только проверенные бренды
        </p>
        <div style={{ 
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(2rem, 6vw, 5rem)' 
        }}>
          {brands.map((brand, index) => (
            <div key={index} style={{
              fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-secondary)',
              opacity: 0.5, transition: 'all 0.3s ease', cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.5';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;