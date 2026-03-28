import Link from "next/link";
import { projects } from "./projects-data";


export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-5xl px-6 py-16">
                <header className="space-y-3">
                    <h1 className="flex items-center gap-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                      <span>Projects</span>
                      <a
                        className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-hover"
                        href="https://github.com/MichaelMcKibbin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </h1>
                    <p className="max-w-2xl text-sm text-muted sm:text-base">
                        A selection of personal and technical projects across web, desktop, and cloud automation.
                    </p>
                </header>

                <section className="mt-8 grid gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            slug={project.slug}
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
    slug,
}: {
    title: string;
    description: string;
    tech: string;
    slug: string;
}) {
    return (
        <Link
            href={`/projects/${slug}`}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:bg-hover"
        >
            <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
                <span className="text-sm text-muted group-hover:text-foreground"></span>
            </div>
            <p className="mt-2 text-sm text-muted">{description}</p>
            <p className="mt-3 text-xs text-muted">{tech}</p>
        </Link>
    );
}

