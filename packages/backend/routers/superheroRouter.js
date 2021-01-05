const { Router } = require('express');
const { superheroController } = require('./../controllers');
const {upload} = require('./../middleware');

const superheroRouter = Router();

superheroRouter
  .route('/')
  .post(superheroController.create)
  .get(superheroController.getMany);

// '/api/superhoroes/2'
superheroRouter
  .route('/:superheroId')
  .get(superheroController.getById)
  .put(superheroController.updateById, superheroController.create)
  .delete(superheroController.deleteById);
// /api/superheroes/1/images
superheroRouter.patch('/:superheroId/images', upload.single('sup_image') ,superheroController.addImage);

module.exports = superheroRouter;