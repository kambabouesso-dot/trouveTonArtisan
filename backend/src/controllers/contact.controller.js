const { Artisan } = require('../models');
const transporter = require('../config/mailer');

// Envoie le message du formulaire de contact à l'artisan concerné
exports.sendContactMessage = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan introuvable.' });
    }

    const { nom, email, objet, message } = req.body;

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
