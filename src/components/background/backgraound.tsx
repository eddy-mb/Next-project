"use client";
import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { optionsParticles } from "./optionParticles";

export default function Background(props: unknown) {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  // const options = useCallback(async()=>{},[])
  return (
    <div id="cover">
      {/* <Particles
        className="w-full h-screen translate-z-0 "
        options={optionsParticles}
        init={customInit}
      /> */}
      <Particles
        className="w-full h-screen translate-z-0 "
        options={optionsParticles}
        init={customInit}
      />
    </div>
  );
}
