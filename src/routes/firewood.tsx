import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, ArrowLeft, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/firewood")({
  head: () => ({
    meta: [
      { title: "Firewood Supply in Mt Fletcher | Tlotliso Divisions" },
      { name: "description", content: "Dry, seasoned firewood neatly packaged and delivered in Mt Fletcher. Ideal for home heating and braais." },
      { property: "og:title", content: "Firewood Supply in Mt Fletcher | Tlotliso Divisions" },
      { property: "og:description", content: "Dry, seasoned firewood neatly packaged and delivered in Mt Fletcher. Ideal for home heating and braais." },
      { name: "twitter:title", content: "Firewood Supply in Mt Fletcher | Tlotliso Divisions" },
      { name: "twitter:description", content: "Dry, seasoned firewood neatly packaged and delivered in Mt Fletcher. Ideal for home heating and braais." },
    ],
  }),
  component: Firewood,
});

const LOGO_URL = "logo/tlotliso-logo.png";

const whatsappNumber = "27790573688";
const message = encodeURIComponent("Hi Tlotliso, I'd like to get a quote for firewood supply.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

const products = [
  {
    title: "Small Bundles",
    desc: "Perfect for a single braai or small fireplace. Easy to carry and store.",
    details: ["5-8kg per bundle", "Dry & seasoned", "Easy-grip handle"],
  },
  {
    title: "Medium Bags",
    desc: "Great value for weekend braais or medium-sized fireplaces.",
    details: ["15-20kg per bag", "Premium hardwood", "Moisture-free"],
  },
  {
    title: "Bulk Orders",
    desc: "For commercial use, events, or large heating needs.",
    details: ["50kg+ available", "Competitive pricing", "Delivery available"],
  },
];

const features = [
  "All wood is dry and seasoned (min. 6 months)",
  "Neatly packaged in convenient bundles or bags",
  "Sourced from sustainable local suppliers",
  "Perfect for braais, fireplaces, and outdoor heating",
  "Delivery available throughout Eastern Cape",
];

export function Firewood() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-[#0A1F5C]/10">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 py-3">
          <a href="/#divisions" className="flex items-center gap-2 text-[#0A1F5C] hover:text-[#CC2228] transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </a>
          <a href="/">
            <img src={LOGO_URL} alt="Tlotliso" className="h-12 w-auto" />
          </a>
          <div />
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#F6F7FB] to-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A1F5C] text-white mb-6">
            <Flame className="h-8 w-8" />
          </div>
          <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228] mb-4">
            Division 5 of 5
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
            Firewood Supply
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#0A1F5C]/70 max-w-2xl mx-auto">
            Premium, dry firewood neatly packaged and ready for your hearth or braai. 
            Bring warmth to your home or the perfect fire to your gathering.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Our Products
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-[#0A1F5C]/10 bg-white p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0A1F5C]">{product.title}</h3>
                <p className="mt-2 text-[#0A1F5C]/70">{product.desc}</p>
                <ul className="mt-4 space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                      <Check className="h-4 w-4 text-[#CC2228]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F6F7FB]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Why Choose Our Firewood?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-[#0A1F5C]/10"
              >
                <div className="h-10 w-10 rounded-full bg-[#CC2228]/10 flex items-center justify-center flex-shrink-0">
                  <Flame className="h-5 w-5 text-[#CC2228]" />
                </div>
                <p className="text-sm font-medium text-[#0A1F5C]">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-white to-[#F6F7FB]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] mb-4">
            Ready to Fire Up?
          </h2>
          <p className="text-[#0A1F5C]/70 mb-8">
            Order your firewood today. We offer delivery throughout the Eastern Cape 
            and bulk pricing for larger orders.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-1 hover:shadow-xl hover:bg-[#20BD5A]"
          >
            <MessageCircle className="h-6 w-6" />
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0A1F5C]/10 px-4 sm:px-6 py-10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Tlotliso" className="h-9 w-auto" />
            <span className="text-xs text-[#0A1F5C]/60">© 2026 Tlotliso Divisions</span>
          </div>
          <div className="flex gap-4">
            <a href="/#divisions" className="text-xs text-[#0A1F5C]/60 hover:text-[#CC2228]">Other Divisions</a>
            <a href="/#contact" className="text-xs text-[#0A1F5C]/60 hover:text-[#CC2228]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}