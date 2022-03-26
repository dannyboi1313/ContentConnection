let appData = [
    {
        id:1,
        connectionType: "image",
        connectionPhrase:"Water",
        hints: {firstHint: "Compound", secondHint:"Substance that gives life"},
        difficulty: 1,
        used: false,
        items:[
            {url:"Content/Water/BabyBath.jpg"},
            {url: "Content/Water/Ice.jpg"},
            {url: "Content/Water/Iceland.jpg"},
            {url: "Content/Water/Pool.jpg"}
        ]
    },
    {
        id:2,
        connectionType: "image",
        connectionPhrase: "Survival",
        hints: {firstHint: "A vital skill", secondHint: "The opposite of dying"},
        difficulty: 2,
        used: false,
        items: [
            {url:"Content/Survival/Cocoon.jpg"},
            {url: "Content/Survival/Shelter.jpg"}
        ]
    },
    {
        id: 3,
        connectionType: "image",
        connectionPhrase: "Pattern",
        hints: {firstHint: "Organization", secondHint: "Makes for a nice design"},
        difficulty: 2,
        used: false,
        items: [
            {url: "Content/Pattern/Bees.jpg"},
            {url: "Content/Pattern/Pool.jpg"},
            {url: "Content/Pattern/Redrock.jpg"}
        ]
    },
    
    {
        id: 4,
        connectionType: "image",
        connectionPhrase: "Foreign",
        hints: {firstHint: "Unfamiliar", secondHint: "From a differnt culture"},
        difficulty: 2,
        used: false,
        items: [
            {url: "Content/Foreign/Pesos.jpg"},
            {url: "Content/Foreign/Sushi.jpg"}
        ]
    },
    {
        id: 5,
        connectionType: "text",
        connectionPhrase: "Haiku",
        hints: {firstHint: "poetry", secondHint: "A form of poetry"},
        difficulty: 3,
        used: false,
        items: [
            {string: "An old silent pond. A frog jumps into the pond. Splash! Silence again."},
            {string: "Love between us is speech and breath. Loving you is a long river running."}
        ]
    },
    {
        id: 6,
        connectionType: "image",
        connectionPhrase: "Transportation",
        hints: {firstHint: "Transit", secondHint: "From A to B"},
        difficulty: 1,
        used: false,
        items: [
            {url: "Content/Transportation/Bike.jpg"},
            {url: "Content/Transportation/Cargoship.jpg"},
            {url: "Content/Transportation/Moped.jpg"},
            {url: "Content/Transportation/Road.jpg"}
        ]
    },
]

export default appData;