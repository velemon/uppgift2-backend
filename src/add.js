import { addWork } from "./api.js";

const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const work = {
        companyname: form.companyname.value,
        jobtitle: form.jobtitle.value,
        location: form.location.value,
        startdate: form.startdate.value,
        enddate: form.enddate.value,
        description: form.description.value
    };

    const errors = [];

    if (!work.companyname) errors.push("Företagsnamn saknas");
    if (!work.jobtitle) errors.push("Jobbtitel saknas");
    if (!work.location) errors.push("Plats saknas");
    if (!work.startdate) errors.push("Startdatum saknas");
    if (!work.description) errors.push("Beskrivning saknas");

    if (errors.length > 0) {
        message.innerHTML = errors.map(e => `• ${e}`).join("<br>");
        message.style.color = "red";
        return;
    }
    await addWork(work);

    message.textContent = "✔ Arbetslivserfarenhet sparad!";
    message.style.color = "green";

    form.reset();
});