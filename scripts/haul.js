import { getHaulers } from "./database.js"

export const HaulList = () => {
    const haulers = getHaulers()
    let haulHTML = "<ul>"

    for (const hauler of haulers) {
        haulHTML += `<li data-type="hauler">${hauler.name}</li>`
    }

    haulHTML += "</ul>"

    return haulHTML
}