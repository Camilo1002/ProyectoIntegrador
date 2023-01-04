const db = require('../../database/models');
const sequelize = db.sequelize;
let { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

const Users = db.User;

const userController = {
    login: function(req, res) {
        res.render("login")
    },



    session: function(req, res){
         Users.findAll({
            where: {email: req.body.email}
        }).then ((User)=> {
            if(User[0]?.dataValues?.password == req.body.password){
                req.session.userLogged = User;
                console.log('Usuario logueado perfectamente')
                res.redirect('/movies')
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