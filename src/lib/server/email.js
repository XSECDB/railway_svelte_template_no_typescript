import { createTransport } from 'nodemailer';
import { VITE_SMTP_HOST, VITE_SMTP_PORT, VITE_SMTP_SECURE, VITE_SMTP_USER, VITE_SMTP_PASS } from '$env/static/private';

export const transporter = createTransport({
    host: VITE_SMTP_HOST,
    port: parseInt(VITE_SMTP_PORT),
    secure: VITE_SMTP_SECURE === 'true',
    auth: {
        user: VITE_SMTP_USER,
        pass: VITE_SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
}); 