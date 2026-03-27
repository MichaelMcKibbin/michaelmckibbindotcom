import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message, recaptcha } = req.body;

    // If server-side DISABLE_RECAPTCHA is enabled, skip requiring the token
    const disableRecaptcha = process.env.DISABLE_RECAPTCHA === 'true';

    if (!name || !email || !message || (!recaptcha && !disableRecaptcha)) {
        return res.status(400).json({ message: 'All fields and reCAPTCHA required' });
    }

    // Verify reCAPTCHA token with Google's siteverify endpoint unless disabled
    if (!disableRecaptcha) {
        try {
            const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET_KEY || '')}&response=${encodeURIComponent(recaptcha)}`
            });

            const verificationData = await verificationResponse.json();
            console.log('reCAPTCHA verification response:', verificationData);

            if (!verificationData.success) {
                return res.status(400).json({ message: 'reCAPTCHA verification failed', details: verificationData });
            }
        } catch (err) {
            console.error('reCAPTCHA verification error:', err);
            return res.status(500).json({ message: 'reCAPTCHA verification error', details: err.message });
        }
    } else {
        console.log('Server-side reCAPTCHA verification disabled (DISABLE_RECAPTCHA=true).');
    }

    try {
        console.log('Attempting to send email with config:', {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            user: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
            to: process.env.EMAIL_TO
        });

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
            port: parseInt(process.env.EMAIL_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `Contact Form: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Detailed email error:', error);
        res.status(500).json({ 
            message: `Email error: ${error.message || 'Unknown error'}`,
            details: JSON.stringify(error, null, 2)
        });
    }
}