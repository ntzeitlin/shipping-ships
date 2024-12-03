import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // check to see if dock list item is clicked
        if (itemClicked.dataset.type === "dock") {
            const haulers = getHaulers()
            const clickedDockId = parseInt(itemClicked.dataset.id)
            const dockedShips = []
            // iterate through haulers
            for (const hauler of haulers) {
                // check hauler's foreign key, dockid, against dock's id
                if (hauler.dockid === clickedDockId) {
                    // if match, add to array of docked ships
                    dockedShips.push(hauler.name)
                }
            }
            // use array to build alert to user
            let message = `The ${itemClicked.dataset.location} dock is currently unloading `
            if (dockedShips.length === 1) {
                // if one ship is present: The Shanghai, China dock is currently unloading Boaty McBoatface
                message += `${dockedShips.pop()}.`
            } else if (dockedShips.length > 1) {
                // if more than one ship: The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
                message += `${dockedShips.join(", ")}.`

            } else {
                // if no ships: The Shanghai, China dock is currently unloading nothing
                message += "nothing."
            }
            window.alert(`${message}`)
        }
    }
)

export const DockList = () => {
    const docks = getDocks().sort((a, b) => {
        const nameA = a.location.toUpperCase()
        const nameB = b.location.toUpperCase()
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    })

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}