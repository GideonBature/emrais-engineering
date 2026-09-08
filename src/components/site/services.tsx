import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/company-data";
import { iconMap } from "@/lib/icons";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-linear-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Comprehensive Engineering
            <span className="text-brand"> Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We cover the complete spectrum of Engineering Services, General
            Supplies, and General Contracts. No project is too small or too large
            for us; we give the same level of attention to every assignment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-border/60 hover:border-brand/40 hover:-translate-y-1 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mt-auto">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-brand text-white p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a specialized engineering service?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Our team of seasoned professionals is ready to deliver world-class
              results on your next project. Let&apos;s discuss how we can help.
            </p>
            <a href="#contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-brand-dark font-semibold shadow-xl"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
