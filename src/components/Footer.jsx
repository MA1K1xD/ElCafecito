export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 El Cafecito — Todos los derechos reservados</p>
          <div className="social-links">
            <a href="https://www.instagram.com/gitc.at/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/camera.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>
    </footer>
  );
}