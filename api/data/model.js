const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: String,
    salary: Number,
    location: {coordinates: {
        type: [Number],
        index: "2dsphere"
    }},
    description: String,
    experience: String,
    skills: Array,
    postDate: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model(process.env.DB_JOBS_MODEL, jobSchema, process.env.DB_JOBS)

