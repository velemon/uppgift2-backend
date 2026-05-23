// api.js - hanterar all kommunikation med backend-API:et
const BASE_URL = "http://localhost:3000/api/workexperience";

// GET - hämtar alla arbetslivserfarenheter
export async function getWork() {
    const res = await fetch(BASE_URL);
    return await res.json();
}

// POST - lägger till en ny arbetslivserfarenhet
export async function addWork(data) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await res.json();
}

// DELETE - tar bort en befintlig arbetslivserfarenhet
export async function deleteWork(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    return await res.json();
}