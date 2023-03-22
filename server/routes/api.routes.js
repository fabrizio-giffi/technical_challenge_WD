const router = require("express").Router();

router.get("/phones", (req, res) => {
  res.json("All good in here");
});

router.get("/phones/:id", (req, res) => {
  res.json("All good in here");
});

module.exports = router;
