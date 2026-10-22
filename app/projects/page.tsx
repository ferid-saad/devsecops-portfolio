'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FolderGit2,
  ArrowLeft,
  ArrowRight,
  Search,
  CheckCircle2,
  ExternalLink,
  Github,
  Terminal,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';

export default function ProjectsCatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'devsecops', label: 'DevSecOps & CI/CD' },
    { id: 'robotique', label: 'Robotique & IoT' },
    { id: 'systemes', label: 'Systèmes & Réseaux' },
    { id: 'web', label: 'Web & Bases de Données' }
  ];

  const filtered = projectsData.filter((project) => {
    const matchesCat = selectedCategory === 'all' || project.category === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tags.some((t) => t.toLowerCase().includes(term));
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Header showSectionLinks={false} />

      <main className="catalog-main">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="breadcrumb-nav no-print" aria-label="Fil d'Ariane">
            <Link href="/" className="breadcrumb-item">Accueil</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Catalogue des Projets</span>
          </nav>

          {/* Hero Header */}
          <div className="catalog-header">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <span className="section-tag">
                <FolderGit2 size={13} />
                Répertoire Technique & Réalisations
              </span>
              <h1 className="section-title" style={{ fontSize: '32px', marginTop: '10px' }}>
                Projets & Architectures DevSecOps
              </h1>
              <p className="section-desc" style={{ maxWidth: '780px', margin: '0' }}>
                Explorez l&apos;ensemble des réalisations pratiques de Ferid Saad : pipelines d&apos;intégration continue, conteneurisation Docker durcie, infrastructures réseau et systèmes embarqués programmables.
              </p>
            </div>

            {/* Quick Stats Banner */}
            <div className="catalog-stats-bar">
              <div className="catalog-stat-item">
                <span className="catalog-stat-num">{projectsData.length}</span>
                <span className="catalog-stat-label">Projets Documentés</span>
              </div>
              <div className="catalog-stat-item">
                <span className="catalog-stat-num">100%</span>
                <span className="catalog-stat-label">Validés & Testés</span>
              </div>
              <div className="catalog-stat-item">
                <span className="catalog-stat-num">2</span>
                <span className="catalog-stat-label">Pipelines CI/CD</span>
              </div>
              <div className="catalog-stat-item">
                <span className="catalog-stat-num">5+</span>
                <span className="catalog-stat-label">Technologies Clés</span>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="glass-panel catalog-toolbar no-print">
            <div className="catalog-search-wrapper">
              <Search size={18} color="var(--text-muted)" />
              <input
                type="text"
                className="catalog-search-input"
                placeholder="Rechercher par mot-clé, tag (Docker, Arduino, Ansible...)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="projects-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="btn-clear-search"
                  onClick={() => setSearchTerm('')}
                  title="Effacer la recherche"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="catalog-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`catalog-filter-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="catalog-count-row">
            <span>
              Affichage de <strong>{filtered.length}</strong> projet{filtered.length > 1 ? 's' : ''} sur {projectsData.length}
            </span>
            <Link href="/" className="btn-back-link">
              <ArrowLeft size={14} />
              <span>Retour à l&apos;accueil du Portfolio</span>
            </Link>
          </div>

          {/* Projects Cards Grid */}
          {filtered.length === 0 ? (
            <div className="glass-panel" style={{ padding: '60px 20px', textAlign: 'center', marginTop: '20px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
                Aucun projet ne correspond à votre recherche « <strong>{searchTerm}</strong> ».
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                style={{ marginTop: '12px' }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="projects-grid" style={{ marginTop: '20px' }}>
              {filtered.map((project) => (
                <article key={project.id} className="glass-panel project-card">
                  <div className="project-top">
                    <div className="project-header-row">
                      <h2 className="project-title" style={{ fontSize: '18px' }}>
                        {project.title}
                      </h2>
                      <span className="badge" style={{ textTransform: 'capitalize' }}>
                        {project.badge || project.category}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '4px 0 12px 0' }}>
                      <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500 }}>
                        {project.date}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>•</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {project.status}
                      </span>
                    </div>

                    <p className="project-desc">{project.description}</p>

                    {/* Highlights */}
                    <ul className="project-highlights">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={13} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <Link
                        href={`/projects/${project.id}`}
                        className="btn btn-primary"
                        style={{ padding: '8px 14px', fontSize: '13px' }}
                        id={`btn-open-${project.id}`}
                      >
                        <span>Fiche détaillée</span>
                        <ArrowRight size={14} />
                      </Link>

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ padding: '8px 12px', fontSize: '13px' }}
                          title="Consulter le code source GitHub"
                        >
                          <Github size={14} />
                          <span>Code</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="badge" style={{ fontSize: '11px' }}>
                          Atelier Validé
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
