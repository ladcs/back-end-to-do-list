const { StatusCodes } = require('http-status-codes');
const ToDoService = require('../service/ToDoService');

class ToDoController {
  constructor (route) {
    this.route = route;
  }

  static async create(req, res, next) {
    const {} = req.body;
    const service = new TodoService();
    const iten = await service.create ({iten, statusOfIten});
    if ('error' in iten) return next(iten.error);
    res.status(StatusCodes.CREATED).json({ recipe });
  }
  
  static async find(_req, res) {
    const service = new ToDoService();
    const itens = await service.find();
    res.status(StatusCodes.OK).json(itens);
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { iten, statusOfIten } = req.body;
    const service = new ToDoService();
    const updated = await service.update({ id, iten, statusOfIten });
    if('error' in updated) return next(updated.error);
    res.status(StatusCodes.OK).json(updated);
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    const service = new ToDoService();
    const deleted = await service.delete({ id });
    if('error' in deleted) return next(deleted.eror);
    res.status(StatusCodes.NO_CONTENT).end();
  }

  handle() {
    this.route.post('/', ToDoController.create);
    this.route.get('/', ToDoController.find);
    this.route.put('/:id', ToDoController.update);
    this.route.delete('/:id', ToDoController.delete);
  }
}

module.exports = ToDoController;