import logoNext from "../../../public/Next.js.png";
import logoTs from "../../../public/typescript.png";
import logoFigma from "../../../public/figma.png";
import logoTailwind from "../../../public/tailwind.svg";
import logoGit from "../../../public/git.png";
import logoReact from "../../../public/react.png";
import Image from "next/image";

export const Skills = () => {
  const describeSkills =
    "Mes meilleures compétences et surtout mes favorites !";

  return (
    <div className="max-w-5xl px-4 m-auto mb-24 min-w-min">
      <h2 className="mt-8 mb-2 text-4xl font-medium">Mes compètences</h2>
      <p>{describeSkills}</p>
      <div className="flex flex-wrap justify-center gap-5 my-8 text-center text-white">
        <div className="flex flex-col justify-center gap-2 text-6xl p-5 border-2 bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md">
          <Image
            src={logoTailwind}
            alt=""
            width={63}
            height={63}
            className="m-auto my-[11px]"
          />
          <p className="text-lg text-white">Tailwind</p>
        </div>
        <div className="flex flex-col justify-center gap-2 text-6xl p-5 border-2 bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md">
          <Image
            src={logoTs}
            alt=""
            width={53}
            height={53}
            className="m-auto my-1 rounded-md"
          />
          <p className="text-lg text-white">TypeScript</p>
        </div>
        <div className="flex flex-col justify-center gap-2 text-6xl p-5 border-2 bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md">
          <Image
            src={logoReact}
            alt=""
            width={63}
            height={63}
            className="m-auto my-1"
          />
          <p className="text-lg text-white">React</p>
        </div>
        <div className="flex flex-col justify-center gap-2 text-6xl p-5 border-2 bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md">
          <Image
            src={logoNext}
            alt=""
            width={63}
            height={63}
            className="m-auto"
          />
          <p className="text-lg text-white">Next.js</p>
        </div>
        <div className="flex flex-col justify-center gap-2 text-6xl p-5 border-2 bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md">
          <Image
            src={logoGit}
            alt=""
            width={62}
            height={62}
            className="m-auto my-1"
          />
          <p className="text-lg text-white">Git</p>
        </div>
        <div className="flex flex-col justify-center gap-2 text-6xl p-5 border-2 bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md">
          <Image
            src={logoFigma}
            alt=""
            width={63}
            height={63}
            className="m-auto my-1"
          />
          <p className="text-lg text-white">Figma</p>
        </div>
      </div>
    </div>
  );
};
