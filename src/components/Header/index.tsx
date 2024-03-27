import Link from "next/link";
import malt from "../../../public/malt.png";
import github from "../../../public/github-mark.png";
import linkedin from "../../../public/linkedin.png";
import instagram from "../../../public/instagram.png";
import Image from "next/image";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between max-w-6xl px-10 py-3 m-auto">
      <div>
        <h2 className="text-2xl font-medium">Benjamin P.</h2>
      </div>
      <div className="p-1 text-xl right">
        <Link
          href="https://github.com/BenPerez94"
          target="_blank"
          className="px-4"
        >
          <Image
            src={github}
            alt=""
            width={20}
            className="inline-block mt-[-2px]"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/benjaminperez2/"
          target="_blank"
          className="px-4"
        >
          <Image
            src={linkedin}
            alt=""
            width={18}
            className="inline-block mt-[-2px]"
          />
        </Link>

        <Link
          href="https://www.instagram.com/bensoohdev/"
          target="_blank"
          className="px-4"
        >
          <Image
            src={instagram}
            alt=""
            width={18}
            className="inline-block mt-[-2px]"
          />
        </Link>
        <Link
          href="https://www.malt.fr/profile/benjaminperez2"
          target="_blank"
          className="px-4"
        >
          <Image
            src={malt}
            alt=""
            width={22}
            className="inline-block mt-[-2px]"
          />
        </Link>
        <Link href="mailto:benjamin.perez@outlook.fr" className="px-4">
          <Mail className="inline mt-[-3px]" size="22px" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
