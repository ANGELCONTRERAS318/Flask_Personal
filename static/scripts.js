function showDetails(section) {
    const details = document.getElementById('details');
    const images = document.getElementById('images');
    if (section === 'about') {
        details.innerHTML = `<h3>Sobre Mí</h3><p>Desarrollador de software apasionado por la tecnología con 3 años de experiencia como estudiante de la carrera de Desarrollo de Sistemas de Información en el Instituto Continental de Huancayo.</p>`;
        images.innerHTML = `<h3>Imágenes</h3><img src="https://miguelangel.alwaysdata.net/images/yo.jpg" alt="Sobre Mí">`;
    } else if (section === 'skills') {
        details.innerHTML = `<h3>Habilidades</h3><ul><li>Lenguajes de Programación: JavaScript, Python, Java, C#</li><li>Frameworks: React, Angular, Node.js, Django</li><li>Gestión de Bases de Datos: MySQL, PostgreSQL, MongoDB</li><li>Herramientas: Git, Docker, Jenkins</li></ul>`;
        images.innerHTML = `<h3>Imágenes</h3><img src="https://miguelangel.alwaysdata.net/images/habilidades.jpg" alt="Habilidades">`;
    } else if (section === 'experience') {
        details.innerHTML = `<h3>Experiencia</h3><ul><li><strong>Desarrollador Senior</strong> - TechCorp (2021 - Presente)</li><li><strong>Ingeniero de Software</strong> - Innovate Solutions (2018 - 2021)</li><li><strong>Desarrollador Interno</strong> - CodeBase Labs (2017 - 2018)</li></ul>`;
        images.innerHTML = `<h3>Imágenes</h3><img src="https://miguelangel.alwaysdata.net/images/experiencia.jpg" alt="Experiencia">`;
    } else if (section === 'education') {
        details.innerHTML = `<h3>Educación</h3><ul><li>Licenciatura en Ciencias de la Computación - Universidad Tech (2014 - 2018)</li><li>Administrador Certificado de Kubernetes (CKA)</li></ul>`;
        images.innerHTML = `<h3>Imágenes</h3><img src="https://miguelangel.alwaysdata.net/images/icontinental.jpg" alt="Educación">`;
    }
}
