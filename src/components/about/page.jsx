import ButtonPage from "../buttton/buttonPage";
import {
  SkillsFrontEnd,
  SkillsBackEnd,
  SkillsVersion,
  SkillsOters,
} from "./skills";
export default function AboutPage() {
  return (
    <main id="bg-black6">
      <div
        id="about"
        className=" text-white w-full min-h-screen space-y-10 py-20 px-10 md:flex md:flex-col md:items-center">
        <section className="max-w-4xl space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-2xl font-semibold">ACERCA DE MI</h1>
            <hr className=" w-12 border border-[#ffa726] rounded-xl "></hr>
          </div>
          <p className="text-lg">
            Aquí encontrarás más información sobre mí, lo que hago y mis
            habilidades actuales principalmente en términos de programación y
            tecnología.
          </p>
        </section>
        <section className="space-y-6 md:flex md:max-w-5xl md:space-y-0 md:space-x-20">
          <div className="space-y-6 md:w-1/2">
            <h2 className="text-xl font-semibold">
              PERFIL PERSONAL <hr className="border-s-0 border-[#ffa726]" />
            </h2>
            <div className="text-justify space-y-2">
              <p>
                Como Ingeniero Industrial de formación, descubrí mi pasión por
                el desarrollo Full Stack y aprendí de manera autodidacta. Ahora,
                estoy enfocado en crear soluciones tecnológicas innovadoras.
              </p>
              <p>
                He trabajado en proyectos desafiantes que han mejorado la
                eficiencia y la experiencia del usuario en aplicaciones web y
                API backend.
              </p>
              <p>
                Creo en lo simple y moderno, la escalabilidad y la eficiencia en
                el desarrollo. Cada proyecto es una oportunidad para aprender y
                mejorar.
              </p>
            </div>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <h2 className="text-xl font-semibold">
              MIS HABILIDADES <hr className="border-s-0 border-[#ffa726]" />
            </h2>
            <div className="flex justify-center space-x-10">
              <div className=" space-y-4">
                <div>
                  <h3 className="font-semibold text-[#fa9959]">Front-End</h3>

                  {SkillsFrontEnd.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="">{name}</span>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3 className="font-semibold text-[#fa9959]">Back-End</h3>
                  {SkillsBackEnd.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center w-full"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="block">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                <div className="">
                  <h3 className="font-semibold text-[#fa9959]">Versionado</h3>
                  {SkillsVersion.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center w-full"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="block">{name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-1/2 ">
                  <h3 className="font-semibold text-[#fa9959]">Otros</h3>
                  {SkillsOters.map(({ name, icon, id }) => {
                    return (
                      <div
                        className="flex pl-4 space-x-2 items-center w-full"
                        key={id}>
                        <span className="block text-[#f9af7e]">{icon}</span>
                        <span className="block">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center h-auto">
          <ButtonPage
            name="CONTACTO"
            url="#contact"></ButtonPage>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <hr className=" w-3/4 border-s-0 border-[#ffa726]" />
      </div>
    </main>
  );
}
