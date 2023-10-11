import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaGit,
  FaGithub,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa6";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiDjango,
  SiFastapi,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
export const SkillsFrontEnd = [
  { id: 0, icon: <FaHtml5 size={16} />, name: "Html5" },
  { id: 1, icon: <FaCss3 size={16} />, name: "Css3" },
  { id: 2, icon: <FaJs size={16} />, name: "JavaScript" },
  { id: 3, icon: <FaReact size={16} />, name: "React JS" },
  { id: 4, icon: <SiNextdotjs size={16} />, name: "Next JS" },
  { id: 5, icon: <SiTailwindcss size={16} />, name: "Tailwind css" },
];
export const SkillsBackEnd = [
  { id: 0, icon: <FaPython size={16} />, name: "Python" },
  { id: 1, icon: <SiDjango size={16} />, name: "Django" },
  { id: 2, icon: <SiFastapi size={16} />, name: "FastAPI" },
];
export const SkillsVersion = [
  { id: 0, icon: <FaGitAlt size={16} />, name: "Git" },
  { id: 1, icon: <FaGithub size={16} />, name: "GitHub" },
];
export const SkillsOters = [
  { id: 0, icon: <FaFigma size={16} />, name: "Figma" },
  { id: 1, icon: <SiAdobephotoshop size={16} />, name: "Photoshop" },
  { id: 2, icon: <SiAdobeillustrator size={16} />, name: "Illustrator" },
];
