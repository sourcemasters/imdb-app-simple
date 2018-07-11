

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const request = require('request');
const apiKey = '07ddbfef69fb0638b4014f53c316788b';

const MovieDB = require('moviedb')('d3d327f7f687384a8074b41ead81a040');



//set up template engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null})
});

app.post('/', function (req, res) {
	let movie = req.body.movie;
	//let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

	res.send(`${movie} is pretty good, or so I've heard.`);	
	// request(url, function (err, response, body) {
	// 	if(err){
	// 		res.render('index', {weather: null, error: 'Error, please try again'});
	// 	} else {
	// 		let weather = JSON.parse(body);
	// 		if(weather.main == undefined){
	// 			res.render('index', {weather: null, error: 'Error, please try again'});
	// 		} else {
	// 			let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
	// 			res.render('index', {weather: weatherText, error: null});
	// 		}
	// 	}
	// })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


