import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

const LOGO_URL = "logo/tlotliso-logo.png";
import { useEffect, useState } from "react";
import {
  HardHat,
  PartyPopper,
  Truck,
  Bus,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageCircle,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tlotliso Divisions — One Stop Rentals" },
      { name: "description", content: "Tlotliso Divisions: event rentals, construction materials, logistics, shuttle and firewood services in Mt Fletcher, Eastern Cape." },
      { property: "og:title", content: "Tlotliso Divisions — One Stop Rentals" },
      { property: "og:description", content: "Event rentals, construction materials, logistics, shuttle and firewood services in Mt Fletcher, Eastern Cape." },
      { property: "og:image", content: LOGO_URL },
    ],
  }),
  component: Index,
});

const NAVY = "#0A1F5C";
const RED = "#CC2228";

const whatsappNumber = "27790573688";
const whatsappMessage = encodeURIComponent("Hi Tlotliso, I'd like to get a quote for your services.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const divisions = [
  {
    icon: HardHat,
    title: "Construction Materials",
    desc: "Bricks, sand, stone and core supply for builders across the Eastern Cape.",
    points: ["Bricks & blocks", "Sand & aggregates", "Bulk delivery"],
    image: "construction_materials/IMG-20260608-WA0019.jpg",
    link: "/construction-materials",
  },
  {
    icon: PartyPopper,
    title: "Event Rentals",
    desc: "Tents, tables, chairs, décor and inflatables to make any occasion shine.",
    points: ["Tents & marquees", "Tables & chairs", "Inflatables"],
    image: "events_rentals/IMG-20260608-WA0020.jpg",
    link: "/events-rentals",
  },
  {
    icon: Truck,
    title: "Logistics Solutions",
    desc: "Reliable freight and last-mile transport built around your timelines.",
    points: ["Local & long-haul", "Tracked deliveries", "On-time guarantee"],
    image: "logistics_solutions/IMG-20260608-WA0021.jpg",
    link: "/logistics",
  },
  {
    icon: Bus,
    title: "Shuttle Services",
    desc: "Safe, professional passenger shuttles for groups, staff and events.",
    points: ["Group transfers", "Daily commuter", "Event shuttles"],
    image: "shuttle/Crop800x600.jpeg",
    link: "/shuttle",
  },
  {
    icon: Flame,
    title: "Firewood Supply",
    desc: "Premium, dry firewood neatly packaged and ready for your hearth or braai.",
    points: ["Dry & seasoned", "Neatly packaged", "Various sizes"],
    image: "firewood/images%20(1).jpeg",
    link: "/firewood",
  },
];

const stats = [
  { value: "5", label: "Divisions, one promise" },
  { value: "100%", label: "Locally owned" },
  { value: "24/7", label: "Booking support" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Operations",
    desc: "Registered enterprise with rigorous standards across every division.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "Scheduled with precision — your event, your build, your journey.",
  },
  {
    icon: Sparkles,
    title: "Excellence Elevated",
    desc: "From the mountains of Mt Fletcher to wherever you need us.",
  },
];

const navLinks = [
  { href: "#divisions", label: "Divisions" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#0A1F5C] overflow-x-hidden antialiased">
      {/* Sticky nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(10,31,92,0.25)]"
            : "bg-transparent"
        }`}
      >
        <nav className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 py-3">
          {/* Left: desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium justify-self-start">
            {navLinks.slice(0, 2).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[#0A1F5C]/80 transition hover:text-[#0A1F5C] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#CC2228] after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button (left) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#0A1F5C] hover:bg-[#0A1F5C]/5 justify-self-start"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Center: logo */}
          <a href="#top" className="flex items-center justify-self-center">
            <img
              src={LOGO_URL}
              alt="Tlotliso"
              className="h-16 w-auto sm:h-20 md:h-24 transition-transform hover:scale-105"
            />
          </a>

          {/* Right: desktop nav links + CTA */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium justify-self-end">
            <ul className="flex items-center gap-8">
              {navLinks.slice(2).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative text-[#0A1F5C]/80 transition hover:text-[#0A1F5C] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#CC2228] after:transition-all hover:after:w-full"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              <MessageCircle className="h-4 w-4" />
              Get a quote
            </a>
          </div>

          {/* Mobile right spacer to keep logo centered */}
          <div className="md:hidden h-10 w-10 justify-self-end" aria-hidden />
        </nav>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-[#0A1F5C]/10 bg-white"
          >
            <ul className="flex flex-col px-4 py-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-base font-medium text-[#0A1F5C]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get a quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex flex-col items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24 text-center"
      >
        {/* Background ornaments */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A1F5C]/10 via-[#CC2228]/5 to-transparent blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-[#CC2228]/10 blur-3xl" />
          <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-[#0A1F5C]/10 blur-3xl" />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke={NAVY} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A1F5C]/15 bg-white/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0A1F5C] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#CC2228] animate-pulse" />
          From the mountains of Mt Fletcher
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 0.85, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={LOGO_URL}
          alt="Tlotliso Divisions — One Stop Rentals"
          className="w-full max-w-xs sm:max-w-md lg:max-w-xl mx-auto mix-blend-multiply opacity-90"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, #000 55%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, #000 55%, transparent 95%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center gap-3"
          aria-hidden
        >
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#CC2228]" />
          <span className="h-2 w-2 rounded-full bg-[#CC2228]" />
          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#CC2228]" />
        </motion.div>

        <h1 className="sr-only">Tlotliso Divisions — One Stop Rentals</h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 max-w-2xl px-2 text-base sm:text-xl md:text-2xl leading-relaxed text-[#0A1F5C]/80"
        >
          Five divisions. One promise. <span className="font-semibold text-[#0A1F5C]">Excellence elevated</span> across construction, events, logistics, shuttles and firewood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex w-full flex-col sm:flex-row sm:w-auto items-stretch sm:items-center justify-center gap-3"
        >
          <a
            href="#divisions"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1F5C] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0A1F5C]/20 transition hover:-translate-y-0.5 hover:bg-[#0A1F5C]/90 hover:shadow-xl"
          >
            Explore our divisions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#CC2228] bg-white px-6 py-3.5 text-sm font-semibold text-[#CC2228] transition hover:-translate-y-0.5 hover:bg-[#CC2228] hover:text-white"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-20 grid w-full max-w-3xl grid-cols-3 gap-4 sm:gap-8 rounded-2xl border border-[#0A1F5C]/10 bg-white/70 p-5 sm:p-8 backdrop-blur"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0A1F5C]">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-[#0A1F5C]/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Divisions */}
      <section
        id="divisions"
        className="relative border-t border-[#0A1F5C]/10 bg-gradient-to-b from-[#F6F7FB] to-white px-4 sm:px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228]">
              What we do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
              Five divisions, one trusted partner
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#0A1F5C]/70">
              Whatever you're building, celebrating, moving or travelling for —
              Tlotliso has a division ready to deliver.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.a
                  key={d.title}
                  href={d.link}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative block overflow-hidden rounded-2xl border border-[#0A1F5C]/10 bg-white shadow-sm transition hover:-translate-y-2 hover:border-[#CC2228]/30 hover:shadow-2xl hover:shadow-[#0A1F5C]/10"
                >
                  {d.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={d.image}
                        alt={d.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F5C]/60 to-transparent" />
                    </div>
                  )}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#CC2228]/0 to-[#CC2228]/0 transition-all duration-500 group-hover:from-[#CC2228]/10 group-hover:to-[#0A1F5C]/10" />
                  <div className="relative p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1F5C] text-white transition-all duration-500 group-hover:bg-[#CC2228] group-hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#0A1F5C]">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#0A1F5C]/70">{d.desc}</p>
                    <ul className="mt-4 space-y-1.5">
                      {d.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-xs text-[#0A1F5C]/70"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#CC2228]" /> {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#CC2228]">
                      View Details →
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 sm:px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-[#0A1F5C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]">
              About Tlotliso
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
              Rooted in Mt Fletcher.<br />
              <span className="text-[#CC2228]">Reaching everywhere you need.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#0A1F5C]/75">
              Born in the mountains of the Eastern Cape, Tlotliso Divisions is a
              locally-owned enterprise serving communities, contractors and
              celebrations with the same standard of excellence. One name, one
              promise, four ways we show up for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A1F5C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A1F5C]/90"
              >
                Work with us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#divisions"
                className="inline-flex items-center gap-2 rounded-full border border-[#0A1F5C]/20 px-5 py-3 text-sm font-semibold text-[#0A1F5C] transition hover:border-[#0A1F5C]"
              >
                See divisions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0A1F5C] to-[#0A1F5C]/80 p-8 sm:p-10 text-white shadow-2xl shadow-[#0A1F5C]/20">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#CC2228] blur-2xl opacity-60" />
              <div className="relative">
                <p className="text-2xl sm:text-3xl font-bold leading-snug">
                  "Excellence elevated — from the mountains, to your moment."
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                  <img
                    src={LOGO_URL}
                    alt=""
                    className="h-10 w-10 rounded-full bg-white p-1"
                  />
                  <div>
                    <div className="text-sm font-semibold">Tlotliso Divisions</div>
                    <div className="text-xs text-white/70">
                      Enterprise No. 2025/939200/07
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section
        id="why"
        className="relative bg-[#0A1F5C] px-4 sm:px-6 py-20 sm:py-28 text-white overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px, 80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Why Tlotliso
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Built on trust. Delivered with pride.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#CC2228]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-4 sm:px-6 py-20 sm:py-28 bg-gradient-to-b from-white to-[#F6F7FB]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228]">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]">
              Let's elevate your next project.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#0A1F5C]/70">
              Whether it's a build, a celebration or a journey — tell us what
              you need and we'll get back within one business day.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0A1F5C] text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[#0A1F5C]">Visit us</div>
                  <div className="text-sm text-[#0A1F5C]/70">
                    Mpharane, Mount Fletcher, Eastern Cape
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[#0A1F5C]">Call us</div>
                  <a
                    href="tel:+27790573688"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
                  >
                    +27 79 057 3688
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0A1F5C] text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[#0A1F5C]">Email</div>
                  <div className="text-sm text-[#0A1F5C]/70">hello@tlotliso.co.za</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const subject = encodeURIComponent(
                `Enquiry from ${data.get("name") || "website"}`,
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nDivision: ${data.get("division")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:hello@tlotliso.co.za?subject=${subject}&body=${body}`;
            }}
            className="rounded-3xl border border-[#0A1F5C]/10 bg-white p-6 sm:p-8 shadow-xl shadow-[#0A1F5C]/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]/70">
                Division
              </label>
              <select
                name="division"
                defaultValue=""
                className="mt-1.5 w-full rounded-xl border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#0A1F5C] outline-none transition focus:border-[#CC2228] focus:ring-2 focus:ring-[#CC2228]/20"
              >
                <option value="" disabled>Select a division</option>
                {divisions.map((d) => (
                  <option key={d.title} value={d.title}>{d.title}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]/70">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project, event or trip..."
                className="mt-1.5 w-full resize-none rounded-xl border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#0A1F5C] outline-none transition placeholder:text-[#0A1F5C]/40 focus:border-[#CC2228] focus:ring-2 focus:ring-[#CC2228]/20"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CC2228] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#CC2228]/30 transition hover:-translate-y-0.5 hover:bg-[#CC2228]/90"
            >
              Send enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1F5C]">Find Us</h3>
            <p className="mt-2 text-sm text-[#0A1F5C]/70">Mpharane, Mount Fletcher, Eastern Cape</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#0A1F5C]/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.5!2d28.3!3d-30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiUYjDQsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sza!4v1600000000000!5m2!1sen!2sza"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tlotliso Divisions Location"
              className="w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/Mpharane+Mount+Fletcher+Eastern+Cape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A1F5C] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0A1F5C]/90"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0A1F5C]/10 bg-white px-4 sm:px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Tlotliso" className="h-9 w-auto" />
            <span className="text-xs text-[#0A1F5C]/60">
              © {new Date().getFullYear()} Tlotliso Divisions. All rights reserved.
            </span>
          </div>
          <div className="text-xs text-[#0A1F5C]/60">
            Enterprise No. 2025/939200/07 · Mpharane, Mount Fletcher
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#0A1F5C] outline-none transition placeholder:text-[#0A1F5C]/40 focus:border-[#CC2228] focus:ring-2 focus:ring-[#CC2228]/20"
      />
    </div>
  );
}
