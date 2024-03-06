// controllers/questionController.js

const Question = require('../model/question');

exports.addQuestions = async (req, res) => {
  try {
    const questions = req.body.data;
    const insertedQuestions = await Question.insertMany(questions);
    res.json({ success: true, insertedQuestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.getQuestions = async (req, res) => {
    try {
      const questions = await Question.find();
      res.json({ success: true, questions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
