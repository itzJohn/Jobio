const express = require('express')
const profileController = require('../controllers/profileControllers');

const router = express.Router();

// Get all the cards
router.get('/',
profileController.getJobs,
  (req, res) => res.status(200).json(res.locals.jobs)
);

// Create a card
router.post('/addCard',
  profileController.createCard,
  (req, res) => res.status(200).send("Job has been added")
);

// Update a card
router.put('/updateStatus',
  profileController.updateStatus,
  (req, res) => res.status(200).send("Updated the Status")
);

// // Delete a card
router.delete('/removeCard',
profileController.removeCard,
(req, res) => res.status(200).send("Job listing has been removed")
);

module.exports = router;
