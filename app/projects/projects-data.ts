// app/projects/projects-data.ts
export type Project = {
    slug: string;
    title: string;
    description: string;
    secondParagraph?: string;
    tech: string;
    githubUrl: string;
    liveUrl?: string;
    images: { src: string; alt: string }[];
    videos?: { src?: string; alt?: string; poster?: string }[];
};

export const projects: Project[] = [
    {
        slug: "puzzlepaddy",
        title: "PuzzlePaddy",
        description:
            "PuzzlePaddy is a Next.js web application delivering interactive games and puzzles with a playful user experience and clean, component-driven design. The platform is built with React and Tailwind CSS, using server-side rendering where appropriate, and is deployed via a Docker-based CI/CD pipeline using GitHub Actions and webhooks.",
        secondParagraph:
            "An ongoing personal project to create a fun and engaging platform for puzzle enthusiasts. "+
            "New games and features are added regularly. The codebase is structured to allow for easy expansion and maintenance, with a focus on clean, reusable components and efficient server-side rendering.",
        tech: "Next.js (SSR) • React • TypeScript • Tailwind CSS • Docker • GitHub Actions • Webhook-based deployment",
        githubUrl: "https://github.com/MichaelMcKibbin/puzzlepaddy",
        liveUrl: "https://puzzlepaddy.com",
        images: [
            {
                src: "/images/PP_homepage_snip.jpg",
                alt: "PuzzlePaddy homepage preview",
            },

        ],
        videos: [
            {
                src: "/videos/PP_4ROW_VID_720.mp4",
                alt: "PuzzlePaddy 4 in a row preview",
                // poster: "/images/PP_4ROW_thumb.jpg"
            },
        ]

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
        videos: [
            {
                // src: "/videos/PP_4ROW_VID_720.mp4",
                // alt: "PuzzlePaddy 4 in a row preview",
                // poster: "/images/PP_4ROW_thumb.jpg"
            },
        ]
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
