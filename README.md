<div align="center">
  <img src="/assets/images/logo-black.svg" width="200px" />
</div>

<div align="justify">
Este é o repositório do site oficial do GDG (Google Developer Groups) Portugal, uma plataforma para centralizar todas as informações, eventos e iniciativas das comunidades GDG espalhadas pelo país. Este site foi densevolvido com o objectivo de facilitar a comunicação entre as comunidades e a promoção de eventos.
</div>


## 📌 Objetivo

Fornecer um ponto único de acesso para:
- 📅 Eventos GDG em todo o país
- 📍 Comunidades locais (Lisboa, Porto, Braga, etc.)
- 📸 Galeria de eventos passados
- ✨ Notícias e novidades da comunidade
- 🤝 Formulário de contato e envolvimento com o GDG


<h2> Tecnologias utilizadas 🔨</h2>

<ul>
  <li><a href="https://nextjs.org/">Next.js</a></li>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://www.sanity.io/">Sanity CMS</a></li>
  <li><a href="https://playwright.dev/">Playwright</a></li>
  <li><a href="https://github.com/conventional-changelog/commitlint">Commitlint</a></li>
  <li><a href="https://typicode.github.io/husky/#/">Husky</a></li>
  <li><a href="https://github.com/okonet/lint-staged">Lint-Staged</a></li>
  <li><a href="https://eslint.org/">ESLint</a></li>
  <li><a href="https://prettier.io/">Prettier</a></li>
</ul>


<h2>Rodando com Docker 🐳</h2>

<pre><code># Clone este repositório
git clonegit@github.com:GDGPortugal/websitev2.git

# Acesse a pasta do projeto
cd websitev2

# Construa a imagem Docker
docker build -t gdg-portugal-app:latest .

# Execute o container (expondo a porta 3000)
docker run -p 3000:3000 gdg-portugal-app:latest
</code></pre>

<p><strong>💡 Dica:</strong> Se quiser rodar em outra porta do host, altere <code>3000:3000</code> para <code>8080:3000</code>, por exemplo.</p>
<h2>Como contribuir? 🤝</h2>

<p>Quer ajudar no projeto? Siga esses passos simples:</p>

<ol>
  <li>⭐ Dê uma estrela no repositório (isso ajuda muito!)</li>
  <li>Faça um <strong>fork</strong> do repositório</li>
  <li>Clone o seu fork para sua máquina:</li>
</ol>

<pre><code>git clone https://github.com/seu-usuario/seu-fork.git
cd nome-do-projeto
</code></pre>

<ol start="4">
  <li>Crie uma nova branch para suas alterações:</li>
</ol>

<pre><code>git checkout -b nome-da-sua-branch
</code></pre>

<ol start="5">
  <li>Faça suas alterações no código</li>
  <li>Adicione e faça commit das alterações:</li>
</ol>

<pre><code>git add .
git commit -m "feat: sua mensagem clara aqui"
</code></pre>

<ol start="7">
  <li>Envie suas alterações para seu repositório:</li>
</ol>

<pre><code>git push origin nome-da-sua-branch
</code></pre>

<ol start="8">
  <li>Abra um <strong>Pull Request</strong> aqui no repositório original 🙌</li>
</ol>

<p>Pronto! Agora é só aguardar a revisão do seu código 🚀</p>


<h2>📝 Licença</h2>
Esse projeto se encontra sob a licença <strong>MIT</strong>. Para mais informações, acesse o arquivo <strong>LICENSE</strong>.

<hr>
<p align=center>Made with 💜 by <a href="https://www.instagram.com/gdgportugal/">GDG Portugal</a><p>
