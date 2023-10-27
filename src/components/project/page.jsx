import { ProjectList } from "./projects";

export default function ProjectPage() {
  return (
    <main id="bg-black6">
      <div
        id="project"
        className="min-h-full flex flex-col items-center text-white w-full space-y-10 py-20 px-10">
        <section className="max-w-4xl flex flex-col items-center space-y-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-2xl font-semibold">PROYECTOS </h1>
            <hr className=" w-12 border border-[#ffa726] rounded-xl "></hr>
          </div>
          <p className="text-lg">
            Aquí encontrará algunos de los proyectos personales y de clientes
            que creé y cada proyecto tiene su propio caso de estudio.
          </p>
        </section>
        <section className=" w-full space-y-16 md:flex md:flex-col items-center">
          {ProjectList.map((params) => {
            return (
              <div
                key={params.id}
                className="max-w-5xl space-y-10 md:space-x-20 md:flex md:items-center md:justify-between">
                <div className="max-w-md space-y-6">
                  <h1 className="text-xl font-semibold">
                    {params.title}{" "}
                    <hr className=" border-s-0 border-[#ffa726]" />
                  </h1>
                  <p className="text-justify">{params.content} </p>
                </div>
                <div className="pt-6 md:pt-0">{params.img}</div>
              </div>
            );
          })}
        </section>
      </div>
      <div className="w-full flex justify-center">
        <hr className=" w-3/4 border-s-0 border-[#ffa726]" />
      </div>
    </main>
  );
}
