const express = require('express')
const profileController = require('../controllers/profileControllers');

const router = express.Router();

// Get all the cards
router.get('/',
profileController.getJobs,
  (req, res) => res.status(200).json({jobs :res.locals.jobs, stat: res.locals.stat})
);

// Create a card
router.post('/addCard',
  profileController.createCard,
  (req, res) => res.sendStatus(200)
);

// Update a card
router.put('/updateStatus',
  profileController.updateStatus,
  (req, res) => res.sendStatus(200)
);

// // Delete a card
router.delete('/removeCard',
profileController.removeCard,
(req, res) => res.sendStatus(200)
);

module.exports = router;
