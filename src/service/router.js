const router = require("find-my-way")();
const controllerUser = require("../controller/user");
const controllerPets = require("../controller/pets");

router.on("GET", "/user", async (req, res, params) => {
  const result = await controllerUser.getAllUsers(res);
  res.end(JSON.stringify(result));
});

router.on("POST", "/user", async (req, res, params) => {
  const result = await controllerUser.addNewUser(req);
  res.end(JSON.stringify(result));
});

router.on("GET", "/user/:id", async (req, res, { id }) => {
  const result = await controllerUser.getUserById(id, res);
  res.end(JSON.stringify(result));
});

router.on("GET", "/pets", async (req, res, params) => {
  const result = await controllerPets.getAllPets(res);
  res.end(JSON.stringify(result));
});

router.on("PUT", "/user", async (req, res, params) => {
  const result = await controllerUser.updateUser(req);
  res.end(JSON.stringify(result));
});

router.on("DELETE", "/user", async (req, res, params) => {
  const result = await controllerUser.deleteUser(req);
  res.end(JSON.stringify(result));
});

module.exports = router;
