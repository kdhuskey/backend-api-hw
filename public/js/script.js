console.log('hello')
fetch('/api/v1/episodes')
.then (res => res.json())
.then(data =>{
    console.log(data)
    renderEpisodes(data)
    
})
function renderEpisodes (episodes){
    const episodesList = document.querySelector('#episodes')
    const episodeHtml = episodes.map(episode =>{
        return `
        <li>${episode.name} - (${episode.air_date})</li>
        `

    }).join('')
    episodesList.innerHTML = episodeHtml
}