import React from "react";
import image from "../planina.jfif";

export default function Home() {
  return (
    <div>
      <img
        src={image}
        alt="planina.jfif"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg: pt-64 px-8">
        <h1 className="text-6xl text-red-400 font-bold cursive leadin-none lg:leading-snug home-name">
          Hello
        </h1>
      </section>
    </div>
  );
}
