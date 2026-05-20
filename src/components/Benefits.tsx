import { Wrench, ShieldCheck, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Wrench size={40} />,
    title: 'Любая сложность',
    description: 'От планового ТО до капитального ремонта двигателя и КПП. Современное диагностическое оборудование.'
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'Честная гарантия',
    description: 'Предоставляем официальную гарантию 1 год на все выполненные работы и установленные запчасти.'
  },
  {
    icon: <Clock size={40} />,
    title: 'Точно в срок',
    description: 'Ценим ваше время. Согласовываем сроки заранее и строго их придерживаемся. Без сюрпризов в чете.'
  }
];

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="section-container">
        <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Почему выбирают нас</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{ 
              padding: '2.5rem', 
              backgroundColor: 'rgba(226, 232, 240, 0.03)', 
              borderRadius: '8px',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ color: 'var(--accent-10)', marginBottom: '1.5rem' }}>
                {benefit.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{benefit.title}</h3>
              <p style={{ color: 'rgba(226, 232, 240, 0.7)', fontSize: '1.1rem' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
