const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();
app.use(bodyParser.json());

const user = require ('./models/user');

mongoose.connect('mongodb://appiness:appiness01@ds239206.mlab.com:39206/appiness', {useNewUrlParser: true} ,(()=>{    
        console.log("connected successfully")
}))

app.post('/user',(req,res)=> {
    
    var length = 0;
    user.find().then((users)=>{
        return users.length;
    })
    .then((len)=>{
        if(len == 0){
            const userData = new user({
                            userName : req.body.userName,
                            role : "Admin"
                        }) 
            return userData.save()
        }else {
            const userData = new user({
                userName : req.body.userName,
                role : "user"
            })
            return userData.save()
        }
    })
    .then((result)=>{
        console.log(result)
        res.status(201).send({"message":`${result.role} created`})
    })
    .catch((err)=>{
        res.send(err)
    })
    
    
})

app.get('/all-users', (req,res)=>{
    user.find({},{_id:0,__v:0})
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch((err)=>{
        res.send(err)
    })
})
app.listen(3000,()=>{
    console.log("server is on port 3000")
});
