export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2>Encuéntranos</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Dirección</h3>
                <p>Calle Principal #123, Centro</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>Teléfono</h3>
                <p>+52 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <h3>Horario</h3>
                <p>Lun - Vie: 7:00 AM - 9:00 PM<br />Sáb - Dom: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">
              <span>🗺️</span>
              <p>Aquí va tu mapa de ubicación</p>
              <small>Integra Google Maps o tu servicio de mapas favorito</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}