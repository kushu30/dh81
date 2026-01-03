import { Linkedin, ExternalLink, MapPin, Github, Download, Globe } from "lucide-react"
import Link from "next/link"

const residents = [
  {
    name: "Abhay Singh",
    role: "Full Stack Dev",
    image: "/images/AbhaySingh.png",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    portfolio: "https://portfolio.com",
    resume: "/resumes/abhay-resume.pdf"
  },
  {
    name: "Kushagra Shukla",
    role: "FinTech Enthusiast | Full Stack Dev",
    image: "/images/KushagraShukla.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com/",
    portfolio: "https://portfolio.com",
    resume: "/resumes/kushagra-resume.pdf"
  },
  {
    name: "Adhish Shukla",
    role: "Problem Solving | DSA",
    image: "/images/AdhishShukla.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com/",
    portfolio: "https://portfolio.com",
    resume: "/resumes/adhish-resume.pdf"
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-black">
      {/* Sticky Glass Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
          <div className="text-xl font-black tracking-tighter">
            DH<span className="text-primary italic">81</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
            <Link href="#people" className="hover:text-primary transition-colors">
              People
            </Link>
            <Link href="#location" className="hover:text-primary transition-colors">
              Base
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(69,255,140,0.05),transparent)]" />

        <div className="relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-primary/30" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-primary font-bold">House Number 81</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h1 className="text-[15vw] font-black leading-none tracking-tighter uppercase italic">
            Dev<span className="not-italic opacity-20">House</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light tracking-wide">
          Not a hub. Not a lab. Just a flat—
          where curiosity is contagious,
          the kettle’s always on,
          and the best ideas brew right where we’re at.
          </p>
        </div>

        <div className="absolute bottom-12 animate-bounce opacity-20">
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* People Section - 3 Super Cool Interactive Boxes */}
      <section id="people" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex items-end justify-between border-b border-white/10 pb-12">
            <h2 className="text-7xl font-black tracking-tighter uppercase italic leading-none">
              The
              <br />
              <span className="not-italic opacity-20">People</span>
            </h2>
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-2">03 Residents</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residents.map((person, i) => (
              <div
                key={i}
                className="group relative h-[600px] bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:border-primary/50 hover:bg-white/[0.05]"
              >
                {/* 3D-ish Image Hover Effect */}
                <div className="absolute inset-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-8 flex flex-col justify-end">
                  <div className="space-y-5">
                    <div className="h-0.5 w-0 bg-primary group-hover:w-16 transition-all duration-700" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary/80 block opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      {person.role}
                    </span>
                    <h3 className="text-3xl font-black tracking-tight uppercase italic text-white/90 group-hover:text-white transition-colors duration-500">{person.name}</h3>
                    <div className="pt-6 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={person.linkedin}
                          target="_blank"
                          className="group/btn inline-flex items-center justify-center gap-2 text-[8px] font-bold uppercase tracking-[0.15em] bg-[#0077B5] hover:bg-[#005885] text-white px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0077B5]/25 border border-[#0077B5]/20"
                        >
                          <Linkedin className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                          LinkedIn
                        </Link>
                        <Link
                          href={person.github}
                          target="_blank"
                          className="group/btn inline-flex items-center justify-center gap-2 text-[8px] font-bold uppercase tracking-[0.15em] bg-[#24292e] hover:bg-[#1a1e22] text-white px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#24292e]/25 border border-[#24292e]/20"
                        >
                          <Github className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                          GitHub
                        </Link>
                        <Link
                          href={person.portfolio}
                          target="_blank"
                          className="group/btn inline-flex items-center justify-center gap-2 text-[8px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/20"
                        >
                          <Globe className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                          Portfolio
                        </Link>
                        <Link
                          href={person.resume}
                          download
                          className="group/btn inline-flex items-center justify-center gap-2 text-[8px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 border border-emerald-500/20"
                        >
                          <Download className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                          Resume
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Number */}
                <div className="absolute top-8 right-8 text-4xl font-black italic opacity-10 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address / Location Section */}
      <section id="location" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">Our Base</h2>
            <p className="text-2xl text-muted-foreground font-light">House Number 81 (2nd Floor - Metal Staircase), 3 Main JHBC Road, JHBCS Layout, Bengaluru, Karnataka - 560078</p>
          </div>

          <Link
            href="https://maps.app.goo.gl/jV4JZJkfDPgYSL2b8"
            target="_blank"
            className="group relative flex items-center gap-4 bg-white/5 border border-white/10 px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-4 text-xs font-black uppercase tracking-widest">
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </div>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold">
          © 2026 DevHouse 81. Crafted by people at DH81.
        </p>
      </footer>
    </main>
  )
}
