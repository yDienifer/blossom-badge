const app = document.getElementById("app");

export const renderForm = () => {
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

    <div class="form-group">
      <label>Se quiser, escolha uma cor de fundo para o seu crachá &#x1F3A8;&#x1F58C;&#xFE0F;</label>
      <input type="color" name="background-badge" />
    </div>

    <div class="form-group">
      <label>Uma palavra que te define &#x1F4AD;&#x270D;&#xFE0F;</label>
      <input type="text" name="favorite-word" placeholder="Escolha uma palavra que resuma sua vibe!" required />
    </div>

    <div class="form-group">
      <label>Mensagem fofa ou inspiração para compartilhar? &#x1F48C;&#x1F337;</label>
      <input type="text" name="user-message" placeholder="Deixe uma mensagem aqui!" />
    </div>

    <div class="form-group">
      <label>Deseja adicionar um sticker personalizado ao seu crachá? &#x1F428;&#x1FA77;</label>
      <input type="file" name="sticker" accept="image/png, image/jpeg">
      <small>Recomendado: PNG com fundo transparente, 150x150px</small>
    </div>

    <div>
      <input type="checkbox" name="badge-privacy" />
      <span>Deseja criar um link para que outras pessoas possam ver seu crachá?</span>
    </div>

    <div class="form-group">
      <button type="submit">
        Enviar!
      </button>
    </div>
  </form>
  `;

  app.innerHTML = content; // 🌸 insere o conteúdo da constante `content` dentro do elemento (div#app) !!
}

renderForm(); // 🌸 chama a função `renderForm` para que ela seja executada !!

export const formAction = () => {
  const form = document.getElementById("form");
  const drinkOptions = document.getElementById('drink-options');
  const drinkInputContainer = document.getElementById("drink-input-container");
  let drinkInputText;

  form.onsubmit = (event) => {
    event.preventDefault();
  }

  drinkOptions.addEventListener("change", () => {
    if (drinkOptions.value === "other") {
      drinkInputText = document.createElement("input");

      drinkInputText.type = "text";
      drinkInputText.name = "other-option";
      drinkInputText.placeholder = "Digite aqui!";
      drinkInputText.required = true;

      drinkInputContainer.appendChild(drinkInputText);
    } else {
      if (drinkInputText) {
        drinkInputContainer.removeChild(drinkInputText); // 🌸 remove o input criado se a seleção for diferente de "Outro" !!
        drinkInputText = null;
      }
    }
  });
}

formAction();
