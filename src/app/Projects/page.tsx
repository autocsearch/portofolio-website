import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLink } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/Project";

export default function ProjectLists() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-3xl text-white mb-4
      "
        >
          My Projects
        </h1>
      </div>
      <ul className="text-lg text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5 ">
        {Project.map((project, index) => (
          <Link href={`/Projects/${project.slug}`} key={index} className="hover">
            <Card className="w-full max-w-sm rounded-md shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] group h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardAction className="flex gap-2">
                  <Button asChild>
                    <Link href={project.live} target="_blank">
                      <FaLink />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <Image src={project.image} alt="project image" width={500} height={500} />
              </CardContent>
              <CardDescription className="p-3 flex justify-center">{project.description}</CardDescription>
              <CardFooter className="px-4">
                <Link href={`/Projects/${project.slug}`}>
                  <span
                    className="relative inline-block text-sm font-medium text-black group-hover:text-black transition-colors duration-300
      after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    Details
                  </span>
                </Link>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  );
}
