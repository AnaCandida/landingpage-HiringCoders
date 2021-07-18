//esperar carregar a pagina

//pegar os inputs e colocar no storage

//click do botao
//ao enviar aparecer uma janela agradecendo
//enviar dados do input para o storage

//

const form = document.getElementById('form');
form.addEventListener('submit', prevencao => {
  prevencao.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let data = {
    name,
    email,
  };

  console.log(data);

  let converData = JSON.stringify(data);

  localStorage.setItem('lead', converData);

  let content = document.getElementById('content');
  let carregando = `<img src='Assets/loader.gif' />`;

  let pronto = `<h3 style='text-shadow: 0 1px 4px var(--black);color:#128429; font-weight: 900; font-size: 1.3rem'>Obrigada por fazer parte da nossa história!</h3>`;
  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = pronto;
  }, 1200);
});
