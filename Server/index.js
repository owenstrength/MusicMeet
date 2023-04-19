const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Set up middleware
app.use(bodyParser.json());

const uri = "mongodb+srv://admin:admin@cluster0.6ofne0f.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log('MongoDB Connection Error', err);
});

// Define a schema for your data
const userSchema = new mongoose.Schema({
    _id: String,
    userData: Object,
    userTopArtists: Object,
    userTopSongs: Object,
    userTopGenres: Object,
});

// Define a model based on your schema
const UserData = mongoose.model('UserData', userSchema);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/mydata', (req, res) => {

    // if data is already in the database, update it.
    // search by id, if id is null, create new entry
    // if id is not null, update entry using UserData.updateOne(_id)

    // Create a new instance of your model
    const myData = new UserData({
        _id: req.body._id,
        userData: req.body.data,
        userTopArtists: req.body.topArtists,
        userTopSongs: req.body.topSongs,
        userTopGenres: req.body.topGenres,
    });


    if (req.body._id == null) {
        return res.status(400).json({ msg: 'No user id, authorization denied' });
    }


    UserData.findById(req.body._id).then(currentUser => {
        const output = (currentUser).overwrite({
            _id: req.params._id,
            userData: req.body.data,
            userTopArtists: req.body.topArtists,
            userTopSongs: req.body.topSongs,
            userTopGenres: req.body.topGenres,
        });
        console.log(output);
        res.send("data saved");
    });



    // Save the data to the database

});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});