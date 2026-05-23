# CV Fácil

O **CV Fácil** é uma aplicação web desenvolvida com **Node.js**, **Express** e **EJS** com o objetivo de permitir a criação de currículos de forma simples e estruturada. O sistema possibilita que usuários se cadastrem, façam login, criem currículos personalizados, visualizem seus próprios registros e exportem esses currículos em formato PDF.

---

## Funcionalidades

- Cadastro de usuários  
- Login com autenticação por sessão  
- Criação de currículos vinculados ao usuário  
- Listagem de currículos do usuário logado  
- Visualização de currículo individual  
- Exportação de currículo em PDF    

---

## Tecnologias utilizadas

- Node.js  
- Express  
- EJS 
- Sequelize  
- SQLite  
- bcrypt  
- html2pdf.js  

---

## Como rodar o projeto localmente

### 1. Clonar o repositório:

git clone https://github.com/MrRyan04/cvFacil

### 2. Acessar a pasta do projeto:

cd cv-facil

### 3. Instalar npm
npm install

### 4. Banco de dados

O projeto utiliza SQLite. Não é necessário configurar um banco externo.
As tabelas são criadas automaticamente quando o servidor é iniciado.

### 5. Iniciar o servidor
node server.js

### 6. Acessar o navegador e colocar na url
http://localhost:3000


### Etrutura do projeto:
src/ <br>
    >controllers/ <br>
    >models/ <br>
    >routes/ <br>
    >views/ <br>
    >public/ <br>
    >app.js <br>
server.js

