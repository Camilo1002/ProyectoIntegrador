module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false,
        paranoid: true
    }
    const Movie = sequelize.define(alias, cols, config)

    Movie.associate = (models) =>{
        Movie.belongsTo(models.Genres, {
            as: "genres",
            foreignKey: "genre_id",
            onDelete: "cascade",
        })

        Movie.belongsToMany(models.Actors,{
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false,
            onDelete: "cascade",
        });
    }

    return Movie
}