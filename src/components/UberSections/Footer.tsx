"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMdGlobe } from "react-icons/io";
import { GoLocation } from "react-icons/go";
const footerSections = [
  {
    title: "Company",
    links: [
      "About us",
      "Our offerings",
      "Newsroom",
      "Investors",
      "Blog",
      "Careers",
      "Uber AI",
    ],
  },
  {
    title: "Products",
    links: [
      "Ride",
      "Drive",
      "Deliver",
      "Eat",
      "Uber for Business",
      "Uber Freight",
      "Gift cards",
    ],
  },
  {
    title: "Global citizenship",
    links: ["Safety", "Sustainability"],
  },
  {
    title: "Travel",
    links: ["Reserve", "Airports", "Cities"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-20 pt-18 pb-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div>
          <h3 className="text-2xl py-4 mb-1">Uber</h3>
          <Link href="#" className="text-lg py-4 text-gray-300 hover:underline">
            Visit Help Center
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {footerSections.map((section) => (
            <div className="py-8" key={section.title}>
              <h4 className="text-[18px] font-medium mb-2">{section.title}</h4>
              <ul className="space-y-1 text-gray-400">
                {section.links.map((link) => (
                  <li className="py-2 text-white" key={link}>
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:grid-cols-1 md:grid md:grid-cols-2 gap-4 md:gap-0 md:justify-between md:items-start">
          <div className="flex justify-center md:justify-start gap-6 py-3 text-lg">
            <FaFacebookF />
            <RxCross1 />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

          <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <IoMdGlobe />
              English (International)
            </span>
            <span className="flex items-center gap-1">
              <GoLocation />
              San Francisco Bay Area
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 py-8 ">
          <Image
            src="/images/app-store-apple-f1f919205b.svg"
            alt="Google Play"
            width={130}
            height={40}
          />
          <Image
            src="/images/app-store-apple-f1f919205b.svg"
            alt="App Store"
            width={130}
            height={40}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-wrap justify-between text-sm text-gray-400">
            <span>© 2025 Uber Technologies Inc.</span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 underline pt-2">
            <Link href="#">Privacy</Link>
            <Link href="#">Accessibility</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
