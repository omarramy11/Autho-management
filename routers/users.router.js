const Router = require('express') // library 
const userController = require('../controllers/users.controller')
const router = Router() // call router


// path and function => reuest and response  
router.post('/api/users/register',userController.register ) 
router.post('/api/users/login',userController.login ) 

module.exports = router