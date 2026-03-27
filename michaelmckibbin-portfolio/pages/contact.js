import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const recaptchaRef = useRef();

    const [siteKey, setSiteKey] = useState("");
    const [clientDisableFlag, setClientDisableFlag] = useState(false);
    const disableRecaptcha = clientDisableFlag || !siteKey;

    useEffect(() => {
        let mounted = true;
        fetch("/api/config")
            .then((r) => r.json())
            .then((cfg) => {
                if (!mounted) return;
                setSiteKey(cfg.siteKey || "");
                setClientDisableFlag(!!cfg.clientDisable);
            })
            .catch((err) => {
                console.error("Failed to fetch runtime config:", err);
            });

        return () => {
            mounted = false;
        };
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let recaptchaValue = null;
        if (!disableRecaptcha) {
            recaptchaValue = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
            if (!recaptchaValue) {
                setStatus("Please complete the reCAPTCHA.");
                return;
            }
        }

        setStatus("Sending...");

        try {
            const body = { ...formData };
            if (!disableRecaptcha) body.recaptcha = recaptchaValue;

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                setStatus("Message sent successfully.");
                setFormData({ name: "", email: "", message: "" });
                if (recaptchaRef.current) recaptchaRef.current.reset();
                return;
            }

            const contentType = response.headers.get("content-type") || "";
            let errorMessage = "Failed to send message";

            if (contentType.includes("application/json")) {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } else {
                const text = await response.text();
                if (text.trim()) errorMessage = text;
            }

            setStatus(`Error: ${errorMessage}`);
            if (recaptchaRef.current) recaptchaRef.current.reset();
        } catch (error) {
            console.error("Network Error:", error);
            setStatus(`Network error: ${error.message}`);
            if (recaptchaRef.current) recaptchaRef.current.reset();
        }
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-5xl px-6 py-16 space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-3xl space-y-6">Contact Michael</h1>
                <div className="flex flex-wrap gap-5 ">
                <a
                    className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-hover"
                    href="https://www.linkedin.com/in/michaelkevinmckibbin/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-hover"
                    href="https://github.com/MichaelMcKibbin"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                </div>

                <header className="space-y-5">


                    <p className="max-w-5xl text-sm text-muted sm:text-base">
                        Find me on LinkedIn, GitHub, or send me a message and I will get back to you as soon as possible.
                    </p>
                </header>

                <section className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
                            />
                            <label htmlFor="note" className="mb-2 block text-xs text-muted font-small text-foreground">
                                This form uses the reCAPTCHA v2 "I'm not a robot" Checkbox. Other reCAPTCHA types (v2 Invisible, & v3 Score Based) are available for your site.
                            </label>
                        </div>

                        <div className="flex justify-center sm:justify-start">
                            {!disableRecaptcha && siteKey && <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} />}

                            {!siteKey && !clientDisableFlag && (
                                <p className="text-sm italic text-muted">
                                    reCAPTCHA site key is missing in the environment. Ensure NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set.
                                </p>
                            )}

                            {clientDisableFlag && (
                                <p className="text-sm italic text-muted">
                                    reCAPTCHA is temporarily disabled for troubleshooting.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90 sm:w-auto"
                        >
                            Send message
                        </button>
                    </form>

                    {status && <p className="mt-5 text-sm text-muted">{status}</p>}
                </section>
            </div>
        </main>
    );

}