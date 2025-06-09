async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/murilois/portfolio-dio/refs/heads/main/data/profile.json';
    const response = await fetch(url);
    return await response.json();
}