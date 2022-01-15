const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const sercetAccesKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const { DynamoDB } = require('@aws-sdk/client-dynamodb');

const clientParams = {
  accessKeyId,
  sercetAccesKey,
  region
};

const db = new DynamoDB(clientParams);

module.exports = {
  db
};
