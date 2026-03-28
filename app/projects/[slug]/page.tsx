import Image from "next/image";
import Link from "next/link";

import { projects } from "../projects-data";
import type { Project } from "../projects-data";

function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <div className="mx-auto max-w-3xl px-6 py-16">
                    <p className="text-sm text-muted">Project not found.</p>
                    <Link
                        href="/projects"
                        className="mt-4 inline-block text-sm underline hover:text-foreground"
                    >
                        Back to projects
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-4xl px-6 py-16">
                <Link
                    href="/projects"
                    className="mb-6 inline-block text-xs uppercase tracking-wide text-muted hover:text-foreground"
                >
                    ← Back to projects
                </Link>

                <header className="space-y-3">
                    <p className="text-sm tracking-wide text-muted">Project</p>
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        {project.title}
                    </h1>
                    <p className="max-w-2xl text-sm text-muted sm:text-base">
                        {project.description}
                    </p>
                    <p className="max-w-2xl text-sm text-muted sm:text-base">
                        {project.secondParagraph}
                    </p>

                    <p className="text-xs text-muted">{project.tech}</p>
                </header>

                <section className="mt-8 flex flex-wrap gap-4 text-sm">
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-hover"
                    >
                        View on GitHub
                    </Link>

                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-hover"
                        >
                            Visit website
                        </Link>
                    )}
                </section>


                {project.images.length > 0 && (
                    <section className="mt-10 grid gap-6 sm:grid-cols-2">
                        {project.images.map((image) => {
                            const content = (
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={500}
                                    className="h-full w-full object-cover"
                                />
                            );

                            return (
                                <div
                                    key={image.src}
                                    className="overflow-hidden rounded-2xl border border-border bg-card"
                                >
                                    {image.href ? (
                                        <Link href={image.href} target="_blank" rel="noopener noreferrer">
                                            {content}
                                        </Link>
                                    ) : (
                                        content
                                    )}
                                </div>
                            );
                        })}
                    </section>
                )}

{project.videos && project.videos.length > 0 && (
  <section className="mt-10 grid gap-6 sm:grid-cols-2">
    {project.videos.map((video) => {
      const content = (
        <video
          src={video.src}
          className="h-full w-full object-cover"
          controls
          // autoPlay
          // loop
          // muted
          poster={video.poster}
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      );

      return (
        <div
          key={video.src}
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          {video.href ? (
            <Link
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </Link>
          ) : (
            content
          )}
        </div>
      );
    })}
  </section>
)}

            </div>
        </main>
    );
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}
