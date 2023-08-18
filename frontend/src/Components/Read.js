import React, { useEffect, useState } from 'react'
import { 
  READ_ALL_BOOK, 
  READ_BOOK_ISBN, 
  READ_BOOK_AUTHOR, 
  READ_BOOK_TITLE,
} from './utils/queries';
import './style.css'
import { useLazyQuery } from '@apollo/client';


export default function Read() {
    const [searchType, setSearchType] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);


    const [executeQuery, { error, data }] = useLazyQuery(READ_ALL_BOOK)


    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        setSearchValue('');
        setSearchResult(null);
      };

      const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        setSearchResult(null);
      };

      const handleSearchSubmit = async (e) => {
        e.preventDefault()
        switch (searchType) {
          case "all":
            console.log("ALLL")
            executeQuery(READ_ALL_BOOK)
            .then((res) => {
              setSearchResult(res.data.getAllBooks)
              console.log(searchResult)
            })
            .catch((err) => {
              console.log(err)
            })
            break

          case "title":
            console.log("title")
            executeQuery(READ_BOOK_TITLE, {
              variables: { title: searchValue }
            })
            .then((res) => {
              setSearchResult(res)
              console.log(res.data)
            })
            .catch((err) => {
              console.log(err)
            })
            break
          
          case "isbn":
            console.log("isbn")
            console.log(searchValue)
            executeQuery(READ_BOOK_ISBN, {
              variables: { isbn: searchValue }
            })
            .then((res) => {
              setSearchResult(res)
              console.log(searchResult)
            })
            .catch((err) => {
              console.log(err)
            })
            break

          case "author":
            executeQuery(READ_BOOK_AUTHOR, {
              variables: { author: searchValue }
            })
            .then((res) => {
              setSearchResult(res.data.getBooksByAuthor)
              console.log(res.data)
              console.log(searchResult)
            })
            .catch((err) => {
              console.log(err)
            })
            break
        
          default:
            break;
        }
      }

  return (
    <>
    <div className='read'>
        <h2>Fetch Book(s)</h2>
      <form className='form-read' onSubmit={handleSearchSubmit}>
        <label className='label-read'>Search by:</label>
        <select className='select-read' value={searchType} onChange={handleSearchTypeChange}>
          <option value="all">All Books</option>
          <option value="isbn">ISBN</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
            className='inp-read'
          type="text"
          value={searchValue}
          onChange={handleSearchValueChange}
          placeholder={`Enter ${searchType}`}
        />
        <button className='btn-read' type="submit">Search</button>
      </form>
      {searchResult && (
        <div>
          {searchType === 'all'
            ? (
              <table className='table-read'>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th>Price</th>
                </tr>
                {searchResult.map((book) => (
                  <tr key={book.isbn}> 
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.isbn}</td>
                    <td>₹ {book.price}</td> 
                  </tr>
                ))}
              </table>
          )
            : (
              <div>
                <h3>{searchResult.title}</h3>
                <p>Author: {searchResult.author}</p>
                <p>ISBN: {searchResult.isbn}</p>
                <p>Price: ${searchResult.price}</p>
              </div>
            )}
        </div>
      )}
    </div>
    </>
  )
}
