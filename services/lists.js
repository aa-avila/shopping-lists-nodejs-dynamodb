const listsRepository = require('../repositories/lists');
const TABLE_NAME = 'Lists';
const { marshall, unmarshall } = require('../db/utils');
const { v4: uuid } = require('uuid');

const getAll = async () => {
  const params = {
    TableName: TABLE_NAME
  };
  const { Items } = await listsRepository.getAll(params);

  const response = Items.map((item) => unmarshall(item));
  return response;
};

const getById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: marshall({
      id: id
    })
  };
  const { Item } = await listsRepository.getById(params);

  return unmarshall(Item);
};

const create = async (data) => {
  const params = {
    TableName: TABLE_NAME,
    Item: marshall({
      id: uuid(),
      createdAt: new Date().toISOString(),
      ...data
    })
  };

  return await listsRepository.create(params);
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
