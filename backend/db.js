const { Schema, model } = require("mongoose")

// Set up Mongoose connection
/* mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); */


const Book = new Schema({
  title: String,
  author: String,
  isbn: String,
  price: Number,
});

module.exports = model('Book', Book);
