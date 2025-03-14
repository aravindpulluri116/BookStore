import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'
const ShowBook = () => {
  const [book,setBook]=useState({})
  const [loading,setLoading]=useState(false)
  const {id} = useParams()
   useEffect(()=>{
    setLoading(true)
    console.log(id);
    axios
      .get(`http://localhost:1123/books/${id}`)
      .then((response)=>{
        setBook(response.data.book)
        setLoading(false)
      })
      .catch((e)=>{console.log(e); setLoading(false) })

   },[id])
  
  return (
    <div className='p-4' >
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner/>
      ):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>ID:</span>
          <span>{book._id}</span>
          </div>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title:</span>
          <span>{book.title}</span>
          </div>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Author:</span>
          <span>{book.author}</span>
          </div>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>PublishYear:</span>
          <span>{book.publishYear}</span>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Price:</span>
          <span>{`₹${book.price}`}</span>
          </div>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>CreatedTime:</span>
          <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>UpdatedTime:</span>
          <span>{new Date(book.updatedAt).toString()}</span>
          </div>
          </div>
          
          </div>


      )
      }
    </div>
  )
}
export default ShowBook
