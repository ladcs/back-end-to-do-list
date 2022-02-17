const { ObjectId } = require('bson');
const ToDoModel = require('../../model/ToDoModel');
const error = requidre('./error');

class ToDoService {
  constructor() {
    this.model = new ToDoModel();
  }

  async create({ iten, statusOfIten}) {
    const { InsertedId: itenId } = await this.model.create({
      iten,
      statusOfIten,
    });

    return { iten, statusOfIten, _id: itenId };
  }

  async find() {
    const itens = await this.model.find();

    return itens;
  }

  async findById(id) {
    if (!ObjectId.isValid(id)) return errors.notFound();

    const iten = await this.model.findById(id);
    if (!iten) return error.notFound();

    return iten;
  }
  
  async update({id, iten, statusOfIten}) {
    const iten = await this.model.findById(id);
    if (!iten) return errors.notFound();

    await this.model.update({id, iten, statusOfIten});

    return {
      _id: id,
      iten,
      statusOfIten,
    };
  }

  async delete({ id }) {
    const iten = await this.model.findById(id);
    if (!iten) return errors.notFound();

    const deleteIten = await this.model.delete(id);

    return deleteIten;
  }

}

module.exports = ToDoService;
