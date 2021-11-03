export default function translate (label) {
    const obj = {
        PETS_ALLOWED: 'Animais',
        ELEVATOR: "Elevador",
        ELECTRONIC_GATE: "Portão eletrônico",
        CINEMA: "Cinema",
        GYM: "Academia",
        GATED_COMMUNITY: "Entrada social",
        PLAYGROUND: "Parquinho",
        SAUNA: "Sauna",
        GARDEN: "Jardim",
        PARTY_HALL: "Salão de festas",
        BARBECUE_GRILL: "Churrasqueira",
        POOL: "Piscina",
        FURNISHED: "Mobiliada",
        FIREPLACE: "Lareira",
        AIR_CONDITIONING: "Ar condicionado",
        BICYCLES_PLACE: "Bicicletário",
        SPORTS_COURT: "Quadra de esportes",
        AMERICAN_KITCHEN: "Cozinha americana",
        CONDOMINIUM: "Condomínio",
        TENNIS_COURT: "Quadra de tênis",
        LAUNDRY: "Lavanderia",
    }

    return obj[label] !== undefined ? obj[label] : ""
}