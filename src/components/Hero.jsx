import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19,12 12,19 5,12"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  );
}



function Hero({ total }) {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero-eyebrow-dot" />
          Annual Project Exhibition · Engineering Showcase
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Student <span className="gradient-text">Project</span>
          <br />Showcase
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover groundbreaking engineering innovations, cutting-edge research,
          and award-winning student projects from across all departments.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Explore Projects <ArrowDownIcon />
          </motion.a>
          <Link to="/submit-event" className="btn-ghost" style={{ textDecoration:'none' }}>
            Submit Your Event <ChevronRightIcon />
          </Link>
        </motion.div>


      </div>
    </section>
  );
}

export default Hero;
