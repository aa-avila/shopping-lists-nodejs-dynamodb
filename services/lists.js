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

const update = async (id, data) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: { S: id }
    },
    UpdateExpression: 'SET title = :t, archived = :a, updatedAt = :u',
    ExpressionAttributeValues: {
      ':t': { S: data.title },
      ':a': { BOOL: data.archived },
      ':u': { S: new Date().toISOString() }
    },
    ReturnValues: 'ALL_NEW'
  };

  const updatedItem = await listsRepository.update(params);

  return unmarshall(updatedItem.Attributes);
};

const remove = async (id) => {
  const response = [];
  return response;
};

module.exports = { getAll, getById, create, update, remove };
