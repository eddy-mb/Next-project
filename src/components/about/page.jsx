import ButtonPage from "../buttton/buttonPage";
import {
  SkillsFrontEnd,
  SkillsBackEnd,
  SkillsVersion,
  SkillsOters,
} from "./skills";
export default function AboutPage() {
  return (
    <main className="bg-[#393A47] text-white flex flex-col items-center w-full min-h-full space-y-12">
      <section className="max-w-4xl flex flex-col items-center mt-28 space-y-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold">ACERCA DE MI</h1>
          <span className="bg-white w-8 h-1 block rounded-lg"></span>
        </div>
        <p>
          Aquí encontrarás más información sobre mí, lo que hago y mis
          habilidades actuales principalmente en términos de programación y
          tecnología.
        </p>
      </section>
      <section className="flex space-x-8">
        <div className="w-[28rem] space-y-4">
          <h2 className="font-bold">MIS HABILIDADES</h2>
          <div className="flex">
            <div className="w-1/2">
              <h3 className="mb-2 font-bold">Front-End</h3>
              {SkillsFrontEnd.map(({ name, icon, id }) => {
                return (
                  <div
                    className="flex ml-4 space-x-2 items-center"
                    key={id}>
                    <span className="block">{icon}</span>
                    <span className="block">{name}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="mb-2 font-bold">Back-End</h3>
              {SkillsBackEnd.map(({ name, icon, id }) => {
                return (
                  <div
                    className="flex ml-4 space-x-2 items-center"
                    key={id}>
                    <span className="block">{icon}</span>
                    <span className="block">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="mb-2 font-bold">Versionado</h3>
              {SkillsVersion.map(({ name, icon, id }) => {
                return (
                  <div
                    className="flex ml-4 space-x-2 items-center"
                    key={id}>
                    <span className="block">{icon}</span>
                    <span className="block">{name}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="mb-2 font-bold">Otros</h3>
              {SkillsOters.map(({ name, icon, id }) => {
                return (
                  <div
                    className="flex ml-4 space-x-2 items-center"
                    key={id}>
                    <span className="block">{icon}</span>
                    <span className="block">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-lg space-y-4">
          <h2 className="font-bold">PERFIL PERSONAL</h2>
          <p className="text-justify">
            Soy un desarrollador web frontend que construye el front-end de
            sitios web y aplicaciones web que conducen al éxito del producto en
            general. Echa un vistazo a algunos de mis trabajos en la sección de
            Proyectos . También me gusta compartir contenido relacionado con lo
            que he aprendido a lo largo de los años en Desarrollo Web para que
            pueda ayudar a otras personas de la Comunidad de Desarrollo. No
            dudes en conectarte o seguirme en mi Linkedin donde publico
            contenido útil relacionado con el desarrollo y la programación web.
            Estoy abierto a oportunidades laborales donde pueda contribuir,
            aprender y crecer. Si tienes una buena oportunidad que coincida con
            mis habilidades y experiencia, no dudes en contactarme .
          </p>
          <div className="flex justify-center">
            <ButtonPage
              name="CONTACTAME"
              url="/src/components/contact"></ButtonPage>
          </div>
        </div>
      </section>
    </main>
  );
}
