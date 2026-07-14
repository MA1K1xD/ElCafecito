export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2>Encuéntranos</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              <div>
                <h3>Dirección</h3>
                <p>Calle Principal #123, Centro</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/images/phone.svg" alt="Teléfono" className="info-icon" />
              <div>
                <h3>Teléfono</h3>
                <p>+52 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/images/clock-arrow-right.svg" alt="Horario" className="info-icon" />
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