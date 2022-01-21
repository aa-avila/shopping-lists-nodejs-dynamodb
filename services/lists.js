const listsRepository = require('../repositories/lists');

const getAll = async () => {
  return await listsRepository.getAll();
};

const getById = async (id) => {
  return await listsRepository.getById(id);
};

const create = async (data) => {
  return await listsRepository.create(data);
};

const update = async (id, data) => {
  return await listsRepository.update(id, data);
};

const remove = async (id) => {
  return await listsRepository.remove(id);
};

//products
const getProducts = async (listId) => {
  return await listsRepository.getProducts(listId);
};

const getProductById = async (listId, prodId) => {
  return await listsRepository.getProductById(listId, prodId);
};

const addProducts = async (listId, data) => {
  return await listsRepository.addProducts(listId, data);
};

const updateProductById = async (listId, prodId, data) => {
  return await listsRepository.updateProductById(listId, prodId, data);
};

const removeProductById = async (listId, prodId) => {
  return await listsRepository.removeProductById(listId, prodId);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getProducts,
  getProductById,
  addProducts,
  updateProductById,
  removeProductById
};
