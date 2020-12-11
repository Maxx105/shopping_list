const router = require("express").Router();
const listRoutes = require("./list");

router.use("/list", listRoutes);

module.exports = router;