const getResButton = document.querySelector('#getResidents')
const myDiv = document.querySelector("#my-div")


const buttonFunc = (evt) => {

    //axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    axios
    .get('https://swapi.dev/api/planets/2')
    .then(response => {
        // console.log(response.data.residents)
        for (let i = 0; i < response.data.residents.length; i++){
            axios.get(response.data.residents[i]).then(res => {
                // console.log(res.data.name)
                const currentResident = document.createElement('h2')
                currentResident.textContent = res.data.name
                myDiv.appendChild(currentResident)

            })
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
}


getResButton.addEventListener('click', buttonFunc)