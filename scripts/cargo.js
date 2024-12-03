import { getCargoShips, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "cargo") {
            // Get the haulerId value of the shipping ship clicked
            const currentHaulerId = itemClicked.dataset.haulerid

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            const haulers = getHaulers()
            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (hauler.id === parseInt(currentHaulerId)) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const CargoList = () => {
    const cargoShips = getCargoShips()
    let cargoHTML = "<ul>"

    for (const ship of cargoShips) {
        cargoHTML += `
            <li data-type="cargo" data-name="${ship.name}" data-haulerid="${ship.haulerid}">${ship.name}</li>
        `
    }
    cargoHTML += "</ul>"

    return cargoHTML
}