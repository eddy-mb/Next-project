import Link from "next/link";
export default function ButtonPage(props) {
  return (
    <Link
      className="text-xl text-[#d3d3d3] font-semibold flex w-min px-6 py-2 rounded-full border border-[#ffa726] hover:shadow-[#ffa726] hover:shadow-md"
      href={props.url}>
      {props.name}
    </Link>
  );
}
