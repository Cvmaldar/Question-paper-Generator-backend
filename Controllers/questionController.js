const Questions = require("../Models/questions");

const addQuestion = async (req, res) => {
  const { question, subject, topic, difficulty, marks } = req.body;
  try {
    QuestionObject = new Questions({
      question,
      subject,
      topic,
      difficulty,
      marks,
    });
    const Question = await QuestionObject.save();
  
    return res.status(200).json({
      success: true,
      msg: "Question saved",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      msg: err.message,
    });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const AllQuestions = await Questions.find({});
    return res.status(200).json({
      success: true,
      count: AllQuestions.length,
      Question: AllQuestions,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      msg: err.message,
    });
  }
};

// const FindBySubject=async(req,res)=>{
//   try{
//   const subjectQuestions=await Questions.find({subject:req.params.subject});
//       return res.status(200).json({
//         sucess:true,
//         count:subjectQuestions.length,
//         subquestion:subjectQuestions,
//       });
//   }
//   catch(err){
//     console.error(err.message);
//     return res.status(500).json({
//       success: false,
//       msg: err.message,
//     });
//   }
// }

const generateQuestionPaper=async(req,res)=>{
  try {
    const subject = req.query.subject || ''; 
    const easyCount = parseInt(req.query.easy) || 0;
    const mediumCount = parseInt(req.query.medium) || 0;
    const hardCount = parseInt(req.query.hard) || 0;

    const getRandomQuestions = async (difficulty, count) => {
      const questions = await Questions.aggregate([
        { $match: { difficulty, subject } },
        { $sample: { size: count } },
        { $project: { _id: 0 } },
      ]);

      return questions;
    };

    const easyQuestions = await getRandomQuestions('easy', easyCount);
    const mediumQuestions = await getRandomQuestions('medium', mediumCount);
    const hardQuestions = await getRandomQuestions('hard', hardCount);

    const allQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];

   
    const totalMarks = allQuestions.reduce((sum, question) => sum + question.marks, 0);

    if (totalMarks > 100) {
      return res.status(400).json({ error: 'Total marks exceed 100. Please adjust question counts.' });
    }

    res.json({ questions: allQuestions, totalMarks });
  } catch (error) {
    console.error('Error retrieving questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}




module.exports={
    addQuestion,  
    getAllQuestions,
    generateQuestionPaper,
}
