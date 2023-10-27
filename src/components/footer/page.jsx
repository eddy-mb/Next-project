import Link from "next/link";
export default function FooterPage() {
  return (
    <footer
      id="bg-black6"
      className="h-36 flex justify-center w-full px-10 bg-[#FFAEF2]">
      <div className=" flex items-center md:max-w-5xl space-x-10 text-[#ffa726]">
        <div className="w-1/2 text-sm">
          <h2 className="font-semibold">EDDY MAMANI</h2>
          <p>Creando soluciones web completas, de principio a fin.</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs">
            &copy; Copyright 2023. diseñado y desarrollado por:
            <Link
              className="font-semibold underline hover:cursor-pointer hover:text-white "
              href="#home">
              Eddy Mamani
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
