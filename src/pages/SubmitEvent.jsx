import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import DatePicker from '../components/DatePicker';

/* ──────────────────────────────────────────────
   🔑  Web3Forms Setup (free, no template needed)
   1. Go to https://web3forms.com
   2. Enter YOUR EMAIL ADDRESS and click "Create Access Key"
   3. Check your inbox and copy the Access Key
   4. Paste it below — that's it!
────────────────────────────────────────────── */
const WEB3FORMS_KEY = '1d1567e8-21de-4bd4-b404-487d89b7630f';

/* ─── Icons ─── */
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
  </svg>
);
const icons = {
  arrow:    'M19 12H5M12 19l-7-7 7-7',
  send:     ['M22 2L11 13', 'M22 2L15 22 11 13 2 9l20-7z'],
  check:    'M20 6L9 17l-5-5',
  user:     ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'],
  mail:     ['M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', 'M22 6l-10 7L2 6'],
  building: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  text:     ['M17 10H3', 'M21 6H3', 'M21 14H3', 'M17 18H3'],
};

/* ─── Floating Label Field ─── */
function Field({ id, name, label, type = 'text', placeholder, value, onChange, error, icon, rows }) {
  const [focused, setFocused] = useState(false);
  const active = focused || !!value;
  return (
    <div className={`sf-field ${error ? 'sf-field--err' : ''} ${active ? 'sf-field--active' : ''}`}>
      <div className="sf-field-icon">{icon}</div>
      <div className="sf-field-inner">
        <label htmlFor={id} className={`sf-label ${active ? 'sf-label--up' : ''}`}>{label}</label>
        {rows ? (
          <textarea id={id} name={name} rows={rows} value={value} onChange={onChange}
            placeholder={active ? placeholder : ''}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            className="sf-input sf-textarea" />
        ) : (
          <input id={id} name={name} type={type} value={value} onChange={onChange}
            placeholder={active ? placeholder : ''}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            className="sf-input" />
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.span className="sf-error"
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Info Panel ─── */
function InfoPanel() {
  const steps = [
    { n: '01', title: 'Fill the form',  desc: 'Enter your event details and contact info' },
    { n: '02', title: 'Hit Send',       desc: 'Submitted instantly via Web3Forms API — no app opens' },
    { n: '03', title: 'Confirmation',   desc: 'We review and publish your event on InnoSphere' },
  ];
  return (
    <div className="se-info">
      <motion.div className="se-info-glow"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

      <motion.div className="se-info-brand" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="brand-icon" style={{ width: 48, height: 48 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3.53 1.67 8.47 1.67 12 0v-5" />
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 800, fontSize: 18 }}>InnoSphere</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Student Project Showcase</div>
        </div>
      </motion.div>

      <motion.h2 className="se-info-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
        Showcase your<br /><span className="gradient-text">event here</span>
      </motion.h2>
      <motion.p className="se-info-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.26 }}>
        Submit your college project expo or tech event and reach thousands of engineering students across India.
      </motion.p>

      <motion.div className="se-steps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }}>
        {steps.map((s, i) => (
          <motion.div key={i} className="se-step"
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
            <div className="se-step-num">{s.n}</div>
            <div>
              <div className="se-step-title">{s.title}</div>
              <div className="se-step-desc">{s.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Web3Forms badge */}
      <motion.div className="se-powered-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        Powered by Web3Forms
      </motion.div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function SubmitEvent() {
  const [form, setForm]     = useState({ name: '', college: '', email: '', startDate: '', endDate: '', description: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim())        e.name        = 'Name is required';
    if (!form.email.trim())       e.email       = 'Email is required';
    if (!form.college.trim())     e.college     = 'College name is required';
    if (!form.startDate)          e.startDate   = 'Start date is required';
    if (!form.endDate)            e.endDate     = 'End date is required';
    if (form.startDate && form.endDate && form.endDate < form.startDate)
                                  e.endDate     = 'Must be after start date';
    if (!form.description.trim()) e.description = 'Please describe your event';
    return e;
  };

  const onChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(ex => ({ ...ex, [e.target.name]: '' }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    setErrMsg('');
    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('subject',    `[InnoSphere] Event Submission – ${form.college}`);
      formData.append('name',       form.name);
      formData.append('email',      form.email);
      formData.append('college',    form.college);
      formData.append('start_date', form.startDate);
      formData.append('end_date',   form.endDate);
      formData.append('message',    form.description);

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setErrMsg(data.message || 'Submission failed.');
        setStatus('error');
      }
    } catch (err) {
      setErrMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const row     = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } } };

  return (
    <div className="se-page">
      <div className="bg-ambient"><div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" /></div>

      <div className="se-layout">
        <InfoPanel />

        <div className="se-form-col">
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="submit-back-link">
              <Icon d={icons.arrow} size={15} /> Back to Showcase
            </Link>
          </motion.div>

          <motion.div className="se-form-card"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>

            <div className="se-form-header">
              <div className="se-form-header-text">
                <div className="se-form-eyebrow">Event Submission</div>
                <h1 className="se-form-title">Tell us about your event</h1>
              </div>
              <div className="se-form-step-badge">Free · 250/mo</div>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" className="se-success"
                  initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                  <motion.div className="se-success-ring"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                    <Icon d={icons.check} size={30} />
                  </motion.div>
                  <h2>Submission sent! 🎉</h2>
                  <p>Your event has been submitted. Our team will review it and publish it on InnoSphere shortly.</p>
                  <Link to="/" className="btn-primary" style={{ display: 'inline-flex', marginTop: 24 }}>
                    ← Back to Showcase
                  </Link>
                </motion.div>

              ) : (
                <motion.form key="form" className="se-form"
                  variants={stagger} initial="hidden" animate="show"
                  onSubmit={onSubmit} noValidate>

                  {/* Name + Email */}
                  <motion.div className="se-row" variants={row}>
                    <Field id="name" name="name" label="Your Name" placeholder="Karthik Raja"
                      value={form.name} onChange={onChange} error={errors.name}
                      icon={<Icon d={icons.user} size={15} />} />
                    <Field id="email" name="email" label="Email Address" type="email" placeholder="you@college.edu"
                      value={form.email} onChange={onChange} error={errors.email}
                      icon={<Icon d={icons.mail} size={15} />} />
                  </motion.div>

                  {/* College */}
                  <motion.div variants={row}>
                    <Field id="college" name="college" label="College / Institution" placeholder="e.g. Panimalar Engineering College"
                      value={form.college} onChange={onChange} error={errors.college}
                      icon={<Icon d={icons.building} size={15} />} />
                  </motion.div>

                  {/* Dates */}
                  <motion.div variants={row}>
                    <div className="se-dates-label">Event Schedule</div>
                    <div className="se-row">
                      <DatePicker id="startDate" label="Start Date"
                        value={form.startDate} onChange={onChange} />
                      <DatePicker id="endDate" label="End Date"
                        value={form.endDate} onChange={onChange}
                        minDate={form.startDate || undefined} />
                    </div>
                    {(errors.startDate || errors.endDate) && (
                      <p style={{ fontSize: 11, color: '#FF6464', marginTop: 6 }}>
                        {errors.startDate || errors.endDate}
                      </p>
                    )}
                  </motion.div>

                  {/* Description */}
                  <motion.div variants={row}>
                    <Field id="description" name="description" label="Event Description" rows={4}
                      placeholder="Describe your event — purpose, activities, what you're showcasing…"
                      value={form.description} onChange={onChange} error={errors.description}
                      icon={<Icon d={icons.text} size={15} />} />
                  </motion.div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <motion.div className="se-error-banner" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      ⚠️ {errMsg}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.div variants={row}>
                    <motion.button type="submit" className="se-submit-btn"
                      disabled={status === 'sending'}
                      whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}>
                      {status === 'sending' ? (
                        <>
                          <motion.span style={{ display: 'flex' }}
                            animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M12 2a10 10 0 0 1 10 10"/>
                            </svg>
                          </motion.span>
                          Sending…
                        </>
                      ) : (
                        <><Icon d={icons.send} size={16} /> Send Event Submission</>
                      )}
                      <span className="se-submit-shine" />
                    </motion.button>
                    <p className="se-submit-note">Free · 250 submissions/month · No backend needed</p>
                  </motion.div>

                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
