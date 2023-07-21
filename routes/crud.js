const express = require('express');
const Userlist = require('../models/list');
const User = require('../models/user')
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

//get api
router.get('/GET/users',   async (req, res) => {
 
       Userlist.find()
       .then(users => {res.json(users)
      console.log(users)
      })
       .catch(err => res.json(err))

      
});

// Create  API
router.post('/POST/users',   async (req, res) => {
  
  console.log(req.body)
       Userlist.create(req.body)
       .then(users =>{ res.json(users)
      console.log(users)
      })
       .catch(err => res.json(err))
      
});
router.get('/GET/users/:id',async (req,res)=>{
  const id = req.params.id;
  Userlist.findById({_id:id} )
       .then(users =>{ res.json(users)
      console.log(users)
      })
       .catch(err => res.json(err))
})

// update API
router.put('/PUT/users/:id',   async (req, res) => {
  
  const id = req.params.id;
  Userlist.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
       .then(users =>{ res.json(users)
      console.log(users)
      })
       .catch(err => res.json(err))

});

router.delete('/DELETE/users/:id',   async (req, res) => {
   
  const id = req.params.id;
  Userlist.findByIdAndDelete({_id:id} )
       .then(users =>{ res.json(users)
      console.log(users)
      })
       .catch(err => res.json(err))
  
});


 

module.exports = router;