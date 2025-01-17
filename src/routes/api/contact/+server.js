import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
    try {
        const { name, email, phone, message } = await request.json();

        // SMTP-Transporter direkt hier konfigurieren
        const transporter = nodemailer.createTransport({
            host: 'rw0b97.webhosting.systems',
            port: 587,
            secure: false,
            auth: {
                user: 'support@360xcloud.de',
                pass: 'yGrf43#13'
            }
        });

        const formattedMessage = `
            Name: ${name}
            Email: ${email}
            Telefon: ${phone || 'Nicht angegeben'}
            Nachricht: ${message}
        `;

        const mailOptions = {
            from: 'support@360xcloud.de',
            to: 'dennis.bruch@360sec.de',
            subject: `Neue Kontaktanfrage von ${name}`,
            text: formattedMessage,
            html: `
                <h1>Neue Kontaktanfrage</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>E-Mail:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
                <h2>Nachricht:</h2>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error);
        return json({ success: false, error: error.message }, { status: 500 });
    }
}; 