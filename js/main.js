let theContainer = document.getElementById('theContainer');
let projects = document.getElementById('projects');
let certificado = document.getElementById('certificado');
let certificadoBig = document.getElementById('certificadoBig');


let backProj = document.getElementById('backProj');
let backCert = document.getElementById('backCert');

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

certificadoBig.addEventListener('click', () => {
    theContainer.style.display = 'none';
    certificadoPage.style.display = 'block';
})

backProj.addEventListener('click', () => {
    theContainer.style.display = 'block';
    projectsPage.style.display = 'none';
})

backCert.addEventListener('click', () => {
    theContainer.style.display = 'block';
    certificadoPage.style.display = 'none';
})

