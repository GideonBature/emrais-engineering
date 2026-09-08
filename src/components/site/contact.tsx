"use client";

import { FileCheck, Mail, MapPin, Phone, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { companyData } from "@/lib/company-data";

export function ContactSection() {
  const { toast } = useToast();

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
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Let&apos;s Build Something
            <span className="text-brand"> Great Together</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you have a question about our services, need a quote, or want
            to discuss a project, our team is ready to help. Reach out and
            we&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
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

              <Card className="border-brand/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brand/10 text-brand shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      {companyData.phones.map((phone) => (
                        <a
                          key={phone}
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

              <Card className="border-brand/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brand/10 text-brand shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      {companyData.emails.map((email) => (
                        <a
                          key={email}
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
                    <div className="text-white/60 text-xs mb-1">RC Number</div>
                    <div className="font-semibold">1617574</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">TIN</div>
                    <div className="font-semibold">21490853-0001</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Incorporated</div>
                    <div className="font-semibold">Sept 24, 2019</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Auditors</div>
                    <div className="font-semibold text-xs">
                      Uchenna Obidike & Co
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl border-brand/20">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                    />
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
  );
}
