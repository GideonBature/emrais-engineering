import { ChevronRight, Phone, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StackedProjects } from "@/components/stacked-projects";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #7A2425 0%, #AC3435 50%, #7A2425 100%)",
          }}
        />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(212, 160, 23, 0.15)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-gold/20 text-gold border-gold/30 backdrop-blur-sm">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
              RC No. 1617574 · Incorporated 2019
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Engineering <span className="text-gold">Excellence</span>,
              <br />
              Transforming Concepts
              <br />
              Into Reality
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              An indigenous Nigerian firm providing premier Engineering
              Services, General Supplies, and General Contracts. From foundation
              to finishing, we deliver quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-brand-dark font-semibold shadow-xl"
                >
                  Explore Our Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
                >
                  Contact Us
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <StackedProjects />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-12 fill-background"
          preserveAspectRatio="none"
        >
          <path d="M0,80 L1440,80 L1440,20 Q720,0 0,20 Z" />
        </svg>
      </div>
    </section>
  );
}
