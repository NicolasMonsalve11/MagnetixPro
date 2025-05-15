// Menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace (móvil)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 700) {
            navbar.classList.remove('active');
        }
    });
});



// Formulario de contacto funcional con feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('form-message');
            formMessage.textContent = 'Enviando...';
            formMessage.style.color = '#333';

            const data = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    formMessage.textContent = '¡Mensaje enviado! Pronto nos pondremos en contacto.';
                    formMessage.style.color = 'green';
                    form.reset();
                } else {
                    formMessage.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
                    formMessage.style.color = 'red';
                }
            } catch (error) {
                formMessage.textContent = 'Hubo un error de conexión. Intenta más tarde.';
                formMessage.style.color = 'red';
            }
        });
    }
});
