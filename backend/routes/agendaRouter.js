const router = require('express').Router();
const ctrl = require('../controllers/agendaControllers');
const { validateBody } = require('../middlewares/validateBody');
const { validateBodySchema } = require('../validation/validateBodySchema');

router.get('/', ctrl.getAll);
router.post('/', validateBody(validateBodySchema), ctrl.createTodo);
router.patch('/:todoId', validateBody(validateBodySchema), ctrl.updateTodo);
router.delete('/:todoId', ctrl.deleteTodo);

module.exports = router;
