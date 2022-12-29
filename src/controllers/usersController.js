const db = require('../../database/models');
const sequelize = db.sequelize;

const Users = db.User;

const userController = {
    login: function(req, res) {
        res.render("login")
    },

    session: function(req, res){
         Users.findAll({
            where: {email: req.body.email}
        }).then ((User)=> {
            if(User[0].dataValues.password == req.body.password){
                req.session.userLogged = User;
                res.send('UsuarioLogueado')
            }else {
                res.redirect('/users/login');
            }
            
            
        })


        
    },

    register: function(req, res) {
        res.render("register")
    },

    create: function(req, res){
        Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        }) .then(function(user){
            console.log(user);
            res.redirect("/users/login")
        })
    }
}

module.exports = userController;