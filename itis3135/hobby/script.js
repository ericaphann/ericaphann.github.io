function showSection(sectionID){
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    const active = document.getElementById(sectionID);
    if (active){
        active.classList.add('active');
    } else {
        console.warn('Section ID not found');
    }
}