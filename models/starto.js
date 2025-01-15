var mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

var { Schema } = mongoose;

const schemaStarto = new Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  location: { type: String, required: true },
  proSituation: { type: String, required: true },
  salary: { type: Number, required: false },
  phone: { type: Number, required: true },
  totalDebts: { type: Number, required: true },
  creditsNumber: { type: Number, required: true },
  motivations: { type: String, required: true },
  complementAsked: { type: Number, required: false },
  persoSituation: { type: String, required: true },
  dependents: { type: Number, required: false },
  creditsType: { type: String, required: true },
  homeSituation: { type: String, required: true },
  actualMensualities: { type: Number, required: true },
  availabilities: { type: String, required: false },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

schemaStarto.plugin(mongooseDelete,
  { deletedAt: true, deletedBy: true, overrideMethods: true });

module.exports = mongoose.model('Starto', schemaStarto);