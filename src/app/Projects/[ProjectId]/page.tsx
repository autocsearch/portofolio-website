import { Project } from "@/lib/Project";
import { OasisProject } from "@/lib/ProjectDetails";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ProjectPages({ params }: { params: { ProjectId: string } }) {
  const project = Project.find((e) => e.slug === params.ProjectId);

  if (!project) return <h1 className="text-black">Project Not Found</h1>;

  return (
    <div className="p-8 text-black">
      <div className="flex justify-between p-6">
        <h1 className="text-3xl font-bold mb-4 border-b border-slate-500 w-fit">{project.title}</h1>
        <Button variant={"secondary"} asChild>
          <Link href={"/"}>Back</Link>
        </Button>
      </div>
      <Image src={project.image} alt={project.title} height={500} width={500} className="mb-4 w-full max-w-xl rounded-md" />
      <p className="text-lg">{project.description}</p>

      <div>
        <h1 className="text-3xl mt-4 font-bold">Project Details</h1>
        <div className="mt-4">
          {OasisProject.map((projects, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h1 className="text-2xl mt-5">{projects.title}</h1>
              <Image src={projects.image} alt="Project images" height={500} width={500} />
              <h3>{projects.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
