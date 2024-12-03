const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "bigboi" },
        { id: 2, name: "s.s. carry" },
        { id: 3, name: "igotyou" },
        { id: 4, name: "andmyax" },
        { id: 5, name: "samwise" }
    ],
    cargoShips: [
        { id: 1, name: "Wandering Whale" },
        { id: 2, name: "Oceanic Overlord" },
        { id: 3, name: "Crate Escape" },
        { id: 4, name: "Dock and Roll" },
        { id: 5, name: "Ship Happens" }
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({ ...docks }))
}

export const getHaulers = () => {
    return database.haulers.map(haulers => ({ ...haulers }))
}

export const getCargoShips = () => {
    return database.cargoShips.map(cargo => ({ ...cargo }))
}