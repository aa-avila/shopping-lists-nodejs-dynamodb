const { db } = require('../db/dynamodb');

const getAll = async (params) => {
  return await db.scan(params);
};

const getById = async (params) => {
  return await db.getItem(params);
};

const create = async (params) => {
  return await db.putItem(params);
};

const update = async (id, data) => {
  const response = [];
  return response;
};

const remove = async (id) => {
  const response = [];
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
