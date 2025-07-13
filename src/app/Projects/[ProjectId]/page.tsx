import { allProjects } from "@/lib/projects/main";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params;

  const project = allProjects.find((p) => p.slug.toLowerCase() === projectId.toLowerCase());

  if (!project) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">{project.overview.title}</h1>
        <p className="text-muted-foreground whitespace-pre-line">{project.overview.shortDescription}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-black w-fit">Project Description</h2>
        <p className="text-muted-foreground whitespace-pre-line">{project.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-black w-fit">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-black w-fit">Screenshots</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {project.screenshots.map((item, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image src={item.image} alt={item.title} fill className="object-cover rounded-t-lg" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <CardContent className="p-4 space-y-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
