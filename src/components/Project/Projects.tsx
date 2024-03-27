"use client";
import { useEffect, useReducer } from "react";
import { GITHUB_USERNAME } from "../../lib/config";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import LoaderShow from "../../components/Loader";
import Project from "./project";

interface Repository {
  description: string;
  url: string;
  name: string;
}

type FetchStatus = "idle" | "pending" | "resolved" | "rejected";

interface FetchState {
  status: FetchStatus;
  data: Repository[] | null;
  error: Error | null;
}

type FetchAction =
  | { type: "pending" }
  | { type: "resolved"; data: Repository[] }
  | { type: "rejected"; error: Error };

const fetchReducer = (state: FetchState, action: FetchAction): FetchState => {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type:`);
    }
  }
};

export const Projects: React.FC = () => {
  const describeProjects = "J'ai réalisé quelques projets ci dessous";
  const [{ status, data, error }, dispatch] = useReducer(fetchReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "pending" });

    fetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME))
      .then((res) => res.json())
      .then((repo: Repository[]) => {
        dispatch({ type: "resolved", data: repo });
      })
      .catch((err: Error) => {
        dispatch({ type: "rejected", error: err });
      });
  }, []);

  if (status === "pending" || status === "idle") {
    return (
      <div className="max-w-5xl px-4 m-auto">
        <h2 className="mt-8 mb-2 text-4xl font-medium">Mes projets</h2>
        <p>{describeProjects}</p>
        <div className="flex flex-col justify-around my-8 md:gap-4 gap-2 md:flex-row grow">
          <LoaderShow />
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="max-w-5xl px-4 m-auto">
      <h2 className="mt-8 mb-2 text-4xl font-medium">Mes projets</h2>
      <p>{describeProjects}</p>
      <div className="flex flex-col justify-around my-2md:gap-4 gap-2 md:flex-row grow">
        {data?.map((repository) => (
          <Project
            key={repository.name}
            project={repository.name}
            description={repository.description}
            url={repository.url}
          />
        ))}
      </div>
    </div>
  );
};
