function showSection(sectionID){
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionID);
    if (activeSection){
        activeSection.classList.add('active');
    } else {
        console.warn('Section ID not found');
    }
}