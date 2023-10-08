import Image from "next/image";
import perfil from "@/img/perfil.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className=" bg-slate-800 flex text-white justify-between h-20 w-full fixed">
        <div className=" flex w-full m-2.5 items-center">
          <Image
            className="w-auto mx-2.5"
            src={perfil}
            width={50}
            height={50}
            alt="Logotipo"
          />
          <h2 className="mx-2.5 font-bold">EDDY MAMANI</h2>
        </div>
        <div className="h-full">
          <ul className="flex items-center h-full pr-20">
            <li className=" mx-6 font-bold">
              <Link
                className="hover:text-violet-600 p-2"
                href="">
                HOME
              </Link>
            </li>
            <li className="mx-6 font-bold">
              <Link
                className="hover:text-violet-600 p-2"
                href="">
                ABOUT
              </Link>
            </li>
            <li className="mx-6 font-bold">
              <Link
                className="hover:text-violet-600 p-2"
                href="">
                PROJECTS
              </Link>
            </li>
            <li className="mx-6 font-bold">
              <Link
                className="hover:text-violet-600 p-2"
                href="">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
