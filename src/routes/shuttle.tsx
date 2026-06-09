import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bus, ArrowLeft, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/shuttle")({
  head: () => ({
    meta: [
      { title: "Shuttle Services - Tlotliso Divisions" },
      { name: "description", content: "Safe, professional passenger shuttles for groups, staff and events." },
    ],
  }),
  component: Shuttle,
});

const LOGO_URL = "logo/tlotliso-logo.png";

const services = [
  {
    title: "School Tours",
    desc: "Safe and reliable transport for school excursions, sports trips, and educational visits.",
    details: ["Qualified drivers", "Seatbelts installed", "Group bookings", "Flexible timing"],
  },
  {
    title: "Group Transfers",
    desc: "Transport for weddings, funerals, church groups, and community events.",
    details: ["Any group size", "Multi-trip support", "Punctual service", "Comfortable vehicles"],
  },
  {
    title: "Staff Transport",
    desc: "Daily commuter transport for mining companies, factories, and businesses.",
    details: ["Daily routes", "Early morning pickups", "Shift transport", "Route planning"],
  },
  {
    title: "Event Shuttles",
    desc: "Shuttle services for conferences, weddings, sports events, and special occasions.",
    details: ["Airport transfers", "Venue shuttles", "Multiple vehicles", "Coordinated timing"],
  },
];

const whatsappNumber = "27790573688";
const message = encodeURIComponent("Hi Tlotliso, I'd like to get a quote for shuttle services.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export function Shuttle() {
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
            <Bus className="h-8 w-8" />
          </div>
          <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228] mb-4">
            Division 4 of 4
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
            Shuttle Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#0A1F5C]/70 max-w-2xl mx-auto">
            Safe, professional passenger shuttles for groups, staff and events around Mt Fletcher 
            and throughout the Eastern Cape.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Our Shuttle Services
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
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1F5C] text-white mb-4">
                  <Bus className="h-6 w-6" />
                </div>
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

      {/* Coverage */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F6F7FB]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Areas We Serve
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-[#0A1F5C]/10">
              <h3 className="font-bold text-[#0A1F5C] mb-4">Local Routes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Mt Fletcher town and surrounds
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Tlokweng and villages
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Maclear and Ugie
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Qacha's Nek area
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm border border-[#0A1F5C]/10">
              <h3 className="font-bold text-[#0A1F5C] mb-4">Regional Routes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Queenstown
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Mthatha
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  East London
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A1F5C]/80">
                  <Check className="h-4 w-4 text-[#CC2228]" />
                  Port Elizabeth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-white to-[#F6F7FB]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] mb-4">
            Need Shuttle Transport?
          </h2>
          <p className="text-[#0A1F5C]/70 mb-8">
            Get a quote for your group transport needs. School tours, staff shuttles, 
            event transport — we handle it all with professionalism and care.
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