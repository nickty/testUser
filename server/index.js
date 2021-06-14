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
    res.send('Hello world')
})
app.get('/getusers', async(req, res) => {
    const user = await User.find();

    console.log(user)

    res.status(200).send(user);

})
app.delete('/userDelete/:id', async (req, res) => {
    // const id = req.params.id

    const user = await User.findById(req.params.id)

    await user.remove()

    res.status(200).json({
        success: true
    })
})

app.get('/getuser/:id', async (req, res) => {

    const user = await User.findById(req.params.id)

    res.status(200).send(user)
})
app.post('/register', (req, res) => {

    // console.log(req.body);

    const user = User(req.body)

    user.save()
        .then( backuser => {
            res.status(200).send(backuser)
        })
        .catch( err => {
            
            // console.log(err)

            res.status(400).send(err)

        })

    // console.log(user)

    

})

// app.get('/getAlluser', (req, res) => {
//     const user = User.find();

//     console.log(user.data)


//     res.send(user); 
// })


app.listen(5000, () => console.log('Server started'));