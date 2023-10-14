//call routers
const express = require("express");
const router = express.Router();
const {
  getTemples,
  getTemplesById,
  insertTemple,
  updateTemple,
  deleteTemple,
} = require("../controllers/temples");
router.get("/", getTemples);
router.get("/:id", getTemplesById);
router.post("/", insertTemple);
router.put("/:id", updateTemple);
router.delete("/:id", deleteTemple);

module.exports = router;
