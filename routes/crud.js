const express = require('express');
const JobPost = require('../models/jobs');
const User = require('../models/user')
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

//get api
router.get('/GET/users', requireAuth, async (req, res) => {
  try{
    const users = await User.find();
    response.status(200).json(users);
}catch( error ){
    response.status(404).json({ message: error.message })
}
      
});

// Create  API
router.post('/POST/users', requireAuth, async (req, res) => {
  const user = request.body;
    
  const newUser = new User(user);
  try{
      await newUser.save();
      response.status(201).json(newUser);
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
      
});

// update API
router.put('/PUT/users/:id', requireAuth, async (req, res) => {
  const user = await User.findById(request.params.id);
  const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
});

router.delete('/DELETE/users/:id', requireAuth, async (req, res) => {
   
  try{
    await User.deleteOne({_id: request.params.id});
    response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    } 
  
});


 

module.exports = router;