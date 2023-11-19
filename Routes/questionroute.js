const express = require("express");
const router = express.Router();

const {addQuestion,getAllQuestions,generateQuestionPaper}=require("../Controllers/questionController");

router.post("/addQuestion", addQuestion);
router.get("/getAllquestions",getAllQuestions);

// router.get("/:subject",FindBySubject);

router.get("/questions",generateQuestionPaper);

module.exports=router;