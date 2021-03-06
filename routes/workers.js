const express = require('express');
const router = express.Router();
const workers = require('../controllers/workers');
const passport = require('passport');

// load demo
// router.get('/demo', workers.loadDemoData);

router.get('/', passport.authenticate('jwt', { session: false}), workers.workers);

router.get('/groups', passport.authenticate('jwt', {session: false}), workers.getWorkersGroup);

router.get('/:id', passport.authenticate('jwt', { session: false}), workers.getById);

router.post('/', passport.authenticate('jwt', { session: false}), workers.addWorker);

router.put('/:id', passport.authenticate('jwt', { session: false}), workers.updateWorker);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false}), workers.delete);



module.exports = router;
