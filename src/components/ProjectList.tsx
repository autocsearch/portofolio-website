import { allProjects } from "@/lib/projects/main";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter, CardAction } from "@/components/ui/card";

export default function ProjectList() {
  if (!Array.isArray(allProjects) || allProjects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 max-w-7xl w-full">
      {allProjects.map((project) => {
        const title = project.overview?.title || "Untitled Project";
        const shortDesc = project.overview?.shortDescription || "No description available";
        const imageSrc = project.screenshots?.[0]?.image || "/placeholder.jpg";

        return (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="hover">
            <Card className="w-full max-w-sm hover:shadow-lg transition-transform hover:scale-[1.02] group h-full bg-gradient-to-br from-white via-gray-100 to-gray-50 p-6 rounded-xl shadow">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardAction className="flex gap-2" />
              </CardHeader>
              <CardContent className="rounded-2xl">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover"
                  unoptimized // remove if domains configured properly
                />
              </CardContent>
              <CardDescription className="p-3 flex justify-center text-black">{shortDesc}</CardDescription>
              <CardFooter className="px-4">
                <span
                  className="relative inline-block text-sm font-medium text-black group-hover:text-black transition-colors duration-300
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  Details
                </span>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </ul>
  );
}
