const mongoose = require('mongoose');

// Para crear un modelo necesitamos crear un Schema
// Un Schema tiene toda la configuracion del Modelo
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // No queremos dos personas registradas con el mismo email
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    // Ponemos automaticamente la fecha de registro
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
