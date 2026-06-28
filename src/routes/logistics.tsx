import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Truck, ArrowLeft, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Freight & Logistics Services | Tlotliso Divisions — Eastern Cape" },
      { name: "description", content: "Reliable local and long-haul freight with tracked deliveries across the Eastern Cape. On-time guarantee from Tlotliso Divisions." },
      { property: "og:title", content: "Freight & Logistics Services | Tlotliso Divisions — Eastern Cape" },
      { property: "og:description", content: "Reliable local and long-haul freight with tracked deliveries across the Eastern Cape. On-time guarantee from Tlotliso Divisions." },
      { name: "twitter:title", content: "Freight & Logistics Services | Tlotliso Divisions — Eastern Cape" },
      { name: "twitter:description", content: "Reliable local and long-haul freight with tracked deliveries across the Eastern Cape. On-time guarantee from Tlotliso Divisions." },
    ],
  }),
  component: Logistics,
});

const LOGO_URL = "logo/tlotliso-logo.png";

const services = [
  {
    title: "Local Deliveries",
    desc: "Same-day and next-day delivery within Mt Fletcher and surrounding areas.",
    details: ["Direct delivery", "Time-sensitive", "Proof of delivery"],
  },
  {
    title: "Long-Haul Transport",
    desc: "Regional and provincial transport for construction materials and equipment.",
    details: ["Cross-border capable", "Bulk loads", "Dedicated routes"],
  },
  {
    title: "Last-Mile Delivery",
    desc: "Final leg delivery to your construction site, event venue, or business.",
    details: ["Site delivery", "Unloading assistance", "Flexible scheduling"],
  },
  {
    title: "Tracked Shipments",
    desc: "Real-time tracking and updates for your deliveries.",
    details: ["GPS tracking", "SMS updates", "Delivery confirmation"],
  },
];

const whatsappNumber = "27790573688";
const message = encodeURIComponent("Hi Tlotliso, I'd like to get a quote for logistics services.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export function Logistics() {
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
            <Truck className="h-8 w-8" />
          </div>
          <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228] mb-4">
            Division 3 of 4
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
            Logistics Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#0A1F5C]/70 max-w-2xl mx-auto">
            Reliable freight and last-mile transport built around your timelines. 
            From local deliveries to long-haul, we get your materials there.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <img 
            src="logistics_solutions/IMG-20260608-WA0021.jpg" 
            alt="Logistics truck" 
            className="w-full rounded-2xl shadow-xl" 
          />
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F6F7FB]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Our Transport Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-[#0A1F5C]/10 bg-white p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#0A1F5C]">{service.title}</h3>
                <p className="mt-2 text-sm text-[#0A1F5C]/70">{service.desc}</p>
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

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Why Choose Our Logistics?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A1F5C]/10 mb-4">
                <Truck className="h-7 w-7 text-[#0A1F5C]" />
              </div>
              <h3 className="font-bold text-[#0A1F5C]">On-Time Guarantee</h3>
              <p className="mt-2 text-sm text-[#0A1F5C]/70">We deliver when we say we will</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A1F5C]/10 mb-4">
                <Check className="h-7 w-7 text-[#0A1F5C]" />
              </div>
              <h3 className="font-bold text-[#0A1F5C]">Tracked Shipments</h3>
              <p className="mt-2 text-sm text-[#0A1F5C]/70">Real-time updates on your delivery</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A1F5C]/10 mb-4">
                <Check className="h-7 w-7 text-[#0A1F5C]" />
              </div>
              <h3 className="font-bold text-[#0A1F5C]">Competitive Rates</h3>
              <p className="mt-2 text-sm text-[#0A1F5C]/70">Value pricing for all loads</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0A1F5C] text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Transport Services?
          </h2>
          <p className="text-white/80 mb-8">
            Get a quote for your logistics needs. We handle construction materials, 
            event equipment, and general freight throughout the Eastern Cape.
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