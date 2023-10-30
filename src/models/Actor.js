import { Schema, model, models } from "mongoose"

const actorSchema = new Schema({
    name_english: {
        type: String,
        required: true
    },
    name_persian: {
        type: String,
        required: true
    },

    birth_year: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    movies: [],
},
    { timestamps: true })

const Actor = models.Actor || model("Actor", actorSchema);

export default Actor;
