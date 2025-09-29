import { GraduationCap, Briefcase, Github, ExternalLink, BotMessageSquare } from "lucide-react";

export const cvContent = `
LAUVICK NGOMA
Ingénieur en Électronique Embarquée & Informatique Industrielle

PROFIL
Spécialisé dans la conception de systèmes intelligents et l’automatisation industrielle, je combine expertise matérielle et logicielle pour développer des solutions innovantes, précises et adaptées aux enjeux industriels. Mon approche allie rigueur technique, créativité et optimisation des processus.

PARCOURS
Master 2 EEA (Électronique, Électrotechnique et Automatique), Université de Bourgogne, Dijon (2024–2025)
Formation axée sur les systèmes embarqués, le contrôle numérique et l’automatisation.

Stage de fin d’études chez OPTINVENT SA (Rennes, avril–octobre 2025)
Développement d’une machine CNC automatisée pour la dépose de colle sur guides optiques
Contexte: OPTINVENT, leader en réalité augmentée, avait besoin d’automatiser une étape critique de fabrication de ses lunettes connectées, jusqu’alors réalisée manuellement avec des limites de précision et de répétabilité.
Mes contributions:
- Conception d’un système embarqué: Architecture basée sur une carte MKS TinyBee (ESP32) et le firmware FluidNC, avec 4 axes contrôlés (3 axes CNC + 1 axe pour la dépose de colle).
- Précision submillimétrique: Atteinte d’une précision de ±0.03 mm (objectif : ±0.05 mm) et d’une répétabilité de ±0.02 mm, éliminant les défauts optiques (bulles d’air).
- Développement logiciel: Création d’une interface Python pour la génération de G-code et la calibration image/machine, intégrant des algorithmes de régression linéaire pour une conversion précise des coordonnées.
- Optimisation des coûts: Solution open-source et low-cost (< 1 000 €), contre 15 000–60 000 € pour les machines industrielles équivalentes.
- Validation industrielle: Tests réussis sur 5 guides optiques, avec 0 défaut et une réduction de 50 % de la quantité de colle utilisée.

Environnement technique:
Électronique embarquée: ESP32, drivers TMC2209, moteurs pas-à-pas
Informatique industrielle: Firmware FluidNC/GRBL, G-code, YAML
Développement: Python (Tkinter, Matplotlib), C++
Automatisation: Calibration géométrique, optimisation de trajectoires
Protocoles: WiFi, communication série, interfaces web

COMPÉTENCES CLÉS
- Systèmes embarqués: Intégration matérielle/logicielle, configuration de microcontrôleurs, développement de firmware.
- Automatisation industrielle: Conception de machines CNC, génération de trajectoires, validation de processus.
- Développement logiciel: Applications de contrôle, traitement de données, interfaces utilisateur intuitives.
- Méthodologie projet: Cycle en V, prototypage itératif, tests et validation.
- Résolution de problèmes: Analyse critique, optimisation des performances, documentation technique.

CE QUI ME MOTIVE
- Innover pour rendre les processus industriels plus précis, fiables et accessibles.
- Relever des défis techniques où l’électronique et l’informatique se rencontrent.
- Partager mes connaissances via des projets open-source et des documentations claires.

PROCHAINES ÉTAPES
Je cherche à appliquer mon expertise dans des projets liés à :
- L’Industrie 4.0 (IoT industriel, maintenance prédictive).
- La robotique et l’automatisation (vision par ordinateur, contrôle de mouvement).
- Les systèmes critiques (aérospatial, médical, optique).
`;

export const academicData = [
  {
    institution: "Université de Bourgogne, Dijon",
    degree: "Master 2 EEA (Électronique, Électrotechnique et Automatique)",
    years: "2024 – 2025",
    description: "Formation axée sur les systèmes embarqués, le contrôle numérique et l’automatisation.",
    icon: GraduationCap,
  },
  {
    institution: "Université de Bourgogne, Dijon",
    degree: "Master 1 Electronique - Signal, Image et Automatique",
    years: "2023 - 2024",
    description: "Maîtrise des concepts de traitement du signal et de l'automatique.",
    icon: GraduationCap,
  },
  {
    institution: "Université de Bourgogne, Dijon",
    degree: "Licence sciences de l'ingénieur - Electronique",
    years: "2022 - 2023",
    description: "Acquisition des bases fondamentales en électronique et ingénierie.",
    icon: GraduationCap,
  },
  {
    institution: "Ecole Nationale Supérieure Polytechnique, Brazzaville",
    degree: "Licence Pro mention Electronique et Télécommunications",
    years: "2017 - 2020",
    description: "Formation professionnalisante en électronique et télécommunications.",
    icon: GraduationCap,
  },
];

export const experienceData = [
  {
    company: "OPTINVENT SA, Rennes",
    role: "Stage - Ingénieur en Électronique Embarquée",
    period: "avr. 2025 - oct. 2025",
    tasks: [
      "Conception d'un système embarqué (ESP32, FluidNC) avec 4 axes contrôlés.",
      "Atteinte d'une précision de ±0.03 mm et répétabilité de ±0.02 mm.",
      "Développement d'une interface Python pour la génération de G-code et calibration.",
      "Réalisation d'une solution low-cost (< 1 000 €) et open-source.",
      "Validation industrielle avec 0 défaut et 50% d'économie de colle.",
    ],
    icon: Briefcase,
  },
  {
    company: "Projet Académique",
    role: "Convertisseur USB 3.1 vers RF sur FPGA",
    period: "2023 - 2024",
    tasks: [
      "Conception d'un système de transmission RF basé sur un FPGA Kintex-7.",
      "Communication haute vitesse en LVDS entre ADC et FPGA.",
      "Intégration et configuration d'un DAC.",
      "Conception et routage de PCB avec le logiciel Eagle.",
    ],
    icon: BotMessageSquare,
  },
];

import images from '@/app/lib/placeholder-images.json';

const typedImages = images as Record<string, { src: string; width: number; height: number; hint: string }>;

export const projectData = [
  {
    title: "Machine CNC Automatisée",
    description: "Développement d'une machine CNC 3-axes pour la dépose de colle sur guides optiques, pilotée par ESP32 avec une interface Python pour la génération de G-Code.",
    imageUrl: typedImages['cnc-machine.jpg'].src,
    imageHint: typedImages['cnc-machine.jpg'].hint,
    technologies: ["ESP32", "FluidNC", "Python", "G-code", "C++"],
    links: [
      { icon: Github, url: "https://github.com/Lauvick" },
      { icon: ExternalLink, url: "/videos/cnc-demo.mp4", isLiveDemo: true },
    ],
  },
  {
    title: "Système de Contrôle Multi-Thread de LEDs avec Zephyr RTOS",
    description: "Développement d'un système embarqué temps réel sur ESP32 avec Zephyr RTOS, gérant 3 threads concurrents pour contrôler des LEDs à différentes fréquences.",
    imageUrl: "/zephyr-led.jpg",
    imageHint: "zephyr led",
    technologies: ["Zephyr RTOS", "C", "ESP32", "CMake", "Git"],
    links: [
      { icon: Github, url: "https://github.com/Lauvick/zephyr-multi-thread-leds" },
      { icon: ExternalLink, url: "/videos/zephyr-demo.mp4", isLiveDemo: true },
    ],
  },
  {
    title: "Convertisseur USB vers RF sur FPGA",
    description: "Projet de conception d'un système de transmission RF haute vitesse en utilisant un FPGA Kintex-7, un ADC et un DAC.",
    imageUrl: typedImages['fpga.jpg'].src,
    imageHint: typedImages['fpga.jpg'].hint,
    technologies: ["FPGA", "VHDL", "LVDS", "Eagle"],
    links: [
      { icon: Github, url: "https://github.com/Lauvick" },
    ],
  },
  {
    title: "Portfolio Numérique",
    description: "Mon site personnel pour présenter mon parcours. Intègre une fonctionnalité d'IA pour résumer mes compétences.",
    imageUrl: typedImages['portfolio.jpg'].src,
    imageHint: typedImages['portfolio.jpg'].hint,
    technologies: ["Next.js", "Tailwind CSS", "Genkit"],
    links: [
      { icon: Github, url: "https://github.com/Lauvick/mon-portfolio-nextjs" },
    ],
  },
];
