import {Book} from "../mongoose/schemas/bookSchema.js"
import {checkSchema,matchedData,validationResult} from "express-validator"
import { newBookValidationSchema } from "../utils/newBookValidationSchema.js";
import express from "express"

const router = express.Router()
router.use(express.json())
router.post('/',checkSchema(newBookValidationSchema),async (request,response)=>{
    const result = validationResult(request)
    if(!result.isEmpty())
        return response.status(400).send(result.array())
    try{
        const data = matchedData(request)
        const newBook = new Book(data)
        const savedBook = await newBook.save()
        return response.status(201).send(savedBook) 
    }
    catch(err){
        console.log(err.message);
        response.status(500).send(err.message)
    }
})

router.get("/:id",async(request,response)=>{
    try {
        const {id}= request.params
        const book = await Book.findById(id)
        if(!book) return response.status(404).send("Book not found")
        return response.status(200).json({book})
    } catch (err) {
    console.log(err);
    response.status(500).send(err.message)

    }
})

router.put("/:id",checkSchema(newBookValidationSchema),async (request,response)=>{
    const result = validationResult(request)
    if(!result.isEmpty())
        return response.status(400).send(result.array())
    try {
        const {id} = request.params
        const data = await Book.findByIdAndUpdate(id,request.body)
        if(!data) return response.status(404).send("Book not found")
        return response.status(200).send("Book updated Successfully")
        } catch (err) {
        response.status(500).send(err.message)
    }
})

router.delete("/:id",async (request,response)=>{
    try {
        const {id} = request.params
        const data = await Book.findByIdAndDelete(id,request.body)
        if(!data) return response.status(404).json({msg:"Book not found"})
        return response.status(200).send("Book Deleted Successfully")
        } catch (err) {
        response.status(500).send(err.message)
    }
})

router.get("/",async(request,response)=>{
    try{
        const books = await Book.find({})
        return response.status(200).json({
            count:books.length,
            data:books
        })
    }
    catch(err){
        console.log(err.message);
        response.status(500).send(err.message)

    }
})
export default router