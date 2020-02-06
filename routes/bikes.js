const express = require('express');
const router = express.Router();
const onBikes = require('../handlers/bikes');

router.route('/')
  .post(onBikes.store)
  .get(onBikes.all)

router.route('/:id')
  .get(onBikes.show)
  .put(onBikes.update)
  .delete(onBikes.delete)

module.exports = router;
