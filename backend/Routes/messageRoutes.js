const express = require('express');
const { sendMessage, allMessages } = require('../Control/messageControl');
const { protect } = require('../middleWares/authMiddleWare');

const router = express.Router()



// for sending the messages 
// and for fetching the routes 

router.route('/').post(protect, sendMessage)
router.route('/:chatId').get(protect, allMessages)


module.exports= router; 
