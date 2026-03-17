import { motion } from 'framer-motion';
import { deptColors } from '../data/projects';

const depts = [
  { id: 'cse', name: 'Computer Science', short: 'CSE', count: 2, icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )},
  { id: 'ece', name: 'Electronics & Comm.', short: 'ECE', count: 1, icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
    </svg>
  )},
  { id: 'it', name: 'Information Tech.', short: 'IT', count: 2, icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="10" ry="4"/><path d="M2 12c0 4.418 4.477 8 10 8s10-3.582 10-8"/><line x1="2" y1="12" x2="22" y2="12"/>
    </svg>
  )},
  { id: 'eee', name: 'Electrical Engg.', short: 'EEE', count: 2, icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
    </svg>
  )},
  { id: 'mech', name: 'Mechanical Engg.', short: 'MECH', count: 1, icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 1 1-14.14 0"/>
    </svg>
  )},
  { id: 'civil', name: 'Civil Engineering', short: 'CIVIL', count: 0, icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  )},
];

function DeptSection({ onFilter }) {
  return (
    <section className="dept-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Departments</span>
          <h2 className="section-title">Browse by Department</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
            Projects spanning all 6 engineering departments
          </p>
        </motion.div>

        <div className="dept-grid">
          {depts.map((d, i) => {
            const colors = deptColors[d.id] || deptColors.cse;
            return (
              <motion.div
                key={d.id}
                className="dept-card"
                style={{ '--dept-color': colors.text, '--dept-bg': colors.bg, '--dept-border': colors.border }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => onFilter(d.id)}
              >
                <div className="dept-card-icon" style={{ color: colors.text, background: colors.bg, border: `1px solid ${colors.border}` }}>
                  {d.icon}
                </div>
                <div className="dept-card-info">
                  <div className="dept-card-short" style={{ color: colors.text }}>{d.short}</div>
                  <div className="dept-card-name">{d.name}</div>
                </div>
                <div className="dept-card-count" style={{ color: colors.text }}>
                  {d.count} <span>project{d.count !== 1 ? 's' : ''}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DeptSection;
