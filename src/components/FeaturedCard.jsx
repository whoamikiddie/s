import { motion } from 'framer-motion';
import { avatarColors } from '../data/projects';
import { AISvg } from './ProjectSvgs';

function ArrowUpRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8,21 12,21 16,21"/><line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M7 4H2v3c0 3 2.5 5 5 5"/><path d="M17 4h5v3c0 3-2.5 5-5 5"/>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/>
    </svg>
  );
}

function FeaturedCard({ project, onClick }) {
  const initials = (name) =>
    name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();

  return (
    <motion.div
      className="featured-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => onClick(project)}
    >
      <span className="featured-tag">Featured Project</span>

      {/* SVG side */}
      <div className="featured-svg-side">
        <AISvg />
        <div className="featured-svg-overlay" />
      </div>

      {/* Content */}
      <div className="featured-content">
        <motion.div
          className="featured-dept"
          style={{ color: '#9B8FFF' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.dept.toUpperCase()} DEPARTMENT
        </motion.div>

        <motion.h2
          className="featured-title"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28 }}
        >
          {project.title}
        </motion.h2>

        <motion.p
          className="featured-desc"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.34 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="featured-team"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="card-avatars">
            {project.team.slice(0, 4).map((m, i) => (
              <div key={i} className="card-avatar"
                style={{ background: avatarColors[i % avatarColors.length] }} title={m}>
                {initials(m)}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', marginLeft: 8 }}>
            {project.team.join(', ')}
          </span>
        </motion.div>

        {project.award && (
          <motion.div
            className="featured-award"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <TrophyIcon /> {project.awardShort}
          </motion.div>
        )}

        <motion.button
          className="btn-primary"
          style={{ alignSelf: 'flex-start' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          View Details <ArrowUpRightIcon />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default FeaturedCard;
