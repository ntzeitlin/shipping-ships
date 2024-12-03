import { getCargoShips, getHaulers } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const clickedHaulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let shipCounter = 0
            const cargoShips = getCargoShips()
            // Iterate all of the shipping ships
            for (const cargoShip of cargoShips) {
                // Does the haulerId foreign key match the id?
                if (cargoShip.haulerid === parseInt(clickedHaulerId)) {
                    // Increase the counter by 1
                    shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} cargo ships`)
        }
    }
)

export const HaulList = () => {
    const haulers = getHaulers()
    let haulHTML = "<ul>"

    for (const hauler of haulers) {
        haulHTML += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>`
    }

    haulHTML += "</ul>"

    return haulHTML
}