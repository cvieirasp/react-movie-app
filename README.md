<div align="center">  
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">App de Visualização de Filmes</h3>

  <div align="center">
    Projeto desenvolvido seguindo o tutorial no canal <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> no YouTube.
  </div>
</div>

## 📋Conteúdo

1. 📖 [Introdução](#introducao)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Principais Features](#features)
4. 🚀 [Quick Start](#quick-start)

## <a name="introducao">📖 Introdução</a>

A aplicação foi desenvolvida para consolidadr o aprendizado, tendo como objetivo simplificar a jornada de descoberta de filmes, enquanto serve como um excelente ponto de partida para iniciantes em **React.js**. Construído com uma interface dinâmica em **React.js**, estilizado com a versatilidade do **TailwindCSS** e utilizada plataforma **Appwrite** como backend para armazenar os dados dos filmes em alta (Trending Movies), a aplicação combina tecnologia e design para criar uma experiência de navegação elegante e funcional.

## <a name="tech-stack">⚙️ Tech Stack</a>

- [React.js](https://react.dev/learn)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [Appwrite](https://appwrite.io/)

## <a name="features">🔋 Principais Features</a>

- **Navegar pelos filmes populares**: explore uma ampla variedade de filmes disponíveis na plataforma.
- **Pesquisar filmes**: pesquise facilmente por filmes específicos usando uma função de pesquisa.
- **Filmes em alta**: exibe filmes em alta com base nos termos mais pesquisados.
- **UI/UX moderna**: uma interface elegante e amigável, projetada para uma ótima experiência.
- **Responsividade**: design totalmente responsivo que funciona perfeitamente em todos os dispositivos.

## <a name="quick-start">🚀 Quick Start</a>

Siga estas etapas para configurar o projeto localmente na sua máquina:

**Pré-requisitos**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clone o Repositório**

```bash
git clone https://github.com/cvieirasp/react-movie-app.git
cd react-movie-app
```

**Instalação**

Instale as dependências do projeto usando npm:

```bash
npm install
```

**Configuração das variáveis ​​de ambiente**

Crie um novo arquivo na raiz do projeto chamado `.env.local` e adicione os seguintes conteúdos:

```env
VITE_IMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Substitua os valores do espaço reservado pelas suas credenciais reais da **[API TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started)** e **[Appwrite](https://apwr.dev/JSM050)**. Você pode obter essas credenciais inscrevendo-se em [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) e criando um novo projeto na plataforma [Appwrite](https://apwr.dev/JSM050).

**Executando o Projeto**

```bash
npm run dev
```

Abra o endereço [http://localhost:5173](http://localhost:5173) no seu navegador para visualizar o projeto.