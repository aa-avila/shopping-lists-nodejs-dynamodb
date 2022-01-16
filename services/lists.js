const listsRepository = require('../repositories/lists');
const TABLE_NAME = 'Lists';
const { marshall, unmarshall } = require('../db/utils');
const { v4: uuid } = require('uuid');

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

module.exports = { getAll, getById, create, update, remove };
