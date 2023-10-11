import Link from "next/link";
export default function ButtonPage(props) {
  return (
    <Link
      className=" flex w-min px-10 py-3 rounded bg-violet-700"
      href={props.url}>
      {props.name}
    </Link>
  );
}
