Portfólio Profissional - Francisco da Silva Neto

Um portfólio web moderno, responsivo e profissional desenvolvido com Bootstrap 5, HTML5, CSS3 e JavaScript vanilla. Otimizado para a busca de oportunidades de emprego no Japão.

🎨 Características

•
Design Moderno: Esquema de cores frias (preto e azul) com gradientes elegantes

•
Responsivo: Totalmente adaptado para desktop, tablet e mobile

•
Performance: Otimizado para carregamento rápido

•
Acessibilidade: Semântica HTML correta e navegação intuitiva

•
Animações Suaves: Transições e efeitos visuais profissionais

•
Seções Completas:

•
Hero Section com call-to-action

•
Sobre Mim

•
Habilidades Técnicas

•
Projetos em Destaque

•
Contato



📁 Estrutura do Projeto

Plain Text


portfolio/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo


🚀 Como Usar

1. Clonar ou Copiar os Arquivos

Bash


# Clone o repositório (se estiver no GitHub)
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio

# Ou simplesmente copie os arquivos para seu diretório


2. Abrir Localmente

Abra o arquivo index.html em seu navegador:

Bash


# Opção 1: Abrir diretamente
open index.html

# Opção 2: Usar um servidor local (Python )
python3 -m http.server 8000
# Acesse: http://localhost:8000

# Opção 3: Usar Live Server (VS Code )
# Instale a extensão "Live Server" e clique em "Go Live"


✏️ Personalizando o Portfólio

Editar Informações Pessoais

Abra o arquivo index.html e procure pelas seções abaixo para editar:

1. Navbar (Linha ~25)

HTML


<a class="navbar-brand fw-bold" href="#home">
    <span class="text-primary">Francisco</span> Neto
</a>


2. Hero Section (Linha ~50)

HTML


<h1 class="display-4 fw-bold mb-3">
    Olá, sou <span class="text-primary">Francisco da Silva Neto</span>
</h1>
<p class="lead mb-4 text-light">
    Desenvolvedor Backend | Especialista em Python | AWS & DevOps
</p>


3. Seção Sobre (Linha ~80)

HTML


<p class="text-light mb-3">
    Sou um desenvolvedor apaixonado por tecnologia...
</p>


4. Contato (Linha ~250)

HTML


<a href="mailto:franciscodsnetoo@gmail.com">franciscodsnetoo@gmail.com</a>
<a href="https://www.linkedin.com/in/franciscodasneto/" target="_blank">
    linkedin.com/in/franciscodasneto
</a>


Adicionar Novos Projetos

Use a função JavaScript addProject( ) no script.js:

JavaScript


addProject({
    title: 'Meu Novo Projeto',
    badges: ['Python', 'FastAPI', 'AWS'],
    description: 'Descrição detalhada do projeto...',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/seu-usuario/seu-projeto',
    link: 'https://seu-projeto.com'
} );


Ou adicione manualmente no HTML (após a linha ~215):

HTML


<div class="col-lg-6 mb-4">
    <div class="project-card">
        <div class="project-header">
            <h3>Nome do Projeto</h3>
            <span class="badge bg-primary">Tecnologia</span>
        </div>
        <div class="project-body">
            <p>Descrição do projeto...</p>
            <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">FastAPI</span>
            </div>
        </div>
        <div class="project-footer">
            <a href="#" class="btn btn-sm btn-primary">
                <i class="fab fa-github"></i> Ver no GitHub
            </a>
        </div>
    </div>
</div>


Modificar Cores

As cores estão definidas em variáveis CSS no arquivo styles.css (linhas 1-10):

CSS


:root {
    --primary-color: #0d6efd;      /* Azul primário */
    --primary-dark: #0a58ca;       /* Azul escuro */
    --secondary-color: #0dcaf0;    /* Azul claro */
    --dark-bg: #0f1419;            /* Fundo escuro */
    --darker-bg: #06070c;          /* Fundo mais escuro */
    --light-text: #e9ecef;         /* Texto claro */
}


📱 Responsividade

O portfólio é totalmente responsivo com breakpoints em:

•
Desktop: 1200px+

•
Tablet: 768px - 1199px

•
Mobile: até 767px

🔧 Tecnologias Utilizadas

•
Bootstrap 5.3: Framework CSS

•
Font Awesome 6.4: Ícones

•
HTML5: Estrutura semântica

•
CSS3: Estilos avançados (gradientes, animações, flexbox, grid)

•
JavaScript Vanilla: Interatividade sem dependências

📦 Dependências Externas

Todas as dependências são carregadas via CDN:

HTML


<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


🚀 Deploy

GitHub Pages

1.
Crie um repositório chamado seu-usuario.github.io

2.
Copie os arquivos do portfólio para o repositório

3.
Faça push dos arquivos:

Bash


git add .
git commit -m "Adicionar portfólio"
git push origin main


1.
Acesse: https://seu-usuario.github.io

Outras Plataformas

•
Vercel: Conecte seu repositório GitHub e faça deploy em um clique

•
Netlify: Arraste e solte a pasta ou conecte seu Git

•
Heroku: Configure um Procfile e faça deploy

•
AWS S3 + CloudFront: Para maior controle e performance

🎯 Otimizações Implementadas

•
✅ Smooth scroll entre seções

•
✅ Navbar ativa durante scroll

•
✅ Animações de entrada (fade-in )

•
✅ Efeito parallax no hero

•
✅ Hover effects em cards

•
✅ Responsive design

•
✅ Acessibilidade (ARIA labels, semântica HTML)

•
✅ Performance (CSS/JS minificado, CDN)

📝 Dicas para Melhorar o Portfólio

1.
Adicione Imagens: Considere adicionar screenshots dos projetos

2.
Blog: Crie uma seção de artigos/blog sobre suas experiências

3.
Certificados: Adicione uma seção de certificações e cursos

4.
Estatísticas: Inclua números sobre seus projetos (linhas de código, usuários, etc.)

5.
Formulário de Contato: Integre um serviço como Formspree ou EmailJS

6.
Dark Mode Toggle: Adicione um botão para alternar entre temas

7.
Analytics: Integre Google Analytics para rastrear visitantes

8.
SEO: Adicione meta tags e otimize para mecanismos de busca

🔒 Segurança

•
Não inclua informações sensíveis (senhas, tokens, etc.)

•
Valide todos os inputs se implementar formulários

•
Use HTTPS em produção

•
Mantenha as dependências atualizadas

📄 Licença

Este projeto está disponível sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

👤 Autor

Francisco da Silva Neto

•
Email: franciscodsnetoo@gmail.com

•
LinkedIn: franciscodasneto

•
GitHub: FranciscooNeto

🤝 Contribuições

Se você encontrar bugs ou tiver sugestões de melhorias, sinta-se livre para abrir uma issue ou pull request.

📞 Suporte

Para dúvidas ou problemas, entre em contato através do email ou LinkedIn.




Desenvolvido com ❤️ para a busca de oportunidades um dia no Japão

