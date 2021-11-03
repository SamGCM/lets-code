import translate from "./translate.js"
// Items searched
const containerResults = document.querySelector('#container__results')

export default function createCard(data) {
    
    const resultList = document.createElement('ul')
    resultList.className = 'results__list'
    containerResults.appendChild(resultList)


    data.listings.map((item, index) => {
        // Criando elementos 
        const itemList = document.createElement('li')
        const img = document.createElement('img')
        const itemDetails = document.createElement('div')
        const address = document.createElement('p')
        const title = document.createElement('h1')

        const listDetails = document.createElement('ul')
        const area = document.createElement('li')
        const textArea = document.createElement('span')
        const quantityArea = document.createElement('span')
        const bedroom = document.createElement('li')
        const textBedroom = document.createElement('span')
        const quantityBedroom = document.createElement('span')
        const bathroom = document.createElement('li')
        const textBathroom = document.createElement('span')
        const quantityBathroom = document.createElement('span')
        const vacation = document.createElement('li')
        const textVacation = document.createElement('span')
        const quantityVacation = document.createElement('span')

        const listBenefits = document.createElement('ul')

        const price = document.createElement('h1')
        const condominiumContainer = document.createElement('div')
        const condominiumPrice = document.createElement('span')

        // Definindo classes
        itemList.className = 'result__item'
        img.className = 'item__image'
        itemDetails.className = 'item__details'
        address.className = 'details__address'
        title.className = 'details__title'

        listDetails.className = 'list__details'
        area.className = 'detail__area detailHouse'
        quantityArea.className = 'detail__quantity'
        quantityBedroom.className = 'detail__quantity'
        quantityBathroom.className = 'detail__quantity'
        quantityVacation.className = 'detail__quantity'
        bedroom.className = 'detail__bedroom detailHouse'
        bathroom.className = 'detail__bathroom detailHouse'
        vacation.className = 'detail__vacation detailHouse'

        listBenefits.className = 'list__benefits'

        price.className = 'house__price'
        condominiumContainer.className = 'condominium'
        condominiumPrice.className = 'condominium__price'

        // Definindo conteudo
        img.setAttribute('src', item.medias[0].url)
        address.textContent = `${item.listing.address.street}, ${item.listing.address.streetNumber} - ${item.listing.address.neighborhood}, ${item.listing.address.city} - ${item.listing.address.stateAcronym} `
        title.textContent = item.link.name
        
        quantityArea.textContent = item.listing.totalAreas
        textArea.textContent = ` m²`

        quantityBedroom.textContent = item.listing.bedrooms
        textBedroom.textContent = ` quartos`

        quantityBathroom.textContent = item.listing.bathrooms
        textBathroom.textContent = ` banheiros`

        quantityVacation.textContent = item.listing.parkingSpaces
        textVacation.textContent = ` vagas`

        function allBenefits () {
            item.listing.amenities.map((item, index) => {
                const benefits = document.createElement('li')
                benefits.className = 'benefits__house'
                benefits.textContent = translate(item)
                listBenefits.appendChild(benefits)
            })
        }

        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL' 
        });

        let value = item.listing.pricingInfos[0].price
        let condominiumValue = item.listing.pricingInfos[0].monthlyCondoFee

        price.textContent = formatter.format(value)
        condominiumPrice.textContent = `Condomínio: ${formatter.format(condominiumValue)}`


        // Criando card
        itemList.appendChild(img)
        itemList.appendChild(itemDetails)
        itemDetails.appendChild(address)
        itemDetails.appendChild(title)
        itemDetails.appendChild(listDetails)

        // Detalhes da casa
        listDetails.appendChild(area)
        if(quantityArea.innerText.length > 0){
            area.appendChild(quantityArea)
            area.appendChild(textArea)
        }if(quantityArea.innerText.length === 0){
            textArea.textContent = `M² não especificado`
            area.appendChild(textArea)
        }
        
        listDetails.appendChild(bedroom)
        bedroom.appendChild(quantityBedroom)
        bedroom.appendChild(textBedroom)

        listDetails.appendChild(bathroom)
        bathroom.appendChild(quantityBathroom)
        bathroom.appendChild(textBathroom)

        listDetails.appendChild(vacation)
        vacation.appendChild(quantityVacation)
        vacation.appendChild(textVacation)

        // Beneficios
        itemDetails.appendChild(listBenefits)
        allBenefits()

        //  Valor
        itemDetails.appendChild(price)
        if(condominiumValue !== undefined) {
            itemDetails.appendChild(condominiumContainer)
            condominiumContainer.appendChild(condominiumPrice)
        }
        
        // Adicionando ao container de resultados
        resultList.appendChild(itemList)
    })
}