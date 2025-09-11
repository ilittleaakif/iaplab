import {
  Sigma, Calculator, Cpu, GitBranch, Code, Monitor,
  Activity, Globe, Database, Shield, Network, Route,
  BarChart3, Layers, Terminal, Boxes,
  Youtube
} from "lucide-react";

export const semesters = [
  "Semestre 1",
  "Semestre 2",
  "Semestre 3",
  "Semestre 4"
];

export const sectionsData = [
  {
    semester: "Semestre 1",
    modules: [
      { title: "Algèbre 1", icon: Sigma },
      { title: "Analyse 1", icon: Calculator },
      { title: "Électronique Numérique", icon: Cpu },
      { title: "Algorithmique & Programmation en C 1", icon: GitBranch },
      { title: "Programmation en Python 1", icon: Code },
      { title: "Architecture des ordinateurs", icon: Monitor },
    ],
    extras: [
      { title: 'programmation en C1', icon: Youtube},
      { title: 'Électronique Numérique', icon: Youtube},
      { title: 'Analyse', icon: Youtube},
      { title: 'Algebre', icon: Youtube},
    ]

  },
  {
    semester: "Semestre 2",
    modules: [
      { title: "Algèbre 2", icon: Sigma },
      { title: "Analyse 2", icon: Calculator },
      { title: "Traitement Signal", icon: Activity },
      { title: "Algorithmique & Programmation en C 2", icon: GitBranch },
      { title: "Programmation en Python 2", icon: Code },
      { title: "Programmation Web 1", icon: Globe },
    ],
    extras: [

    ]
  },
  {
    semester: "Semestre 3",
    modules: [
      { title: "Probabilités et statistiques", icon: BarChart3 },
      { title: "Structures de Données en C", icon: Layers },
      { title: "Programmation Web 2", icon: Globe },
      { title: "Modélisation objet UML", icon: Monitor },
      { title: "Système d'exploitation 1", icon: Terminal },
      { title: "Recherche opérationnelle et optimisation", icon: BarChart3 },
    ],
    extras: [

    ]
  },
  {
    semester: "Semestre 4",
    modules: [
      { title: "Réseaux", icon: Network },
      { title: "Analyse Numérique", icon: Route },
      { title: "Bases de données relationnelles", icon: Database },
      { title: "Système d'exploitation 2", icon: Terminal },
      { title: "Programmation objet avec C++", icon: Boxes },
      { title: "Sécurité Informatique", icon: Shield },
    ],
    extras: [

    ]
  },
];
