import express from 'express';
import { bookadd, getBookHistory, bookparticularrecord, updatebookrecord, deletebookrecord } from '../controllers/book.js';
import { bookrecord, bookupdate, particularbookupdate, newbook, newbookadd, bookdelete } from '../controllers/bookrecord.js';
const router = express.Router();

router.post("/bookadd", bookadd);
router.get("/bookhistory", getBookHistory);
router.get("/bookparticularrecord/:id", bookparticularrecord);
router.put("/updatebookrecord/:id", updatebookrecord);
router.delete("/deletebookrecord/:id", deletebookrecord);
/*---------For Browsers---------*/
router.get("/bookrecord", bookrecord);
router.get("/bookupdate/:id", bookupdate);
router.post("/particularbookupdate", particularbookupdate);
router.get("/newbook", newbook);
router.post("/newbookadd", newbookadd);
router.get("/bookdelete/:id", bookdelete);
export default router;
