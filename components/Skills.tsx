'use client';

import React from 'react';
import { ShieldCheck, Server, Code, Cpu, Wrench } from 'lucide-react';
import { skillsCategories } from '@/data/skills';

export default function Skills() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck size={18} />;
      case 'Server':
        return <Server size={18} />;
      case 'Code':
        return <Code size={18} />;
      case 'Cpu':
        return <Cpu size={18} />;
      default:
        return <Wrench size={18} />;
    }
  };

  return (
    <section id="skills" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertises Techniques</span>
          <h2 className="section-title">
            <ShieldCheck size={24} color="var(--accent)" />
            Compétences & Technologies
          </h2>
          <p className="section-desc">
            Un socle technique combinant administration système, pratiques DevSecOps modernes, conteneurisation et savoir-faire pédagogique.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillsCategories.map((category) => (
            <div key={category.title} className="glass-panel skill-category-card">
              <div className="category-header">
                <div className="category-icon">{getIcon(category.iconName)}</div>
                <h3>{category.title}</h3>
              </div>

              {category.description && (
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  {category.description}
                </p>
              )}

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{skill.level}%</span>
                    </div>

                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={skill.name}
                      />
                    </div>

                    {skill.note && <span className="skill-note">{skill.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
