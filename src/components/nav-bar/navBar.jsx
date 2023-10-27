"use client";
import Image from "next/image";
import perfil from "@/img/perfil.png";
import Link from "next/link";
import { SocialNetworks } from "../nav-bar/socialNetworks";
import { LinkNav } from "./url";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <nav className=" text-white h-auto w-full fixed top-0 bg-[#aa367c]">
      <div
        id="bg-black6"
        className="flex p-2 justify-around bg-black/50 ">
        <Link
          className="flex items-center hover:text-[#ffa726]"
          href="/">
          <Image
            src={perfil}
            width={30}
            height={30}
            alt="Logotipo"
          />
          <p className="mx-2 font-medium text-base">EDDY MAMANI</p>
        </Link>
        <div className="flex items-center">
          {SocialNetworks.map(({ name, url, id }) => {
            return (
              <Link
                target="_blank"
                href={url}
                className="hover:text-[#ffa726] p-2 rounded-md text-"
                key={id}>
                {name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center relative">
          <button
            className="hover:text-[#ffa726] md:hidden "
            onClick={() => setActive(!active)}>
            <FaBars size={30} />
          </button>
          <ul className="hidden md:flex">
            {LinkNav.map(({ text, url, id }) => {
              return (
                <li className=" mx-2 font-medium text-base">
                  <Link
                    className="hover:text-[#ffa726] p-2"
                    key={id}
                    href={url}
                    onClick={() => setActive(!active)}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* menu burger */}

      <ul
        id="bg-black6"
        className={`md:hidden p-4 text-white absolute right-0 top-0 h-screen w-1/2 space-y-6 flex flex-col ${
          active ? "bg-[#aa367c]/90" : "hidden"
        }`}>
        {LinkNav.map(({ text, url, id }) => {
          return (
            <li className="text-base">
              <Link
                className=" py-2 border-b border-[#f9af7e] block"
                key={id}
                href={url}
                onClick={() => setActive(!active)}>
                {text}
              </Link>
            </li>
          );
        })}
        <button
          className="border border-[#ffa726] p-2 mx-10 rounded-full"
          onClick={() => setActive(!active)}>
          Cerrar
        </button>
      </ul>
    </nav>
  );
}
