
const express= require('express');
const router = express.Router();

const bookingsController = require ('../controller/bookingsController')


router.get('/', function (req,res,next){
    res.render('bookings', {title:'bookings'});
});

router.post('/add',bookingsController.save);



module.exports = router;