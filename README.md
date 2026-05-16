# 🌟 Impacta Mais - Hub de Projetos Sociais

O **Impacta Mais** é uma plataforma dinâmica projetada para conectar voluntários, doadores e entusiastas de causas sociais. Nosso objetivo é facilitar a criação, gestão e engajamento em projetos e eventos que transformam realidades nas áreas de educação, meio ambiente e saúde.

![Status do Projeto](https://img.shields.io/badge/Status-Completo%20%2F%20Seguro-brightgreen)
![Tecnologias](https://img.shields.io/badge/Stack-Node.js%20%7C%20Express%20%7C%20MongoDB-blue)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-success)

---

## 🚀 Funcionalidades Principais

- **Autenticação Segura**: Sistema de login e cadastro com criptografia de senhas (bcrypt).
- **Recuperação de Senha**: Fluxo completo de redefinição de senha via e-mail com tokens temporários.
- **Rede Social**: Perfis públicos, sistema de amizades, notificações em tempo real e chat privado entre amigos.
- **Gestão de Projetos**: Criação de projetos sociais com sistema de curtidas (AJAX) e comentários.
- **Gestão de Eventos**: Sistema inteligente de ciclo de vida com separação entre "Próximos" e "Encerrados", além de filtros dinâmicos por data e hora no feed.
- **Filtro de Conteúdo**: Sistema automatizado de detecção de termos ofensivos em títulos e descrições para manter a comunidade segura.
- **Gamificação (Medalhas)**: Sistema de conquistas baseado no impacto social do usuário, recompensando a criação de projetos com medalhas premium (Elo Inicial, Nó de Impacto e Arquiteto Social).
- **Integração com Calendários**: Sistema "Add to Calendar" para Google Agenda, Outlook Web e exportação de arquivos `.ics`.
- **Exportação de Dados**: Ferramentas para organizadores com exportação de lista de participantes em CSV.

---

## ♿ Acessibilidade de Alto Nível (WCAG 2.1 AA)

O **Impacta Mais** foi construído com foco total na inclusão digital, seguindo os padrões WCAG 2.1 nível AA:

- **Painel de Acessibilidade Personalizado**: Ajuste em tempo real de tamanho de fonte, espaçamento entre linhas, espaçamento de letras e ativação de fonte para dislexia.
- **Filtros para Daltonismo**: Modos específicos para Protanopia, Deuteranopia e Tritanopia.
- **Navegação via Teclado**: Feedback visual de foco de alto contraste (contorno esmeralda de 3px), suporte a `Skip Links` e fechamento de modais via tecla `Esc`.
- **Semântica e ARIA**: Uso rigoroso de tags HTML5 semânticas e atributos ARIA para garantir uma experiência fluida em leitores de tela.
- **Integração VLibras**: Suporte nativo para tradução automática de conteúdos para LIBRAS.

---

## 🛠️ Stack Tecnológica

Seguindo os padrões do projeto CESMAC Blog Stack:

- **Core**: [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/)
- **Templates**: [EJS](https://ejs.co/) (Embedded JavaScript)
- **Banco de Dados**: [MongoDB](https://www.mongodb.com/) (Driver Nativo v7.0+)
- **Estilização**: CSS3 Vanilla (Design Premium & Glassmorphism)
- **Segurança**: Helmet, BcryptJS, Express-Session, Mongo-Store
- **Comunicação**: Nodemailer para envios de e-mails transacionais
- **Ícones**: [Lucide Icons](https://lucide.dev/)

---

## 💻 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Eman-coder00/impactaMaisIA.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto (use o `.env.example` como base):
   ```env
   MONGODB_URI=sua_url_do_mongodb
   MONGODB_DB=cesmac_blog
   PORT=3000
   SESSION_SECRET=sua_chave_secreta_aqui
   EMAIL_USER=seu-email@exemplo.com
   EMAIL_PASS=sua-senha-de-aplicativo
   ```

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   `http://localhost:3000`

---

## 🛡️ Segurança e Boas Práticas

- **Proteção contra Injeção**: Sanitização de dados e uso de driver nativo para prevenir NoSQL Injection.
- **Headers de Segurança**: Implementação do Helmet para proteção contra ataques comuns da web.
- **Sessões Persistentes**: Gerenciamento de sessões via MongoDB para maior estabilidade e segurança.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de impacto social. Sinta-se à vontade para contribuir e transformar realidades através da tecnologia!

---
