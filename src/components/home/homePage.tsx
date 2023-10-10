"use client";
import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { optionsParticles } from "../animations/coverParticles/optionParticles";
import Link from "next/link";
import { SocialNetworks } from "./socialNetworks";

function Btn(props) {
  return (
    <Link
      href={props.url}
      className=" flex w-min px-10 py-3 rounded bg-violet-700">
      {props.name}
    </Link>
  );
}

export default function HomePage(props: unknown) {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const options = useCallback(async () => {}, []);
  return (
    <div
      id="cover"
      className="w-full h-screen">
      <Particles
        options={optionsParticles}
        init={customInit}
        loaded={options}
      />
      <div className=" h-full bg-[#393A47]/60">
        <div className="relative h-full items-center flex justify-center bg-gradient-to-r from-[#393A47]/10 via-black/30 to-black/10">
          <div className=" flex flex-col p-2 h-min bg-white absolute top-1/3 right-0 space-y-6 bg-opacity-10 rounded-md">
            {SocialNetworks.map(({ name, url }) => {
              return (
                <Link
                  href={url}
                  className="hover:bg-violet-300 p-2 rounded-md text-white">
                  {name}
                </Link>
              );
            })}
          </div>
          <div className=" max-w-4xl w-10/9 flex flex-col items-center text-center space-y-16 text-white">
            <h1 className="text-6xl font-bold">HOLA, SOY EDDY! </h1>
            {/* <span className="bg-white w-8 h-1 block rounded-lg"></span> */}
            <p>
              Un desarrollador web centrado en el frontend que construye el
              frontend de sitios web y aplicaciones web que conduce al éxito del
              producto general.
            </p>
            <Btn
              name="PROJECTS"
              url="https://www.youtube.com/watch?v=zdouBOlZq88"></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
