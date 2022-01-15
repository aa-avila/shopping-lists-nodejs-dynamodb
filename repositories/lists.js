const { db, marshall, unmarshall } = require('../db/config');
const TABLE_NAME = 'Test';

const getAll = async () => {
  const response = [];
  return response;
};

const getById = async (id) => {
  // acá armamos nuestros params de la query
  const params = {
    TableName: TABLE_NAME,
    Key: marshall({
      //<== esa poronga sirve para que dynamo entienda nuestro objeto normal
      id: '0',
      createdAt: '2022-01-13'
    })
  };

  const { Item } = await db.getItem(params); //<== la consulta, pero desestructuramos "Item" de la respuesta
  const response = unmarshall(Item); //<== esa poronga a la inversa nos convierte el DynamoJSON en uno como la gente
  return response;
};

const create = async (data) => {
  const response = [];
  return response;
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
