import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ChevronRight,
  FolderGit2,
  Github,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Server,
  Layers,
  ArrowRight,
  Calendar,
  Sparkles,
  Lock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData, getProjectBySlug } from '@/data/projects';

// Generate static parameters for all known project slugs
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

// Generate dynamic metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Projet introuvable - Portfolio Ferid Saad',
      description: 'La fiche de projet demandée est introuvable.',
    };
  }

  return {
    title: `${project.title} - Projet DevSecOps | Ferid Saad`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Ferid Saad`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <>
      <Header showSectionLinks={false} />

      <main className="project-detail-main">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="breadcrumb-nav no-print" aria-label="Fil d'Ariane">
            <Link href="/" className="breadcrumb-item">Accueil</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <Link href="/projects" className="breadcrumb-item">Projets</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{project.title}</span>
          </nav>

          {/* Top Actions Row */}
          <div className="project-detail-nav-bar no-print">
            <Link href="/projects" className="btn btn-secondary btn-sm" id="back-to-projects-btn">
              <ArrowLeft size={14} />
              <span>Retour à la liste des projets</span>
            </Link>

            <Link href="/" className="btn btn-ghost btn-sm">
              <span>Accueil</span>
            </Link>
          </div>

          {/* Project Hero Header */}
          <header className="glass-panel project-detail-hero">
            <div className="project-detail-hero-header">
              <div className="project-badges-row">
                <span className="badge badge-accent">
                  <ShieldCheck size={13} />
                  {project.badge || 'Projet Validé'}
                </span>
                <span className="badge" style={{ textTransform: 'uppercase' }}>
                  {project.category}
                </span>
                <span className="badge">
                  <Calendar size={13} />
                  {project.date}
                </span>
                <span className="badge">
                  {project.status}
                </span>
              </div>

              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-lead">{project.description}</p>

              {/* Action Buttons */}
              <div className="project-detail-actions no-print">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id="project-github-cta"
                  >
                    <Github size={16} />
                    <span>Consulter le Référentiel GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {project.dockerCommand && (
                  <div className="docker-quick-run-box">
                    <Terminal size={14} color="var(--accent)" />
                    <code>{project.dockerCommand}</code>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Project Content Grid */}
          <div className="project-detail-grid">
            {/* Left Main Content */}
            <div className="project-detail-content-col">
              {/* 1. Context & Description */}
              <section className="glass-panel detail-card-block">
                <div className="detail-card-header">
                  <Sparkles size={20} color="var(--accent)" />
                  <h2>Contexte & Présentation Détaillée</h2>
                </div>
                <p className="detail-text-body">{project.details}</p>
              </section>

              {/* 2. Architecture & CI/CD Pipeline */}
              <section className="glass-panel detail-card-block">
                <div className="detail-card-header">
                  <Layers size={20} color="var(--accent)" />
                  <h2>Architecture & Pipeline CI/CD DevSecOps</h2>
                </div>

                <p className="detail-text-body" style={{ marginBottom: '20px' }}>
                  {project.architecture}
                </p>

                <h3 className="sub-title-accent" style={{ marginBottom: '12px' }}>
                  Étapes du Pipeline Automatisé
                </h3>

                <div className="pipeline-steps-list">
                  {project.pipelineSteps.map((step, idx) => (
                    <div key={idx} className="pipeline-step-item">
                      <div className="pipeline-step-number">{idx + 1}</div>
                      <div className="pipeline-step-content">
                        <strong>Étape {idx + 1}</strong>
                        <span>{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. DevSecOps Security Measures */}
              <section className="glass-panel detail-card-block">
                <div className="detail-card-header">
                  <Lock size={20} color="var(--accent)" />
                  <h2>Bonnes Pratiques & Sécurité DevSecOps</h2>
                </div>

                <div className="security-measures-grid">
                  {project.securityMeasures.map((measure, idx) => (
                    <div key={idx} className="security-measure-item">
                      <ShieldCheck size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{measure}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar: Tech Stack & Key Highlights */}
            <aside className="project-detail-sidebar">
              {/* Technologies Used */}
              <div className="glass-panel detail-card-block">
                <div className="detail-card-header">
                  <Cpu size={18} color="var(--accent)" />
                  <h3 style={{ fontSize: '17px', margin: 0 }}>Stack Technique</h3>
                </div>

                <div className="tech-stack-list">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="tech-stack-row">
                      <strong>{tech.name}</strong>
                      <span>{tech.role}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tags" style={{ marginTop: '16px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights & Results */}
              <div className="glass-panel detail-card-block">
                <div className="detail-card-header">
                  <CheckCircle2 size={18} color="var(--accent)" />
                  <h3 style={{ fontSize: '17px', margin: 0 }}>Résultats Clés</h3>
                </div>

                <ul className="project-highlights" style={{ marginTop: '10px' }}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>
                      <CheckCircle2 size={14} color="var(--accent)" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Bottom Navigation: Previous / Next Project */}
          <nav className="glass-panel project-detail-bottom-nav no-print" aria-label="Navigation entre projets">
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`} className="bottom-nav-item prev">
                <ArrowLeft size={16} />
                <div>
                  <span className="bottom-nav-sub">Projet précédent</span>
                  <span className="bottom-nav-title">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div className="bottom-nav-placeholder" />
            )}

            <Link href="/projects" className="btn btn-secondary btn-sm">
              <FolderGit2 size={14} />
              <span>Tous les Projets</span>
            </Link>

            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`} className="bottom-nav-item next">
                <div>
                  <span className="bottom-nav-sub">Projet suivant</span>
                  <span className="bottom-nav-title">{nextProject.title}</span>
                </div>
                <ArrowRight size={16} />
              </Link>
            ) : (
              <div className="bottom-nav-placeholder" />
            )}
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}
