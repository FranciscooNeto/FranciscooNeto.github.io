// ==========================================
// SCRIPT.JS - Funcionalidades do Portfólio
// ==========================================

// ==========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// NAVBAR ATIVA NO SCROLL
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Atualizar link ativo na navbar
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// ANIMAÇÃO DE ENTRADA PARA ELEMENTOS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de habilidades e projetos
document.querySelectorAll('.skill-card, .project-card, .stat-card, .contact-card').forEach(card => {
    observer.observe(card);
});

// ==========================================
// EFEITO PARALLAX NO HERO
// ==========================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ==========================================
// FECHAR NAVBAR MOBILE AO CLICAR EM LINK
// ==========================================
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// ==========================================
// ADICIONAR CLASSE ATIVA AO NAVBAR NO SCROLL
// ==========================================
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        box-shadow: 0 4px 20px rgba(13, 110, 253, 0.2);
    }

    .nav-link.active {
        color: var(--primary-color) !important;
    }

    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==========================================
// CONTADOR DE ANIMAÇÃO (OPCIONAL)
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==========================================
// FUNÇÃO PARA ADICIONAR NOVOS PROJETOS
// ==========================================
function addProject(projectData) {
    const projectsContainer = document.querySelector('.row');
    
    const projectHTML = `
        <div class="col-lg-6 mb-4">
            <div class="project-card">
                <div class="project-header">
                    <h3>${projectData.title}</h3>
                    ${projectData.badges.map(badge => `<span class="badge bg-primary">${badge}</span>`).join('')}
                </div>
                <div class="project-body">
                    <p>${projectData.description}</p>
                    <div class="project-tech">
                        ${projectData.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="project-footer">
                    <a href="${projectData.github}" class="btn btn-sm btn-primary" target="_blank">
                        <i class="fab fa-github"></i> Ver no GitHub
                    </a>
                    <a href="${projectData.link}" class="btn btn-sm btn-outline-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    `;
    
    projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
}

// Exemplo de uso (descomente para usar):
// addProject({
//     title: 'Novo Projeto',
//     badges: ['Python', 'FastAPI'],
//     description: 'Descrição do projeto...',
//     technologies: ['Python', 'FastAPI', 'PostgreSQL'],
//     github: 'https://github.com/seu-usuario/seu-projeto',
//     link: 'https://seu-projeto.com'
// });

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfólio carregado com sucesso!');
    
    // Adicionar animação de fade-in ao carregar
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
});

// ==========================================
// FUNÇÃO PARA ENVIAR EMAIL (OPCIONAL)
// ==========================================
function sendEmail(to, subject, message) {
    // Esta é uma função de exemplo. Para implementar envio real,
    // você precisará de um backend ou serviço como EmailJS
    console.log(`Email enviado para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}`);
    
    // Exemplo com EmailJS (descomente e configure):
    // emailjs.send("service_id", "template_id", {
    //     to_email: to,
    //     subject: subject,
    //     message: message
    // });
}

// ==========================================
// FUNÇÃO PARA COPIAR EMAIL PARA CLIPBOARD
// ==========================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}