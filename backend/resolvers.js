const Book = require('./db');

const resolvers = {
  Query: {
    getBookByISBN: async (_, { isbn }) => {
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
      try {
        console.log("received")
        await Book.findOneAndDelete({ isbn });
        return true;
      } catch (error) {
        console.log(error)
      }
    },
  },
};

module.exports = resolvers;
