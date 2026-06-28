import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HardHat, ArrowLeft, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/construction-materials")({
  head: () => ({
    meta: [
      { title: "Construction Materials in Mt Fletcher | Tlotliso Divisions" },
      { name: "description", content: "Bricks, sand, stone and bulk aggregate supply for builders in Mt Fletcher and the Eastern Cape. Fast delivery. Locally owned." },
      { property: "og:title", content: "Construction Materials in Mt Fletcher | Tlotliso Divisions" },
      { property: "og:description", content: "Bricks, sand, stone and bulk aggregate supply for builders in Mt Fletcher and the Eastern Cape. Fast delivery. Locally owned." },
      { name: "twitter:title", content: "Construction Materials in Mt Fletcher | Tlotliso Divisions" },
      { name: "twitter:description", content: "Bricks, sand, stone and bulk aggregate supply for builders in Mt Fletcher and the Eastern Cape. Fast delivery. Locally owned." },
    ],
  }),
  component: ConstructionMaterials,
});

const LOGO_URL = "logo/tlotliso-logo.png";

const services = [
  {
    title: "Blocks & Bricks",
    desc: "All sizes of quality bricks and blocks for residential, commercial, and industrial construction.",
    details: ["NFP bricks", "M90 blocks", "Cement bricks", "Lintel blocks"],
  },
  {
    title: "Sand Supply",
    desc: "Premium river sand and plaster sand for construction and finishing work.",
    details: ["River sand", "Plaster sand", "Building sand", "Pit sand"],
  },
  {
    title: "Aggregates",
    desc: "Crushed stone and other aggregates for foundations, concrete, and landscaping.",
    details: ["19mm crushed stone", "13mm crushed stone", "6mm crusher dust", "G5/G6 sub-base"],
  },
];

const inventory = [
  { name: "NFP Bricks", size: "290 x 140 x 100mm" },
  { name: "M90 Blocks", size: "290 x 190 x 140mm" },
  { name: "Cement Bricks", size: "220 x 110 x 73mm" },
  { name: "River Sand", size: "Bulk bags or load" },
  { name: "Plaster Sand", size: "Bulk bags or load" },
  { name: "19mm Stone", size: "Bulk bags or load" },
];

const whatsappNumber = "27790573688";
const message = encodeURIComponent("Hi Tlotliso, I'd like to get a quote for construction materials.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export function ConstructionMaterials() {
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
            <HardHat className="h-8 w-8" />
          </div>
          <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228] mb-4">
            Division 1 of 4
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
            Construction Materials
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#0A1F5C]/70 max-w-2xl mx-auto">
            Quality bricks, blocks, sand, and stone for builders across the Eastern Cape. 
            From foundation to finish — we've got your materials covered.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Our Products & Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-[#0A1F5C]/10 bg-white p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0A1F5C]">{service.title}</h3>
                <p className="mt-2 text-[#0A1F5C]/70">{service.desc}</p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((d) => (
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

      {/* Inventory */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F6F7FB]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Available Inventory
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inventory.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-[#0A1F5C]/10"
              >
                <div className="h-12 w-12 rounded-lg bg-[#0A1F5C]/10 flex items-center justify-center">
                  <HardHat className="h-6 w-6 text-[#0A1F5C]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1F5C]">{item.name}</p>
                  <p className="text-xs text-[#0A1F5C]/60">{item.size}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#0A1F5C]/70 mb-8">
            Get a personalized quote for your construction materials. 
            We deliver throughout the Eastern Cape.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-1 hover:shadow-xl hover:bg-[#20BD5A]"
          >
            <MessageCircle className="h-6 w-6" />
            Get Quote on WhatsApp
          </a>
          <p className="mt-4 text-sm text-[#0A1F5C]/60">
            Or call us to discuss your requirements
          </p>
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