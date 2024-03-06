const mongoose=require("mongoose")
const attemptedquizScheme=mongoose.Schema({
    name:String,
    questions:[{
        question: String,
        correctAnswer: String,
        selectedOption:String,
        isSelect:Boolean
    }]
})
module.exports=mongoose.model("AttemptedQuiz",attemptedquizScheme)