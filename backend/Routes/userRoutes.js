const express = require('express')
const { registerUser , authUser, allUsers } = require('../Control/userControl')
const { protect } = require('../middleWares/authMiddleWare')



const router = express.Router()

router.route('/').post(registerUser).get(protect, allUsers )
router.post('/login', authUser   )








module.exports= router;


