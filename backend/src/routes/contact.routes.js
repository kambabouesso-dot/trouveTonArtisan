const express = require('express');
const { param, body, validationResult } = require('express-validator');
const router = express.Router();
const { sendContactMessage } = require('../controllers/contact.controller');
const { contactLimiter } = require('../middlewares/rateLimiter');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post(
  '/artisans/:id/contact',
  contactLimiter,
  [
    param('id').isInt(),
    body('nom').trim().notEmpty().isLength({ max: 100 }).escape(),
    body('email').trim().isEmail().normalizeEmail(),
    body('objet').trim().notEmpty().isLength({ max: 150 }).escape(),
    body('message').trim().notEmpty().isLength({ max: 2000 }).escape(),
  ],
  validate,
  sendContactMessage
);

module.exports = router;
