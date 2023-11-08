import bookshistory from '../model/books.js';
import getAllBooks from '../model/bookhistory.js';
/*-----------Dispaly new Empty book----------*/
export const newbook = async function(req, res)
{
    const emptyData = {}; // Create an empty object or default data
    res.render('bookupdate', { data: emptyData }); // Render the view with empty data
}
/*----------Inserting book Record---------*/
export const newbookadd = async function(req, res) 
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
            res.redirect('/book/bookrecord?message=new book added successfully');
        }
        else
        {
            res.redirect('/book/newbook');
        }
    }
    catch(err)
    {
        res.redirect('/book/newbook');
    }
    //res.json("books add");
}
/*-----------Display All Book Record--------------*/
export const bookrecord = async function(req,res)
{
    const message = req.query.message;
    try {
        const bookRecord = await getAllBooks.find(); //retrieve book from bookhistory document
        if(!bookRecord)
        {
            res.render('bookhistory');
        }
        res.render('bookhistory', { data: bookRecord, message });
    }
    catch(err)
    {
        res.render('bookhistory');
    }
}
/*----------Display Particular Book Record------------*/
export const bookupdate = async function(req, res)
{
    const id  = req.params.id;
    try {
        const bookRecord = await getAllBooks.findById(id); //retrieve book from bookhistory document
        res.render('bookupdate', { data: bookRecord });
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
}
/*---------Upade Particular Book Record-------------*/
export const particularbookupdate = async function(req, res)
{
    const id = req.body.book_id; 
    try{
        const id = req.body.book_id; 
        const title = req.body.title; 
        const author = req.body.author; 
        const summary = req.body.summary;

        const bookRecord = await getAllBooks.findById(id);
        if(!bookRecord)
        {
            /*res.send('Book Record not updated');*/
            res.redirect('/book/bookupdate/'+id);
        }
        const updatedBook = await bookshistory.findByIdAndUpdate(id, {
            title: title,
            author: author,
            summary: summary
        }, {new: true});
        res.redirect('/book/bookrecord?message=book record updated successfully');
    }
    catch (err)
    {
        res.redirect('/book/bookupdate/'+id);
    }    
}
/*-------------Delete Particular Book Record------------*/
export const bookdelete = async function(req, res)
{
    const id  = req.params.id;
    try {
        await bookshistory.findByIdAndDelete(id);
        res.redirect('/book/bookrecord?message=delete book record successfully');
      } 
      catch (err) 
      {
        res.redirect('/book/bookrecord');
      }
}