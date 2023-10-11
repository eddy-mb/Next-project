import { ProjectList } from "./projects";

export default function ProjectPage() {
  return (
    <main className="min-h-full flex flex-col items-center text-white w-full bg-green-800">
      <section className="max-w-4xl flex flex-col items-center mt-28 space-y-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold">PROYECTOS REALIZADOS</h1>
          <span className="bg-white w-8 h-1 block rounded-lg"></span>
        </div>
        <p>
          Aquí encontrará algunos de los proyectos personales y de clientes que
          creé y cada proyecto contiene su propio estudio de caso.
        </p>
      </section>
      <section className=" w-full flex flex-col justify-center items-center space-y-10 my-12">
        {ProjectList.map((params) => {
          return (
            <div
              key={params.id}
              className="flex items-center max-w-5xl space-x-10">
              <span>{params.img}</span>
              <div className="max-w-md space-y-6">
                <h1 className="font-bold">{params.title} </h1>
                <p>{params.content} </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
