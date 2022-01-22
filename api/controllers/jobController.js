const mongoose = require("mongoose")
const Job = mongoose.model(process.env.DB_JOBS_MODEL)

getAll = function (req, res) {
    console.log("GET ALL called")
    let count = 5;
    let offset = 0;

    Job.find().skip(offset).limit(count).exec(function (err, jobs) {
        if (err) {
            console.log("error getting jobs")            
            res.status(500).json(err);
        }
        else {
            console.log("got jobs")
            res.status(200).json(jobs);
        }
    })
}

addOne = function (req, res) {
    const newJob = {
        title: req.body.title,
        salary: req.body.salary,
        description: req.body.description,
        experience: req.body.experience,
        skills: req.body.skills,
        postDate: req.body.postDate,
        location: {
            coordinates: [parseFloat(req.body.lng), parseFloat(req.body.lat)]
        }
    }

    Job.create(newJob, function (err, job) {
        const response = {
            status: 201,
            message: job,
        };

        if (err) {
            console.log("Error adding new job", err);
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message)
    })
}

module.exports = {
    getAll,
    addOne
}