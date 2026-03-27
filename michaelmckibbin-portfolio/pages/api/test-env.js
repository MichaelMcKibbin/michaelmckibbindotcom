export default function handler(req, res) {
    res.status(200).json({
        env_check: {
            EMAIL_HOST: process.env.EMAIL_HOST || 'NOT SET',
            EMAIL_PORT: process.env.EMAIL_PORT || 'NOT SET',
            EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
            EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'NOT SET',
            EMAIL_TO: process.env.EMAIL_TO || 'NOT SET'
        },
        node_version: process.version,
        platform: process.platform
    });
}