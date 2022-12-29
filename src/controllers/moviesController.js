const db = require('../../database/models');
const sequelize = db.sequelize;

const Movies = db.Movie;

const moviesController = {
    list:(req, res) => {
        db.Movie.findAll()
            .then(movies=> {
                res.render('moviesList', {movies});
            })
    },
    detail:(req, res)=>{
        db.Movie.findByPk(req.params.id,{
            include: [{association: "genres"},{association: "actors"}]
          })
            .then(movie=>{
                res.render('moviesDetail', {movie})
            })
            .catch(error=>{
                console.log(error)
            })
    },
    add: function (req, res){
        return res.render('moviesAdd')
    },
    create: function (req, res) {
        let movie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
             release_date: req.body.release_date,
            length: req.body.length
        }
        console.log((req.body));

        Movies.create(movie)
        
        .then(() =>{
            return res.redirect('/movies')  
        })
        .catch((err) => console.error(err))
    },
    edit: function(req, res) {
        let movieId = req.params.id;

        Movies.findByPk(movieId)
        .then(Movie => {
            return res.render('moviesEdit',{
                Movie
            })
        })
        .catch(err => console.error(err));   
    },
    update: function (req, res){
        let movieId = req.params.id;

        Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
             release_date: req.body.release_date,
            length: req.body.length
        }, {
            where: {
                id:movieId
            }
        })
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(err => console.error(err));   
    },
    delete:  function(req, res) {
        let movieId = req.params.id;

        Movies.findByPk(movieId)
        .then(Movie => {
            return res.render('moviesDelete',{
                Movie
            })
        })
        .catch(err => console.error(err));   
    },
    destroy: function (req, res){
        let movieId = req.params.id;

        Movies.destroy({
            where: { id: movieId },
        })
        .then(() => res.redirect('/movies'))
        .catch(err => console.error(err));   
    }
}

module.exports = moviesController;