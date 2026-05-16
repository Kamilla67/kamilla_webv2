import{m}from"./chrome-wK2Qf8XE.js";import{d as f,e as x,s as y}from"./repository-ozUnIGay.js";const c="four-seasons-quiz-state-v1";class o{constructor(t,i){this.questions=t,this.state=i??this.empty()}state;empty(){return{currentIndex:0,answers:{},startedAt:new Date().toISOString()}}get total(){return this.questions.length}get currentIndex(){return this.state.currentIndex}get currentQuestion(){return this.questions[this.state.currentIndex]}get progress(){return this.state.currentIndex/this.questions.length}get isAtStart(){return this.state.currentIndex===0}get isAtEnd(){return this.state.currentIndex>=this.questions.length-1}get isComplete(){return this.questions.every(t=>this.state.answers[t.id])}get answers(){return Object.entries(this.state.answers).map(([t,i])=>({questionId:t,optionId:i}))}get startedAt(){return this.state.startedAt}selectedOptionFor(t){return this.state.answers[t]}answer(t){this.state.answers[this.currentQuestion.id]=t}next(){return this.isAtEnd?!1:(this.state.currentIndex+=1,!0)}prev(){return this.isAtStart?!1:(this.state.currentIndex-=1,!0)}goTo(t){return t<0||t>=this.questions.length?!1:(this.state.currentIndex=t,!0)}reset(){this.state=this.empty()}serialize(){return structuredClone(this.state)}persist(t=localStorage){t.setItem(c,JSON.stringify(this.state))}static restore(t,i=localStorage){const a=i.getItem(c);if(!a)return new o(t);try{const p=JSON.parse(a);return new o(t,p)}catch{return new o(t)}}static clearPersisted(t=localStorage){t.removeItem(c)}}const k=[{id:"q01",category:"hair",title:"Какой ваш натуральный цвет волос?",subtitle:"Имеется в виду цвет без окрашивания и до седины.",options:[{id:"a",label:"Светло-русый, пшеничный, золотистый блонд",swatch:"#d4b487",weights:{warm:2,light:2}},{id:"b",label:"Платиновый, пепельный блонд, светло-русый холодный",swatch:"#c8c4b8",weights:{cool:2,light:2}},{id:"c",label:"Каштановый, медный, рыжий, тёмно-русый тёплый",swatch:"#7a4a2a",weights:{warm:2,dark:2,muted:1}},{id:"d",label:"Тёмно-коричневый, чёрный, иссиня-чёрный",swatch:"#1f1410",weights:{cool:1,dark:2,clear:2}}]},{id:"q02",category:"eyes",title:"Цвет ваших глаз",subtitle:"Главный оттенок радужки при дневном освещении.",options:[{id:"a",label:"Светло-голубые, серо-голубые, светло-серые",swatch:"#a9bdc7",weights:{cool:2,light:2,soft:1}},{id:"b",label:"Зелёные, ореховые, светло-карие тёплые",swatch:"#8a6a3a",weights:{warm:2,muted:1}},{id:"c",label:"Бирюзовые, ярко-голубые, ярко-зелёные",swatch:"#3a8da3",weights:{warm:1,clear:2,bright:1}},{id:"d",label:"Тёмно-карие, чёрные, тёмно-синие контрастные",swatch:"#3a2418",weights:{cool:1,dark:2,clear:2}}]},{id:"q03",category:"skin",title:"Тон вашей кожи",subtitle:"Без загара и макияжа — естественный оттенок.",options:[{id:"a",label:"Светлая с золотистым/персиковым отливом",swatch:"#f3d6b6",weights:{warm:2,light:2}},{id:"b",label:"Светлая с розовым/голубоватым отливом",swatch:"#f5d4d4",weights:{cool:2,light:2}},{id:"c",label:"Тёплая бежевая, оливковая с тёплым подтоном",swatch:"#c89a72",weights:{warm:2,muted:1}},{id:"d",label:"Фарфоровая, очень светлая, прозрачная",swatch:"#fae8e0",weights:{cool:1,light:2,clear:1}}]},{id:"q04",category:"veins",title:"Какого цвета вены на запястье при дневном свете?",subtitle:"Это надёжный тест на подтон.",options:[{id:"a",label:"Зеленоватые / оливковые",swatch:"#7a8c5e",weights:{warm:3}},{id:"b",label:"Синеватые / фиолетовые",swatch:"#5a6a9c",weights:{cool:3}},{id:"c",label:"Сложно определить — и те, и те",swatch:"#9090a0",weights:{soft:1,muted:1}}]},{id:"q05",category:"sun",title:"Как ваша кожа реагирует на солнце?",options:[{id:"a",label:"Сразу краснеет, плохо загорает, обгорает",swatch:"#f0b8a8",weights:{cool:2,light:2}},{id:"b",label:"Быстро покрывается ровным золотистым загаром",swatch:"#c89870",weights:{warm:2}},{id:"c",label:"Покрывается веснушками",swatch:"#d6a878",weights:{warm:2,light:1}},{id:"d",label:"Загорает медленно до красивого тёмного оттенка",swatch:"#7a4a32",weights:{warm:1,dark:2}}]},{id:"q06",category:"metals",title:"Какой металл больше идёт коже?",subtitle:"Приложите к лицу золотое и серебряное украшение.",options:[{id:"a",label:"Золото — лицо «оживает», кожа сияет",swatch:"#d4af37",weights:{warm:3}},{id:"b",label:"Серебро — кожа выглядит свежей и чистой",swatch:"#c0c0c8",weights:{cool:3}},{id:"c",label:"Идут оба, но особенно — мягкое розовое золото",swatch:"#d4a59a",weights:{warm:1,soft:2}},{id:"d",label:"Идут оба, но особенно — белое золото и платина",swatch:"#dcdcdc",weights:{cool:1,clear:2}}]},{id:"q07",category:"contrast",title:"Какой контраст между волосами, глазами и кожей?",subtitle:"Сравните на чёрно-белой фотографии без макияжа.",options:[{id:"a",label:"Высокий: тёмные волосы и светлая кожа",swatch:"#2a2a2a",weights:{clear:2,bright:1}},{id:"b",label:"Средний: всё сбалансировано",swatch:"#909090",weights:{soft:1}},{id:"c",label:"Низкий: всё в одной светлой гамме",swatch:"#e0d8c8",weights:{light:2,soft:1}},{id:"d",label:"Низкий: всё в одной приглушённой гамме",swatch:"#a09080",weights:{muted:2,soft:1}}]},{id:"q08",category:"white",title:"Какой белый идёт вам больше?",subtitle:"Чистый белый, цвет слоновой кости или кремовый.",options:[{id:"a",label:"Снежно-белый — освежает",swatch:"#ffffff",weights:{cool:2,clear:2}},{id:"b",label:"Цвет слоновой кости — теплее, мягче",swatch:"#f8edd0",weights:{warm:2,muted:1}},{id:"c",label:"Кремовый — хорошо смотрится",swatch:"#f5e6c8",weights:{warm:2,soft:1}},{id:"d",label:"Розоватый или серебристо-белый",swatch:"#f0e8e8",weights:{cool:2,soft:1}}]},{id:"q09",category:"lipstick",title:"В каких помадах вы выглядите гармонично?",options:[{id:"a",label:"Коралловые, персиковые, тёпло-розовые",swatch:"#ee7a5f",weights:{warm:2,bright:1}},{id:"b",label:"Холодно-розовые, ягодные, сливовые",swatch:"#a04060",weights:{cool:2}},{id:"c",label:"Терракотовые, кирпичные, медные",swatch:"#a0512e",weights:{warm:2,muted:2,dark:1}},{id:"d",label:"Яркие красные, фуксия, бордо с холодным подтоном",swatch:"#c41e3a",weights:{cool:2,clear:2,bright:2}}]},{id:"q10",category:"complements",title:"В одежде каких цветов вам чаще делают комплименты?",options:[{id:"a",label:"Тёплые яркие: коралл, бирюза, золотисто-жёлтый",swatch:"#ffb24a",weights:{warm:2,light:1,bright:2}},{id:"b",label:"Пастельные: пудровый розовый, мятный, сиреневый",swatch:"#d4b4d4",weights:{cool:2,light:2,soft:2}},{id:"c",label:"Землистые: горчичный, оливковый, ржавый",swatch:"#9a6a2a",weights:{warm:2,dark:1,muted:2}},{id:"d",label:"Чистые насыщенные: алый, кобальт, изумруд",swatch:"#1f3a8a",weights:{cool:2,dark:2,clear:2,bright:1}}]},{id:"q11",category:"wash-out",title:"Какой цвет вас «гасит»?",subtitle:"Лицо выглядит тусклым, появляются круги под глазами.",options:[{id:"a",label:"Холодные — серый, чёрный, ярко-белый",swatch:"#202020",weights:{warm:2}},{id:"b",label:"Тёплые — горчичный, рыжий, оранжевый",swatch:"#c97520",weights:{cool:2}},{id:"c",label:"Тёмные густые — бордо, чёрный, тёмно-синий",swatch:"#3a1c1c",weights:{light:2}},{id:"d",label:"Бледные пастельные — нюдовые тона",swatch:"#e8d8c8",weights:{dark:2,clear:1}}]},{id:"q12",category:"saturation",title:"Какие цвета вам идут больше — насыщенные или приглушённые?",options:[{id:"a",label:"Чистые яркие, без серого — как цвета леденцов",swatch:"#e6234c",weights:{clear:3,bright:2}},{id:"b",label:"Пыльные, припорошенные, с серой основой",swatch:"#b5a597",weights:{soft:3,muted:2}},{id:"c",label:"Тёплые насыщенные с золотистой основой",swatch:"#c49832",weights:{warm:2,muted:1}},{id:"d",label:"Холодные дымчатые с пепельной основой",swatch:"#9aaab5",weights:{cool:2,soft:2}}]},{id:"q13",category:"depth",title:"Что лучше работает: глубокие тёмные или светлые тона?",options:[{id:"a",label:"Светлые — тёмное «давит», утяжеляет образ",swatch:"#f0e8d8",weights:{light:3}},{id:"b",label:"Тёмные и глубокие — светлое «бледнит»",swatch:"#3a2418",weights:{dark:3}},{id:"c",label:"Средние — без крайностей",swatch:"#a89580",weights:{soft:2,muted:1}},{id:"d",label:"Контрастные сочетания — светлое + тёмное",swatch:"#000000",weights:{clear:3,bright:1}}]},{id:"q14",category:"blush",title:"Какой румянец у вас естественный?",options:[{id:"a",label:"Персиковый, золотисто-розовый",swatch:"#f4a880",weights:{warm:2,light:1}},{id:"b",label:"Холодный розовый, фарфоровый",swatch:"#f0c0c8",weights:{cool:2,light:2}},{id:"c",label:"Терракотовый, бронзовый",swatch:"#c08060",weights:{warm:2,muted:2}},{id:"d",label:"Малиновый, ягодный, насыщенный",swatch:"#b03050",weights:{cool:2,clear:2}}]}],q={questions:k};class v extends HTMLElement{static observedAttributes=["selected"];_question=null;root;constructor(){super(),this.root=this.attachShadow({mode:"open"})}set question(t){this._question=t,this.render()}attributeChangedCallback(){this.updateSelection()}connectedCallback(){this.render()}get selected(){return this.getAttribute("selected")}updateSelection(){this.root.querySelectorAll("button[data-option]").forEach(i=>{const a=i.getAttribute("data-option");i.classList.toggle("option--selected",a===this.selected),i.setAttribute("aria-pressed",String(a===this.selected))})}onClick=t=>{const i=t.target.closest("button[data-option]");if(!i)return;const a=i.dataset.option;this.setAttribute("selected",a),this.dispatchEvent(new CustomEvent("option-selected",{bubbles:!0,composed:!0,detail:{optionId:a,questionId:this._question?.id}}))};render(){if(!this._question){this.root.innerHTML="";return}const t=this._question;this.root.innerHTML=`
      <style>
        :host {
          display: block;
          font-family: 'Manrope', system-ui, sans-serif;
          color: var(--c-fg, #1a1816);
        }
        .header h2 {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }
        .header p {
          margin: 8px 0 0;
          color: var(--c-fg-muted, #5b574f);
          font-size: 0.95rem;
          max-width: 60ch;
        }
        :host-context([data-theme="dark"]) .header p { color: var(--c-fg-muted, #a59f8e); }
        .options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
          margin-top: 28px;
          list-style: none;
          padding: 0;
        }
        .option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: var(--bg-elevated, #fff);
          color: inherit;
          border: 1.5px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          font: inherit;
          text-align: left;
          cursor: pointer;
          transition:
            transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1),
            border-color 150ms ease,
            box-shadow 150ms ease,
            background 150ms ease;
        }
        .option:hover {
          border-color: rgba(0,0,0,0.25);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(20,18,14,0.08);
        }
        .option:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(107,138,240,0.4);
        }
        .option--selected {
          border-color: var(--c-accent, #b8895c);
          background: color-mix(in srgb, var(--c-accent, #b8895c) 8%, transparent);
          box-shadow: 0 4px 14px rgba(184, 137, 92, 0.15);
        }
        .swatch {
          flex: 0 0 auto;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
        }
        .label {
          flex: 1;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.35;
          text-wrap: pretty;
          color: var(--c-fg, #1a1816) !important;
        }
        .option * { color: inherit; }
        .option--selected { color: var(--c-fg, #1a1816) !important; }
        .check {
          flex: 0 0 auto;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid var(--c-border-strong, rgba(0,0,0,0.2));
          display: grid;
          place-items: center;
          color: #fff;
          background: transparent;
          transition: background 150ms ease, border-color 150ms ease;
        }
        .option--selected .check {
          background: var(--c-accent, #b8895c);
          border-color: var(--c-accent, #b8895c);
        }
        .check svg { width: 12px; height: 12px; opacity: 0; transition: opacity 150ms ease; }
        .option--selected .check svg { opacity: 1; }
      </style>
      <div class="header">
        <h2>${t.title}</h2>
        ${t.subtitle?`<p>${t.subtitle}</p>`:""}
      </div>
      <ul class="options" role="radiogroup" aria-label="${t.title}">
        ${t.options.map(i=>`
          <li>
            <button
              type="button"
              class="option"
              role="radio"
              aria-pressed="false"
              data-option="${i.id}"
            >
              <span class="swatch" style="background:${i.swatch}" aria-hidden="true"></span>
              <span class="label">${i.label}</span>
              <span class="check" aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </li>
        `).join("")}
      </ul>
    `,this.root.querySelector(".options").addEventListener("click",this.onClick),this.updateSelection()}}customElements.get("question-card")||customElements.define("question-card",v);m();const w=q.questions,e=o.restore(w),l=document.getElementById("quiz-question"),I=document.getElementById("quiz-progress"),E=document.getElementById("quiz-counter"),h=document.getElementById("quiz-prev"),r=document.getElementById("quiz-next"),g=document.getElementById("quiz-reset"),d=document.getElementById("quiz-card");function n(){l.question=e.currentQuestion;const s=e.selectedOptionFor(e.currentQuestion.id)??null;s?l.setAttribute("selected",s):l.removeAttribute("selected");const t=Math.round((e.currentIndex+(s?1:0))/e.total*100);I.style.width=`${t}%`,E.textContent=`Вопрос ${e.currentIndex+1} из ${e.total}`,h.disabled=e.isAtStart,r.disabled=!s,r.innerHTML=e.isAtEnd?'Узнать результат <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 12 2 2 4-4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>':'Далее <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',g.hidden=e.currentIndex===0&&Object.keys(e.serialize().answers).length===0}function u(s){"startViewTransition"in document?document.startViewTransition(s):s()}function b(s){d.classList.remove("quiz-card--enter-forward","quiz-card--enter-back"),d.offsetWidth,d.classList.add(s==="forward"?"quiz-card--enter-forward":"quiz-card--enter-back")}l.addEventListener("option-selected",s=>{const t=s;e.answer(t.detail.optionId),e.persist(),n()});h.addEventListener("click",()=>{e.prev()&&(e.persist(),u(n),b("back"))});r.addEventListener("click",async()=>{if(e.isAtEnd&&e.isComplete){await A();return}e.next()&&(e.persist(),u(n),b("forward"))});g.addEventListener("click",()=>{confirm("Начать тест заново? Текущие ответы будут стёрты.")&&(e.reset(),e.persist(),u(n))});async function A(){r.disabled=!0,r.textContent="Считаем результат…";const s=f(e.answers,w),t=await x(),i=await y({userId:t.id,startedAt:e.startedAt,result:s,answers:e.answers});o.clearPersisted(),window.location.href=`./result.html?id=${i}`}document.addEventListener("keydown",s=>{s.target instanceof HTMLButtonElement||(s.key==="ArrowLeft"&&h.click(),(s.key==="ArrowRight"||s.key==="Enter")&&(r.disabled||r.click()))});n();
