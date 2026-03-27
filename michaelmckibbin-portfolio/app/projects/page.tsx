const projects = [
    {
        title: "PuzzlePaddy",
        description: "Games and puzzles built with Next.js — playful UX, clean engineering.",
        tech: "Next.js • TypeScript • Tailwind",
        href: "https://puzzlepaddy.com",
    },
    {
        title: "Vienna U-Bahn Route Finder",
        description: "Java/JavaFX route finder using a richer station dataset with coordinates and lines.",
        tech: "Java • JavaFX • Algorithms",
        href: "#",
    },
    {
        title: "Ticket Tracking App",
        description: "Desktop trouble-ticket tracker in JavaFX with SQLite and structured workflow.",
        tech: "Java • JavaFX • SQLite",
        href: "#",
    },
    {
        title: "Cloud / DevOps Automation",
        description: "Scripts and pipelines for AWS automation (EC2/S3/alarms), CI/CD and deployment.",
        tech: "AWS • Python • GitHub Actions",
        href: "#",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-5xl px-6 py-16">
                <header className="space-y-3">
                    <p className="text-sm tracking-wide text-muted">Selected work</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
                    <p className="max-w-2xl text-sm text-muted sm:text-base">
                        A selection of personal and technical projects across web, desktop, and cloud automation.
                    </p>
                </header>

                <div className="mt-6">
                    <a
                        className="text-sm text-foreground/80 underline hover:text-foreground"
                        href="https://github.com/MichaelMcKibbin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View GitHub profile
                    </a>
                </div>

                <section className="mt-8 grid gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            href={project.href}
                        />
                    ))}
                </section>
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
            className="group rounded-2xl border border-border bg-card p-6 transition hover:bg-hover"
        >
            <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
                <span className="text-sm text-muted group-hover:text-foreground"></span>
            </div>
            <p className="mt-2 text-sm text-muted">{description}</p>
            <p className="mt-3 text-xs text-muted">{tech}</p>
        </a>
    );
}

