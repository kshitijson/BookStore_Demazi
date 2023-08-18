import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import './style.css'
import { ADD_BOOK } from './utils/queries'


export default function Create() {
    const [bookInfo, setBookInfo] = useState({
        title: '',
        author: '',
        isbn: '',
        price: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBookInfo({
            ...bookInfo,
            [name]: value
        })
    }

    const [addBook, { data }] = useMutation(ADD_BOOK);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        const response = await addBook({
            variables: {
            title: bookInfo.title,
            author: bookInfo.author,
            isbn: bookInfo.isbn,
            price: parseFloat(bookInfo.price),
            },
        });

        // Handle the response data
        console.log('Added book:', response.data.addBook);
        alert("Book added successfully")
        setBookInfo({
          title: '',
          author: '',
          isbn: '',
          price: ''
      })
        } catch (error) {
        console.error('Error adding book:', error);
        }
    }

  return (
    <>
          <form className='form-create' onSubmit={handleSubmit}>
            <h2>Add a new Book</h2>
              <div className='create'>
                  <label className='label-create'>Book Name:</label>
                  <input className='inp-create' type="text" name="title" value={bookInfo.name} onChange={handleInputChange} />
              </div>
              <div className='create'>
                  <label className='label-create'>Author:</label>
                  <input className='inp-create' type="text" name="author" value={bookInfo.author} onChange={handleInputChange} />
              </div>
              <div className='create'>
                  <label className='label-create'>ISBN:</label>
                  <input className='inp-create' type="text" name="isbn" value={bookInfo.isbn} onChange={handleInputChange} />
              </div>
              <div className='create'>
                  <label className='label-create'>Price:</label>
                  <input className='inp-create' type="number" name="price" value={bookInfo.price} onChange={handleInputChange} />
              </div>
              <button className='button-create' type="submit">Submit</button>
          </form>
    </>
  )
}
