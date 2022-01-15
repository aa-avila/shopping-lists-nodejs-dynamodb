const listsRepository = require('../repositories/lists');

const getAll = async () => {
  const response = await listsRepository.getAll();
  return response;
};

const getById = async (id) => {
  const response = await listsRepository.getById();
  return response;
};

const create = async (listData) => {
  const response = [];
  return response;
};

const update = async (id, listData) => {
  const response = [];
  return response;
};

const remove = async (id) => {
  const response = [];
  return response;
};

module.exports = { getAll, getById, create, update, remove };
