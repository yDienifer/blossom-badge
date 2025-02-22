const app = document.getElementById("app");

const startApp = () => {
  const content = `
  <form id="form">
    <div class="form-group">
      <label>Como podemos te chamar? &#x1F338;&#x2728;</label>
      <input type="text" name="user-name" placeholder="Digite seu nome aqui..." required />
    </div>

    <div>
      <label>Carregue uma foto sua para o crachá &#x1F4F8;&#x1F63A;</label>
      <input type="file" name="badge-photo" accept="image/*" required />
      <small>Escolha uma imagem para dar um toque especial ao seu crachá.</small>
    </div>

    <div class="form-group">
      <label>Onde podemos te enviar um abraço virtual? &#x1F4E9;&#x1FAC2;</label>
      <input type="email" name="email" placeholder="Digite seu e-mail (opcional)" />
    </div>

    <div class="form-group">
      <label>Onde encontramos seu cantinho na internet? &#x1F30E;&#x1F43E;</label>
      <input type="text" id="social-media" name="social-media" placeholder="Seu @GitHub/Instagram/Twitter" required />
    </div>

    <div class="form-group">
      <label>Qual seu emoji favorito? &#x1F63B;&#x1F380;</label>
      <input type="text" name="favorite-emoji" placeholder="Escolha seu emoji preferido!" required />
    </div>

    <div class="form-group">
      <label>Café, chá, suco... Escolha seu favorito! &#x2615;&#x1F9CB;&#x1F375;</label>
      <div id="drink-input-container"></div>
      <select name="drinks" id="drink-options">
        <option value="coffee">Café &#x2615;</option>
        <option value="milkshake">Milkshake &#x1F9CB;</option>
        <option value="tea">Chá &#x1F375;</option>
        <option value="juice">Suco &#x1F379;</option>
        <option value="mate">Chimarrão &#x1F9C9;</option>
        <option value="other">Outro &#x2753;</option>
      </select>
    </div>
  </form>
  `;

  app.innerHTML = content; // 🌸 insere o conteúdo da constante `content` dentro do elemento (div#app) !!
}

startApp(); // 🌸 chama a função `startApp` para que ela seja executada !!
