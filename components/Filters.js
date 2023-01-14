import React from "react";
import Link from "next/link";

function FilterLink({ text, url }) {
  return (
    <div>
      <Link href={url}>
        <a className="bg-black text-white hover:opacity-75 m-7 p-3 rounded-md ">
          {text}
        </a>
      </Link>
    </div>
  );
}

export default function Filter() {
  return (
    <nav className=" py-10">
      <div className="flex justify-center container mx-auto ">
        <FilterLink text={"Movies"} url={"/filter/movies"} />
        <FilterLink text={"Music"} url={"/filter/music"} />
      </div>
    </nav>
  );
}
