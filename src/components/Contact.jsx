import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { profile } from "../data/content";
import { CornerChip } from "./DecorativeShapes";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const contactCards = [
  { icon: Phone, label: "Phone", value: profile.phone, color: "bg-yellow", href: `tel:${profile.phone.replace(/\s|x/g, "")}` },
  { icon: Mail, label: "Email", value: profile.email, color: "bg-blue", href: profile.socials.email },
  { icon: MapPin, label: "Location", value: profile.origin, color: "bg-green", href: null },
  { icon: GithubIcon, label: "GitHub", value: "@ktimor-dev", color: "bg-orange", href: profile.socials.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "/in/khitananda-timor", color: "bg-pink", href: profile.socials.linkedin },
];

const inputClasses =
  "w-full bg-cream brut-border rounded-xl px-4 py-3 font-body text-sm md:text-base focus:outline-none focus:shadow-[4px_4px_0px_0px_#16140f] transition-shadow duration-200";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 2800);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-16 text-center">
          <span className="inline-block font-display font-bold text-sm bg-purple/20 brut-border rounded-full px-4 py-1.5 shadow-brut-sm mb-4">
            Let's build something
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-ink/70 max-w-xl mx-auto mt-4 text-base md:text-lg">
            Have a project that involves hardware and the web? I'd love to hear about it.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-12">
          {/* Contact cards */}
          <Reveal delay={0.05} className="relative">
            <div className="flex flex-col gap-3.5">
              {contactCards.map((card) => {
                const Wrapper = card.href ? "a" : "div";
                return (
                  <Wrapper
                    key={card.label}
                    href={card.href || undefined}
                    className="flex items-center gap-4 bg-surface brut-border-thick rounded-2xl px-5 py-4 shadow-brut-sm hover:-translate-y-1 hover:shadow-brut transition-all duration-300"
                  >
                    <span className={`w-12 h-12 rounded-xl ${card.color} brut-border flex items-center justify-center shrink-0`}>
                      <card.icon size={20} />
                    </span>
                    <div>
                      <div className="font-display font-semibold text-xs uppercase tracking-wide text-muted">
                        {card.label}
                      </div>
                      <div className="font-display font-bold text-sm md:text-base">{card.value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
            <CornerChip color="yellow" size={64} className="hidden md:block -bottom-8 -left-8" />
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-surface brut-border-thick rounded-[2rem] shadow-brut-lg p-6 md:p-8 space-y-5 relative"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-display font-semibold text-sm mb-1.5">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block font-display font-semibold text-sm mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label className="block font-display font-semibold text-sm mb-1.5">Subject</label>
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block font-display font-semibold text-sm mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={inputClasses}
                />
              </div>

              <MagneticButton
                as="button"
                type="submit"
                strength={0.15}
                className="w-full flex items-center justify-center gap-2 bg-yellow font-display font-bold text-base py-3.5 rounded-xl brut-border-thick shadow-brut hover:-translate-y-1 active:translate-y-0 active:shadow-brut-sm transition-all duration-200"
              >
                {sent ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                    Message Sent!
                  </motion.span>
                ) : (
                  <>
                    <Send size={18} strokeWidth={2.5} />
                    Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
