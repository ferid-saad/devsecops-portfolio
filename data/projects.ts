export interface TechnologyItem {
  name: string;
  role: string;
}

export interface Project {
  id: string; // slug for dynamic route /projects/[slug]
  title: string;
  category: 'devsecops' | 'robotique' | 'systemes' | 'web';
  badge: string;
  status: string;
  date: string;
  description: string;
  details: string;
  architecture: string;
  pipelineSteps: string[];
  securityMeasures: string[];
  highlights: string[];
  technologies: TechnologyItem[];
  tags: string[];
  githubUrl?: string;
  dockerCommand?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "devsecops-portfolio",
    title: "Portfolio DevSecOps Conteneurisé",
    category: "devsecops",
    badge: "Production CI/CD",
    status: "Déployé & Conteneurisé",
    date: "2026",
    description: "Architecture moderne d'un portfolio Next.js 15 conteneurisé avec image Nginx non-root, Docker Compose et intégration CI/CD Jenkins.",
    details: "Refonte complète et modernisation du CV initial de Ferid Saad. Implémentation des standards de sécurité DevSecOps : conteneurisation multi-stage Alpine, exécution sous compte système non privilégié (UID 1001), healthcheck HTTP automatisé, exclusion des artefacts sensibles via .dockerignore et configuration d'un pipeline d'intégration continue Jenkins.",
    architecture: "Application Next.js 15 App Router compilée en mode standalone ultra-léger. L'image de production Docker est construite en 3 étapes (deps, builder, runner) pour minimiser la taille de l'image finale et isoler les dépendances de développement. Le conteneur s'exécute sur le port interne 8080 et est exposé via Docker Compose sur le port 8081.",
    pipelineSteps: [
      "Vérification du code et validation TypeScript stricte (tsc --noEmit)",
      "Audit des vulnérabilités des dépendances npm audit",
      "Build de l'artefact standalone Next.js optimisé",
      "Construction de l'image Docker multi-stage Alpine",
      "Déploiement et démarrage du conteneur via Docker Compose",
      "Vérification de l'état de santé par Healthcheck (HTTP 200)"
    ],
    securityMeasures: [
      "Principe de moindre privilège : Conteneur exécuté sous l'utilisateur 'nextjs' (UID 1001, GID 1001)",
      "Image de base minimale Alpine Linux pour réduire la surface d'attaque CVE",
      "Désactivation du privilege escalation avec security_opt: [no-new-privileges:true]",
      "Surveillance de santé active toutes les 30s avec auto-restart unless-stopped",
      "Isolation stricte des fichiers sources et de configuration via .dockerignore"
    ],
    highlights: [
      "Image Docker multi-stage optimisée (taille réduite de 80%)",
      "Exécution 100% sécurisée sans aucun privilège root",
      "Pipeline d'intégration continue Jenkins automatisé",
      "Mode sombre et clair avec détection système et mémoire locale",
      "Terminal interactif simulant un shell Linux DevSecOps"
    ],
    technologies: [
      { name: "Next.js 15", role: "Framework React & App Router" },
      { name: "React 19 & TypeScript", role: "Interface utilisateur typée et réactive" },
      { name: "Docker & Docker Compose", role: "Conteneurisation et orchestration locale" },
      { name: "Jenkins", role: "Serveur d'automatisation CI/CD" },
      { name: "Vanilla CSS", role: "Design system sur-mesure et glassmorphism" }
    ],
    tags: ["Next.js", "Docker", "DevSecOps", "Jenkins", "TypeScript", "CI/CD"],
    githubUrl: "https://github.com/ferid-saad/TP1-Dep-App-CI-CD",
    dockerCommand: "docker compose up -d --build"
  },
  {
    id: "robot-suiveur",
    title: "Robot Suiveur de Ligne Intelligent",
    category: "robotique",
    badge: "Systèmes Embarqués",
    status: "Atelier Validé",
    date: "2024 - 2025",
    description: "Conception et programmation d'un robot autonome capable de suivre un tracé au sol à haute vitesse avec évitement d'obstacles.",
    details: "Projet développé dans le cadre des ateliers d'initiation et d'animation en robotique pédagogique. Le système repose sur un ensemble de capteurs optiques infrarouges, un microcontrôleur Arduino UNO et une régulation proportionnelle-intégrale-dérivée (PID) codée en C++ assurant une trajectoire stable et réactive face aux virages serrés.",
    architecture: "Architecture matérielle modulaire combinant alimentation régulée 9V/5V, étage de puissance avec pont en H double pont L298N, et capteurs optiques TCRT5000 filtrés numériquement par interruption matérielle sur Arduino.",
    pipelineSteps: [
      "Modélisation schématique et routage de circuit électronique",
      "Développement du micrologiciel de commande en C++",
      "Calibrage des coefficients du régulateur d'asservissement PID",
      "Bancs de tests en piste et optimisation de la consommation électrique"
    ],
    securityMeasures: [
      "Isolation galvanique entre circuit de commande logique et puissance moteur",
      "Protection contre les surtensions et inversion de polarité par diodes Schottky",
      "Gestion d'arrêt d'urgence automatique en cas de perte de ligne détectée"
    ],
    highlights: [
      "Algorithme d'asservissement en C++ garantissant un suivi fluide",
      "Architecture matérielle démontable et adaptée aux démonstrations didactiques",
      "Temps de réponse inférieur à 10 millisecondes sur chaque échantillonnage"
    ],
    technologies: [
      { name: "Arduino & AVR C++", role: "Traitement algorithmique temps réel" },
      { name: "Capteurs Infrarouges", role: "Détection optique du contraste de piste" },
      { name: "Pont en H L298N", role: "Pilotage bidirectionnel des moteurs DC" },
      { name: "Électronique de puissance", role: "Régulation de tension et découplage" }
    ],
    tags: ["Arduino", "C++", "Capteurs IR", "Pont en H", "Électronique", "PID"],
    githubUrl: "https://github.com/ferid-saad"
  },
  {
    id: "active-directory-lab",
    title: "Infrastructure Domaine Windows Server",
    category: "systemes",
    badge: "Administration & Réseaux",
    status: "Plateforme Opérationnelle",
    date: "2023 - 2024",
    description: "Mise en place d'un domaine Active Directory complet avec gestion centralisée des utilisateurs, ordinateurs et stratégies de groupe (GPO).",
    details: "Conception d'un environnement d'entreprise simulé avec serveur Windows, services DNS et DHCP intégrés, profils itinérants et partages sécurisés pour la formation professionnelle. Déploiement de politiques de durcissement conformes aux recommandations de cybersécurité.",
    architecture: "Architecture client-serveur multi-VLAN isolant les serveurs de domaine, les postes clients Windows 10/11 et les périphériques réseau. Contrôleur de domaine avec catalogue global, serveur DNS dynamique et serveur d'octroi d'adresses DHCP avec baux réservés.",
    pipelineSteps: [
      "Installation et promotion du serveur en Contrôleur de Domaine (DC)",
      "Configuration de l'arborescence des Unités d'Organisation (OU)",
      "Écriture et déploiement des GPO de durcissement des postes de travail",
      "Validation de l'isolation des droits par principe de moindre privilège"
    ],
    securityMeasures: [
      "Désactivation des protocoles obsolètes (SMBv1, NTLMv1)",
      "Politiques de complexité et de rotation périodique des mots de passe",
      "Contrôle d'accès basé sur les rôles (RBAC) et délégation granulaire",
      "Journalisation des événements d'authentification et alertes d'anomalies"
    ],
    highlights: [
      "Structuration hiérarchique d'Unités d'Organisation adaptée à une PME",
      "GPO personnalisées pour le verrouillage des clés USB et des panneaux de configuration",
      "Sauvegarde automatisée de l'état du système (System State)"
    ],
    technologies: [
      { name: "Windows Server", role: "Système d'exploitation serveur d'infrastructure" },
      { name: "Active Directory DS", role: "Annuaire d'authentification centralisée" },
      { name: "GPO & Scripts PowerShell", role: "Application automatisée des politiques" },
      { name: "DNS & DHCP", role: "Services d'infrastructure réseau fondamentaux" }
    ],
    tags: ["Windows Server", "Active Directory", "GPO", "DNS", "DHCP", "Réseau"],
    githubUrl: "https://github.com/ferid-saad"
  },
  {
    id: "gestion-notes-sql",
    title: "Application Web de Gestion de Notes",
    category: "web",
    badge: "Web & Bases de Données",
    status: "En Production Scolaire",
    date: "2023",
    description: "Plateforme web de suivi académique pour les enseignants, connectée à une base de données relationnelle SQL Server.",
    details: "Interface intuitive pour la saisie rapide des évaluations périodiques, le calcul automatique des moyennes pondérées par coefficients et la génération de synthèses imprimables pour les conseils de classe et les livrets scolaires.",
    architecture: "Architecture applicative web avec séparation claire entre l'interface utilisateur, la logique de validation des notes et le schéma relationnel tiers hébergé sous SQL Server. Utilisation de requêtes paramétrées pour prévenir les injections SQL.",
    pipelineSteps: [
      "Conception du schéma relationnel (MCD / MLD normalisé en 3FN)",
      "Développement de la logique d'accès aux données et procédures stockées",
      "Implémentation des vues d'agrégation des moyennes",
      "Tests de montée en charge et génération des états imprimables"
    ],
    securityMeasures: [
      "Requêtes entièrement paramétrées contre les failles d'injection SQL",
      "Hachage sécurisé des identifiants d'accès enseignants",
      "Sauvegarde journalière transactionnelle de la base de données"
    ],
    highlights: [
      "Modélisation relationnelle avec clés étrangères, index et contraintes CHECK",
      "Calcul en temps réel des moyennes avec gestion des coefficients et absences",
      "Module d'impression au format standardisé pour conseils de classe"
    ],
    technologies: [
      { name: "SQL Server & T-SQL", role: "Base de données relationnelle et calculs" },
      { name: "JavaScript & HTML5", role: "Interface utilisateur dynamique" },
      { name: "CSS Moderne", role: "Feuille de style adaptée à l'écran et à l'impression" }
    ],
    tags: ["SQL Server", "JavaScript", "HTML/CSS", "T-SQL", "Gestion Scolaire"],
    githubUrl: "https://github.com/ferid-saad"
  },
  {
    id: "vagrant-ansible-cluster",
    title: "Automatisation d'Infrastructure Vagrant & Ansible",
    category: "devsecops",
    badge: "Infrastructure as Code",
    status: "Projet DevOps",
    date: "2025 - 2026",
    description: "Provisioning reproductible d'environnements virtuels multi-nœuds avec Vagrant, VirtualBox et playbooks Ansible.",
    details: "Déploiement en une seule commande d'un cluster complet de machines virtuelles Ubuntu pour tester des scénarios d'orchestration, de haute disponibilité et d'intégration continue sans impacter la machine hôte.",
    architecture: "Infrastructure as Code (IaC) modulaire : un fichier Vagrantfile définit un cluster à 3 nœuds (1 master de contrôle et 2 nœuds applicatifs). Ansible applique automatiquement les rôles de configuration, le durcissement du service OpenSSH, la synchronisation NTP et l'installation du moteur Docker.",
    pipelineSteps: [
      "Initialisation des machines virtuelles via vagrant up",
      "Exécution des playbooks Ansible idempotents",
      "Application des règles de durcissement système et pare-feu",
      "Validation de la connectivité réseau interne inter-nœuds"
    ],
    securityMeasures: [
      "Authentification par clés SSH ed25519 exclusives sans mot de passe",
      "Durcissement sshd_config (interdiction du root direct, timeout)",
      "Réseau privé virtuel isolé du réseau physique de la machine hôte"
    ],
    highlights: [
      "Fichier Vagrantfile multi-machines totalement automatisé",
      "Playbooks Ansible idempotents et organisés en rôles réutilisables",
      "Environnement idéal pour expérimenter des déploiements Kubernetes / Docker"
    ],
    technologies: [
      { name: "Vagrant", role: "Orchestration et cycle de vie des VMs de test" },
      { name: "Ansible", role: "Gestion de configuration et automatisation" },
      { name: "VirtualBox", role: "Hyperviseur de virtualisation de type 2" },
      { name: "Ubuntu Linux", role: "Système d'exploitation des nœuds du cluster" }
    ],
    tags: ["Vagrant", "Ansible", "VirtualBox", "Ubuntu", "IaC", "DevOps"],
    githubUrl: "https://github.com/ferid-saad"
  }
];

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(p => p.id === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projectsData;
  return projectsData.filter(p => p.category === category);
}
