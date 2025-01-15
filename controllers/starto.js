// in controllers/startos.js

const Starto = require('../models/starto');

exports.createStarto = (req, res, next) => {
  const starto = new Starto({
    name: req.body.name,
    firstname: req.body.firstname,
    location: req.body.location,
    proSituation: req.body.proSituation,
    salary: req.body.salary,
    totalDebts: req.body.totalDebts,
    creditsNumber: req.body.creditsNumber,
    motivations: req.body.motivations,
    complementAsked: req.body.complementAsked,
    persoSituation: req.body.persoSituation,
    dependents: req.body.dependents,
    creditsType: req.body.creditsType,
    homeSituation: req.body.homeSituation,
    actualMensualities: req.body.actualMensualities,
    availabilities: req.body.availabilities,
  });
  starto.save().then(
    () => {
      res.status(201).json({
        message: 'Starto saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(401).json({
        error: error
      });
    }
  );
};

exports.getAllStartos = (req, res, next) => {
    Starto.find()
      .then(startos => res.status(200).json(startos))
      .catch(error => res.status(401).json({ error }));
}
