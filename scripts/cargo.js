import { getCargoShips } from "./database.js"

export const CargoList = () => {
    const cargoShips = getCargoShips()
    let cargoHTML = "<ul>"

    for (const ship of cargoShips) {
        cargoHTML += `
            <li data-type="cargo">${ship.name}</li>
        `
    }
    cargoHTML += "</ul>"

    return cargoHTML
}