import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { deptColors, avatarColors } from '../data/projects';
import { projectSvgMap } from './ProjectSvgs';

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8,21 12,21 16,21"/><line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M7 4H2v3c0 3 2.5 5 5 5"/><path d="M17 4h5v3c0 3-2.5 5-5 5"/>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/>
    </svg>
  );
}

function Modal({ project, onClose }) {
  const colors = deptColors[project.dept] || deptColors.cse;
  const SvgComponent = projectSvgMap[project.id];
  const initials = (name) => name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={e => e.stopPropagation()}
        >
          {/* SVG Banner */}
          <div className="modal-svg-banner">
            {SvgComponent && <SvgComponent />}
            <div className="modal-svg-overlay" />
            <button className="modal-close" onClick={onClose}><XIcon /></button>
          </div>

          <div className="modal-body">
            <span className="modal-dept"
              style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
              {project.dept.toUpperCase()} DEPARTMENT
            </span>

            <h2 className="modal-title">{project.title}</h2>

            {project.award && (
              <div className="modal-award-banner">
                <TrophyIcon /> {project.award}
              </div>
            )}

            <div className="modal-label">About the Project</div>
            <p className="modal-desc">{project.description}</p>

            <div className="modal-label">Technologies Used</div>
            <div className="modal-tags">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i} className="modal-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="modal-label">Team Members</div>
            <div className="modal-team-list">
              {project.team.map((member, i) => (
                <motion.div
                  key={i} className="modal-member"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <div className="modal-member-av"
                    style={{ background: avatarColors[i % avatarColors.length] }}>
                    {initials(member)}
                  </div>
                  <span className="modal-member-name">{member}</span>
                </motion.div>
              ))}
            </div>

            <div className="modal-meta-row">
              {[
                { label: 'Academic Year', value: project.year, icon: <CalendarIcon /> },
                { label: 'Domain', value: project.domain, icon: <MicIcon /> },
                { label: 'Faculty Guide', value: project.guide, icon: <UserIcon /> },
                { label: 'Department', value: project.dept.toUpperCase(), icon: <LayersIcon />, color: colors.text },
              ].map((item, i) => (
                <div key={i} className="modal-meta-item">
                  <div className="modal-meta-label">{item.label}</div>
                  <div className="modal-meta-value" style={item.color ? { color: item.color } : {}}>
                    {item.icon} {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
