import createTags from "./functions/createTags.js"
import createCard from "./functions/createCard.js"
import clearSearch from "./functions/clearSearch.js"

const input = document.querySelector('#input-search')
const searchError = document.querySelector('#error__search')

// Details Search
const textQuantityProperties = document.querySelector('#quantityProperties')

//  Debounce
let time = null
function handler (e){
    clearTimeout(time)
    const resultList = document.querySelector('.results__list')
    time = setTimeout(async() => {
        input.value.length >= 2 
            ? resultList !== null 
                ? clearSearch() 
                : null 
            : null
        await fetchData(e.target.value)
    },1000)
}

// Listeners
input.addEventListener('keyup', handler)


const possibleSearchs = {
    rj: {
        city: 'rio-de-janeiro',
        state: 'rj',
        label: 'Rio de Janeiro - RJ'
    },
    'rio de janeiro': {
        city: 'rio-de-janeiro',
        state: 'rj',
        label: 'Rio de Janeiro - RJ'
    },
    'rio': {
        city: 'rio-de-janeiro',
        state: 'rj',
        label: 'Rio de Janeiro - RJ'
    },
    sp: {
        city: 'sao-paulo',
        state: 'sp',
        label: 'São Paulo - SP'
    },
    'sao paulo': {
        city: 'sao-paulo',
        state: 'sp',
        label: 'São Paulo - SP'
    },
    'São paulo': {
        city: 'sao-paulo',
        state: 'sp',
        label: 'São Paulo - SP'
    },
    'São Paulo': {
        city: 'sao-paulo',
        state: 'sp',
        label: 'São Paulo - SP'
    },
    'são paulo': {
        city: 'sao-paulo',
        state: 'sp',
        label: 'São Paulo - SP'
    }
}

async function fetchData(data) {
    let getPossibleSearch = possibleSearchs[data]
    getPossibleSearch = getPossibleSearch === undefined ? {city: '', state: '', label: ''} : getPossibleSearch
    let url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${getPossibleSearch.state}&city=${getPossibleSearch.city}`
    if(data !== ''){
        try {
            const res = await fetch(url)
            const {search} = await res.json()
            searchError.style.display = 'none'
            createTags(getPossibleSearch.label)
            changeTitleSearch(search.totalCount, getPossibleSearch.label)
            createCard(search.result)
        } catch (error) {
            searchError.style.display = 'flex'
        }
    }
}

function changeTitleSearch (count, city) {
    const number = document.createElement('span')
    const text = document.createElement('h3')

    text.textContent = ` imoveis à venda em ${city}`
    number.textContent = `${count}`

    number.setAttribute('id', 'number')
    text.setAttribute('id', 'locale')

    textQuantityProperties.appendChild(number)
    textQuantityProperties.appendChild(text)
}









