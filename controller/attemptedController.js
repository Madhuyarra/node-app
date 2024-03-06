const AttemptedQuiz=require("../model/attempted")
exports.saveAttemptedData=async(req,res)=>{
    try{
        const {name,questions}=req.body;
        const attemptedQuiz=new AttemptedQuiz ({name,questions})
        const saveAttemptedQuiz=await attemptedQuiz.save()
        res.status(200).json({sucess:true,data:saveAttemptedQuiz})
    }catch(error){
        console.log(error)
        res.status(500).json({sucess:false,error:error.message})
    }
}
exports.getAttemptedData = async (req, res) => {
    try {
        const attemptedData = await AttemptedQuiz.find({})
         console.log(attemptedData)
        res.status(200).json({ success: true, data: attemptedData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getAttemptedDataByName = async (req, res) => {
    const { name } = req.params;
  
    try {
      const attemptedData = await AttemptedQuiz.findOne({ name });
      if (!attemptedData) {
        return res.status(404).json({ success: false, message: 'Attempted data not found' });
      }
      res.status(200).json({ success: true, data: attemptedData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  };
