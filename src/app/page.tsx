// src/app/page.tsx
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <ParticleBackground />

      <div className="z-10 text-center flex flex-col items-center gap-6 mt-10 px-4">
        <h1 className="font-heading text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Harshadh Jeyaprakash
        </h1>
        
        <h2 className="font-body text-cyan-neon text-sm md:text-base font-medium uppercase tracking-widest bg-cyan-neon/10 px-6 py-2.5 rounded-full border border-cyan-neon/30 backdrop-blur-sm">
          Full Stack Developer | Data Scientist | AI Enthusiast
        </h2>
      </div>
    </main>
  );
}