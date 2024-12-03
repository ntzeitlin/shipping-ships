const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Ship Lifter 5000", dockid: 2 },
        { id: 2, name: "The Mother Ship", dockid: 2 },
        { id: 3, name: "Cargoception", dockid: 1 },
        { id: 4, name: "Haul Yeah", dockid: 3 },
        { id: 5, name: "S.S. I Heard You Like Ships", dockid: 4 }
    ],
    cargoShips: [
        { id: 1, name: "Wandering Whale", haulerid: 2 },
        { id: 2, name: "Oceanic Overlord", haulerid: 3 },
        { id: 3, name: "Crate Escape", haulerid: 2 },
        { id: 4, name: "Dock and Roll", haulerid: 1 },
        { id: 5, name: "Ship Happens", haulerid: 4 },
        { id: 6, name: "Bulk You Up", haulerid: 4 },
        { id: 7, name: "Sea Ya Later", haulerid: 2 },
        { id: 8, name: "Dock Vader", haulerid: 5 },
        { id: 9, name: "Floaty McBoatface", haulerid: 3 },
        { id: 10, name: "Ship Happens Again", haulerid: 1 }
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