import Link from "next/link";
import malt from "../../../public/malt.png";
import Image from "next/image";

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
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/benjaminperez2/"
          target="_blank"
          className="px-4"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>

        <Link
          href="https://www.instagram.com/bensoohdev/"
          target="_blank"
          className="px-4"
        >
          <i className="fa-brands fa-instagram"></i>
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
          <i className="fa-solid fa-envelope"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
