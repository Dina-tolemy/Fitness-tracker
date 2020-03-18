const router = require("express").Router();
const Exrcises = require("../models/exrcises.js");

router.post("/api/exrcise", ({ body }, res) => {
    Exrcises.create(body)
      .then(dbExrcise => {
        res.json(dbExrcise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;