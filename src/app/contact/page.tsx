import ParticleBackground from "@/components/ParticleBackground";

export default function Contact() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center">
      <ParticleBackground />
      <div className="z-10 text-center">
        <h1 className="font-heading text-5xl font-bold text-white">Get in Touch</h1>
      </div>
    </main>
  );
}