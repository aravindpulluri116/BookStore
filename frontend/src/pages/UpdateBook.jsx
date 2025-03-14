import React,{useEffect,useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const UpdateBook = () => {
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [publishYear,setPublishYear]=useState("")
  const [price,setPrice]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:1123/books/${id}`)
    .then((response)=>{
      setTitle(response.data.book.title)
      setAuthor(response.data.book.author)
      setPublishYear(response.data.book.publishYear)
      setPrice(response.data.book.price)
      setLoading(false)
    })
    .catch((e)=>console.log(e))
  },[])
const handleUpdateBook=()=>{
  const data={title,author,publishYear,price}
  setLoading(true)
  axios
    .put(`http://localhost:1123/books/${id}`,data) 
    .then(()=>{
      setLoading(false)
      navigate('/') 
    })
    .catch((e)=>console.log(e))
}
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4' >Update Book</h1>

        {loading ? <Spinner/> : ""}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input 
            type='text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input 
            type='text'
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input 
            type='text'
            value={publishYear}
            onChange={(e)=> setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Price</label>
            <input 
            type='text'
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
        <button className='p-2 bg-sky-300 px-4 py-2 w-full' onClick={handleUpdateBook}>
          Save
        </button>
      </div>
        </div>
  )
}

export default UpdateBook
