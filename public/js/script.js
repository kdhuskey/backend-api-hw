console.log('hello')
fetch('/api/v1/pets')
.then (res => res.json())
.then(data =>{
    console.log(data)
    renderPets(data)
    
})
function renderPets (pets){
    const petsList = document.querySelector('#pets')
    const petHtml = pets.map(pet =>{
        return `
        <li>${pet.name} (${pet.species})</li>
        `

    }).join('')
    petsList.innerHTML = petHtml
}