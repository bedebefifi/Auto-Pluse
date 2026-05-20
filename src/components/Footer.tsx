import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-light)', background: '#05080f' }}>
      <div className="section-container" style={{ paddingBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Авто<span style={{ color: 'var(--accent)' }}>Плюс</span></h3>
            <p style={{ color: 'var(--text-secondary)' }}>Качественное обслуживание, прозрачные цены и гарантия на все виды работ.</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Контакты</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={18} color="var(--accent)" /> +7 (999) 000-00-00</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={18} color="var(--accent)" /> info@autoplus.ru</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={18} color="var(--accent)" /> ул. Промышленная, 10</span>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Режим работы</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Пн-Пт: 09:00 — 20:00<br />Сб-Вс: 10:00 — 18:00</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Авто Плюс. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;