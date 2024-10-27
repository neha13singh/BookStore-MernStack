import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: false,
  },
});

const Book = mongoose.model('Book', bookSchema);

export { Book };
