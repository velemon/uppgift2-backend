import { getWork, deleteWork } from "./api.js";

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE");
}

const list = document.getElementById("list");

async function load() {
    const data = await getWork();

    list.innerHTML = "";

    data.forEach(work => {
        const div = document.createElement("div");

        div.innerHTML = `
    <h3>${work.companyname}</h3>
    <p><strong>Roll:</strong> ${work.jobtitle}</p>
    <p><strong>Plats:</strong> ${work.location}</p>
    <p><strong>Startdatum:</strong> ${formatDate(work.startdate)}</p>
    <p><strong>Slutdatum:</strong> ${work.enddate ? formatDate(work.enddate) : "Pågående"}</p>
    <p><strong>Beskrivning:</strong> ${work.description}</p>
    <button>Radera</button>`;

        div.querySelector("button").addEventListener("click", async () => {
            await deleteWork(work.id);
            load();
        });

        list.appendChild(div);
    });
}

load();