"use client";
import Image from "next/image";
import logo from "@/img/logo.png";
import Link from "next/link";
import { SocialNetworks } from "../nav-bar/socialNetworks";
import { LinkNav } from "./url";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <nav className=" text-white h-auto w-full fixed bg-[#aa367c]">
      <div
        id="bg-black6"
        className="flex p-2 justify-around bg-black/50 ">
        <Link
          className="flex items-center hover:text-[#ffa726]"
          href="/">
          <Image
            src={logo}
            width={30}
            height={30}
            alt="Logotipo"
          />
          <p className="mx-2 font-medium text-base">EDDY MAMANI</p>
        </Link>
        <ul className="flex">
          {SocialNetworks.map((props) => {
            return (
              <li
                key={props.id}
                className="flex items-center p-2">
                <Link
                  href={props.url}
                  target="_blank"
                  className="hover:text-[#ffa726]">
                  {props.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center relative">
          <button
            className="hover:text-[#ffa726] md:hidden "
            onClick={() => setActive(!active)}>
            <FaBars size={30} />
          </button>
          <ul className="hidden md:flex">
            {LinkNav.map((props) => {
              return (
                <li
                  key={props.id}
                  className=" mx-2 font-medium text-base">
                  <Link
                    className="hover:text-[#ffa726] p-2"
                    href={props.url}
                    onClick={() => setActive(!active)}>
                    {props.text}
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
        {LinkNav.map((props) => {
          return (
            <li
              key={props.id}
              className="text-base">
              <Link
                className=" py-2 border-b border-[#f9af7e] block"
                key={props.id}
                href={props.url}
                onClick={() => setActive(!active)}>
                {props.text}
              </Link>
            </li>
          );
        })}
        <button
          className="border border-[#ffa726] py-1 px-4 w-min rounded-full place-self-center"
          onClick={() => setActive(!active)}>
          Cerrar
        </button>
      </ul>
    </nav>
  );
}
