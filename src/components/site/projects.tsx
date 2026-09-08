import { CheckCircle2, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/company-data";
import { assetPath } from "@/lib/paths";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
            Our Projects
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Delivering Excellence
            <span className="text-brand"> Nationwide</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From residential developments to large-scale construction, our
            portfolio reflects our commitment to quality, safety, and on-time
            delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/60 hover:border-brand/40 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={assetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(122, 36, 37, 0.92) 0%, rgba(122, 36, 37, 0.3) 50%, rgba(0, 0, 0, 0.15) 100%)",
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-gold text-brand-dark"
                    } border-0 shadow-md`}
                  >
                    {project.status === "Completed" ? (
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                    ) : (
                      <Clock className="mr-1 h-3 w-3" />
                    )}
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-gold mb-1 uppercase tracking-wide font-medium">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 text-brand" />
                  <span>{project.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
