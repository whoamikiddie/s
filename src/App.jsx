import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCard from './components/FeaturedCard';
import ProjectCard from './components/ProjectCard';
import Modal from './components/Modal';
import Footer from './components/Footer';
import SubmitEvent from './pages/SubmitEvent';
import { projects, featuredProject, departments } from './data/projects';
import './index.css';

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

function ShowcasePage({ selectedProject, setSelectedProject }) {
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState('all');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchDept = activeDept === 'all' || p.dept === activeDept;
      const q = search.toLowerCase();
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.team.some(m => m.toLowerCase().includes(q));
      return matchDept && matchSearch;
    });
  }, [search, activeDept]);

  const isFiltered = !!(search || activeDept !== 'all');
  const gridProjects = isFiltered ? filtered : filtered.filter(p => !p.featured);

  return (
    <>
      <Hero total={projects.length} />

      <section className="section" id="projects">
        <div className="container">

          {/* Featured */}
          {!isFiltered && featuredProject && (
            <>
              <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
              >
                <span className="section-tag">Spotlight</span>
                <h2 className="section-title">Featured Project</h2>
              </motion.div>
              <FeaturedCard project={featuredProject} onClick={setSelectedProject} />
            </>
          )}

          {/* All projects header */}
          <motion.div
            className="section-header"
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div>
              <span className="section-tag">All Projects</span>
              <h2 className="section-title">
                {gridProjects.length} Project{gridProjects.length !== 1 ? 's' : ''}
                {activeDept !== 'all' && (
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.68em' }}>
                    {' '}· {activeDept.toUpperCase()}
                  </span>
                )}
              </h2>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="filters-bar"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="search-wrap">
              <SearchIcon />
              <input
                type="text" className="search-input"
                placeholder="Search projects, technologies, or team members…"
                value={search} onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-chips">
              {departments.map(d => (
                <motion.button
                  key={d.id} className={`chip ${activeDept === d.id ? 'active' : ''}`}
                  onClick={() => setActiveDept(d.id)} whileTap={{ scale: 0.94 }}
                >
                  {d.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {gridProjects.length > 0 ? (
              <motion.div className="projects-grid" layout>
                {gridProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} onClick={setSelectedProject} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty" className="empty-state"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <h3>No projects found</h3>
                <p>Try adjusting your search or department filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Ambient background */}
      <div className="bg-ambient">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={
            <ShowcasePage selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          } />
          <Route path="/submit-event" element={<SubmitEvent />} />
        </Routes>
      </main>

      {/* Modal (only on home) */}
      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
