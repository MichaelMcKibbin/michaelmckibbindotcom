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
                I build reliable systems, secure platforms, and occasional playful projects.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                  href="/projects"
                  className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
              >
                View projects
              </a>
              <a
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-hover"
                  href="https://www.linkedin.com/in/michaelkevinmckibbin/"
                  target="_blank"
                  rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                  href="/contact"
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-hover"
              >
                Contact
              </a>
            </div>
          </header>

          {/* Sections */}
          <section className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 hover:bg-hover">
              <h2 className="text-sm font-semibold">Focus</h2>
              <p className="mt-2 text-sm text-muted">
                Cloud, DevOps automation, secure software design, and pragmatic engineering.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:bg-hover">
              <h2 className="text-sm font-semibold">Stack</h2>
              <p className="mt-2 text-sm text-muted">
                Java • C#/.NET • Next.js • TypeScript • AWS • CI/CD • SQL
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:bg-hover">
              <h2 className="text-sm font-semibold">Currently</h2>
              <p className="mt-2 text-sm text-muted">
                Building portfolio projects and sharpening full-stack + cloud skills.
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-16 rounded-2xl border border-border bg-card p-6 hover:bg-hover">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-sm text-muted">
              Browse featured builds, case-study notes, and source links on the dedicated projects page.
            </p>
            <a
                href="/projects"
                className="mt-4 inline-flex rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
            >
              Go to projects
            </a>
          </section>



          <footer className="mt-16 border-t border-border pt-8 text-sm text-muted">
            © {new Date().getFullYear()} Michael McKibbin
          </footer>
        </div>
      </main>
  );
}

