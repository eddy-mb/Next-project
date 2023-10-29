import Link from "next/link";
export default function ButtonPage(props) {
  return (
    <Link
      className=" text-[#d3d3d3] flex w-min px-4 py-2 rounded-full border border-[#f9af7e] hover:shadow-[#ffa726] hover:shadow-md"
      href={props.url}>
      {props.name}
    </Link>
  );
}
