const Worker = require('../models/Workers');

// GET http://localhost:8080/api/workers?name=name&gender=male&contactInformation=info&salary=100&position=dev&dateFrom=Sun%20Sep%2002%202018%2000:00:00%20GMT+0300%20(EEST)&dateTo=Fri%20Sep%2028%202018%2000:00:00%20GMT+0300%20(EEST)&page=2&limit=5
module.exports.workers = async function (req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const pagination = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10)
  };
  const query = {};

  req.query.name ? query.name = new RegExp(req.query.name, 'i') : null;
  req.query.gender ? query.gender = new RegExp(req.query.gender, 'i') : null;
  req.query.contactInformation ? query.contactInformation = new RegExp(req.query.contactInformation, 'i') : null;
  req.query.position ? query.position = new RegExp(req.query.position, 'i'): null;
  req.query.salary ? query.salary = new RegExp(req.query.salary, 'i'): null;
  req.query.dateFrom ? query.date = {$gte: req.query.dateFrom} : null;
  if (req.query.dateTo) {
    !query.date ? query.date = {} : null;
    query.date.$lte = req.query.dateTo;
  }


  try {
    const workers = await Worker.paginate(query, pagination);
    res.send(workers);
  } catch (e) {
    console.log('get workers error', e);
    res.send(null)
  }
};

// GET http://localhost:8080/api/workers/:id
module.exports.getById = async function (req, res) {
  const workers = await Worker.findOne({_id: req.params.id});
  // TODO try catch
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
  // TODO try catch
  res.send(response);
};