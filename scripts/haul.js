import { getCargoShips, getHaulers } from "./database.js"

const cargoShips = getCargoShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            const clickedHaulerId = itemClicked.dataset.id
            let shipCounter = 0
            for (const cargoShip of cargoShips) {
                if (cargoShip.haulerid === parseInt(clickedHaulerId)) {
                    shipCounter++
                }
            }
            window.alert(shipCounter)
        }



        // Get the id of the hauler clicked

        // Start a counter variable at 0

        // Iterate all of the shipping ships

        // Does the haulerId foreign key match the id?

        // Increase the counter by 1

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