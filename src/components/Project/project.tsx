import Link from "next/link";
import portfolio from "../../../public/portfolio.png";
import creafannym from "../../../public/creafannym.png";
import other from "../../../public/other.png";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  project: string;
  description: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({ project, description, url }) => {
  let projectImage: StaticImageData;

  if (project === "Portfolio") {
    projectImage = portfolio;
  } else if (project === "GuessTheNumber") {
    projectImage = other;
  } else {
    projectImage = creafannym;
  }
  return (
    <div className="p-5 border-2 flex md:flex-col flex-row bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-md md:my-8">
      <Image
        src={projectImage}
        alt="picture"
        width={250}
        height={250}
        className="h-40 object-cover mb-3 rounded-sm mr-6 md:mr-0"
      />
      <div>
        <h3 className="mb-4 text-2xl font-medium">{project}</h3>
        <p className="mb-6">{description}</p>
        <Link href={url} className="float-right">
          En savoir plus...
        </Link>
      </div>
    </div>
  );
};

export default Project;
