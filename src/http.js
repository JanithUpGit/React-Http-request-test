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

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    const restData = await response.json();
    if (!response.ok) {
        throw new Error('Faild to update user data.');
    }
    return restData.massage;

}

export async function fetchUserPlace() {
    const response = await fetch('http://localhost:3000/user-places');
    const restData = await response.json();
    if (!response.ok) {
        throw new Error('Faild to fetch user places');
    } else {
        console.log("fetch success...")
    }

    return restData.places;
}