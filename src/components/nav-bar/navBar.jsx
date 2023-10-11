"use client";
import Image from "next/image";
import perfil from "@/img/perfil.png";
import Link from "next/link";
import { LinkNav } from "./url";

export default function NavBar() {
  return (
    <nav className="  flex text-white justify-between h-20 w-full fixed">
      <div className=" flex w-full m-2.5 items-center">
        <Image
          className="mx-2.5"
          src={perfil}
          width={50}
          height={50}
          alt="Logotipo"
        />
        <h2 className="mx-2.5 font-medium">EDDY MAMANI</h2>
      </div>
      <div className="h-full">
        <ul className="flex items-center h-full pr-20">
          {LinkNav.map(({ text, url, id }) => {
            return (
              <li className=" mx-6 font-medium">
                <Link
                  className="hover:text-violet-600 p-2"
                  key={id}
                  href={url}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
