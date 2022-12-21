const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);



module.exports = router;