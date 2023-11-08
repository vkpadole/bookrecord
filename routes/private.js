import express from "express";
const router = express.Router();

router.get("/", function(req, res){
    res.json("You got the private route")
})
export default router;