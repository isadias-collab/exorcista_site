# ✠ Arquivo 1971-EX — Site inspirado em "O Exorcista"

Este projeto é um **site interativo de terror** inspirado no livro *O Exorcista*.  
A ideia é simular um **arquivo confidencial da igreja** contendo registros de um possível caso de possessão.

O site apresenta documentos, relatórios e transcrições de um ritual, criando uma experiência imersiva e misteriosa para o visitante.

---

## 🎯 Objetivo do Projeto

Criar um site temático utilizando **HTML, CSS e JavaScript**, simulando um **arquivo secreto da arquidiocese** sobre um caso de possessão ocorrido em 1971.

O projeto explora:
- narrativa interativa
- efeitos visuais de terror
- mudanças dinâmicas na página com JavaScript

---

## 📁 Estrutura do Projeto
├── index.html <br>
├── style.css <br>
└── script.js <br>


---

## 📄 Descrição dos Arquivos

### `index.html`

Arquivo principal do site.

Ele contém:
- A tela inicial de **acesso restrito**
- Botão para acessar o arquivo secreto
- Seções com os documentos do caso:
  - Relatórios médicos
  - Avaliação psiquiátrica
  - Diário do padre
  - Transcrição do ritual
  - Salmo bíblico

O HTML organiza toda a narrativa do caso fictício.

---

### `style.css`

Responsável pelo **visual do site**, criando uma atmosfera sombria.

Inclui:
- fundo escuro com gradiente
- tipografia estilo documento antigo
- animação de tremor no texto da paciente possuída
- modo **"possuído"**, que altera cores e fonte da página

Esses estilos ajudam a criar a experiência de terror.

---

### `script.js`

Responsável pela **interatividade do site**.

Funções principais:

**abrirArquivo()**
- Esconde a tela inicial
- Mostra o conteúdo do arquivo secreto
- Inicia os efeitos da página

**iniciarDiario()**
- Simula um **efeito de digitação**
- Revela lentamente o diário do padre

**iniciarTransformacao()**
- Após algum tempo, a página começa a se transformar
- O texto muda e o site entra em um modo "possuído"

**seção secreta**
- Se o usuário digitar **"amen"** no teclado, uma mensagem oculta aparece.

---

## 🧠 Conceitos Utilizados

- HTML semântico
- CSS para ambientação visual
- JavaScript para manipulação do DOM
- Eventos de teclado
- `setTimeout()` para efeitos temporais
- efeito de digitação dinâmica

---

## 👁️ Experiência do Usuário

O site foi pensado como uma **experiência narrativa**:

1. O visitante acessa um **arquivo restrito**
2. Lê documentos sobre um caso estranho
3. O diário do padre aparece lentamente
4. Depois de um tempo, a página começa a **se corromper**
5. Um **segredo escondido** pode ser revelado digitando uma palavra específica

---

## 🚀 Possíveis Melhorias

- adicionar efeitos sonoros
- incluir imagens ou documentos escaneados
- criar múltiplos arquivos secretos
- adicionar mais mensagens ocultas
- incluir animações de terror

---

## ✨ Autor

Projeto desenvolvido para prática de **HTML, CSS e JavaScript**, com foco em criar uma **experiência interativa inspirada em histórias de possessão e arquivos religiosos secretos**.
