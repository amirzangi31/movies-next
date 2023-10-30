

import { Schema, model, models } from "mongoose"

const movieSchema = new Schema({
    name_english : {
        type : String,
        required : true
    },
    name_persian : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    story : {
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    cast : [],
    imdb : Number,
    thumbnail : {
        type : String,
        required : true
    },
    genre : [],
},
{ timestamps: true })

const Movie = models.Movie || model("Movie", movieSchema);

export default Movie;
