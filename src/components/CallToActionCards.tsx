"use client";

import Link from "next/link";

const actions = [
  {
    title: "Ride",
    desc: "Go anywhere with Uber. Request a ride, hop in, and go.",
    href: "/ride",
  },
];

export default function CallToActionCards() {
  return (
    <section className="grid md:grid-cols-2 gap-6 px-2 py-8">
      <div className="grid gap-10">
        <h1 className="text-4xl font-bold"> Suggestions </h1>
        {actions.map((item, index) => (
          <div
            key={index}
            className="rounded-md p-4 bg-gray-100 shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className=" text-[12px] text-gray-600 text-sm max-w-[250px] mb-4">
              {item.desc}
            </p>
            <Link
              href={item.href}
              className="text-black font-medium hover:underline"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
