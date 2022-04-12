const modelPets = require("../model/pets");

exports.getAllPets = async () => {
  return await modelPets.getAllPetsModel();
};
