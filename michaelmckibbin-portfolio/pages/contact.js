import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const recaptchaRef = useRef();

    // Runtime-config: fetch siteKey and public disable flag from server so Docker env changes don't require rebuild
    const [siteKey, setSiteKey] = useState('');
    const [clientDisableFlag, setClientDisableFlag] = useState(false);
    const disableRecaptcha = clientDisableFlag || !siteKey;

    useEffect(() => {
        let mounted = true;
        fetch('/api/config')
            .then((r) => r.json())
            .then((cfg) => {
                if (!mounted) return;
                setSiteKey(cfg.siteKey || '');
                setClientDisableFlag(!!cfg.clientDisable);
            })
            .catch((err) => {
                console.error('Failed to fetch runtime config:', err);
            });
        return () => { mounted = false; };
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // If reCAPTCHA is enabled, get token from the widget and require it
        let recaptchaValue = null;
        if (!disableRecaptcha) {
            recaptchaValue = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
            if (!recaptchaValue) {
                setStatus("❌ Please complete the reCAPTCHA.");
                return;
            }
        }

        setStatus("Sending...");

        try {
            const body = { ...formData };
            if (!disableRecaptcha) body.recaptcha = recaptchaValue;

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                if (recaptchaRef.current) recaptchaRef.current.reset();
            } else {
                const errorData = await response.json();
                setStatus(`❌ Error: ${errorData.message || 'Failed to send message'}`);
                if (recaptchaRef.current) recaptchaRef.current.reset();
            }
        } catch (error) {
            console.error('Network Error:', error);
            setStatus(`❌ Network error: ${error.message}`);
            if (recaptchaRef.current) recaptchaRef.current.reset();
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Contact Us</h1>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            />
                        </div>

                        <div className="flex justify-center">
                            {/* Only render the reCAPTCHA widget when not disabled and siteKey exists */}
                            {!disableRecaptcha && siteKey && (
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={siteKey}
                                />
                            )}

                            {(!siteKey && !clientDisableFlag) && (
                                <div className="text-sm text-red-600 italic">reCAPTCHA site key is missing in the environment — the widget is not rendered. Ensure NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set in the runtime environment.</div>
                            )}

                            {(clientDisableFlag) && (
                                <div className="text-sm text-gray-600 italic">reCAPTCHA is temporarily disabled for troubleshooting.</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                        >
                            Send Message
                        </button>
                    </form>

                    {status && (
                        <p className="mt-6 text-center text-lg font-semibold text-green-600">
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );

}