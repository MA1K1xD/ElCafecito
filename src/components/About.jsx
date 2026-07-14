export default function About() {
  const features = [
    { icon: '/images/coffee-bean.svg', title: 'Café de Especialidad', desc: 'Tostado artesanalmente en lotes pequeños' },
    { icon: '/images/ice-cream-bowl.svg', title: 'Postres Caseros', desc: 'Preparados frescos cada mañana' },
    { icon: '/images/leaf.svg', title: 'Ingredientes Frescos', desc: 'De proveedores locales de confianza' },
  ];

  return (
    <section className="about" id="nosotros">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Desde 2015, <strong>El Cafecito</strong> ha sido el lugar favorito de la comunidad
              para disfrutar de café de especialidad, postres caseros y una atmósfera acogedora.
            </p>
            <p>Utilizamos ingredientes frescos y de origen local para preparar cada platillo con amor y dedicación.</p>
          </div>
          <div className="about-features">
            {features.map((f, i) => (
              <div className="feature" key={i}>
                <img src={f.icon} alt={f.title} className="feature-icon" />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}