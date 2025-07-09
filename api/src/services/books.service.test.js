const BooksService = require('./books.service');

const mockCreate = jest.fn();

jest.mock('../lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => ({
    getAll: () => [...fakeBooks],
    create: mockCreate,
  }))
);

const fakeBooks = [
  {
    _id: '1',
    name: 'Harry Potter',
  },
];

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });
  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks({});
      expect(books.length).toEqual(1);
    });
  });
  describe('Test for createBook()', () => {
    test('Should insert a book and return the new book with _id', async () => {
      const newBook = { title: '1984', author: 'George Orwell', year: 1949 };
      const expectedResult = { _id: '123abc', ...newBook };
      mockCreate.mockResolvedValue(expectedResult);
      const result = await service.createBook(newBook);
      expect(result).toBeDefined();
      expect(result).toHaveProperty('_id');
      expect(result.title).toBe(newBook.title);
    });
  });
});
