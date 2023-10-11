import a from "@/img/a.png";
import b from "@/img/b.png";
import Image from "next/image";

export const ProjectList = [
  {
    id: 0,
    title: "PRODEV - Project & Development",
    content:
      "Prodev es un exitoso proyecto de código abierto que creé y que ha aparecido en algunos de los sitios tecnológicos más importantes como CSS-Tricks, Hostinger, etc. y lo utilizan miles de desarrolladores en todo el mundo.",
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
    title: "Los Andes",
    content:
      "Recreé la interfaz de la aplicación web oficial de Boreal Coffee porque me atrajo su hermosa interfaz de usuario. Fue una gran experiencia para mí construir toda la interfaz.",
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
