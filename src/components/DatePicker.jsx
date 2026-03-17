import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa'];

function ChevronLeft() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,18 9,12 15,6"/></svg>;
}
function ChevronRight() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,18 15,12 9,6"/></svg>;
}
function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
function formatDisplay(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d} ${MONTHS[parseInt(m,10)-1].slice(0,3)} ${y}`;
}
function toYMD(year, month, day) {
  return `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

export default function DatePicker({ id, label, value, onChange, minDate }) {
  const today      = new Date();
  const initDate   = value ? new Date(value) : today;
  const [viewYear,  setViewYear]  = useState(initDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initDate.getMonth());
  const [open,      setOpen]      = useState(false);
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // sync view when value changes externally
  useEffect(() => {
    if (value) {
      const d = new Date(value);
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
    }
  }, [value]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const selectDay = (day) => {
    const ymd = toYMD(viewYear, viewMonth, day);
    onChange({ target: { name: id, value: ymd } });
    setOpen(false);
  };

  const isSelected = (day) => value === toYMD(viewYear, viewMonth, day);
  const isToday    = (day) => {
    const t = new Date();
    return day === t.getDate() && viewMonth === t.getMonth() && viewYear === t.getFullYear();
  };
  const isDisabled = (day) => {
    if (!minDate) return false;
    return toYMD(viewYear, viewMonth, day) < minDate;
  };

  const daysInMonth  = getDaysInMonth(viewYear, viewMonth);
  const firstDaySlot = getFirstDayOfMonth(viewYear, viewMonth);
  const cells        = Array.from({ length: firstDaySlot + daysInMonth }, (_, i) =>
    i < firstDaySlot ? null : i - firstDaySlot + 1
  );

  const hasValue = !!value;

  return (
    <div className="dp-wrap" ref={ref}>
      {/* Trigger */}
      <div
        className={`dp-trigger ${open ? 'dp-trigger--open' : ''} ${hasValue ? 'dp-trigger--filled' : ''}`}
        onClick={() => setOpen(o => !o)}
        role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
        id={id}
      >
        <span className="dp-trigger-icon"><CalendarIcon /></span>
        <div className="dp-trigger-inner">
          <span className={`dp-label ${hasValue || open ? 'dp-label--up' : ''}`}>{label}</span>
          {hasValue && <span className="dp-value">{formatDisplay(value)}</span>}
        </div>
        <motion.span
          className="dp-chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight style={{ transform:'rotate(90deg)' }} />
        </motion.span>
      </div>

      {/* Dropdown calendar */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="dp-calendar"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.25,0.46,0.45,0.94] }}
          >
            {/* Month nav */}
            <div className="dp-nav">
              <button className="dp-nav-btn" onClick={prevMonth} type="button"><ChevronLeft /></button>
              <span className="dp-nav-label">{MONTHS[viewMonth]} {viewYear}</span>
              <button className="dp-nav-btn" onClick={nextMonth} type="button"><ChevronRight /></button>
            </div>

            {/* Day headers */}
            <div className="dp-grid">
              {DAYS.map(d => (
                <div key={d} className="dp-day-hdr">{d}</div>
              ))}

              {/* Cells */}
              {cells.map((day, i) => (
                <div key={i} className={[
                  'dp-day',
                  day === null       ? 'dp-day--empty'    : '',
                  day && isSelected(day) ? 'dp-day--sel'  : '',
                  day && isToday(day)    ? 'dp-day--today' : '',
                  day && isDisabled(day) ? 'dp-day--dis'   : '',
                ].join(' ')}
                  onClick={() => day && !isDisabled(day) && selectDay(day)}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="dp-footer">
              <button className="dp-footer-btn" type="button"
                onClick={() => { const t = new Date(); setViewYear(t.getFullYear()); setViewMonth(t.getMonth()); }}>
                Today
              </button>
              {value && (
                <button className="dp-footer-btn dp-footer-btn--clear" type="button"
                  onClick={() => { onChange({ target: { name: id, value: '' } }); setOpen(false); }}>
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
