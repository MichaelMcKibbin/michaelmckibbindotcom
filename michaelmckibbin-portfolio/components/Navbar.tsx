"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


type NavItem = {
    href: string;
    label: string;
    kind: "route" | "hash";
};

const navItems: NavItem[] = [
    { href: "/", label: "Home", kind: "route" },
    { href: "/#projects", label: "Projects", kind: "hash" },
    { href: "/#contact", label: "Contact", kind: "hash" },
];


function isActiveLink(pathname: string, currentHash: string, item: NavItem) {
    // Route items (e.g. /, /cv)
    if (item.kind === "route") return pathname === item.href;

    // Hash items only make sense on the home page
    if (pathname !== "/") return false;

    const itemHash = item.href.split("#")[1] ?? "";
    return currentHash === `#${itemHash}`;
}

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [hash, setHash] = useState<string>("");

    useEffect(() => setMounted(true), []);

    // Track the hash for active styling on home-page sections
    useEffect(() => {
        const updateHash = () => setHash(window.location.hash || "");
        updateHash();
        window.addEventListener("hashchange", updateHash);
        return () => window.removeEventListener("hashchange", updateHash);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Close on ESC
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-semibold tracking-tight hover:opacity-80">
                    Michael McKibbin
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => {
                        const active = isActiveLink(pathname, hash, item);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className={[
                                    "rounded-xl px-3 py-2 text-sm transition",
                                    active
                                        ? "bg-foreground text-background"
                                        : "text-foreground/80 hover:bg-muted hover:text-foreground",
                                ].join(" ")}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <a
                        href="/MichaelMcKibbin_WebCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
                    >
                        Download CV
                    </a>
                    <button
                        type="button"
                        aria-label="Toggle dark mode"
                        className="ml-2 rounded-xl border border-border px-3 py-2 text-sm text-foreground hover:bg-muted"
                        onClick={() => {
                            const current = resolvedTheme ?? theme;
                            setTheme(current === "dark" ? "light" : "dark");
                        }}
                    >
                        {mounted && (resolvedTheme ?? theme) === "dark" ? "\u2600\ufe0f" : "\ud83c\udf19"}
                    </button>

                </nav>

                {/* Mobile button */}
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="inline-flex items-center justify-center rounded-xl border border-border p-2 text-foreground hover:bg-muted md:hidden"
                    onClick={() => setOpen((v) => !v)}
                >
                    {/* Simple hamburger / close icon */}
                    <span className="relative block h-5 w-5">
                        <span
                            className={[
                                "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-transform",
                                open ? "translate-y-1.5 rotate-45" : "",
                            ].join(" ")}
                        />
                        <span
                            className={[
                                "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity",
                                open ? "opacity-0" : "opacity-100",
                            ].join(" ")}
                        />
                        <span
                            className={[
                                "absolute left-0 bottom-1.5 h-0.5 w-5 bg-current transition-transform",
                                open ? "-translate-y-1.5 -rotate-45" : "",
                            ].join(" ")}
                        />
                    </span>
                </button>
            </div>

            {/* Mobile menu panel */}
            {open && (
                <div className="border-t border-border bg-background md:hidden">
                    <nav className="mx-auto max-w-5xl px-6 py-3">
                        <ul className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const active = isActiveLink(pathname, hash, item);
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => setOpen(false)}
                                            className={[
                                                "block rounded-xl px-3 py-2 text-sm transition",
                                                active
                                                    ? "bg-foreground text-background"
                                                    : "text-foreground/80 hover:bg-muted hover:text-foreground",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>

                                );
                            })}
                            <li className="mt-2">
                                <a
                                    href="/MichaelMcKibbin_WebCV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-xl bg-foreground px-3 py-2 text-sm font-medium text-background hover:bg-foreground/90"
                                >
                                    Download CV
                                </a>
                                <li className="mt-2">
                                    <button
                                        type="button"
                                        className="block w-full rounded-xl border border-border px-3 py-2 text-left text-sm text-foreground hover:bg-muted"
                                        onClick={() => {
                                            const current = resolvedTheme ?? theme;
                                            setTheme(current === "dark" ? "light" : "dark");
                                            setOpen(false);
                                        }}
                                    >
                                        Toggle theme {mounted && (resolvedTheme ?? theme) === "dark" ? "\u2600\ufe0f" : "\ud83c\udf19"}
                                    </button>
                                </li>

                            </li>

                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
