const nodemailer = require('nodemailer');

async function sendWithMailtrapApi(message) {
  const response = await fetch(
    `https://sandbox.api.mailtrap.io/api/send/${process.env.MAILTRAP_INBOX_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: message.from },
        to: [{ email: message.to }],
        reply_to: { email: message.replyTo },
        subject: message.subject,
        text: message.text,
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Mailtrap API: ${response.status} ${details}`);
  }

  return response.json();
}

if (process.env.MAILTRAP_API_TOKEN && process.env.MAILTRAP_INBOX_ID) {
  module.exports = { sendMail: sendWithMailtrapApi };
  return;
}

// Transporteur unique réutilisé par l'application (évite de recréer une connexion SMTP à chaque email)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
});

module.exports = transporter;
