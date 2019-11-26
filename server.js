'use strict'
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	 useUnifiedTopology: true
});

mongoose.connect(process.env.MONGO_URL);

const userShema = new mongoose.Schema({
	name: { type: String},
	age: { type: String },
	email: { type: String }
})

const User = mongoose.model('sample', userShema);

app.get('users/', async(req,res)=>{
	const users = await User.find({});
	return res.json({users});
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users/:firstname', (req,res)=>{
	const { search } = req.query
	return res.json({status: true, firstname: res.firstname})
});

app.get('/bla', (req,res)=>{
	return res.send('BLA BLA');
})


app.get('/index', (req,res)=>{
	return res.sendFile(__dirname+ '/index.html');
});

app.post('/search/:search', (req,res) =>{
	const data = req.body;
	const path = req.path;

	console.log(data);
	if(req.is('application/json')){
		return res.json({
			status: true, 
			data: data, 
			message: 'JSON DATA'
		});
	}else{
		return res.json({
			status: true, 
			message: 'URL ENCODED DATA',
			data: data
		});
	}
});

app.listen(port, ()=>{
	console.log(`Running on port ${port}`);
});

