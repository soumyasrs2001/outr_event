const {
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/users");
const verifyLogin = require("../middlewares/verifyLogin");

const router = require("express").Router();

// get all users
router.get("/", getAllUsers);

// get user by id
router.get("/:id", getUserById);

// update user by id
router.put("/:id", verifyLogin, updateUser);


module.exports = router;
