export default function Home() {
  return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* Hero */}
          <header className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm tracking-wide text-muted">
                Software Engineer • Cloud • DevOps • Cybersecurity
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Michael McKibbin
              </h1>
              <p className="max-w-2xl text-lg text-muted">
                I build reliable systems, secure platforms, and occasional playful projects.
                Based in Ireland. Dual US/EU work eligibility.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                  href="#projects"
                  className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
              >
                View projects
              </a>
              <a
                  href="/cv"
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Michael's CV
              </a>
              <a
                  href="#contact"
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Contact
              </a>
            </div>
          </header>

          {/* Sections */}
          <section className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 hover:bg-muted">
              <h2 className="text-sm font-semibold">Focus</h2>
              <p className="mt-2 text-sm text-muted">
                Cloud, DevOps automation, secure software design, and pragmatic engineering.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:bg-muted">
              <h2 className="text-sm font-semibold">Stack</h2>
              <p className="mt-2 text-sm text-muted">
                Java • C#/.NET • Next.js • TypeScript • AWS • CI/CD • SQL
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:bg-muted">
              <h2 className="text-sm font-semibold">Currently</h2>
              <p className="mt-2 text-sm text-muted">
                Building portfolio projects and sharpening full-stack + cloud skills.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-16 scroll-mt-24">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
              <a
                  className="text-sm text-foreground/80 underline hover:text-foreground"
                  href="https://github.com/MichaelMcKibbin"
                  target="_blank"
                  rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <ProjectCard
                  title="PuzzlePaddy"
                  description="Games and puzzles built with Next.js — playful UX, clean engineering."
                  tech="Next.js • TypeScript • Tailwind"
                  href="https://puzzlepaddy.com"
              />
              <ProjectCard
                  title="Vienna U-Bahn Route Finder"
                  description="Java/JavaFX route finder using a richer station dataset with coordinates and lines."
                  tech="Java • JavaFX • Algorithms"
                  href="#"
              />
              <ProjectCard
                  title="Ticket Tracking App"
                  description="Desktop trouble-ticket tracker in JavaFX with SQLite and structured workflow."
                  tech="Java • JavaFX • SQLite"
                  href="#"
              />
              <ProjectCard
                  title="Cloud / DevOps Automation"
                  description="Scripts and pipelines for AWS automation (EC2/S3/alarms), CI/CD and deployment."
                  tech="AWS • Python • GitHub Actions"
                  href="#"
              />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-sm text-muted">
              Email is simplest (static hosting-friendly).
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                  className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
                  href="mailto:youremail@example.com"
              >
                Email me
              </a>
              <a
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <footer className="mt-16 border-t border-border pt-8 text-sm text-muted">
            © {new Date().getFullYear()} Michael McKibbin
          </footer>
        </div>
      </main>
  );
}

function ProjectCard({
                       title,
                       description,
                       tech,
                       href,
                     }: {
  title: string;
  description: string;
  tech: string;
  href: string;
}) {
  return (
      <a
          href={href}
          className="group rounded-2xl border border-border bg-card p-6 transition hover:bg-muted"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted group-hover:text-foreground">↗</span>
        </div>
        <p className="mt-2 text-sm text-muted">{description}</p>
        <p className="mt-3 text-xs text-muted">{tech}</p>
      </a>
  );
}
