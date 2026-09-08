import { companyData } from "@/lib/company-data";

export function StatsSection() {
  return (
    <section className="bg-brand text-white py-12 border-y-4 border-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.stats.map((stat) => (
            <div key={stat.label} className="text-center group">
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
  );
}
