import { ProjectList } from "./projects";

export default function ProjectPage() {
  return (
    <main
      id="bg-black6"
      className="w-full flex flex-col items-center">
      <div
        id="project"
        className="min-h-full flex flex-col items-center text-white max-w-lg md:max-w-full space-y-4 py-12 px-2">
        <section className="flex flex-col items-center space-y-4 text-center md:max-w-4xl">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">PROYECTOS </h1>
            <hr className=" w-12 border border-[#ffa726]"></hr>
          </div>
          <p className="text-base">
            Aquí encontrará algunos de los proyectos personales y de clientes
            que creé y cada proyecto tiene su propio caso de estudio.
          </p>
        </section>
        <section className=" w-full space-y-4 md:flex md:flex-col items-center md:max-w-5xl md:space-y-20">
          {ProjectList.map((params) => {
            return (
              <div
                key={params.id}
                className="space-y-4 md:space-x-20 md:flex md:items-center md:justify-between">
                <div className="space-y-4">
                  <h1 className=" text-[#f9af7e]">
                    {params.title}
                    <hr className=" border-s-0 border-[#f9af7e]" />
                  </h1>
                  <div className="">{params.img}</div>
                </div>
                <p className="text-justify shadow-[#f9af7e] shadow-my rounded-lg p-2 md:w-1/2 md:shadow-none">
                  {params.content}{" "}
                </p>
              </div>
            );
          })}
        </section>
      </div>
      <div className="w-full flex justify-center">
        <hr className=" w-4/5 border-s-0 border-[#ffa726]" />
      </div>
    </main>
  );
}
