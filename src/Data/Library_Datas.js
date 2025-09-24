import {
  Sigma, Calculator, Cpu, GitBranch, Code, Monitor,
  Activity, Globe, Database, Shield, Network, Route,
  BarChart3, Layers, Terminal, Boxes,
  Youtube, Images,
  Mail,
  Computer
} from "lucide-react";


export const DATAS = [
  {
    semester: "Semestre 1",
    whatGroup: { title: "Groupe WhatsApp S1", link: 'https://chat.whatsapp.com/FPp1wV6TMNg0ZKeVeHPfqS?mode=ems_copy_t' },
    modules:
      [
        { title: "Algèbre 1", icon: Sigma, Url: 'https://drive.google.com/drive/folders/18et-Wtf3lySIsDWh6Vx1WlBvDMdDfEs1' },
        { title: "Analyse 1", icon: Calculator, Url: 'https://drive.google.com/drive/folders/1GsRaJMtZ_S5gHW91kS64YpdYfLzdQcY2' },
        { title: "Électronique Numérique", icon: Cpu, Url: 'https://drive.google.com/drive/folders/13_SUi5FNjh2M8z-cgWYA5MKrAC2A-EyX' },
        { title: "Algorithmique & Programmation C1", icon: GitBranch, Url: 'https://drive.google.com/drive/folders/11Zcn-AnEtC3kNnQXkqWaZvAk4WHIlRgA' },
        { title: "Programmation en Python 1", icon: Code, Url: 'https://drive.google.com/drive/folders/11beEc_I2tjV_ftomzbdMULooqeMur9Nj' },
        { title: "Architecture des ordinateurs", icon: Monitor, Url: 'https://drive.google.com/drive/folders/12MMcZ4FBuYc-s3zbAuYlWa0VpO7Rvfm0' },
      ],
    youtube:
      [
        { title: 'programmation en C1', icon: Youtube, Url: 'https://www.youtube.com/watch?v=I4U0sQDw5Nw&list=PLZpzLuUp9qXxKSkKT43ppqzb8c2ahO4VS' },
        { title: 'Algorithmique', icon: Youtube, Url: 'https://www.youtube.com/watch?v=m_yj2p6SCEM&list=PLZpzLuUp9qXwrApSukhtvpi4U6l-INcTI' },
        { title: 'Électronique Numérique', icon: Youtube, Url: 'https://www.youtube.com/watch?v=h5IEj1U4iVw&list=PLU7IbxWzSiXTGMOjd30HFjMwssoVNbAA9' },
        { title: 'Analyse 1', icon: Youtube, Url: 'https://www.youtube.com/watch?v=AwuqG0agXCI&list=PLh8CSljgwDFR166V-x0tMKUX_m_OKdTrG' },
        { title: 'Algebre 1', icon: Youtube, Url: 'https://www.youtube.com/watch?v=f2HrMWmke4o&list=PLh8CSljgwDFTEsLrTYE4J0S8WPKPAd1w5' },
      ],
    pictures: [],
    extras: [],
    AcMails:
      [
        { Name: 'M, Ilyass OUAZZANI TAYBI', Module: 'Algorithmique & Programmation C1', Mail: 'i.ouazzani@uca.com' },
      ],
    Schedules: null
    // [
    //   { title: 'Emploie Groupe 1', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
    //   { title: 'Emploie Groupe 2', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
    //   { title: 'Emploie Groupe 3', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
    //   { title: 'Emploie Groupe 4', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
    //   { title: 'Emploie Groupe 5', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
    // ]
  },
  {
    semester: "Semestre 2",
    whatGroup: null,
    modules:
      [
        { title: "Algèbre 2", icon: Sigma, Url: 'https://drive.google.com/drive/folders/1Bpsv6prigV80T0tTXks9SYinlo1W6BNL' },
        { title: "Analyse 2", icon: Calculator, Url: 'https://drive.google.com/drive/folders/1ADo1ArYmpRjUBUE0w6khMYpB6SsLLVJl' },
        { title: "Traitement Signal", icon: Activity, Url: 'https://drive.google.com/drive/folders/1ZFQ2nVtFRwYleFyicl-raQXPxbCxB05n' },
        { title: "Algorithmique & Programmation en C 2", icon: GitBranch, Url: 'https://drive.google.com/drive/folders/12YFSYdfjz-BopHRxRxpRsgBnKZNdZpcx' },
        { title: "Programmation en Python 2", icon: Code, Url: 'https://drive.google.com/drive/folders/12Yn8-ryX4p6Edhh8gL-KSAwIX6Uh6FGq' },
        { title: "Progr ammation Web 1", icon: Globe, Url: 'https://drive.google.com/drive/folders/1OXbQyBTAsaXeJF3INN6YdpaVzJD1qyAU' },
      ],
    youtube: null,
    pictures: null,
    extras: null,
    AcMails: null,
    Schedules: null,
  },
  {
    semester: "Semestre 3",
    whatGroup: { title: "Groupe WhatsApp S3", link: 'https://chat.whatsapp.com/DwTyDHiMfbdGSarPEMBeW5' },
    modules:
      [
        { title: "Probabilités et statistiques", icon: BarChart3, Url: 'https://drive.google.com/drive/folders/1jJgb2tr9ibbJ0IDL6iIHSrZzMVtd2IVa' },
        { title: "Structures de Données en C", icon: Layers, Url: 'https://drive.google.com/drive/folders/1pmW91q8Id2cy-1ZDrjHefTaHMUBO3uSo' },
        { title: "Programmation Web 2", icon: Globe, Url: 'https://drive.google.com/drive/folders/1OXbQyBTAsaXeJF3INN6YdpaVzJD1qyAU' },
        { title: "Modélisation objet UML", icon: Monitor, Url: 'https://drive.google.com/drive/folders/13cS0eHv8AeE4U3UeQdLHxwihAmGCdhad' },
        { title: "Système d'exploitation 1", icon: Terminal, Url: 'https://drive.google.com/drive/folders/1voDDFL-hkyyMJK3tcdItsl48CChlxm2g' },
        { title: "Recherche opérationnelle et optimisation", icon: BarChart3, Url: 'https://drive.google.com/drive/folders/13mTR2-C1TK5JzEX9qv9JRe_IEVmtcJrg' },
      ],
    youtube:
      [
        { title: 'Structures de Données en C', icon: Youtube, Url: 'https://www.youtube.com/watch?v=WyYHahUwEZc&list=PLbwarkNdAQxCiuRfnrN-wg1XCb0mnQeEG&index=2' },
        { title: 'Programmation web 1', Url: 'https://youtube.com/playlist?list=PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA&si=2IPt8VBuCnToYxuS', icon: Youtube },
        { title: 'Modélisation objet  UML', Url: 'https://www.youtube.com/watch?v=wWnDP5YXyxk&list=PLjXcpCBIph8w3fNehQwxSdwzb3zbauv4Q', icon: Youtube },

      ],
    pictures:
      [
        { title: 'ROO seance 1', Url: 'https://drive.google.com/drive/folders/1sz_XDfB9d4zzoMWLLCeCE18fq1H3XqO_', icon: Images },
        { title: 'PROBA STATS seance 1', Url: 'https://drive.google.com/drive/folders/1oEjVfQIAWXk9tDkESbG20_mzwMXj1Ypx', icon: Images },
      ],
    extras:
      [
        { title: 'Ubuntu setup ', Url: 'https://drive.google.com/drive/folders/1sz_XDfB9d4zzoMWLLCeCE18fq1H3XqO_', icon: Computer },
        { title: 'Google Classroom (Code : fvodiijc) ', Url: 'https://classroom.google.com', icon: Computer },
      ],
    AcMails:
      [
        // { Name: 'M, Ilyass OUAZZANI TAYBI', Module: 'Algorithmique & Programmation C1', Mail: 'i.ouazzani@uca.com' },
      ],
    Schedules:
      [
        { title: 'Emploie Groupe 1', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
        { title: 'Emploie Groupe 2', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
        { title: 'Emploie Groupe 3', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
        { title: 'Emploie Groupe 4', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
        { title: 'Emploie Groupe 5', imgUrl: "https://emploi-fssm.uca.ma/vue_etudiant_verticale.php?current_year=2016&current_student=11237130&current_week=44&lar=300&hau=320" },
      ]

  },
  {
    semester: "Semestre 4",
    whatGroup: null,
    modules:
      [
        { title: "Réseaux", icon: Network, Url: 'https://drive.google.com/drive/folders/1S9j3tajkZE22FzteArcNJmdyUfoBh2qv' },
        { title: "Analyse Numérique", icon: Route, Url: 'https://drive.google.com/drive/folders/1izEbcRq1hhsshtW6636IrISiMsngq7pj' },
        { title: "Bases de données relationnelles", icon: Database, Url: 'https://drive.google.com/drive/folders/1THur5Ud3BGPCbWq9JpBy5y0PKgyzmzjX' },
        { title: "Système d'exploitation 2", icon: Terminal, Url: 'https://drive.google.com/drive/folders/1iMCPjAr-0Thmf25OVbtE-ODcTT912mer' },
        { title: "Programmation objet avec C++", icon: Boxes, Url: 'https://drive.google.com/drive/folders/1qiN5AEtMY2kB2UyK4kzITLprTq5ocQZm' },
        { title: "Sécurité Informatique", icon: Shield, Url: 'https://drive.google.com/drive/folders/15vgfR4Mp7Y21lfG48AsD6HwkyBGUosTF' },
      ],
    youtube: null,
    extras: null,
    AcMails: null,
    Schedules: null
  },
];


export const OTHER_LABS =
  [
    {
      libName: 'FPK', libUrl: 'https://fpk-biblio.netlify.app/'
    }, {
      libName: 'FSC', libUrl: 'https://drive.google.com/drive/folders/1o9M39ygX0rmkaGrLR4iuGxI47A70nYrE'
    }
  ];