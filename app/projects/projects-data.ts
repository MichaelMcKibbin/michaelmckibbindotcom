// app/projects/projects-data.ts
export type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string;
    githubUrl: string;
    liveUrl?: string;
    images: { src: string; alt: string }[];
};

export const projects: Project[] = [
    {
        slug: "puzzlepaddy",
        title: "PuzzlePaddy",
        description:
            "Games and puzzles built with Next.js — playful UX, clean engineering and small, focused experiences.",
        tech: "Next.js • TypeScript • Tailwind",
        githubUrl: "https://github.com/MichaelMcKibbin/puzzlepaddy",
        liveUrl: "https://puzzlepaddy.com",
        images: [
            {
                src: "/images/puzzlepaddy.png",
                alt: "PuzzlePaddy project preview",
            },
        ],
    },
    {
        slug: "vienna-u-bahn-route-finder",
        title: "Vienna U-Bahn Route Finder",
        description:
            "A Java/JavaFX desktop route finder using a rich station dataset with coordinates and U-Bahn lines.",
        tech: "Java • JavaFX • Algorithms",
        githubUrl: "https://github.com/MichaelMcKibbin/vienna-ubahn-route-finder",
        images: [
            {
                src: "/images/vienna-ubahn-route-finder.png",
                alt: "Vienna U-Bahn Route Finder screenshot",
            },
        ],
    },
    {
        slug: "ticket-tracking-app",
        title: "Ticket Tracking App",
        description:
            "A JavaFX desktop trouble-ticket tracker backed by SQLite with a structured workflow.",
        tech: "Java • JavaFX • SQLite",
        githubUrl: "https://github.com/MichaelMcKibbin/ticket-tracking-app",
        images: [
            {
                src: "/images/ticket-tracking-app.png",
                alt: "Ticket Tracking App UI",
            },
        ],
    },
    {
        slug: "cloud-devops-automation",
        title: "Cloud / DevOps Automation",
        description:
            "A collection of scripts and pipelines for AWS automation (EC2/S3/alarms), CI/CD and deployment.",
        tech: "AWS • Python • GitHub Actions",
        githubUrl: "https://github.com/MichaelMcKibbin/cloud-devops-automation",
        images: [
            {
                src: "/images/cloud-devops-automation.png",
                alt: "Cloud and DevOps automation diagrams",
            },
        ],
    },
];
