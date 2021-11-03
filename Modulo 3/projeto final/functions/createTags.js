const containerSearched = document.querySelector('#container__searched')
const tagSearchContainer = document.querySelector('#tagsSearch')
import clearSearch from "./clearSearch.js"



export default function createTags(e) {
    if(e !== ''){
        const searched = document.createElement('p')
        const iconClose = document.createElement('p')
        const tag = document.createElement('li')
        const closeTag = document.createElement('p')


        tag.className = 'tag'
        closeTag.className = 'closeTag'
        searched.className = 'item__searched'
        iconClose.setAttribute('id', 'item__close')

        tag.textContent = e
        searched.textContent = e
        iconClose.textContent = 'x'
        closeTag.textContent = 'x'

        containerSearched.appendChild(searched)
        searched.appendChild(iconClose)
        tagSearchContainer.appendChild(tag)
        tag.appendChild(closeTag)

        searched.addEventListener('click',() => {
            clearSearch()
        })

        tag.addEventListener('click',() => {
            clearSearch()
        })

    }{ 
        return null
    }
}