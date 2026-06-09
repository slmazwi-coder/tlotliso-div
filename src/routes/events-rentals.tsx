import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PartyPopper, ArrowLeft, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/events-rentals")({
  head: () => ({
    meta: [
      { title: "Event Rentals - Tlotliso Divisions" },
      { name: "description", content: "Tents, tables, chairs, décor and inflatables to make any occasion shine." },
    ],
  }),
  component: EventRentals,
});

const LOGO_URL = "logo/tlotliso-logo.png";

const services = [
  {
    title: "Tents & Marquees",
    desc: "Various sizes of tents for weddings, parties, corporate events, and community gatherings.",
    details: ["Catering tents", "Party marquees", "Wedding tents", "Custom configurations"],
  },
  {
    title: "Tables & Chairs",
    desc: "Quality furniture for any event size. From intimate gatherings to large celebrations.",
    details: ["Round tables (6-10 seater)", "Long banquet tables", "Chiavari chairs", "Plastic chairs"],
  },
  {
    title: "Décor & Styling",
    desc: "Transform your venue with our range of décor items and styling accessories.",
    details: ["Tablecloths", "Centerpieces", "Backdrop drapes", "Lighting options"],
  },
  {
    title: "Inflatables",
    desc: "Add fun for kids and families with our selection of inflatable structures.",
    details: ["Bouncy castles", "Slides", "Obstacle courses", "Combos"],
  },
];

const inventory = [
  { name: "Catering Tent (6x9m)", qty: "Multiple available" },
  { name: "Party Marquee (3x6m)", qty: "Multiple available" },
  { name: "Round Tables (6ft)", qty: "50+" },
  { name: "Chiavari Chairs", qty: "200+" },
  { name: "Long Tables (8ft)", qty: "30+" },
  { name: "Bouncy Castle (Large)", qty: "2 units" },
  { name: "Inflatables Combo", qty: "3 units" },
  { name: "Tablecloths (White)", qty: "100+" },
];

const whatsappNumber = "27790573688";
const message = encodeURIComponent("Hi Tlotliso, I'd like to get a quote for event rentals.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

export function EventRentals() {
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
            <PartyPopper className="h-8 w-8" />
          </div>
          <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228] mb-4">
            Division 2 of 4
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
            Event Rentals
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#0A1F5C]/70 max-w-2xl mx-auto">
            Tents, tables, chairs, décor and inflatables to make any occasion shine. 
            From intimate gatherings to grand celebrations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Our Equipment
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

      {/* Images Gallery */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-[#F6F7FB]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Equipment Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <img src="events_rentals/IMG-20260608-WA0020.jpg" alt="Events equipment" className="rounded-xl w-full h-48 object-cover shadow-lg" />
            <img src="events_rentals/IMG-20260608-WA0022.jpg" alt="Events equipment" className="rounded-xl w-full h-48 object-cover shadow-lg" />
            <img src="events_rentals/IMG-20260608-WA0023.jpg" alt="Events equipment" className="rounded-xl w-full h-48 object-cover shadow-lg" />
            <img src="events_rentals/IMG-20260608-WA0025.jpg" alt="Events equipment" className="rounded-xl w-full h-48 object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] text-center mb-12">
            Available Inventory
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inventory.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-[#0A1F5C]/10"
              >
                <div className="h-12 w-12 rounded-lg bg-[#CC2228]/10 flex items-center justify-center">
                  <PartyPopper className="h-6 w-6 text-[#CC2228]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1F5C]">{item.name}</p>
                  <p className="text-xs text-[#0A1F5C]/60">{item.qty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-white to-[#F6F7FB]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F5C] mb-4">
            Plan Your Next Event
          </h2>
          <p className="text-[#0A1F5C]/70 mb-8">
            Get a quote for your event equipment. We cover weddings, parties, 
            corporate events, and community gatherings throughout the Eastern Cape.
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