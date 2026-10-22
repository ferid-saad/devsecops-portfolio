import { skillsCategories, SkillCategory, SkillItem } from './skills';
import { projectsData, Project, TechnologyItem } from './projects';

export type { SkillCategory, SkillItem, Project, TechnologyItem };

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  badge?: string;
}

export interface Education {
  year: string;
  degree: string;
  institution?: string;
  description?: string;
  badge?: string;
}

export interface Certification {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export const cvData = {
  profile: {
    fullName: "Ferid Saad",
    firstName: "Ferid",
    lastName: "Saad",
    birthDate: "23 Juin 1976",
    role: "Professeur d'Éducation Technique",
    specialty: "Passionné DevSecOps, Cloud & Robotique",
    teachingStartYear: 2002,
    location: "79 Av 4 Août 1990 Echorfa, Tozeur, Tunisie",
    city: "Tozeur",
    country: "Tunisie",
    email: "fersd2018@gmail.com",
    phone: "+216 97 460 346",
    phoneRaw: "+21697460346",
    github: "https://github.com/ferid-saad",
    githubUsername: "ferid-saad",
    avatarUrl: "/images/photo.png",
    bio: "Professeur chevronné avec plus de 24 ans d'expérience dans l'enseignement technique et les technologies appliquées. Diplômé en informatique (ISET Tozeur) et en physique-électronique, spécialisé dans l'automatisation, la conteneurisation Docker, l'orchestration Kubernetes et les pratiques DevSecOps modernes.",
    interests: ["Sport", "Robotique éducative", "DevSecOps & Cloud", "Systèmes embarqués", "Permis B"],
    languages: [
      { name: "Arabe", level: "Langue maternelle", percent: 100 },
      { name: "Français", level: "Courant / Professionnel", percent: 90 },
      { name: "Anglais", level: "Technique & Informatique", percent: 75 }
    ]
  },

  // Sourced from separated data/skills.ts
  skillsCategories: skillsCategories,

  // Sourced from separated data/projects.ts
  projects: projectsData,

  experiences: [
    {
      period: "2012 - 2026",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Ibn El Chabat",
      location: "Tozeur, Tunisie",
      badge: "Poste Actuel",
      description: "Enseignement des sciences et technologies industrielles, conception assistée par ordinateur, initiation aux microcontrôleurs et encadrement d'ateliers de robotique."
    },
    {
      period: "2008 - 2012",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Zawiet El Arab",
      location: "Tozeur, Tunisie",
      badge: "4 ans",
      description: "Enseignement technique, mise en place d'activités pratiques sur maquettes automatisées et gestion des salles informatiques."
    },
    {
      period: "2006 - 2008",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Ahd Jadid Deguech",
      location: "Tozeur, Tunisie",
      badge: "2 ans",
      description: "Transmission des compétences fondamentales en technologie et mécanique appliquée, réalisation de projets interdisciplinaires."
    },
    {
      period: "2002 - 2006",
      role: "Professeur d'Éducation Technique",
      organization: "Collège Ahd Jadid Hajeb Layoun",
      location: "Kairouan, Tunisie",
      badge: "4 ans",
      description: "Début de carrière pédagogique suite à l'obtention du CAPES, développement des supports de cours théoriques et pratiques."
    }
  ] as Experience[],

  educations: [
    {
      year: "2025",
      degree: "Licence Appliquée en Technologies de l'Informatique",
      institution: "ISET Tozeur",
      badge: "Informatique & Réseaux",
      description: "Spécialisation en développement logiciel, administration des systèmes d'information, conteneurisation et sécurité réseau."
    },
    {
      year: "2002",
      degree: "CAPES Éducation Technique",
      institution: "Ministère de l'Éducation, Tunisie",
      badge: "Concours National",
      description: "Certificat d'Aptitude au Professorat de l'Enseignement Secondaire et Technique."
    },
    {
      year: "2001",
      degree: "1re Année de DEA (Diplôme d'Études Approfondies)",
      institution: "Sup'Com - École Supérieure des Communications de Tunis",
      badge: "Télécommunications",
      description: "Études supérieures approfondies en réseaux, télécommunications et transmission de signaux numériques."
    },
    {
      year: "1999 - 2000",
      degree: "Maîtrise en Physique-Électronique",
      institution: "Faculté des Sciences de Monastir",
      badge: "Physique & Électronique",
      description: "Formation universitaire rigoureuse couvrant l'électronique analogique et numérique, le traitement du signal et les semi-conducteurs."
    },
    {
      year: "1995",
      degree: "Baccalauréat Technique",
      institution: "Lycée Technique Ibn El Jazzar, Kairouan",
      badge: "Technique",
      description: "Baccalauréat sciences et techniques avec mention."
    }
  ] as Education[],

  certifications: [
    {
      year: "2018",
      title: "Formation Certifiante en Robotique",
      institution: "Centre de Formation Technique",
      description: "Conception, programmation de robots autonomes, capteurs avancés et pilotage d'actionneurs."
    },
    {
      year: "2001",
      title: "Administration Systèmes & Messagerie",
      institution: "Formation Professionnelle Réseau",
      description: "Certification Network+, Windows NT 4 / Windows 2000 Server, Microsoft SQL Server 7, Exchange Server 5.5."
    }
  ] as Certification[]
};
