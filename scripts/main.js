import { DockList } from "./docks.js"

const dockHTML = DockList()

const htmlContainer = document.getElementById("container")


const htmlToInsert = `
<section>
    <h2>Docks</h2>
    ${dockHTML}
</section>
`



htmlContainer.innerHTML = htmlToInsert