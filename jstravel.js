 function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function toggleInfo(country) {
    const countries = ['india', 'uk', 'turkey', 'greece'];
    countries.forEach(function (countryId) {
        const countryElement = document.getElementById(countryId);
        countryElement.style.display = 'none';
    });

    const selectedCountry = document.getElementById(country);
    selectedCountry.style.display = 'block';
}
