import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      <ParticleBackground />

      <div className="z-10 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Harshadh Jeyaprakash
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          Full Stack Developer 
        </p>
      </div>
      
    </main>
  );
}