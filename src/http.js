export async function fetchAvalablePlace() {
    const response = await fetch('http://localhost:3000/places');
    const restData = await response.json();
    if (!response.ok) {
        throw new Error('Faild to fetch places');
    } else {
        console.log("fetch success...")
    }

    return restData.places;
}