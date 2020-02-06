const express = require('express');
const router = express.Router();
const handlersSocks = require('..//handlers/bikes');

router
    .route('/')
    .post(handlersSocks.createBike)
    .get(handlersSocks.getAllBikes);

router
    .route('/:id')
    .get(handlersSocks.getOneBike)
    .put(handlersSocks.updateOneBike)
    .delete(handlersSocks.deleteOneBike);

router
    .route('/brand/:brand')
    .get(handlersSocks.readFiltered);

router
    .route('/isElectric/:isElectric');


module.exports = router;