const express = require('express')
const profileController = require('../controllers/profileControllers');

const router = express.Router();

// Get all the cards
router.get('/',
profileController.getJobs,
  (req, res) => res.status(200).json(res.locals.jobs)
);

// Get all the cards with the status set to applied 
// router.get('/applied',
//   starWarsController.getSpecies,
//   (req, res) => res.status(200).json(res.locals.species)
// );

// // Get all the cards with the status set to archive 
// router.get('/archive',
//   starWarsController.getHomeworld,
//   (req, res) => res.status(200).json(res.locals.planet)
// );

// // Get all the cards with the status set to follow-up 
// router.get('/follow',
//   starWarsController.getFilm,
//   (req, res) => res.status(200).json(res.locals.film)
// );

// Create a card
router.post('/addCard',
  profileController.createCard,
  (req, res) => res.status(200).send("Job has been added")
);

// Update a card's status
router.put('/updateStatus',
  profileController.updateStatus,
  (req, res) => res.status(200).send("Updated the Status")
);


// // Delete a card
// router.delete('/removeCard',
//   starWarsController.addCharacter,
//   (req, res) => res.sendStatus(200)
// );

module.exports = router;
