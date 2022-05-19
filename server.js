const http = require('http');
const express = require('express')
const data = require('./data');
const { episodes } = require('./data');
const hostname = '127.0.0.1';
const port = 3000;
const app = express()
const server = http.createServer(app)

app.use(express.static('./public'))

app.get('/api/v1/episodes', function(req, res){
    res.json(data.episodes)
})
app.get('/api/v1/episodes/name', function(req, res){
    const pulledName = episodes.map(({name}) => {
        return name
    })
    res.json(pulledName)
  
})
app.get('/api/v1/episodes/:episodeID', function(req, res){
    //get episode id from route param
    const episodeID = req.params.episodeID
    let episode = null
    for (let currentEpisode of data.episodes){
        if (currentEpisode.id == episodeID){
            episode = currentEpisode
        }
    }
    if (episode !== null){
    res.json(episode)
    } else{
        res.status(404).json({error: 'could not find episode with id: ' + episodeID})
    }
})
//Route with a route parameter
//name
app.get('/api/v1/episodes/name/:episodeName', function(req, res){
    const episodeName = req.params.episodeName
    let episode = null
    for (let currentEpisode of data.episodes){
        if (currentEpisode.name == episodeName){
            episode = currentEpisode
        }
    }
    if (episode !== null){
    res.json(episode)
    } else{
        res.status(404).json({error: 'could not find episode with the name of: ' + episodeName})
    }
})
// season
app.get('/api/v1/episodes/season/:seasonNum', function(req, res){
    const seasonNum = req.params.seasonNum
    let episode = null
    for (let currentEpisode of data.episodes){
        if (currentEpisode.season == seasonNum){
            episode = currentEpisode
        }
    }
    if (episode !== null){
    res.json(episode)
    } else{
        res.status(404).json({error: 'could not find season? with the name of: ' + seasonNum})
    }
})



//catch any missing pages
app.get('*', function(req, res){
    res.send('Testing and trying still bro')
})


//listen for requests..
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});