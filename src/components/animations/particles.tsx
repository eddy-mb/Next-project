import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { optionsParticles } from "./optionParticles";
import { init } from "next/dist/compiled/webpack/webpack";
import React from "react";

export default function TsParticles(props: unknown) {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const options = useCallback(async () => {}, []);
  return (
    <Particles
      options={optionsParticles}
      init={customInit}
      loaded={options}
    />
  );
}
