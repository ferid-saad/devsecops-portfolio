export interface SkillItem {
  name: string;
  level: number;
  note?: string;
  category?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description?: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "DevSecOps & Cloud",
    iconName: "ShieldCheck",
    description: "Automatisation, conteneurisation sécurisée, orchestration et pipelines CI/CD",
    skills: [
      { name: "Docker & Docker Compose", level: 90, note: "Images multi-stage, conteneurs non-root, compose" },
      { name: "Kubernetes (k8s)", level: 80, note: "Pods, déploiements, services, ingress, kubectl" },
      { name: "Jenkins & CI/CD", level: 85, note: "Pipelines déclaratifs automatisés, intégration continue" },
      { name: "Argo CD & GitOps", level: 75, note: "Déploiement déclaratif synchronisé sur Kubernetes" },
      { name: "Terraform", level: 75, note: "Infrastructure as Code (IaC) modulaire et reproductible" },
      { name: "Ansible", level: 78, note: "Automatisation de configurations & playbooks de déploiement" },
      { name: "Git & GitHub", level: 92, note: "Versionnement avancé, clés SSH, flux GitFlow et PRs" }
    ]
  },
  {
    title: "Systèmes, Réseaux & Sécurité",
    iconName: "Server",
    description: "Administration système Linux & Windows, durcissement et virtualisation",
    skills: [
      { name: "Linux Ubuntu / Debian", level: 90, note: "Administration système avancée, scripts Bash, SSH durci, UFW" },
      { name: "Nginx Sécurisé", level: 85, note: "Reverse proxy, terminaison SSL/TLS, conteneurs non privilégiés" },
      { name: "Windows Server & Active Directory", level: 88, note: "Domaines AD, GPO, DNS, DHCP, politiques de sécurité" },
      { name: "Administration Réseau", level: 85, note: "Network+, routage, sous-réseaux, sécurité des accès" },
      { name: "Virtualisation", level: 85, note: "VirtualBox, Vagrant, nested virtualization pour labs" }
    ]
  },
  {
    title: "Développement & Bases de Données",
    iconName: "Code",
    description: "Développement web fullstack moderne, APIs et bases relationnelles",
    skills: [
      { name: "Next.js & React", level: 82, note: "Next.js 15 App Router, SSR, Server Components et Hooks" },
      { name: "JavaScript / TypeScript", level: 85, note: "ES6+, typage strict, logique frontend et scripts Node.js" },
      { name: "SQL Server & T-SQL", level: 85, note: "Modélisation relationnelle, requêtes optimisées, procédures" },
      { name: "C++ & Arduino", level: 88, note: "Systèmes embarqués temps réel, asservissement moteurs PID" },
      { name: "HTML5 & CSS3 Moderne", level: 92, note: "Design responsive, glassmorphism, CSS Grid et Flexbox" }
    ]
  },
  {
    title: "Pédagogie & Électronique",
    iconName: "Cpu",
    description: "Expertise didactique, robotique éducative et prototypage matériel",
    skills: [
      { name: "Enseignement Technique", level: 95, note: "24 ans d'expertise didactique et encadrement" },
      { name: "Robotique Pédagogique", level: 90, note: "Ateliers robotique, microcontrôleurs et capteurs" },
      { name: "Électronique appliquée", level: 88, note: "Capteurs, circuits imprimés, mesures et prototypage" }
    ]
  }
];

export function getAllSkills(): SkillCategory[] {
  return skillsCategories;
}

export function getFeaturedSkills(): SkillItem[] {
  return skillsCategories.flatMap(c => c.skills).filter(s => s.level >= 85);
}
