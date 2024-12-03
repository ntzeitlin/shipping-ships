import { CargoList } from "./cargo.js"
import { DockList } from "./docks.js"
import { HaulList } from "./haul.js"

const dockHTML = DockList()
const haulHTML = HaulList()
const cargoHTML = CargoList()

const htmlContainer = document.getElementById("container")


const htmlToInsert = `
<section>
    <article>
        <h2>Docks</h2>
        ${dockHTML}
    </article>
    <article>
        <h2>Hauling Ships</h2>
        ${haulHTML}
    </article>
    <article>
        <h2>Cargo Ships</h2>
        ${cargoHTML}
    </article>
</section>
`



htmlContainer.innerHTML = htmlToInsert