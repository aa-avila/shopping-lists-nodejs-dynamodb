const { db } = require('../db/dynamodb');
const TABLE_NAME = 'Lists';
const { marshall, unmarshall } = require('../db/utils');
const { v4: uuid } = require('uuid');

const getAll = async () => {
  const params = {
    TableName: TABLE_NAME
  };

  const { Items } = await db.scan(params);
  return Items.map((item) => unmarshall(item));
};

const getById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: { S: id }
    }
  };

  const { Item } = await db.getItem(params);
  return unmarshall(Item);
};

const create = async (data) => {
  // const params = {
  //   TableName: TABLE_NAME,
  //   Item: marshall({
  //     id: uuid(),
  //     createdAt: new Date().toISOString(),
  //     ...data
  //   })
  // };
  // return await db.putItem(params); // metodo "create", sin embargo no devuelve el item creado

  // por lo tanto, es mas conveniente usar updateItem (si no existe elemento, lo crea y devuelve mediante ReturnValues ALL_NEW)
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: { S: uuid() }
    },
    UpdateExpression:
      'SET title = :t, archived = :a, createdAt = :c, updatedAt = :u, products = :p',
    ExpressionAttributeValues: marshall({
      ':t': data.title,
      ':a': false,
      ':p': [],
      ':c': new Date().toISOString(),
      ':u': null
    }),
    ReturnValues: 'ALL_NEW'
  };

  const createdItem = await db.updateItem(params);
  return unmarshall(createdItem.Attributes);
};

const update = async (id, data) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: { S: id }
    },
    UpdateExpression: 'SET title = :t, archived = :a, updatedAt = :u',
    ExpressionAttributeValues: marshall({
      ':t': data.title,
      ':a': data.archived,
      ':u': new Date().toISOString()
    }),
    ReturnValues: 'ALL_NEW'
  };

  const updatedItem = await db.updateItem(params);
  return unmarshall(updatedItem.Attributes);
};

const remove = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: { S: id }
    }
  };

  const response = await db.deleteItem(params);
  console.log(response);
  return response;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
