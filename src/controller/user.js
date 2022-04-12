const modelUser = require("../model/user");
const modelPets = require("../model/pets");
const { parseJsonBody } = require("../utils/bodyJSONparse");
const { createId } = require("../utils/create-id");

exports.getAllUsers = async () => {
  return await modelUser.allUsersModel();
};

exports.addNewUser = async (req) => {
  const newUserBody = await parseJsonBody(req);

  const user = {
    id: createId(),
    ...newUserBody,
  };

  await modelUser.createNewUserModel(user);
  return user;
};

exports.getUserById = async (id, res) => {
  const getAllPets = await modelPets.getAllPetsModel();
  return await modelUser.getUserByIdModel(id, getAllPets);
};

exports.updateUser = async (req) => {
  const updateUserData = await parseJsonBody(req);
  await modelUser.updateUserModel(updateUserData);
  return updateUserData;
};

exports.deleteUser = async (req) => {
  const deleteUserData = await parseJsonBody(req);
  await modelPets.deleteOwnerPet(deleteUserData.id);
  await modelUser.deleteUserModel(deleteUserData);
  return deleteUserData;
};
