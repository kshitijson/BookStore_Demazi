const Book = require('./db');

const resolvers = {
  Query: {
    getBookByISBN: async (_, { isbn }) => {
      console.log("triggered")
      return await Book.findOne({ isbn });
    },
    getAllBooks: async () => {
      return await Book.find();
    },
    getBooksByTitle: async (_, { title }) => {
      return await Book.find({ title });
    },
    getBooksByAuthor: async (_, { author }) => {
      return await Book.find({ author });
    },
  },
  Mutation: {
    addBook: async (_, args) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
    updateBook: async (_, { isbn, ...rest }) => {
      return await Book.findOneAndUpdate({ isbn }, rest, { new: true });
    },
    deleteBook: async (_, { isbn }) => {
      await Book.findOneAndDelete({ isbn });
      return true;
    },
  },
};

module.exports = resolvers;
