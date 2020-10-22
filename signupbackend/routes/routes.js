const { response } = require('express')
const express = require('express')
const router = express.Router()
const testSignUpTemplate = require("../models/SignUpModels");
const bcrypt = require('bcrypt')  //เข้ารหัส password 






router.post('/signup', async (request, response) => {

    //เข้ารหัส password 
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new testSignUpTemplate({
      fullName: request.body.fullName,
      username: request.body.username,
      email: request.body.email,
      password: securePassword,
    });
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

router.get('/', (req, res)=>{
    res.json({ message: 'ok'});
});

router.get("/mytables", (req, res) => {
  testSignUpTemplate.find({})
    .then((gg) => res.json(gg))
    .catch((error) =>
    res.status(400).json({ message: "somehing went wrong!" })
    );
});
    

router.get('/mytables/:id', (req, res) => {  //db.cats.findOne({_id: ObjectId('5f8907a0316f8132d412f129') })
    const { id } = req.params;

    testSignUpTemplate.findById(id).then(data => res.json(data || {}))
    .catch(error => res.status(400)
    .json(error)
    );
});

// router.get('/Blogs', function(req, res,) {
//     testSignUpTemplate.getAllBlogs(function(err,blogs){
//         if(err) throw err
//         res.render("blogs/index",{data:"ข้อมูลบทความ",blogs:blogs});
//     });
// });




module.exports = router