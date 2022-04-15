const { pathJSONPets } = require("../utils/pathJSON");
const parseJSON = require("../utils/parseJSON");
const writeJSON = require("../utils/writeJSON");

exports.getAllPetsModel = async () => {
  return await parseJSON.readJSONAsync(pathJSONPets);
};

exports.deleteOwnerPet = async (id) => {
  if (Array.isArray(id)) {
    const allPets = await parseJSON.readJSONAsync(pathJSONPets);
    const deleteSomeOwnerId = allPets.map((pet) => {
      if (id.includes(pet.ownerId)) {
        pet.ownerId = null;
      }
      return pet;
    });

    await writeJSON.writeJSONAsync(pathJSONPets, deleteSomeOwnerId);
  } else {
    const allPets = await parseJSON.readJSONAsync(pathJSONPets);
    const deleteOwner = allPets.map((pet) => {
      if (pet.ownerId === id) {
        pet.ownerId = null;
      }
      return pet;
    });

    await writeJSON.writeJSONAsync(pathJSONPets, deleteOwner);
  }
};

exports.addOwnerPetModel = async (id) => {
  const allPets = await parseJSON.readJSONAsync(pathJSONPets);
};
