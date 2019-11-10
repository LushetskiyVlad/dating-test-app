const { Router } = require('express');
const userController = require('../controllers/users.controller');
const router = Router();

router.get('/:userId', userController.getById);
router.post('/profile', userController.profile);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.put('/update/:userId', userController.update);
router.delete('/delete/:userId', userController.delete);

module.exports = router;