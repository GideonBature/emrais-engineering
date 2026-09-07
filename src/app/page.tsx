"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  Waves,
  Leaf,
  Mountain,
  HardHat,
  Zap,
  Settings,
  Truck,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  Clock,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Send,
  Factory,
  Car,
  Drill,
  Gauge,
  Layers,
  Flame,
  Construction,
  Anchor,
  Forklift,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { StackedProjects } from "@/components/stacked-projects";
import {
  companyData,
  services,
  projects,
  equipment,
  navLinks,
} from "@/lib/company-data";

const iconMap: Record<string, any> = {
  Building2,
  Waves,
  Leaf,
  Mountain,
  HardHat,
  Zap,
  Settings,
  Truck,
  Factory,
  Car,
  Drill,
  Gauge,
  Layers,
  Flame,
  Construction,
  Anchor,
  Forklift,
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description:
        "Thank you for reaching out to Emrais Engineering Services. We will respond within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ============ HEADER ============ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/emrais-logo.png"
                alt="Emrais Engineering Services Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full ring-2 ring-white shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
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

          {/* Desktop Nav */}
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

          {/* CTA + Mobile Toggle */}
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

        {/* Mobile Menu */}
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

      {/* ============ HERO SECTION ============ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
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
          {/* Decorative shapes */}
          <div
            className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(212, 160, 23, 0.15)" }}
          />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
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
                Services, General Supplies, and General Contracts. From
                foundation to finishing, we deliver quality you can trust.
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

            {/* Right: Stacked construction project photos */}
            <StackedProjects />
          </div>
        </div>

        {/* Bottom wave */}
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

      {/* ============ STATS BAR ============ */}
      <section className="bg-brand text-white py-12 border-y-4 border-gold/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center group"
              >
                <div className="text-3xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
              About Emrais
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Building Nigeria's Future with
              <span className="text-brand"> Expert Engineering</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              EMRAIS ENGINEERING SERVICES LIMITED is an indigenous Firm
              incorporated in 2019, providing clients with comprehensive
              contract packages, both large and small, in Engineering
              Services, General Supplies, and General Contracts.
            </p>
          </div>

          {/* About content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                EMRAIS ENGINEERING SERVICES LIMITED was incorporated in 2019
                under the Companies and Allied Matters Act of 1990 by a group
                of professional Nigerians who pooled their resources together
                to offer Engineering Services, General Supplies, and General
                Contracts. Based in Kaduna, we serve clients nationwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our aim is to provide the growing need for multi-disciplinary
                construction firms in the Nigerian construction industry,
                thereby minimizing the coordination problems of clients and
                their advisers on projects that require various disciplines
                for successful implementation. We are flexible enough to tailor
                our services to suit specific client requirements.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Users, label: "Seasoned Professionals", value: "Core Team" },
                  { icon: Award, label: "Industry Experience", value: "5+ Years" },
                  { icon: HardHat, label: "Projects Delivered", value: "3+ Major" },
                  { icon: TrendingUp, label: "2025 Turnover", value: "₦403M+" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="p-2 rounded-md bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {item.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision cards */}
            <div className="space-y-6">
              <Card className="border-brand/20 shadow-lg overflow-hidden">
                <div className="bg-brand h-2" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brand/10 text-brand shrink-0">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Our Mission
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {companyData.mission}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-gold/30 shadow-lg overflow-hidden">
                <div className="bg-gold h-2" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gold/10 text-gold shrink-0">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Our Vision
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {companyData.vision}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Core Values
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Values are the compass that guides our policies and operations.
                These principles shape every project we undertake.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyData.coreValues.map((value, i) => (
                <Card
                  key={i}
                  className="group hover:shadow-xl transition-all duration-300 border-brand/10 hover:border-brand/30 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h4 className="text-lg font-bold text-foreground">
                        {value.name}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
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
              Supplies, and General Contracts. No project is too small or too
              large for us; we give the same level of attention to every
              assignment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <Card
                  key={i}
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
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
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

          {/* CTA banner */}
          <div className="mt-16 rounded-2xl bg-brand text-white p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-pattern opacity-20" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need a specialized engineering service?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Our team of seasoned professionals is ready to deliver
                world-class results on your next project. Let's discuss how we
                can help.
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

      {/* ============ PROJECTS SECTION ============ */}
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
              portfolio reflects our commitment to quality, safety, and
              on-time delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Card
                key={i}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/60 hover:border-brand/40 hover:-translate-y-2 flex flex-col"
              >
                {/* Project photo banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for text legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(122, 36, 37, 0.92) 0%, rgba(122, 36, 37, 0.3) 50%, rgba(0, 0, 0, 0.15) 100%)",
                    }}
                  />
                  {/* Gold accent top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                  {/* Status badge */}
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
                  {/* Title at bottom of image */}
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

      {/* ============ EQUIPMENT SECTION ============ */}
      <section
        id="equipment"
        className="py-20 lg:py-28 bg-linear-to-b from-muted/30 to-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
              Our Equipment
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Well-Equipped for
              <span className="text-brand"> Every Challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our extensive fleet of owned and leased equipment ensures we can
              handle projects of any scale, from foundation work to finishing,
              without compromising on quality or timeline.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {equipment.map((item, i) => {
              const Icon = iconMap[item.icon] || Truck;
              return (
                <Card
                  key={i}
                  className="group hover:shadow-lg transition-all duration-300 border-border/60 hover:border-brand/30"
                >
                  <CardContent className="p-5 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {item.quantity}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium leading-tight mb-2">
                      {item.name}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-[10px] ${
                        item.category === "Owned"
                          ? "border-brand/30 text-brand bg-brand/5"
                          : "border-gold/40 text-gold bg-gold/5"
                      }`}
                    >
                      {item.category}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Let's Build Something
              <span className="text-brand"> Great Together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you have a question about our services, need a quote, or
              want to discuss a project, our team is ready to help. Reach out
              and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Address */}
                <Card className="border-brand/20 shadow-md sm:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-brand/10 text-brand shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          Office Address
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {companyData.address.line1}
                          <br />
                          {companyData.address.line2}
                          <br />
                          {companyData.address.line3}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phones */}
                <Card className="border-brand/20 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-brand/10 text-brand shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          Phone
                        </h4>
                        {companyData.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-sm text-muted-foreground hover:text-brand transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emails */}
                <Card className="border-brand/20 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-brand/10 text-brand shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-foreground mb-1">
                          Email
                        </h4>
                        {companyData.emails.map((email, i) => (
                          <a
                            key={i}
                            href={`mailto:${email}`}
                            className="block text-sm text-muted-foreground hover:text-brand transition-colors break-all"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business info card */}
              <Card className="bg-brand text-white border-0 shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="h-8 w-8 text-gold" />
                    <div>
                      <h4 className="font-bold text-lg">Business Credentials</h4>
                      <p className="text-white/80 text-sm">
                        Registered and compliant
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        RC Number
                      </div>
                      <div className="font-semibold">1617574</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-1">TIN</div>
                      <div className="font-semibold">21490853-0001</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        Incorporated
                      </div>
                      <div className="font-semibold">Sept 24, 2019</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        Auditors
                      </div>
                      <div className="font-semibold text-xs">
                        Uchenna Obidike & Co
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="shadow-xl border-brand/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="+234 ..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-dark text-white shadow-md"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-foreground text-white pt-16 pb-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/emrais-logo.png"
                  alt="Emrais Engineering Services Logo"
                  className="h-14 w-14 object-contain rounded-full bg-white p-1"
                />
                <div>
                  <div className="font-bold text-lg">EMRAIS</div>
                  <div className="text-xs text-white/70">
                    Engineering Services Limited
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-md">
                An indigenous Nigerian firm providing premier Engineering
                Services, General Supplies, and General Contracts. Transforming
                concepts into reality since 2019.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brand/20 text-white border-brand/30">
                  {companyData.rcNumber}
                </Badge>
                <Badge className="bg-gold/20 text-gold border-gold/30">
                  Incorporated 2019
                </Badge>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="h-3 w-3" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    {companyData.address.line1}, {companyData.address.line2},{" "}
                    {companyData.address.line3}
                  </span>
                </li>
                {companyData.phones.map((phone, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold shrink-0" />
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:text-gold transition-colors"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
                {companyData.emails.map((email, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-gold transition-colors break-all"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} Emrais Engineering Services
              Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>RC No. 1617574</span>
              <span className="text-white/30">|</span>
              <span>TIN: 21490853-0001</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
