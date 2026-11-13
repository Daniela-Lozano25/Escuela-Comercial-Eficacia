const app = document.getElementById('app');
const links = document.querySelectorAll('.topbar nav a');

function home() {
  const card = (k, cls) => `
    <article class="area ${cls}">
      <h2>${DATA[k].titulo}</h2>
      <p>${DATA[k].descripcion}</p>
      <a class="btn" href="#/${k}">Consultar</a>
    </article>`;
  return `
    <section class="hero">
      <h1>Todo lo que necesita su equipo, en un solo lugar.</h1>
      <p>Elija un área para consultar guías, procedimientos y respuestas a las preguntas más frecuentes.</p>
    </section>
    <section class="areas">${card('comercial','comercial')}${card('trade','trade')}</section>`;
}

function modCards(k, open) {
  return DATA[k].modulos.map(m => `
    <a class="mod" href="#/${k}/${m.id}">
      <h3>${m.titulo}</h3><p>${m.resumen}</p>
    </a>`).join('');
}

function area(k) {
  const a = DATA[k];
  const faq = a.faq
    ? `<button class="btn outline" id="faqBtn" aria-expanded="false" aria-controls="mods">Preguntas frecuentes</button>
       <div class="modules" id="mods" hidden>${modCards(k)}</div>`
    : `<div class="modules" id="mods">${modCards(k)}</div>`;
  return `
    <section class="page ${k}">
      <p class="crumb"><a href="#/">Inicio</a> / ${a.titulo}</p>
      <h1>${a.titulo}</h1>
      <p class="lead">${a.descripcion}</p>
      ${faq}
    </section>`;
}

function modulo(k, id) {
  const a = DATA[k], m = a.modulos.find(x => x.id === id);
  if (!m) return notFound();
  return `
    <section class="page ${k}">
      <p class="crumb"><a href="#/">Inicio</a> / <a href="#/${k}">${a.titulo}</a> / ${m.titulo}</p>
      <h1>${m.titulo}</h1>
      <p class="lead">${m.resumen}</p>
      <div class="acc">
        ${m.items.map(i => `<details><summary>${i.q}</summary><div>${i.a}</div></details>`).join('')}
      </div>
    </section>`;
}

function notFound() {
  return `<section class="hero"><h1>No encontramos esa página.</h1><p><a href="#/">Volver al inicio</a></p></section>`;
}

function render() {
  const [, k, id] = (location.hash || '#/').split('/');
  let html;
  if (!k) html = home();
  else if (DATA[k] && id) html = modulo(k, id);
  else if (DATA[k]) html = area(k);
  else html = notFound();
  app.innerHTML = html;
  links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === `#/${k || ''}`));
  const btn = document.getElementById('faqBtn');
  if (btn) btn.addEventListener('click', () => {
    const box = document.getElementById('mods');
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    box.hidden = open;
  });
  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

window.addEventListener('hashchange', render);
render();
