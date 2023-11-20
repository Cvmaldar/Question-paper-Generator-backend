const express = require("express");
const router = express.Router();

const {addQuestion,getAllQuestions,generateQuestionPaper}=require("../Controllers/questionController");

router.post("/addQuestion", addQuestion);
router.get("/",getAllQuestions);

;

router.get("/questions",generateQuestionPaper);

module.exports=router;