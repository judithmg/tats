const { model, Schema } = require("mongoose");

const tattoosSchema = new Schema({
  user: Object,
  title: String,
  artist: String,
  studio: String,
  date: String,
  cost: String,
  totalTime: String,
  bodyPart: String,
  keywords: [String],
  style: [String],
  appointment: {
    howClean: Number,
    onTime: Number,
    musicOn: Boolean,
  },
});

module.exports = model("Tattoo", tattoosSchema);
