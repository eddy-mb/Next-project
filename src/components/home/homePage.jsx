"use client";
import React from "react";
import Link from "next/link";
import ButtonPage from "../buttton/buttonPage";
import Image from "next/image";
import TsParticles from "../animations/particles";
import home2 from "@/img/home1.png";

export default function HomePage() {
  return (
    <div
      id="home"
      className="w-full h-screen">
      {/* <TsParticles /> */}

      <div
        id="bg-black6"
        className="h-full flex justify-center items-center">
        <div className="hidden md:block">
          <Image
            className=""
            src={home2}
            width={500}
            height={500}
            alt="Home image"
          />
        </div>
        <div className="flex h-full items-center md:flex md:justify-center">
          <div className="flex flex-col items-center max-w-2xl text-center p-10 space-y-10 text-white">
            <h1 className="text-4xl font-bold">HOLA, SOY EDDY!</h1>
            <p className="text-2xl text-[#f9af7e]">
              ¡Bienvenido a mi mundo del desarrollo Full Stack!
            </p>
            <p className="text-base">
              Soy un apasionado desarrollador Full Stack con experiencia en la
              creación de aplicaciones web y API backend. Mi enfoque está en la
              eficiencia y el rendimiento. Mis habilidades clave incluyen React,
              Next.js, FastAPI y más.
            </p>
            <p className="text-2xl text-[#f9af7e]">¡Explora mis proyectos!</p>
            <ButtonPage
              name="PROYECTOS"
              url="#project"></ButtonPage>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <hr className=" w-3/4 border-s-0 border-[#ffa726]" />
      </div>
    </div>
  );
}
