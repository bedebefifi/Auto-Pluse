import React from 'react';
import { Wrench, ShieldCheck, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Wrench size={32} />,
    title: 'Любая сложность',
    description: 'От планового ТО до капитального ремонта двигателя и КПП. Современное диагностическое оборудование.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Честная гарантия',
    description: 'Предоставляем официальную гарантию 1 год на все выполненные работы и установленные запчасти.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Точно в срок',
    description: 'Ценим ваше время. Согласовываем сроки заранее и строго их придерживаемся. Без сюрпризов в чеке.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="section-container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card">
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{benefit.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;