const Registration=require("../model/registration")
exports.addRegistration=async (req,res)=>{
    try {
        const { userName } = req.body;
        const newUser = new Registration({ userName });
        const savedUser = await newUser.save();
        res.status(200).json({ success: true, user: savedUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
      }
}
exports.getRegistration=async(req,res)=>{
    try {
        const users = await Registration.find({}, 'userName');
        const usernames = users.map(user => user.userName);
        res.status(200).json({ success: true, users: usernames }); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
      }
}
