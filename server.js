const http = require('http');
const express = require('express')
const data = require('./data')

//config variable
const hostname = '127.0.0.1';
const port = 3000;

//create express app
const app = express()

//create http server and handle request with express app
const server = http.createServer(app)

//local static files from public folder before other routes
app.use(express.static('./public'))


//register index route handler
app.get('/', function(req, res){
    res.send('Hello World!')
})

//handle the about page
app.get('/about', function(req, res){
    res.send('About Page')
})
app.get('/api/v1/pets', function(req, res){
   
    res.json(data.pets)
})
app.get('/api/v1/pets/:petID', function(req, res){
    //get pet id from route param
    const petID = req.params.petID
    let pet = null
    for (let currentPet of data.pets){
        if (currentPet.id == petID){
            pet = currentPet
        }
    }
    if (pet !== null){
    res.json(pet)
    } else{
        res.status(404).json({error: 'could not find pet with id: ' + petID})
    }
})

//Route with a route parameter
app.get('/pet/:petName', function(req, res){
    res.send(`Pet: ${req.params.petName}`)
})
app.get('/greet/:name', function(req, res){
    res.send(`<h1>Hello, ${req.params.name}!</h1>`)
})

//catch any missing pages
app.get('*', function(req, res){
    res.send('Page not found')
})


//listen for requests..
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});