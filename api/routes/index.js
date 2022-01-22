const express = require("express")

const jobController = require("../controllers/jobController")

const router  = express.Router()

router
    .route("/jobs")
    .get(jobController.getAll)
    .post(jobController.addOne)

module.exports = router;