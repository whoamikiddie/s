import { motion } from 'framer-motion';
import { deptColors, avatarColors } from '../data/projects';
import { projectSvgMap } from './ProjectSvgs';

function ArrowUpRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function ProjectCard({ project, onClick, index }) {
  const colors = deptColors[project.dept] || deptColors.cse;
  const SvgComponent = projectSvgMap[project.id];

  const initials = (name) =>
    name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      layout
    >
      {/* SVG Banner */}
      <div className="card-svg-banner">
        {SvgComponent && <SvgComponent />}
        <div className="card-svg-banner-overlay" />
        <span
          className="card-dept-badge"
          style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
        >
          {project.dept.toUpperCase()}
        </span>
      </div>

      <div className="card-body">
        {/* Team */}
        <div className="card-team">
          <div className="card-avatars">
            {project.team.slice(0, 3).map((member, i) => (
              <div key={i} className="card-avatar"
                style={{ background: avatarColors[i % avatarColors.length] }} title={member}>
                {initials(member)}
              </div>
            ))}
            {project.team.length > 3 && (
              <div className="card-avatar" style={{ background: '#222240' }}>+{project.team.length - 3}</div>
            )}
          </div>
          <span className="card-team-name">{project.team.length} members</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>

        <div className="card-tags">
          {project.tags.slice(0, 3).map((tag, i) => <span key={i} className="tag">{tag}</span>)}
          {project.tags.length > 3 && <span className="tag">+{project.tags.length - 3}</span>}
        </div>

        <div className="card-footer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span className="card-year"><CalendarIcon /> {project.year}</span>
            {project.award && (
              <span className="card-award"><TrophyIcon /> {project.awardShort}</span>
            )}
          </div>
          <motion.button
            className="card-view-btn"
            whileTap={{ scale: 0.95 }}
            onClick={e => { e.stopPropagation(); onClick(project); }}
          >
            View <ArrowUpRightIcon />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
