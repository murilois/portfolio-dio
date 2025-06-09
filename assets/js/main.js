function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo;
    photo.alt = profileData.name;
    const name = document.getElementById('profile-name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile.linkedin');
    job.innerText = profileData.job;
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
}
function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}
function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}"title="${skill.name}"></li>`).join('');
}
function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}
function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => 
        `<li>
            <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>`).join('')
}
function updateProfissionalExperience(profileData){
    const professionalExperiences = document.getElementById('profile.experience');
    professionalExperiences.innerHTML = profileData.professionalExperience.map(experience =>
        `<li>
            <span class="title"><h3>${experience.name}</h3></span>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`).join('');
}
(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfissionalExperience(profileData);
})()