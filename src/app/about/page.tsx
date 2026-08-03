import ParticleBackground from "@/components/ParticleBackground";
import StackIcon from "tech-stack-icons";

interface StackItem {
  name: string;
  label: string;
}

export default function About() {
  const techStack = [
    { name: "python", label: "Python" },
    { name: "c++", label: "C++" },
    { name: "java", label: "Java" },
    { name: "js", label: "JavaScript" },
    { name: "r", label: "R" },
    { name: "nextjs2", label: "Next.js" },
    { name: "nodejs", label: "Node.js" },
    { name: "react", label: "React" },
    { name: "typescript", label: "TypeScript" },
    { name: "tailwindcss", label: "Tailwind CSS" },
    { name: "mongodb", label: "MongoDB" },
    { name: "mysql", label: "MySQL" },
    { name: "supabase", label: "Supabase" },
    { name: "firebase", label: "Firebase" },
  ];

  const toolStack = [
    { name: "github", label: "GitHub" },
    { name: "vercel", label: "Vercel" },
    { name: "vscode", label: "VS Code" }, 
    { name: "postman", label: "Postman" },
    { name: "figma", label: "Figma" },
    { name: "windows11", label: "Windows" },
    { name: "linux", label: "Linux" },
    { name: "ubuntu", label: "Ubuntu" },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-16 px-6">
      <ParticleBackground />
      
      <div className="z-10 w-full max-w-5xl flex flex-col gap-12">
        
        {/* About Me Section */}
          <section className="backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="font-body text-slate-300 text-lg leading-relaxed mb-4">
              Hi, I&apos;m Harshadh, a B.Tech Computer Science student at VIT Chennai. I specialize as a Full Stack Developer and Data Scientist, blending robust data analysis with modern web experiences. 
            </p>
            <p className="font-body text-slate-300 text-lg leading-relaxed">
              Whether I am contributing to open-source programs like GirlScript Summer of Code, diving into artificial intelligence and drone tech during the Def-Space internship, or building high-performance web applications, I am always eager to push the boundaries of what&apos;s possible.
            </p>
          </section>

        {/* Stacks Section */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-3xl font-bold text-center text-white">
            My Arsenal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="backdrop-blur-md bg-slate-900/40 border border-cyan-neon/20 rounded-3xl p-8 shadow-xl flex flex-col items-center hover:border-cyan-neon/40 transition-colors duration-500">
              <h3 className="font-mono text-cyan-neon mb-8 text-sm uppercase tracking-[0.2em] font-bold">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {techStack.map((tech: StackItem) => (
                  <div key={tech.name} className="flex flex-col items-center gap-3 group cursor-default">
                    <div className="w-14 h-14 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-cyan-neon/10 group-hover:border-cyan-neon/50 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-neon/20 flex items-center justify-center">
                      <StackIcon name={tech.name} className="w-8 h-8" />
                    </div>
                    <span className="font-body text-xs text-slate-400 group-hover:text-cyan-neon transition-colors font-medium">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-md bg-slate-900/40 border border-purple-neon/20 rounded-3xl p-8 shadow-xl flex flex-col items-center hover:border-purple-neon/40 transition-colors duration-500">
              <h3 className="font-mono text-purple-neon mb-8 text-sm uppercase tracking-[0.2em] font-bold">
                Tool Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {toolStack.map((tool: StackItem) => (
                  <div key={tool.name} className="flex flex-col items-center gap-3 group cursor-default">
                    <div className="w-14 h-14 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-purple-neon/10 group-hover:border-purple-neon/50 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-neon/20 flex items-center justify-center">
                      <StackIcon name={tool.name} className="w-8 h-8" />
                    </div>
                    <span className="font-body text-xs text-slate-400 group-hover:text-purple-neon transition-colors font-medium">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}