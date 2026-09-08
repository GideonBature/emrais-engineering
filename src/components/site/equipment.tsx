import { Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { equipment } from "@/lib/company-data";
import { iconMap } from "@/lib/icons";

export function EquipmentSection() {
  return (
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
          {equipment.map((item) => {
            const Icon = iconMap[item.icon] || Truck;
            return (
              <Card
                key={item.name}
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
  );
}
