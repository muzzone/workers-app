const Worker = require('../models/Workers');

// GET http://localhost:8080/api/workers?apge=2&limit=5
module.exports.workers = async function (req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const pagination = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10)
  };

  try {
    const workers = await Worker.paginate({}, pagination);
    res.send(workers);
  } catch (e) {
    console.log('get workers error', e);
    res.send(null)
  }
};

// GET http://localhost:8080/api/workers/:id
module.exports.getById = async function (req, res) {
  const workers = await Worker.findOne({_id: req.params.id});
  res.send(workers);
};

// POST http://localhost:8080/api/workers/
module.exports.addWorker = async function (req, res) {
  const worker = new Worker({
    name : req.body.name,
    gender: req.body.gender,
    contactInformation: req.body.contactInformation,
    salary: req.body.salary,
    position: req.body.position
    // TODO refactor this
  });
  worker.save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(e => {console.log('create worker err', e)});
};

// PUT http://localhost:8080/api/workers/:id
module.exports.updateWorker = function (req, res) {
 Worker.findOneAndUpdate(
    {_id: req.params.id},
    {$set: req.body},
    {new: true}
    )
   .then(response => {
      res.status(200).json(response)
    })
   .catch(e => {console.log('update worker err', e)});
};

// DELETE http://localhost:8080/api/workers/delete/:id
module.exports.delete = async function (req, res) {
  const response = await Worker.deleteOne({_id: req.params.id});
  res.send(response);
};