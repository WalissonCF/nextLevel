// This script will fill in the city and state
// Implementation of the IBGE locality(UFs) API

// Populating the select
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    // Fetch is a promise
    // Here I turn the answer into a .json that is passed
    // to the .then that ends up becoming a net promise and
    //  so I can make another .then
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for( const state of states) {
            // innerHTML is a property of html elements
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

// Perform the function
populateUFs()

// Populating select cities
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    // Using the event
    // With .targeyt.value I can capture which value was selected
    // console.log(event.target.value)
    const ufValue = event.target.value

    const indexOfSelectedStade = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedStade].text

    // Here making the interpolation(${ufValue}) will select
    // the cities according to the chosen state
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        for( const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        // Activating the select which is "disabled"
        citySelect.disabled = false
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios

// Searching the query to find the element inside the html

// addEventListener had been "listening to events"

// () => {} Is the same as creating n anonymous function
// anonymous function is an unnamed function
// If there was only the "populateUFs()" function, this
// document would look like it is described below
// document
//     .querySelector("select[name=uf]")
//     .addEventListener("change", () => {
//         console.log("Mudei")
//     } )

