import { motion } from 'framer-motion';

function MapPinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
    </svg>
  );
}

function EventBanner() {
  return (
    <motion.div
      className="event-banner"
      initial={{ y: -60 }} animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container">
        <div className="event-banner-inner">
          {/* Live badge removed */}

          <div className="event-banner-items">
            <span className="event-banner-item">
              <CalendarIcon /> March 17, 2025
            </span>
            <span className="event-banner-sep">·</span>
            <span className="event-banner-item">
              <ClockIcon /> 9:00 AM – 5:00 PM
            </span>
            <span className="event-banner-sep">·</span>
            <span className="event-banner-item">
              <MapPinIcon /> Engineering Showcase Venue
            </span>
          </div>

          <a href="#schedule" className="event-banner-cta">
            View Schedule →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default EventBanner;
