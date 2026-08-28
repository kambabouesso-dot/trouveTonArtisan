const nodemailer = require('nodemailer');
const { Artisan } = require('../models');

// Envoie le message du formulaire de contact à l'artisan concerné
exports.sendContactMessage = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan introuvable.' });
    }

    const { nom, email, objet, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: artisan.email,
      replyTo: email,
      subject: `[Trouve ton artisan] ${objet}`,
      text: `Message de ${nom} (${email}) :\n\n${message}`,
    });

    res.status(200).json({ message: 'Votre message a bien été envoyé.' });
  } catch (err) {
    next(err);
  }
};
