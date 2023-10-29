import a from "@/img/a.png";
import b from "@/img/b.png";
import Image from "next/image";

export const ProjectList = [
  {
    id: 0,
    title: "PRODEV",
    content:
      "Prodev es un sitio web que desarrollé para profesionales que buscan establecer su presencia digital. Usé HTML5, CSS y JavaScript para crear un diseño atractivo y funcional. El sitio es interactivo, se adapta a dispositivos móviles y permite a los profesionales gestionar su contenido fácilmente. Prodev ha ayudado a estos profesionales a destacar en línea y conectarse con un público más amplio.  Este proyecto demuestra que, incluso utilizando tecnologías básicas, se pueden lograr resultados notables en la web.",
    img: (
      <Image
        src={a}
        width={500}
        height={500}
        alt="proyecto 1"
      />
    ),
  },
  {
    id: 1,
    title: "LOS ANDES",
    content:
      "Los Andes es un sitio web que desarrollé para una empresa industrial. Su principal objetivo es mostrar su amplia gama de productos al público. El sitio web cuenta con un catálogo de productos intuitivo y optimizado para dispositivos móviles, lo que facilita la exploración y la toma de decisiones de compra. Además, se incluye un formulario de contacto para consultas. Este proyecto ha mejorado la visibilidad de la empresa y la relación con sus clientes.",
    img: (
      <Image
        src={b}
        width={500}
        height={500}
        alt="proyecto 2"
      />
    ),
  },
];
