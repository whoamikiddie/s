import { motion } from 'framer-motion';

const schedule = [
  { time: '9:00 AM',  event: 'Registration & Welcome',   desc: 'Participants register and set up their project stalls', type: 'ceremony' },
  { time: '9:30 AM',  event: 'Inaugural Ceremony',        desc: 'Chief Guest address and ribbon cutting',                type: 'ceremony' },
  { time: '10:00 AM', event: 'Project Exhibition Opens',  desc: 'All stalls open for public viewing and judging begins', type: 'main'     },
  { time: '12:00 PM', event: 'Lunch Break',               desc: 'Refreshments and networking session',                   type: 'break'    },
  { time: '1:00 PM',  event: 'Panel Evaluation Round',    desc: 'Expert panel evaluates shortlisted projects',           type: 'main'     },
  { time: '3:00 PM',  event: 'Industry Guest Lecture',    desc: 'Expert talk on emerging technologies in engineering',   type: 'ceremony' },
  { time: '4:00 PM',  event: 'Award Ceremony',            desc: 'Prize distribution for best projects across departments',type: 'award'   },
  { time: '5:00 PM',  event: 'Valedictory & Closing',     desc: 'Vote of thanks and certificate distribution',           type: 'ceremony' },
];

const typeStyles = {
  main:     { bg: 'rgba(108,99,255,0.1)',   border: 'rgba(108,99,255,0.28)',  dot: '#6C63FF'  },
  ceremony: { bg: 'rgba(67,230,197,0.07)',  border: 'rgba(67,230,197,0.22)',  dot: '#43E6C5'  },
  break:    { bg: 'rgba(100,100,130,0.07)', border: 'rgba(100,100,130,0.18)', dot: '#555575'  },
  award:    { bg: 'rgba(212,172,13,0.09)',  border: 'rgba(212,172,13,0.28)',  dot: '#D4AC0D'  },
};

const typeLabel = { main: 'Main Event', ceremony: 'Ceremony', break: 'Break', award: 'Awards' };

function Schedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Event Schedule</span>
          <h2 className="section-title">Day of Exhibition</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
            March 17, 2025 · Panimalar Engineering College, Chennai
          </p>
        </motion.div>

        <div className="schedule-list">
          {schedule.map((item, i) => {
            const c = typeStyles[item.type];
            return (
              <motion.div
                key={i} className="schedule-item"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25,0.46,0.45,0.94] }}
              >
                <div className="schedule-time">{item.time}</div>

                <div className="schedule-line">
                  <div className="schedule-dot" style={{ background: c.dot, boxShadow: `0 0 10px ${c.dot}80` }} />
                  {i < schedule.length - 1 && <div className="schedule-connector" />}
                </div>

                <div className="schedule-content" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                  <div className="schedule-event-row">
                    <span className="schedule-event">{item.event}</span>
                    <span className="schedule-type-badge" style={{ color: c.dot, background: `${c.dot}18`, border: `1px solid ${c.dot}40` }}>
                      {typeLabel[item.type]}
                    </span>
                  </div>
                  <div className="schedule-desc">{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
