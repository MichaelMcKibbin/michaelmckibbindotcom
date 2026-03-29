// app/projects/projects-data.ts
export type Project = {
    slug: string;
    title: string;
    description: string;
    secondParagraph?: string;
    tech: string;
    githubUrl: string;
    liveUrl?: string;
    images: { src: string; alt: string; href?: string }[];
    videos?: { src?: string; alt?: string; poster?: string; href?: string }[];
};

export const projects: Project[] = [
    {
        slug: "puzzlepaddy",
        title: "PuzzlePaddy",
        description:
            "PuzzlePaddy, an ongoing personal project to create a fun and engaging platform for puzzle enthusiasts, is a Next.js web application delivering interactive games and puzzles with a playful user experience and clean, component-driven design. ",
        secondParagraph:
            "The platform is built with React and Tailwind CSS, using server-side rendering where appropriate, and is deployed via a Docker-based CI/CD pipeline using GitHub Actions and webhooks.",
        tech: "Next.js (SSR) • React • TypeScript • Tailwind CSS • Docker • GitHub Actions • Webhook-based deployment",
        githubUrl: "https://github.com/MichaelMcKibbin/puzzlepaddy",
        liveUrl: "https://puzzlepaddy.com",
        images: [
            {
                src: "/images/PP_homepage_snip.jpg",
                alt: "PuzzlePaddy homepage preview",
                href: "https://puzzlepaddy.com",
            },
            /* {
                src: "/images/PP_mastermind_thumb.jpg",
                alt: "PuzzlePaddy mastermind preview",
                href: "https://puzzlepaddy.com/puzzles/mastermind/",
            }, */

        ],
        videos: [
            {
                src: "/videos/PP_4ROW_VID_720.mp4",
                alt: "PuzzlePaddy 4 in a row preview",
                // poster: "/images/PP_4ROW_thumb.jpg"
                href: "https://puzzlepaddy.com/games/four-in-a-row/",
            },
        ]

    },
    {
        slug: "vienna-u-bahn-route-finder",
        title: "Vienna U-Bahn Route Finder",
        description:
            "This JavaFX application allows the user to search for and find routes between stations on the Vienna U-Bahn railway system. " +
            "A demonstration of BFS, DFS, and Dijkstra’s search algorithms built with Java, JavaFX, JUnit, and Maven.",
        tech: "Java • JavaFX • Algorithms",
        githubUrl: "https://github.com/MichaelMcKibbin/ViennaUBahn",
        images: [
            {
                src: "/images/logo_ribbon.png",
                alt: "Vienna U-Bahn Route Finder screenshot",
            },
        ],
        /* videos: [
            {
                // src: "/videos/PP_4ROW_VID_720.mp4",
                // alt: "PuzzlePaddy 4 in a row preview",
                // poster: "/images/PP_4ROW_thumb.jpg"
            },
        ] */
    },
    {
        slug: "ticket-tracking-app",
        title: "Ticket Tracking App",
        description:
            "A JavaFX desktop Trouble Ticket Tracking System built in Java 17/21 and JavaFX, with JSON persistence, ticket filtering, comment history, visual priority indicators, and a clean UI.",
        tech: "Java • JavaFX • JUnit",
        githubUrl: "https://github.com/MichaelMcKibbin/TicketTrackingApp",
        images: [
            {
                src: "/images/logo_ribbon.png",
                alt: "Ticket Tracking App UI",
            },
        ],
    },
    {
        slug: "cloud-devops-automation-1",
        title: "Cloud DevOps Automation Project 1",
        description:
            "This project automates the deployment of an AWS EC2 instance and S3-hosted static website using Python and Boto3. It installs and configures a web server on EC2, serves dynamic metadata, uploads web content and media to S3, and enables basic monitoring and teardown features.",
        tech: "AWS • Python 3 • Boto3 • Apache Web Server • Bash • SSH/SCP • S3 Static Website Hosting • EC2 Automation • Cloudwatch",
        githubUrl: "https://github.com/MichaelMcKibbin/devops1",
        images: [
            {
                src: "/images/logo_ribbon.png",
                alt: "Cloud and DevOps automation",
            },
        ],
    },
    {
        slug: "cloud-devops-automation-2",
        title: "Cloud DevOps Automation Project 2",
        description:
            "This project automates the provisioning and monitoring of a scalable web application infrastructure (EC2/S3/alarms) on AWS using Python and Bash.",
        tech: "AWS • Python • Bash • Apache HTTP Server • Node.js • VPC • Load Balancing • Auto Scaling • Cloudwatch",
        githubUrl: "https://github.com/MichaelMcKibbin/devops2",
        images: [
            {
                src: "/images/logo_ribbon.png",
                alt: "Cloud and DevOps automation",
            },
        ],
    },
    {
        slug: "csv-data-processor",
        title: "CSV Data Processor CLI",
        description: "A console-based CSV data processor built as a group university project, featuring configurable CSV parsing, validation, and round-trip transformations, backed by comprehensive JUnit test coverage and CI.",
        secondParagraph: "A modular, production-grade Java library for reading, parsing, validating, transforming, and writing CSV files with clean object-oriented design and comprehensive test coverage. The project includes a command-line interface for processing CSV files with configurable options, and is built using Java 21, Maven, JaCoCo for test coverage, JUnit 5 for testing, and GitHub Actions for continuous integration.",
        tech: "Java 21 • Maven • JaCoCo • JUnit 5 • Github Actions",
        githubUrl: "https://github.com/MichaelMcKibbin/ATU-SoftDev-Grp5Project",
        images: [
            {
                src: "/images/logo_ribbon.png",
                alt: "CSV Data Processor CLI",
            },
        ],
    },
];
