const app = document.getElementById("app");

const startApp = () => {
  const content = `
  <form id="form">

    <div class="form-group">
      <label>Como podemos te chamar? &#x1F338;&#x2728;</label>
      <input type="text" name="user-name" placeholder="Digite seu nome aqui..." required />
    </div>
    
  </form>
  `;

  app.innerHTML = content; // 🌸 insere o conteúdo da constante `content` dentro do elemento (div#app) !!
}

startApp(); // 🌸 chama a função `startApp` para que ela seja executada !!
