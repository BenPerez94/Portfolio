import Link from "next/link";
import malt from "../../../public/malt.png";
import github from "../../../public/github-mark.png";
import linkedin from "../../../public/linkedin.png";
import instagram from "../../../public/instagram.png";
import Image from "next/image";
import { Copyright, Mail } from "lucide-react";
export const Footer = () => {
  return (
    <footer className=" m-auto border-t-2 bg-[hsl(var(--card))] border-[hsl(var(--border))]">
      <div className="max-w-5xl px-3 pb-8 m-auto text-center md:text-right ">
        <h3 className="mt-8 mb-2 text-2xl font-medium">Contactez moi</h3>
        <p>Contactez moi sur les réseaux sociaux ou par mail.</p>
        <div className="p-1 my-6 text-3xl right flex flex-row justify-center md:justify-end">
          <Link
            href="https://github.com/BenPerez94"
            className="ml-6"
            target="_blank"
          >
            <Image
              src={github}
              alt=""
              width={33}
              className="inline-block mt-[-8px]"
            />
          </Link>
          <Link
            href="https://www.instagram.com/bensoohdev/"
            className="ml-6"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt=""
              width={33}
              className="inline-block mt-[-8px]"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/benjaminperez2/"
            className="ml-6"
            target="_blank"
          >
            <Image
              src={instagram}
              alt=""
              width={33}
              className="inline-block mt-[-8px]"
            />
          </Link>
          <Link
            href="https://www.malt.fr/profile/benjaminperez2"
            target="_blank"
            className="ml-6"
          >
            <Image
              src={malt}
              alt=""
              width={33}
              className="inline-block mt-[-8px]"
            />
          </Link>
          <Link
            href="mailto:benjamin.perez@outlook.fr"
            className="ml-6"
            target="_blank"
          >
            <Mail className="inline mt-[-6px]" size="34px" />
          </Link>
        </div>
        <p className="text-sm mt-2  md:text-left md:mt-[-50px]">
          Copyright 2024 <Copyright className="inline mt-[-2px]" size={14} />{" "}
          Réalisation Benjamin Perez
        </p>
      </div>
    </footer>
  );
};
