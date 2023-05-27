const router = require('express').Router();
const ctrl = require('../controllers/agendaControllers');

router.get('/', ctrl.getAll);
router.delete('/:id', ctrl.deleteById);

module.exports = router;
