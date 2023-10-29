"use client";
import React from "react";
import perfil from "@/img/perfil.png";
import ButtonPage from "../buttton/buttonPage";
import Image from "next/image";
import TsParticles from "../animations/particles";
import home from "@/img/home.png";

export default function HomePage() {
  return (
    <section id="bg-black6">
      {/* <TsParticles /> */}
      <div
        id="home"
        className="w-full flex justify-center  space-y-6 md:space-y-0 h-screen">
        <div className="h-full flex justify-center items-center px-2 max-w-lg md:max-w-full md:space-x-20">
          <div className="hidden md:block md:w-96 ">
            <Image
              width={300}
              height={300}
              src={home}
              alt="Home image"
            />
          </div>
          <div className="flex h-full items-center md:max-w-lg ">
            <div className="flex flex-col items-center text-center py-4 space-y-4 text-white">
              <h1 className="text-2xl md:text-4xl font-bold">
                HOLA, SOY EDDY!
              </h1>
              <Image
                className="rounded-full bg-white/30"
                src={perfil}
                width={120}
                height={150}
                alt=""
              />
              <p className="text-2xl text-[#f9af7e]">
                ¡Bienvenido a mi mundo del desarrollo Full Stack!
              </p>
              <p className="text-base text-justify">
                Soy un apasionado desarrollador Full Stack con experiencia en la
                creación de aplicaciones web y API backend. Mi enfoque está en
                la eficiencia y el rendimiento. Mis habilidades clave incluyen
                React, Next.js, FastAPI y más.
              </p>
              <p className="text-xl text-[#f9af7e]">¡Explora mis proyectos!</p>
              <ButtonPage
                name="PROYECTOS"
                url="#project"></ButtonPage>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <hr className=" w-4/5 border-s-0 border-[#ffa726]" />
      </div>
    </section>
  );
}
