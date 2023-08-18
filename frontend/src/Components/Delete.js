import React, { useState } from 'react'
import { REMOVE_BOOK } from './utils/queries';
import { useMutation } from '@apollo/client';

export default function Delete() {
    const [isbn, setIsbn] = useState('');
    const [status, setStatus] = useState('');
  
    const handleIsbnChange = (e) => {
      setIsbn(e.target.value);
    };

    const [removeBook, { data }] = useMutation(REMOVE_BOOK);

    const handleRemoveSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await removeBook({
              variables: {
              isbn: isbn
              },
          });
  
          alert("Book removed successfully")
          
          } catch (error) {
          console.error('Error removing book:', error);
          }
    }

  return (
    <div className='delete'>
      <h2>Remove Book</h2>
      <form className='form-delete' onSubmit={handleRemoveSubmit}>
        <label>ISBN:</label>
        <input type="text" value={isbn} onChange={handleIsbnChange} />
        <button type="submit">Remove</button>
      </form>
    </div>
  )
}
