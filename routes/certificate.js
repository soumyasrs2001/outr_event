const {
  getAllCerificates,
  getCertificate,
  verifyCertificate,
  createCretificate,
} = require("../controllers/certificate");

const router = require("express").Router();

// get all
router.get("/", getAllCerificates);

// get a specific with id
router.get("/:id", getCertificate);

// create
router.post("/", createCretificate);

// verifiy certificate
router.put("/:id", verifyCertificate);

module.exports = router;
