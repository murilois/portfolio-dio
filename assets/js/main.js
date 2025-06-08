
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo;
    photo.alt = profileData.name;
    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile.linkedin');
    job.innerText = profileData.job;
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()