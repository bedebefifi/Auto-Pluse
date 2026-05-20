const CTASection = () => {
  return (
    <section className="cta" id="booking" style={{ 
      backgroundColor: 'var(--accent-10)', 
      color: 'var(--bg-60)',
      padding: '0'
    }}>
      <div className="section-container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center' 
      }}>
        <h2 style={{ color: 'var(--bg-60)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Запишитесь на диагностику сегодня</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', marginBottom: '2.5rem', fontWeight: 500 }}>
          Оставьте заявку сейчас и получите бесплатную проверку ходовой части 
          при любом виде ремонтных работ.
        </p>
        
        <form style={{ 
          width: '100%', 
          maxWidth: '500px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem' 
        }} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Ваше имя" style={{ 
            padding: '1rem', 
            borderRadius: '4px', 
            border: 'none', 
            fontSize: '1rem' 
          }} />
          <input type="tel" placeholder="Номер телефона" style={{ 
            padding: '1rem', 
            borderRadius: '4px', 
            border: 'none', 
            fontSize: '1rem' 
          }} />
          <button type="submit" style={{ 
            backgroundColor: 'var(--bg-60)', 
            color: 'var(--accent-10)', 
            padding: '1rem', 
            borderRadius: '4px', 
            border: 'none', 
            fontSize: '1.1rem', 
            fontWeight: 700, 
            cursor: 'pointer',
            marginTop: '0.5rem'
          }}>Отправить заявку</button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
