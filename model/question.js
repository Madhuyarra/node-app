const mongoose=require("mongoose")
const questionScheme=mongoose.Schema({
    category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
  options: [String]
})
module.exports=mongoose.model("Question",questionScheme)