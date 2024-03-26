import Link from "next/link";
import logoNext from "../../../public/Next.js.png";
import avatar from "../../../public/avatar.jpg";
import logoTs from "../../../public/typescript.png";
import logoReact from "../../../public/react.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse max-w-6xl m-auto mt-6 lg:px-6 lg:pr-24 lg:py-24 lg:flex-row">
      <div className="px-4 lg:px-10">
        <h1>Developpeur Front End</h1>
        <h2 className="mb-2 text-2xl font-medium">Benjamin Perez</h2>
        <p className="mb-12 text-lg">
          Développeur spécialisé en{" "}
          <span>
            <Image
              src={logoTs}
              alt=""
              width={18}
              height={18}
              className="inline m-auto rounded-md mt-[-4px]"
            />{" "}
            TypeScript
          </span>{" "}
          ,{" "}
          <span>
            <Image
              src={logoReact}
              alt=""
              width={18}
              height={18}
              className="inline m-auto rounded-md mt-[-4px]"
            />{" "}
            React
          </span>{" "}
          et{" "}
          <span>
            <Image
              src={logoNext}
              alt=""
              width={18}
              height={18}
              className="inline mt-[-4px]"
            />{" "}
            Next.js
          </span>
          , je crée des applications <span>web</span> innovantes. Explorez mes{" "}
          <span>projets</span> pour découvrir mon travail.
        </p>
        <Link href="mailto:benjamin.perez@outlook.fr" className="button cta">
          Me contacter
        </Link>
      </div>
      <div>
        <Image
          src={avatar}
          alt="Photo de Benjamin"
          className="rounded-full shadow-md shadow-[#149eca] m-auto max-h-56 min-h-56 max-w-56 min-w-56 border-2 border-[hsl(var(--border))] "
        />
      </div>
    </div>
  );
};
