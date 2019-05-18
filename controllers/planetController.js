const Planet = require('../models/planet');

function indexRoute(req, res) {
  Planet.find().then(function(result) {
    const planetObject = {
      planets: result
    };
    res.render('planets/index', planetObject);
  });
}

function newRoute(req, res) {
  res.render('planets/new');
}

function createRoute(req, res) {
  Planet.create(req.body)
    .then(result => res.redirect(`/planets/${result._id}`));
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  Planet.findById(req.params.id).then(result => {
    res.render('planets/show', result);
  });
}

function updateRoute(req, res) {
  console.log(`Updating planet id ${req.params.id}`, req.body);
  Planet.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/planets');
    });
}

function editRoute(req, res) {
  Planet.findById(req.params.id)
    .then(result => {
      res.render('planets/edit', result);
    });
}

function deleteRoute(req, res) {
  Planet.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/planets'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
