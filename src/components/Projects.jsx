import { ExternalLink, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ImageCarousel from "./ImageCarousel";
import { projects } from "../data/content";
import { bgSoft } from "../data/colorMap";
import { GithubIcon } from "./BrandIcons";

function ProjectCard({ project, index }) {
  const hasLinks = project.demoLink || project.githubLink;

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <div className="group bg-surface brut-border-thick rounded-3xl shadow-brut overflow-hidden hover:-translate-y-2 hover:shadow-brut-lg transition-all duration-300">
        <div className={`relative h-56 md:h-64 border-b-4 border-ink ${bgSoft[project.color]}`}>
          <ImageCarousel images={project.images} color={project.color} title={project.title} />
          <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface brut-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-brut-sm">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </span>
        </div>

        <div className="p-5 md:p-6">
          <h3 className="font-display font-bold text-lg md:text-xl mb-2">{project.title}</h3>
          <p className="text-sm md:text-base text-ink/75 leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-display font-bold px-2.5 py-1 bg-cream brut-border rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {hasLinks ? (
            <div className="flex gap-2">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 bg-ink text-cream py-2.5 rounded-xl font-display font-semibold text-sm brut-border hover:-translate-y-0.5 transition-transform duration-200 active:translate-y-0">
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 bg-surface py-2.5 rounded-xl font-display font-semibold text-sm brut-border hover:-translate-y-0.5 transition-transform duration-200 active:translate-y-0">
                  <GithubIcon size={14} />
                  GitHub
                </a>
              )}
            </div>
          ) : (
            <div className="text-center py-2.5 rounded-xl font-display font-semibold text-sm bg-cream brut-border text-ink/50">
              Belum ada link publik
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-16 text-center">
          <span className="inline-block font-display font-bold text-sm bg-pink/20 brut-border rounded-full px-4 py-1.5 shadow-brut-sm mb-4">
            Selected work
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">Featured Projects</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}