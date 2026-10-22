'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { cvData } from '@/data/cv-data';

interface ContactProps {
  onShowToast?: (msg: string) => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyValue = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    if (onShowToast) {
      onShowToast(`${key} copié dans le presse-papier !`);
    }
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      if (onShowToast) onShowToast('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setIsSubmitting(true);

    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00d2df', '#0e7c86', '#14b8a6', '#ffffff']
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) onShowToast('Votre message a été transmis avec succès !');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Coordonnées & Échanges</span>
          <h2 className="section-title">
            <MessageSquare size={24} color="var(--accent)" />
            Contactez-moi
          </h2>
          <p className="section-desc">
            Pour un projet technique, un échange sur le DevSecOps ou une opportunité de collaboration professionnelle, n&apos;hésitez pas à m&apos;adresser un message.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct channels */}
          <div className="contact-channels">
            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-wrapper">
                <Mail size={22} color="var(--accent)" />
              </div>
              <div className="channel-body">
                <span className="channel-label">Email Professionnel</span>
                <a href={`mailto:${cvData.profile.email}`} className="channel-val">
                  {cvData.profile.email}
                </a>
              </div>
              <button
                type="button"
                className="btn-copy-mini no-print"
                onClick={() => copyValue(cvData.profile.email, 'Email')}
                title="Copier l'adresse email"
              >
                {copiedKey === 'Email' ? <Check size={14} color="var(--accent)" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-wrapper">
                <Phone size={22} color="var(--accent)" />
              </div>
              <div className="channel-body">
                <span className="channel-label">Téléphone / WhatsApp</span>
                <a href={`tel:${cvData.profile.phoneRaw}`} className="channel-val">
                  {cvData.profile.phone}
                </a>
              </div>
              <button
                type="button"
                className="btn-copy-mini no-print"
                onClick={() => copyValue(cvData.profile.phone, 'Téléphone')}
                title="Copier le numéro"
              >
                {copiedKey === 'Téléphone' ? <Check size={14} color="var(--accent)" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-wrapper">
                <MapPin size={22} color="var(--accent)" />
              </div>
              <div className="channel-body">
                <span className="channel-label">Localisation</span>
                <span className="channel-val" style={{ color: 'var(--text-bright)' }}>
                  {cvData.profile.location}
                </span>
              </div>
            </div>

            <div className="glass-panel quick-availability-box">
              <div className="availability-dot-live" />
              <div>
                <strong>Disponible pour opportunités DevSecOps & Projets</strong>
                <p>Enseignement technique, formateur IoT/Robotique et conseil en automatisation CI/CD.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="glass-panel contact-form-card no-print">
            <h3 className="form-title">Envoyez un message direct</h3>

            {isSubmitted ? (
              <div className="form-success-alert">
                <CheckCircle size={28} color="var(--accent)" />
                <h4>Message envoyé avec succès !</h4>
                <p>Merci pour votre prise de contact. Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Votre Nom & Prénom *</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="Ex: Jean Dupont"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Votre Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="jean.dupont@example.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Sujet de la prise de contact</label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-input"
                    placeholder="Opportunité, question DevSecOps, projet..."
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Votre Message *</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="form-textarea"
                    placeholder="Bonjour Ferid, j'ai découvert votre portfolio et..."
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit-form"
                  id="submit-contact-form"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer le message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
