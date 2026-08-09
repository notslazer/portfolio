"use client";

import ParticleBackground from "@/components/ParticleBackground";
import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Memoize unique categories dynamically from projects data
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];
  }, []);

  // Memoize filtered project results
  const filteredProjects: Project[] = useMemo(() => {
    return activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-16 px-6">
      <ParticleBackground />

      <div className="z-10 w-full max-w-6xl flex flex-col gap-10">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="font-body text-slate-400 max-w-2xl mx-auto">
            A collection of my recent work spanning full-stack development, open-source contributions, and data science.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? "bg-cyan-neon/20 border-cyan-neon text-cyan-neon shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                  : "bg-slate-900/50 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-neon/10 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative h-48 w-full bg-slate-800/50 overflow-hidden border-b border-white/10">
                {/* Fallback gradient placeholder */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <span className="font-mono text-slate-500 text-sm">Image Placeholder</span>
                </div>

                {/* Render project image if string path exists */}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                  />
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-cyan-neon transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-slate-400 mb-6 grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-white hover:underline transition-colors"
                    >
                      <GithubIcon size={16} /> Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-cyan-neon hover:text-cyan-neon/80 hover:underline transition-colors ml-auto"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}