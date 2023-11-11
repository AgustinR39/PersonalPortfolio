let theContainer = document.getElementById('theContainer');
let projects = document.getElementById('projects');
let certificado = document.getElementById('certificado');

let back = document.getElementById('back');

let projectsPage = document.getElementById('projectsPage');

let certificadoPage = document.getElementById("certificadoPage");

projects.addEventListener('click', () => {
    theContainer.style.display = 'none';
    projectsPage.style.display = 'block';
})

certificado.addEventListener('click', () => {
    theContainer.style.display = 'none';
    certificadoPage.style.display = 'block';
})

back.addEventListener('click', () => {
    theContainer.style.display = 'block';
    projectsPage.style.display = 'none';
    certificadoPage.style.display = 'none';
})
