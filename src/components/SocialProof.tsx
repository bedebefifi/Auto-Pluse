const SocialProof = () => {
  // Имитация логотипов брендов через текст
  const brands = ['BOSCH', 'CASTROL', 'SHELL', 'BREMBO', 'MOBIL 1', 'MOTUL'];

  return (
    <section className="social-proof" style={{ backgroundColor: 'rgba(226, 232, 240, 0.02)', padding: '4rem 0' }}>
      <div className="section-container" style={{ padding: '0 2rem' }}>
        <p style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>Используем только проверенные бренды</p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '3rem' 
        }}>
          {brands.map((brand, index) => (
            <div key={index} style={{ 
              fontSize: '1.5rem', 
              fontWeight: 900, 
              color: 'var(--structure-30)', 
              opacity: 0.4,
              filter: 'grayscale(100%)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.filter = 'grayscale(0)';
              e.currentTarget.style.color = 'var(--accent-10)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '0.4';
              e.currentTarget.style.filter = 'grayscale(100%)';
              e.currentTarget.style.color = 'var(--structure-30)';
            }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
