const express = require ('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('body', {title: 'INICIO' });
});

const userController = require ('../controller/userController')

router.get('/',userController.list);

router.post('/add',userController.save);

router.get('/delete/:id', userController.delete);

router.get('/update/:id', userController.edit);

router.post('/update/:id', userController.update);


module.exports = router;