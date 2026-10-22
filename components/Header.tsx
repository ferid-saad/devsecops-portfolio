'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, Printer, FolderGit2, Menu, X, Send } from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface HeaderProps {
  onPrintCV?: () => void;
  showSectionLinks?: boolean;
}

export default function Header({ onPrintCV, showSectionLinks = true }: HeaderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }

    if (showSectionLinks) {
      const handleScroll = () => {
        const sections = ['about', 'skills', 'projects', 'parcours', 'terminal', 'contact'];
        const scrollPos = window.scrollY + 120;
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showSectionLinks]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const handlePrint = () => {
    if (onPrintCV) {
      onPrintCV();
    } else {
      window.print();
    }
  };

  return (
    <header className="navbar no-print">
      <div className="container nav-container">
        <Link href="/" className="nav-brand" id="brand-link">
          <div className="brand-avatar-mini">
            <Image
              src={cvData.profile.avatarUrl}
              alt={cvData.profile.fullName}
              width={34}
              height={34}
              unoptimized
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">{cvData.profile.fullName}</span>
            <span className="brand-role">DevSecOps & Enseignement</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Navigation principale">
          {showSectionLinks ? (
            <>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                À propos
              </a>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              >
                Compétences
              </a>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                Projets
              </a>
              <a
                href="#parcours"
                className={`nav-link ${activeSection === 'parcours' ? 'active' : ''}`}
              >
                Parcours
              </a>
              <a
                href="#terminal"
                className={`nav-link ${activeSection === 'terminal' ? 'active' : ''}`}
              >
                Terminal
              </a>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link href="/" className="nav-link">
                Accueil
              </Link>
              <Link href="/projects" className="nav-link active">
                Catalogue Projets
              </Link>
              <Link href="/#contact" className="nav-link">
                Contact
              </Link>
            </>
          )}

          <Link href="/projects" className="nav-link project-link-badge" title="Accéder aux fiches projets dédiées">
            <FolderGit2 size={14} />
            <span>Pages Projets</span>
          </Link>
        </nav>

        {/* Actions Bar */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            aria-label="Basculer le thème clair ou sombre"
            id="theme-switch-btn"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handlePrint}
            title="Exporter ou imprimer le CV"
            id="print-cv-btn"
          >
            <Printer size={15} />
            <span className="hide-mobile">Imprimer CV</span>
          </button>

          <a href="#contact" className="btn btn-primary btn-sm hide-mobile">
            <Send size={14} />
            <span>Me Contacter</span>
          </a>
        </div>
      </div>
    </header>
  );
}