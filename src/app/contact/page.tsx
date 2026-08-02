import ParticleBackground from "@/components/ParticleBackground";
import RadialContactMenu from "@/components/RadialContactMenu";

export default function Contact() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-16 px-6">
      <ParticleBackground />
      
      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-12 text-center">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h1>
          <p className="font-body text-slate-400 max-w-xl mx-auto">
            Click the center icon to reveal my social profiles. I&apos;m always open to discussing new projects, collaborations, or just tech talk!
          </p>
        </div>

        <RadialContactMenu />
        
        <p className="font-mono text-xs text-slate-500 mt-8">
          Or email me directly at <span className="text-cyan-neon">harshadhjeyaprakash@gmail.com</span>
        </p>
      </div>
    </main>
  );
}