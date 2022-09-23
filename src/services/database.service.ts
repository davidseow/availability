import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

export const collections: { events?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const {
    DB_CONN_STRING = '',
    DB_NAME = '',
    EVENTS_COLLECTION_NAME = ''
  } = process.env;

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);
  await client.connect();

  const db: mongoDB.Db = client.db(DB_NAME);
  const eventsCollection: mongoDB.Collection = db.collection(
    EVENTS_COLLECTION_NAME
  );
  collections.events = eventsCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${eventsCollection.collectionName}`
  );
}
