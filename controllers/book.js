import bookshistory from '../model/books.js';
import getAllBooks from '../model/bookhistory.js';
/*----------Inserting book Record---------*/
export const bookadd = async function(req, res) 
{
    try {
        if(req.body.title)
        {
            const newBook = new bookshistory({
                title: req.body.title,
                author: req.body.author,
                summary: req.body.summary
            });
            await newBook.save();
            res.status(201).json('new book data inserted successfully');
        }
        else
        {
            res.status(403).json('please provide a book title');
        }
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
    //res.json("books add");
}
/*-----------Display All Book Record--------------*/
export const getBookHistory = async function(req,res)
{
    try {
        const bookRecord = await getAllBooks.find(); //retrieve book from bookhistory document
        if(!bookRecord)
        {
            return res.status(404).json({message: 'Book Not Found'});
        }
        res.status(200).json(bookRecord);
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
}
/*----------Display Particular Book Record------------*/
export const bookparticularrecord = async function(req, res)
{
    const id  = req.params.id;
    try {
        const bookRecord = await getAllBooks.findById(id); //retrieve book from bookhistory document
        console.log(bookRecord);
        res.status(200).json(bookRecord);
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
}
/*---------Upade Particular Book Record-------------*/
export const updatebookrecord = async function(req, res)
{
    const id  = req.params.id;
    try{
        const bookRecord = await getAllBooks.findById(id);
        if(!bookRecord)
        {
            return res.status(404).json('Book Record not found');
        }
        const { title, author, summary } = req.body;
        const updatedBook = await bookshistory.findByIdAndUpdate(id, {
            title: title,
            author: author,
            summary: summary
        }, {new: true});
        res.status(200).json(updatedBook);
    }
    catch (err)
    {
        res.status(500).json(err.message);
    }    
}
/*-------------Delete Particular Book Record------------*/
export const deletebookrecord = async function(req, res)
{
    const id  = req.params.id;
    try {
        await bookshistory.findByIdAndDelete(id);
        res.status(200).json({
          message: 'book record deleted successfully'
        });
      } 
      catch (err) 
      {
        res.status(500).json({
          message: 'Error deleting user'
        });
      }
}