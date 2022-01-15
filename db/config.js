const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const sercetAccesKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

// const AWS = require('aws-sdk');

// AWS.config.update({
//   accessKeyId,
//   sercetAccesKey,
//   region
// });

// const db = new AWS.DynamoDB();

// module.exports = {
//   db
// };

const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

const clientParams = {
  accessKeyId,
  sercetAccesKey,
  region
};

const db = new DynamoDB(clientParams);

module.exports = {
  db,
  marshall,
  unmarshall
};
