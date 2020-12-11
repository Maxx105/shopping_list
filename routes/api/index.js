const router = require("express").Router();
const listRoutes = require("./list");
const userRoutes = require("./user");

router.use("/list", listRoutes);
router.use("/user", userRoutes);

module.exports = router;