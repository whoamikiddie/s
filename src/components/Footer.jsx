function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GradCapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3.53 1.67 8.47 1.67 12 0v-5"/>
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="navbar-brand" style={{ marginBottom: 0 }}>
              <div className="brand-icon"><GradCapIcon /></div>
              <div className="brand-text">
                <span>InnoSphere</span>
                <span>Student Project Showcase</span>
              </div>
            </div>
            <p>
              A curated platform showcasing innovative engineering student projects across
              all departments — celebrating excellence in technology and research.
            </p>
          </div>


          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#projects">Browse Projects</a></li>
              <li><a href="#">Submit Project</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 InnoSphere. All rights reserved.</span>
          <span>Student Engineering Showcase Platform</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
