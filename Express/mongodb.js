const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);
// module.exports = User;

app.post('/users', async (req, res) => {
  try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
  } catch (error) {
      res.status(400).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
      const users = await User.find();
      res.status(200).send(users);
      console.log(users)
  } catch (error) {
      res.status(500).send(error);
      
  }
});

app.get('/users/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).send({ message: 'User not found' });
      res.status(200).send(user);
  } catch (error) {
      res.status(500).send(error);
  }
});

app.put('/users/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) return res.status(404).send({ message: 'User not found' });
      res.status(200).send(user);
  } catch (error) {
      res.status(400).send(error);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).send({ message: 'User not found' });
      res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).send(error);
  }
});

const connectionString = 'mongodb://localhost:27017/mongo_express';
mongoose.connect(connectionString)
    .then(() => 
    {
       console.log("Connected to MongoDB")

       app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    })
    .catch(err => console.error("Could not connect to MongoDB", err));



