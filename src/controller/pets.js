const modelPets = require("../model/pets");
const { parseJsonBody } = require("../utils/bodyJSONparse");

exports.getAllPets = async () => {
  return await modelPets.getAllPetsModel();
};

exports.addOwnerPet = async (req) => {
  const idOwner = await parseJsonBody(req);
  await modelPets.addOwnerPetModel(idOwner.id);
  return idOwner;
};
