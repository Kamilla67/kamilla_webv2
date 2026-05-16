(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o=`
<a href="#main" class="skip-link">Перейти к содержанию</a>
<header class="site-header">
  <div class="container site-header__inner">
    <a href="./index.html" class="site-header__brand" aria-label="4 сезона — главная">
      <span class="site-header__brand-mark" aria-hidden="true">
        <span style="background:var(--season-spring-primary)"></span>
        <span style="background:var(--season-summer-primary)"></span>
        <span style="background:var(--season-autumn-primary)"></span>
        <span style="background:var(--season-winter-primary)"></span>
      </span>
      4 сезона
    </a>
    <nav>
      <ul class="site-header__nav" role="list">
        <li><a href="./index.html" data-page="home">Главная</a></li>
        <li><a href="./quiz.html" data-page="quiz">Пройти тест</a></li>
        <li><a href="./about.html" data-page="about" class="nav-hide-sm">О методике</a></li>
      </ul>
    </nav>
  </div>
</header>
`,c=`
<footer class="site-footer">
  <div class="container site-footer__inner">
    <div>
      <strong>4 сезона</strong> · веб-сайт определения цветотипа<br />
      Дипломный проект Валеевой&nbsp;К.&nbsp;Р., ИСП-44оз-23, 2026.
    </div>
    <div>
      Работает в браузере без сервера.<br />
      Данные хранятся локально (IndexedDB).
    </div>
  </div>
</footer>
`;function d(){const s=document.body.dataset.page;document.body.insertAdjacentHTML("afterbegin",o),document.body.insertAdjacentHTML("beforeend",c),s&&document.querySelectorAll(`[data-page="${s}"]`).forEach(r=>r.setAttribute("aria-current","page"))}function l(){if(!("IntersectionObserver"in window)){document.querySelectorAll(".reveal").forEach(r=>r.classList.add("is-visible"));return}const s=new IntersectionObserver(r=>{for(const a of r)a.isIntersecting&&(a.target.classList.add("is-visible"),s.unobserve(a.target))},{threshold:.12,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal").forEach(r=>s.observe(r))}export{d as m,l as s};
