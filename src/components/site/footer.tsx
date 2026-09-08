import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { companyData, navLinks } from "@/lib/company-data";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              An indigenous Nigerian firm providing premier Engineering Services,
              General Supplies, and General Contracts. Transforming concepts into
              reality since 2019.
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
              {companyData.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-gold transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              {companyData.emails.map((email) => (
                <li key={email} className="flex items-center gap-2">
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Emrais Engineering Services Limited.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>RC No. 1617574</span>
            <span className="text-white/30">|</span>
            <span>TIN: 21490853-0001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
