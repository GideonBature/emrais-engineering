import { Award, Eye, HardHat, Target, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { companyData } from "@/lib/company-data";

const highlights = [
  { icon: Users, label: "Seasoned Professionals", value: "Core Team" },
  { icon: Award, label: "Industry Experience", value: "5+ Years" },
  { icon: HardHat, label: "Projects Delivered", value: "3+ Major" },
  { icon: TrendingUp, label: "2025 Turnover", value: "₦403M+" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
            About Emrais
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Building Nigeria&apos;s Future with
            <span className="text-brand"> Expert Engineering</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EMRAIS ENGINEERING SERVICES LIMITED is an indigenous Firm
            incorporated in 2019, providing clients with comprehensive contract
            packages, both large and small, in Engineering Services, General
            Supplies, and General Contracts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Who We Are
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              EMRAIS ENGINEERING SERVICES LIMITED was incorporated in 2019 under
              the Companies and Allied Matters Act of 1990 by a group of
              professional Nigerians who pooled their resources together to offer
              Engineering Services, General Supplies, and General Contracts.
              Based in Kaduna, we serve clients nationwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our aim is to provide the growing need for multi-disciplinary
              construction firms in the Nigerian construction industry, thereby
              minimizing the coordination problems of clients and their advisers
              on projects that require various disciplines for successful
              implementation. We are flexible enough to tailor our services to
              suit specific client requirements.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
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
                key={value.name}
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
  );
}
