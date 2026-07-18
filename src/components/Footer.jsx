import { Mail, Zap } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

const socialLinks = [
  { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
  { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: XIcon, href: profile.socials.twitter, label: "Twitter" },
  { icon: Mail, href: profile.socials.email, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream mt-10 md:mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="w-9 h-9 rounded-full bg-yellow brut-border flex items-center justify-center">
              <Zap size={16} className="text-ink" strokeWidth={2.5} />
            </span>
            {profile.name}
          </a>

          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 border-2 border-cream/25 flex items-center justify-center hover:bg-yellow hover:text-ink hover:border-yellow hover:-translate-y-1 transition-all duration-200"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-cream/15 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-body text-sm text-cream/60">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-display font-medium text-sm text-cream/80">
            Designed with passion, creativity, and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
