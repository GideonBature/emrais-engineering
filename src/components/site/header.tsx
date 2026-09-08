"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/company-data";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/emrais-logo.png"
            alt="Emrais Engineering Services Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full ring-2 ring-white shadow-md group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-base md:text-lg tracking-tight ${
                scrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}
            >
              EMRAIS
            </span>
            <span
              className={`text-[10px] md:text-xs font-medium ${
                scrolled ? "text-muted-foreground" : "text-white/90 drop-shadow"
              }`}
            >
              Engineering Services Ltd.
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-brand/10 hover:text-brand ${
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex">
            <Button className="bg-brand hover:bg-brand-dark text-white shadow-md">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <button
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground rounded-md hover:bg-brand/10 hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-2 bg-brand hover:bg-brand-dark text-white">
                Get a Quote
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
