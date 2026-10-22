'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import DevSecOpsTerminal from '@/components/DevSecOpsTerminal';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TimelineSection from '@/components/TimelineSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <>
      {/* 19 - Header réutilisable */}
      <Header onPrintCV={handlePrintCV} showSectionLinks={true} />

      <main>
        {/* 19 - About (Présentation & Profil) */}
        <About onPrintCV={handlePrintCV} onShowToast={showToast} />

        {/* Terminal interactif DevSecOps */}
        <DevSecOpsTerminal />

        {/* 19 - Skills (Compétences & Technologies) */}
        <Skills />

        {/* 19 - Projects (Réalisations avec liens vers pages dédiées) */}
        <Projects />

        {/* Parcours (Expériences, Diplômes & Certifications) */}
        <TimelineSection />

        {/* 19 - Contact (Coordonnées & Formulaire) */}
        <Contact onShowToast={showToast} />
      </main>

      {/* 19 - Footer réutilisable */}
      <Footer />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notice no-print" role="alert">
          <CheckCircle2 size={18} color="var(--accent)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
