import { Phone, Mail, MapPin, MessageSquare, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#070b14', 
      padding: '4rem 0 2rem', 
      borderTop: '1px solid rgba(226, 232, 240, 0.05)' 
    }}>
      <div className="section-container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '4rem' 
      }}>
        <div>
          <h3 style={{ color: 'var(--accent-10)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Авто Плюс</h3>
          <p style={{ color: 'rgba(226, 232, 240, 0.6)', lineHeight: 1.8 }}>
            Профессиональный автосервис в вашем городе. Качественное обслуживание, 
            прозрачные цены и гарантия на все виды работ.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Контакты</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(226, 232, 240, 0.6)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Phone size={18} color="var(--accent-10)" /> +7 (999) 000-00-00
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Mail size={18} color="var(--accent-10)" /> info@autoplus.ru
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MapPin size={18} color="var(--accent-10)" /> ул. Промышленная, 10
            </li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Режим работы</h4>
          <p style={{ color: 'rgba(226, 232, 240, 0.6)', marginBottom: '1.5rem' }}>
            Пн-Пт: 09:00 — 20:00<br />
            Сб-Вс: 10:00 — 18:00
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <MessageSquare size={24} style={{ cursor: 'pointer' }} />
            <PhoneCall size={24} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '4rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(226, 232, 240, 0.05)',
        color: 'rgba(226, 232, 240, 0.3)',
        fontSize: '0.9rem'
      }}>
        &copy; {new Date().getFullYear()} Авто Плюс. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
