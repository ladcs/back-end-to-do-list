const { ObjectId } = require('bson');
const connection = require('./connection');

class Model {
  constructor(collection) {
    this.collection = collection;
  }

  async create(document) {
    const db = await connection();
    const insertIten = await db.collection(this.collection)
      .insertOne(document);

    return insertIten;
  }

  async find() {
    const db = await connection();
    const documents = await db.collection(this.collection)
      .find()
      .toArray();

    return documents;
  }

  async findById(id) {
    const db = await connection();
    const document = await db.collection(this.collection)
      .findOne({ _id: ObjectId(id) });

    return document;
  }

  async update(document) {
    const { id, ...payload } = document;
    const db = await connection();
    const updateIten = await db.collection(this.collection)
      .updateOne(
        { _id: ObjectId(id) },
        { $set: payload },
      );

    return updateIten;
  }

  async delete(id) {
    const db = await connection();
    const deleteIten = await db.collection(this.collection)
      .deleteOne({ _id: ObjectId(id) });

    return deleteIten;
  }
}

module.exports = Model;
