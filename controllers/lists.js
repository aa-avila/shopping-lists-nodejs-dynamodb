const listsService = require('../services/lists');

const getAll = async (req, res, next) => {
  try {
    const response = await listsService.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const response = await listsService.getById(req.params.id);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await listsService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await listsService.update(req.params.id, req.body);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const response = await listsService.remove(req.params.id);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

//products

const getProducts = async (req, res, next) => {
  try {
    const response = await listsService.getProducts(req.params.listId);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { listId, prodId } = req.params;
    const response = await listsService.getProductById(listId, prodId);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const addProducts = async (req, res, next) => {
  try {
    const { listId } = req.params;
    const response = await listsService.addProducts(listId, req.body);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (req, res, next) => {
  try {
    const { listId, prodId } = req.params;
    const response = await listsService.updateProductById(
      listId,
      prodId,
      req.body
    );

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const removeProductById = async (req, res, next) => {
  try {
    const { listId, prodId } = req.params;
    const response = await listsService.removeProductById(listId, prodId);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getProducts,
  getProductById,
  addProducts,
  updateProductById,
  removeProductById
};
