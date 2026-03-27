export default function handler(req, res) {
    res.status(200).json({
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
        clientDisable: process.env.NEXT_PUBLIC_DISABLE_RECAPTCHA === 'true'
    });
}

