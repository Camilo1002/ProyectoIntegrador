const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { check } = require('express-validator');

let validateMovie = [
    check('title')
    .notEmpty().withMessage('Debes completar el título')
    .isLength({min: 2}).withMessage('El nombre debe contener al menos 2 caracteres'),
    check('rating')
    .notEmpty().withMessage('Debes completar el rating')
    .isFloat({min: 0.0,max:10.0}).withMessage('El rating debe estar entre 0 y 10'),
    check('awards')
    .notEmpty().withMessage('Debes completar la cantidad de premios')
    .isInt({min:0}).withMessage('La cantidad de premios no puede ser negativa'),
    check('length')
    .notEmpty().withMessage('Debes completar la duración de la película cantidad de en minutos')
    .isFloat({min:0}).withMessage('Debes completar la duración de la película en cantidad de minutos')
];

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/add', moviesController.add);
router.post('/movies/create', validateMovie, moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.post('/movies/update/:id', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete );
router.post('/movies/delete/:id', moviesController.destroy);



module.exports = router;