import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { UPDATE_BOOK } from './utils/queries';

export default function Update() {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [updateBook, { data }] = useMutation(UPDATE_BOOK);

    const handleIsbnChange = (e) => {
        setIsbn(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        
        try {
          const response = await updateBook({
              variables: {
              isbn: isbn,
              title: title,
              author: author,
              price: parseFloat(price),
              },
          });
  
          // Handle the response data
          console.log('Updated book:', response.data.updateBook);
          alert("Book updated successfully")
          setAuthor('')
          setIsbn('')
          setPrice('')
          setTitle('')
          
          } catch (error) {
          console.error('Error updating book:', error);
          }
      }

  return (
    <div className='update'>
      <h2>Update Book Details</h2>
      <form className='form-update' onSubmit={handleUpdateSubmit}>
        <label>ISBN:</label>
        <input type="text" value={isbn} onChange={handleIsbnChange} />

        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />

        <label>Author:</label>
        <input type="text" value={author} onChange={handleAuthorChange} />

        <label>Price:</label>
        <input type="number" value={price} onChange={handlePriceChange} />

        <button type="submit">Update</button>
      </form>
    </div>
  )
}
