export default function clearSearch() {
    const itemSearched = document.querySelector('.item__searched')
    const itemSearchedClose = document.querySelector('#item__close')
    const tagName = document.querySelector('.tag')
    const closeTag = document.querySelector('.closeTag')
    const numberProperties = document.querySelector('#number')
    const informationText = document.querySelector('#locale')
    const resultList = document.querySelector('.results__list')

    tagName.remove()
    closeTag.remove()
    itemSearched.remove()
    itemSearchedClose.remove()
    numberProperties.remove()
    informationText.remove()
    resultList.remove()
}