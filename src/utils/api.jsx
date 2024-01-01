const API="https://api-aniwatch.onrender.com";

const homePage = async () => {
    try {
        const res = await fetch(`${API}/anime/home`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export { homePage };