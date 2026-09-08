"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/paths";

interface ProjectCard {
  image: string;
  title: string;
  location: string;
  year: string;
}

const projects: ProjectCard[] = [
  {
    image: "/project-1.jpg",
    title: "Modern Residential Development",
    location: "Kaduna, Nigeria",
    year: "2024",
  },
  {
    image: "/project-2.jpg",
    title: "Multi-Storey Residential Complex",
    location: "Abuja, FCT",
    year: "2023",
  },
  {
    image: "/project-3.jpg",
    title: "Contemporary Family Duplex",
    location: "Kaduna State",
    year: "2022",
  },
];

export function StackedProjects() {
  const [topIndex, setTopIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Auto-shuffle — always running, no hover required.
    // Slow, cinematic pace: a new card comes to the top every 4 seconds.
    intervalRef.current = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Calculate each card's position relative to the current top card
  const getCardStyle = (index: number) => {
    const total = projects.length;
    // How many positions behind the top card is this one?
    // 0 = top, 1 = second, 2 = third (bottom)
    const offsetFromTop = (index - topIndex + total) % total;

    // Top card: fully visible, front and center
    // Behind cards: offset upward + slightly to the side + rotated for a stacked-paper feel
    const translateY = offsetFromTop * -22;
    const translateX = offsetFromTop * 10;
    const rotation = (offsetFromTop - 1) * 2.2;
    const scale = 1 - offsetFromTop * 0.04;
    const zIndex = total - offsetFromTop;

    return {
      transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex,
      opacity: offsetFromTop === 0 ? 1 : 0.88,
    };
  };

  return (
    <div className="relative w-full h-[540px] hidden lg:block">
      {/* Stacked cards container */}
      <div className="relative w-full h-full">
        {projects.map((project, index) => {
          const style = getCardStyle(index);
          const isTop = style.zIndex === projects.length;

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={style}
            >
              {/* Slim, diffuse traveling light hugging the border — only on the top card */}
              {isTop && (
                <div className="absolute -inset-[3px] rounded-[1.55rem] pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-[-60%] animate-spin-slow"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 220deg, rgba(212, 160, 23, 0.85) 270deg, rgba(255, 245, 210, 0.7) 285deg, rgba(212, 160, 23, 0.85) 300deg, transparent 360deg)",
                      filter: "blur(1.5px)",
                    }}
                  />
                </div>
              )}

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-brand-dark">
                {/* Project image */}
                <img
                  src={assetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay for depth */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(122, 36, 37, 0.92) 0%, rgba(122, 36, 37, 0.25) 40%, rgba(0, 0, 0, 0.15) 100%)",
                  }}
                />

                {/* Gold accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold" />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-gold text-brand-dark border-0 shadow-md">
                    <CheckCircle2 className="mr-1.5 h-3 w-3" />
                    Completed · {project.year}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    {project.location}
                  </p>
                </div>

                {/* Card position indicator (top-right) */}
                <div
                  className={`absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-sm border flex items-center justify-center text-sm font-bold transition-colors ${
                    isTop
                      ? "bg-gold text-brand-dark border-gold"
                      : "bg-black/40 text-white border-white/30"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating accent badge (outside the stack) */}
      <div className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl bg-gold shadow-xl flex items-center justify-center rotate-6 z-30 pointer-events-none">
        <div className="text-center text-brand-dark">
          <div className="text-2xl font-bold leading-none">★</div>
          <div className="text-[9px] font-bold uppercase tracking-wide mt-1">
            Our Work
          </div>
        </div>
      </div>

      {/* Progress dots indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-700 ${
              index === topIndex ? "w-8 bg-gold" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
