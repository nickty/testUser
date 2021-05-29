const express = require('express')
const cors = require('cors');
const User = require('./models/user');
const mongoose = require('mongoose');

const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/register', (req, res) => {
    
    const user = User(req.body)

    user.save()

    // console.log(user)

    res.send(user)

})

// app.get('/getAlluser', (req, res) => {
//     const user = User.find();

//     console.log(user.data)


//     res.send(user); 
// })


app.listen(5000, () => console.log('Server started'));