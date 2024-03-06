const express = require('express');
const router = express.Router();
const attemptedController=require("../controller/attemptedController")
router.post("/attemptdata",attemptedController.saveAttemptedData)
router.get("/attemptedDetails",attemptedController.getAttemptedData)
router.get('/attempted/:name', attemptedController.getAttemptedDataByName)
module.exports=router