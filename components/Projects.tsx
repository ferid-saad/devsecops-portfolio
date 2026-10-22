'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FolderGit2, CheckCircle2, ExternalLink, Github, ArrowRight, ShieldCheck } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'devsecops', label: 'DevSecOps & CI/CD' },
    { id: 'robotique', label: 'Robotique & IoT' },
    { id: 'systemes', label: 'Systèmes & Réseaux' },
    { id: 'web', label: 'Web & Bases de Données' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Réalisations & Travaux Pratiques</span>
          <h2 className="section-title">
            <FolderGit2 size={24} color="var(--accent)" />
            Projets Réalisés
          </h2>
          <p className="section-desc">
            Sélection de projets techniques illustrant l&apos;automatisation, la conteneurisation sécurisée, l&apos;électronique programmable et les infrastructures réseau.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar no-print">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-panel project-card">
              <div className="project-top">
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="badge" style={{ textTransform: 'capitalize' }}>
                    {project.badge || project.category}
                  </span>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Highlights List */}
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
                    style={{ padding: '7px 14px', fontSize: '13px' }}
                    id={`view-project-${project.id}`}
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
                      style={{ padding: '7px 12px', fontSize: '13px' }}
                      title="Consulter le code source"
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
            </div>
          ))}
        </div>

        {/* Catalog Banner CTA */}
        <div className="glass-panel" style={{ marginTop: '40px', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '6px', color: 'var(--text-bright)' }}>
              Découvrez la page dédiée au catalogue complet de projets
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>
              Accédez aux fiches techniques individuelles avec pipelines CI/CD détaillés, mesures DevSecOps et commandes Docker.
            </p>
          </div>
          <Link href="/projects" className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }} id="catalog-cta-btn">
            <FolderGit2 size={16} />
            <span>Voir /projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
