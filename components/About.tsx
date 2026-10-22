'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Copy,
  Check,
  FileDown,
  Terminal,
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface AboutProps {
  onPrintCV?: () => void;
  onShowToast?: (msg: string) => void;
}

export default function About({ onPrintCV, onShowToast }: AboutProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();
  const teachingYears = currentYear - cvData.profile.teachingStartYear;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    if (onShowToast) {
      onShowToast(`${label} copié dans le presse-papier !`);
    }
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePrint = () => {
    if (onPrintCV) {
      onPrintCV();
    } else {
      window.print();
    }
  };

  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Profile Card */}
          <div className="glass-panel profile-card">
            <div className="avatar-wrapper">
              <Image
                src={cvData.profile.avatarUrl}
                alt={`Photo de profil de ${cvData.profile.fullName}`}
                width={130}
                height={130}
                className="avatar-img"
                priority
                unoptimized
              />
              <span className="avatar-badge-online" title="Disponible pour projets & opportunités" />
            </div>

            <h1 className="profile-name">{cvData.profile.fullName}</h1>
            <p className="profile-role">{cvData.profile.role}</p>
            <p className="profile-specialty">{cvData.profile.specialty}</p>

            <div className="profile-divider" />

            {/* Quick Contact & Info List */}
            <ul className="profile-contact-list">
              <li>
                <div className="contact-item-left">
                  <Mail size={16} color="var(--accent)" />
                  <a href={`mailto:${cvData.profile.email}`} className="contact-link">
                    {cvData.profile.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn-copy-mini no-print"
                  onClick={() => copyToClipboard(cvData.profile.email, 'Email')}
                  title="Copier l'email"
                >
                  {copiedField === 'Email' ? <Check size={13} color="var(--accent)" /> : <Copy size={13} />}
                </button>
              </li>

              <li>
                <div className="contact-item-left">
                  <Phone size={16} color="var(--accent)" />
                  <a href={`tel:${cvData.profile.phoneRaw}`} className="contact-link">
                    {cvData.profile.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn-copy-mini no-print"
                  onClick={() => copyToClipboard(cvData.profile.phone, 'Téléphone')}
                  title="Copier le numéro"
                >
                  {copiedField === 'Téléphone' ? <Check size={13} color="var(--accent)" /> : <Copy size={13} />}
                </button>
              </li>

              <li>
                <div className="contact-item-left">
                  <MapPin size={16} color="var(--accent)" />
                  <span>{cvData.profile.location}</span>
                </div>
              </li>

              <li>
                <div className="contact-item-left">
                  <Github size={16} color="var(--accent)" />
                  <a
                    href={cvData.profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    github.com/{cvData.profile.githubUsername}
                  </a>
                </div>
                <a
                  href={cvData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-copy-mini no-print"
                  title="Ouvrir le profil GitHub"
                >
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>

            {/* Quick Actions */}
            <div className="profile-card-actions no-print">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePrint}
                style={{ width: '100%', justifyContent: 'center' }}
                id="profile-print-btn"
              >
                <FileDown size={16} />
                <span>Exporter / Imprimer le CV</span>
              </button>
              <a
                href="#contact"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Prendre Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Highlights */}
          <div className="hero-bio-col">
            <div className="glass-panel bio-card">
              <div className="bio-header">
                <span className="badge">
                  <Sparkles size={13} />
                  Profil & Présentation
                </span>
                <span className="experience-counter-pill">
                  <strong>{teachingYears} Ans</strong> d&apos;Enseignement Technique
                </span>
              </div>

              <h2 className="bio-title">
                Transmettre, automatiser et sécuriser avec passion.
              </h2>

              <p className="bio-text">{cvData.profile.bio}</p>

              <div className="bio-stats-row">
                <div className="stat-box">
                  <span className="stat-number">{teachingYears}+</span>
                  <span className="stat-label">Années d&apos;expérience</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projets DevSecOps & IoT</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Docker & CI/CD</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">2026</span>
                  <span className="stat-label">Next.js 15 App</span>
                </div>
              </div>

              {/* Languages & Quick Tags */}
              <div className="bio-bottom-grid">
                <div>
                  <h3 className="sub-title-accent">Langues pratiquées</h3>
                  <div className="languages-list">
                    {cvData.profile.languages.map((lang) => (
                      <div key={lang.name} className="language-badge">
                        <strong>{lang.name}</strong>
                        <span>({lang.level})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="sub-title-accent">Centres d&apos;intérêt</h3>
                  <div className="interests-tags">
                    {cvData.profile.interests.map((interest) => (
                      <span key={interest} className="interest-tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
