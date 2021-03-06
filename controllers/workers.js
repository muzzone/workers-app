const Worker = require('../models/Workers');
const demoData = require('../demo/demo-data');
const workersHelper = require('../helpers/workers');
const _ = require('lodash');

// GET http://localhost:8080/api/workers?
//  name=name
//  &gender=male
//  &contactInformation=info
//  &salary=100
//  &position=dev
//  &dateFrom=Sun%20Sep%2002%202018%2000:00:00%20GMT+0300%20(EEST)
//  &dateTo=Fri%20Sep%2028%202018%2000:00:00%20GMT+0300%20(EEST)
//  &page=2&limit=5
module.exports.workers = async function (req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const pagination = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10)
  };
  const query = workersHelper.formQuery(req.query);

  try {
    const workers = await Worker.paginate(query, pagination);
    res.send(workers);
  } catch (e) {
    console.log('get workers error', e);
    res.send(null)
  }
};

// GET http://localhost:8080/api/workers/groups?<query>
module.exports.getWorkersGroup = async function (req, res) {
    const query = workersHelper.formQuery(req.query);
    try {
        const workers = await Worker.find(query).sort({name: 1});
        const workersGroups = _.groupBy(workers, (worker) => worker.name.substr(0,1).toUpperCase());
        res.send({docs: workersGroups});
    } catch (e) {
        console.log('get workers groups error', e);
        res.send(null)
    }
};

// GET http://localhost:8080/api/workers/:id
module.exports.getById = async function (req, res) {
    try {
      const workers = await Worker.findOne({_id: req.params.id});
      res.send(workers);
    } catch (e) {
      res.status(404).json({message: 'Not found'});
    }
};

// POST http://localhost:8080/api/workers/
module.exports.addWorker = async function (req, res) {
  const worker = new Worker({
    name : req.body.name,
    gender: req.body.gender,
    contactInformation: req.body.contactInformation,
    salary: parseInt(req.body.salary, 10),
    position: req.body.position
  });
  worker.save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(e => {
      console.log('create worker err', e);
      res.status(400).json({message: 'Something went wrong!'});
    });
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
   .catch(e => {
     console.log('update worker err', e);
     res.status(400).json({message: 'Something went wrong!'});
   });
};

// DELETE http://localhost:8080/api/workers/delete/:id
module.exports.delete = async function (req, res) {
    try {
        const response = await Worker.deleteOne({_id: req.params.id});
        res.send(response);
    } catch (e) {
        res.status(400).json({message: 'Something went wrong!'});
    }
};


/////////////// DEMO DATA ///////////////
//GET localhost:8080/api/workers/demo
module.exports.loadDemoData = function (req, res) {
    demoData.workers.forEach(i => {
        const worker = new Worker({
            name : i.name,
            gender: i.gender,
            contactInformation: i.contactInformation,
            salary: i.salary,
            position: i.position,
            date: i.date
        });
        worker.save()
    });
    res.send('ok');
};
