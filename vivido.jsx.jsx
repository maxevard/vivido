import React, { useState, useMemo, useEffect } from "react";
import { ACTIVITIES } from "./activities.jsx";
/**
 * VIVIDO — fondation du site d'activités
 * --------------------------------------------------
 * Comment faire évoluer ce fichier :
 *  1. AJOUTER UNE ACTIVITÉ  -> ajoute un objet dans le tableau ACTIVITIES.
 *  2. AJOUTER UNE LANGUE    -> ajoute une clé (ex: "it") dans l'objet T, en
 *                              copiant la structure de "fr". Le sélecteur la
 *                              proposera automatiquement (voir LANGS).
 *  3. CONTENU DES ACTIVITÉS -> il est en français par défaut. Pour le traduire
 *                              aussi, remplace `fr: {...}` par des clés par langue
 *                              (ex: en: {...}) et lis-les via act[lang] ?? act.fr.
 *  4. VRAIES PHOTOS         -> chaque carte a une vignette dégradée + icône. Pour
 *                              une photo, remplace <CardVisual/> par une <img/>.
 */

/* ----------------------------- 1. DONNÉES ----------------------------- */



/* --------------------------- 2. TRADUCTIONS --------------------------- */
/* "fr" est la langue par défaut. Pour ajouter une langue, copie ce bloc. */

const T = {
  fr: {
    label: "Français",
    nav: { activities: "Activités", region: "La région", partner: "Devenir partenaire" },
    heroEyebrow: "Lac de Neuchâtel · Massif du Jura",
    heroTitle: "Bougez. Savourez. Connectez.",
    heroSub: "Activités de plein air et d'intérieur, choisies près du lac et dans le Jura. Du paddle au musée, de la rando au spa.",
    heroCta: "Explorer les activités",
    all: "Tout", outdoor: "Plein air", indoor: "Intérieur",
    types: { rando: "Randonnée", eau: "Eau", neige: "Neige", culture: "Culture", bien: "Bien-être", gastro: "Gastronomie" },
    levels: { easy: "Facile", medium: "Modéré", hard: "Sportif" },
    duration: "Durée", level: "Niveau",
    count: (n) => `${n} activité${n > 1 ? "s" : ""}`,
    empty: "Aucune activité ne correspond à ces filtres pour l'instant.",
    partnerEyebrow: "Acteurs locaux",
    partnerTitle: "Vous proposez une activité dans la région ?",
    partnerSub: "Guides, clubs, musées, restaurants, instituts de bien-être : référencez votre activité et touchez visiteurs comme habitants.",
    partnerCta: "Proposer une activité",
    footer: "Le guide des activités autour de Neuchâtel.",
  },
  en: {
    label: "English",
    nav: { activities: "Activities", region: "The region", partner: "Become a partner" },
    heroEyebrow: "Lake Neuchâtel · Jura mountains",
    heroTitle: "Move. Savor. Connect.",
    heroSub: "Outdoor and indoor activities, hand-picked by the lake and across the Jura. From paddling to museums, hiking to spa.",
    heroCta: "Explore activities",
    all: "All", outdoor: "Outdoor", indoor: "Indoor",
    types: { rando: "Hiking", eau: "Water", neige: "Snow", culture: "Culture", bien: "Wellness", gastro: "Food & wine" },
    levels: { easy: "Easy", medium: "Moderate", hard: "Challenging" },
    duration: "Duration", level: "Level",
    count: (n) => `${n} activit${n > 1 ? "ies" : "y"}`,
    empty: "No activity matches these filters yet.",
    partnerEyebrow: "Local partners",
    partnerTitle: "Do you run an activity in the region?",
    partnerSub: "Guides, clubs, museums, restaurants, wellness studios: list your activity and reach both visitors and locals.",
    partnerCta: "List an activity",
    footer: "The guide to activities around Neuchâtel.",
  },
  de: {
    label: "Deutsch",
    nav: { activities: "Aktivitäten", region: "Die Region", partner: "Partner werden" },
    heroEyebrow: "Neuenburgersee · Juragebirge",
    heroTitle: "Finden Sie Ihre nächste Auszeit rund um Neuenburg",
    heroSub: "Aktivitäten drinnen und draussen, ausgewählt am See und im Jura. Vom Paddeln bis zum Museum, vom Wandern bis zum Spa.",
    heroCta: "Aktivitäten entdecken",
    all: "Alle", outdoor: "Draussen", indoor: "Drinnen",
    types: { rando: "Wandern", eau: "Wasser", neige: "Schnee", culture: "Kultur", bien: "Wellness", gastro: "Genuss" },
    levels: { easy: "Leicht", medium: "Mittel", hard: "Sportlich" },
    duration: "Dauer", level: "Niveau",
    count: (n) => `${n} Aktivität${n > 1 ? "en" : ""}`,
    empty: "Noch keine Aktivität passt zu diesen Filtern.",
    partnerEyebrow: "Lokale Partner",
    partnerTitle: "Bieten Sie eine Aktivität in der Region an?",
    partnerSub: "Guides, Vereine, Museen, Restaurants, Wellness-Studios: Listen Sie Ihre Aktivität und erreichen Sie Gäste wie Einheimische.",
    partnerCta: "Aktivität vorschlagen",
    footer: "Der Aktivitätenführer rund um Neuenburg.",
  },
};

const LANGS = Object.keys(T); // ["fr","en","de"] — ordre du sélecteur

/* ----------------------------- 3. ICÔNES ----------------------------- */

function TypeIcon({ type }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "eau":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></svg>);
    case "rando":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M3 19h18" /><path d="M5 19 11 7l4 7" /><path d="m13 13 2-3 6 9" /></svg>);
    case "neige":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" /></svg>);
    case "culture":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M3 9 12 4l9 5" /><path d="M5 9v8M10 9v8M14 9v8M19 9v8" /><path d="M3 19h18" /></svg>);
    case "bien":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M12 3c3 4 4 6 4 9a4 4 0 0 1-8 0c0-3 1-5 4-9Z" /></svg>);
    case "gastro":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M12 11c5 0 7-3 7-7-5 0-7 3-7 7Z" /><path d="M12 11v9" /></svg>);
    default:
      return null;
  }
}

function PinIcon() {
  return (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10Z" /><circle cx="12" cy="11" r="2" /></svg>);
}

function CardVisual({ tone, type }) {
  return (
    <div className={`na-visual na-tone-${tone}`} aria-hidden="true">
      <svg className="na-visual-contours" viewBox="0 0 320 180" preserveAspectRatio="none">
        <path d="M-10 130 C 60 100, 120 150, 200 120 S 340 90, 340 110" />
        <path d="M-10 150 C 70 120, 140 165, 220 140 S 340 115, 340 130" />
        <path d="M-10 170 C 80 145, 160 180, 240 160 S 340 140, 340 152" />
      </svg>
      <span className="na-visual-icon"><TypeIcon type={type} /></span>
    </div>
  );
}

/* --------------------------- 4. COMPOSANT ---------------------------- */

export default function App() {
  const [lang, setLang] = useState("fr");
  const [cat, setCat] = useState("all");      // all | outdoor | indoor
  const [type, setType] = useState("all");    // all | rando | eau | ...

  const t = T[lang];

  const filtered = useMemo(
    () => ACTIVITIES.filter(a => (cat === "all" || a.cat === cat) && (type === "all" || a.type === type)),
    [cat, type]
  );

  const typeKeys = Object.keys(t.types);

  return (
    <div className="na-root">
      <Styles />

      {/* --- En-tête --- */}
      <header className="na-header">
        <a href="#top" className="na-brand">
<svg width="26" height="26" viewBox="-20 -18 40 52"
     xmlns="http://www.w3.org/2000/svg"
     aria-label="Vivido logo"
     style={{display:"block", verticalAlign:"middle"}}>
  <circle cx="0" cy="-14" r="4.5" fill="#E8A53C"/>
  <polygon points="0,-10 -16,12 16,12" fill="#176B57"/>
  <line x1="-18" y1="14" x2="18" y2="14" stroke="#4F94A6" strokeWidth="1" opacity="0.6"/>
  <polygon points="0,30 -16,16 16,16" fill="#4F94A6" opacity="0.82"/>
  <path d="M-11,22 Q0,18 11,22" fill="none" stroke="#4F94A6" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
</svg>
            <div className="na-brand-text">
               <span>Vivido</span>
               <span className="na-brand-desc">Évasion · Neuchâtel</span>
            </div>
          </a>
        <nav className="na-nav">
          <a href="#activites">{t.nav.activities}</a>
          <a href="#partner">{t.nav.partner}</a>
          <div className="na-lang" role="group" aria-label="Langue / Language">
            {LANGS.map(code => (
              <button key={code} onClick={() => setLang(code)}
                className={`na-lang-btn ${lang === code ? "is-active" : ""}`}
                aria-pressed={lang === code}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* --- Hero --- */}
      <section className="na-hero" id="top">
        <svg className="na-hero-contours" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <path key={i} d={`M-50 ${180 + i * 60} C 200 ${120 + i * 60}, 400 ${260 + i * 55}, 650 ${200 + i * 58} S 1050 ${120 + i * 60}, 1250 ${190 + i * 60}`} />
          ))}
        </svg>
        <div className="na-hero-inner">
          <p className="na-eyebrow na-eyebrow-light">{t.heroEyebrow}</p>
          <h1 className="na-hero-title">{t.heroTitle}</h1>
          <p className="na-hero-sub">{t.heroSub}</p>
          <a href="#activites" className="na-btn na-btn-stone">{t.heroCta}</a>
        </div>
      </section>

      {/* --- Activités --- */}
      <main className="na-main" id="activites">
        <div className="na-filters">
          <div className="na-filter-row">
            {[["all", t.all], ["outdoor", t.outdoor], ["indoor", t.indoor]].map(([key, label]) => (
              <button key={key} onClick={() => setCat(key)}
                className={`na-chip na-chip-cat ${cat === key ? "is-active" : ""}`}>{label}</button>
            ))}
          </div>
          <div className="na-filter-row na-filter-types">
            <button onClick={() => setType("all")} className={`na-chip ${type === "all" ? "is-active" : ""}`}>{t.all}</button>
            {typeKeys.map(key => (
              <button key={key} onClick={() => setType(key)}
                className={`na-chip ${type === key ? "is-active" : ""}`}>{t.types[key]}</button>
            ))}
          </div>
          <p className="na-count">{t.count(filtered.length)}</p>
        </div>

        {filtered.length === 0 ? (
          <p className="na-empty">{t.empty}</p>
        ) : (
          <div className="na-grid">
            {filtered.map(a => {
              const c = a[lang] ?? a.fr; // contenu localisé si dispo, sinon FR
              return (
                <article key={a.id} className="na-card" tabIndex={0}>
                  <CardVisual tone={a.tone} type={a.type} />
                  <div className="na-card-body">
                    <div className="na-card-tags">
                      <span className={`na-tag ${a.cat === "outdoor" ? "na-tag-out" : "na-tag-in"}`}>
                        {a.cat === "outdoor" ? t.outdoor : t.indoor}
                      </span>
                      <span className="na-tag na-tag-type">{t.types[a.type]}</span>
                    </div>
                    <h3 className="na-card-title">{c.title}</h3>
                    <p className="na-card-loc"><PinIcon />{c.location}</p>
                    <p className="na-card-desc">{c.desc}</p>
                    <div className="na-card-meta">
                      <span><em>{t.duration}</em> {a.duration}</span>
                      <span><em>{t.level}</em> {t.levels[a.levelKey]}</span>
                    </div>
                    {a.prix && (
                  <div className="na-card-action">
                    <span className="na-card-prix">{a.prix}</span>
                    <a className="na-card-wa"
                       href={`https://wa.me/41782443543?text=${encodeURIComponent(a.whatsapp || "")}`}
                       target="_blank" rel="noopener noreferrer">
                      Réserver via WhatsApp
                    </a>
                  </div>
                )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* --- Partenaires --- */}
      <section className="na-partner" id="partner">
        <svg className="na-partner-contours" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
          {[0, 1, 2, 3].map(i => (
            <path key={i} d={`M-50 ${80 + i * 50} C 250 ${40 + i * 50}, 500 ${140 + i * 48}, 750 ${90 + i * 50} S 1100 ${40 + i * 50}, 1250 ${100 + i * 50}`} />
          ))}
        </svg>
        <div className="na-partner-inner">
          <p className="na-eyebrow">{t.partnerEyebrow}</p>
          <h2 className="na-partner-title">{t.partnerTitle}</h2>
          <p className="na-partner-sub">{t.partnerSub}</p>
          <a href="#" className="na-btn na-btn-dark">{t.partnerCta}</a>
        </div>
      </section>

      <footer className="na-footer">
        <span className="na-brand"><span className="na-brand-mark">▲</span> VIVIDO</span>
        <span className="na-footer-tag">{t.footer}</span>
      </footer>
    </div>
  );
}

/* ----------------------------- 5. STYLES ----------------------------- */

function Styles() {
  useEffect(() => {
    const id = "na-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  return (
    <style>{`
      .na-root {
        --lake:#a8c5d9; --lake-deep:#08323D; --stone:#9fb5a3; --stone-soft:#e8dcc8;
        --jura:#9fb5a3; --paper:#FBFAF5; --ink:#3a4a52; --muted:#b5a89a; --line:#f0ede7;
        --display:'Bricolage Grotesque',system-ui,sans-serif;
        --body:'Hanken Grotesk',system-ui,sans-serif;
        --mono:'Space Mono',monospace;
        font-family:var(--body); color:var(--ink); background:var(--paper);
        line-height:1.5; -webkit-font-smoothing:antialiased;
      }
      .na-root *{box-sizing:border-box; margin:0;}
      .na-root a{color:inherit; text-decoration:none;}
      .na-root button{font-family:inherit; cursor:pointer; border:none; background:none;}
      .na-root :focus-visible{outline:2px solid var(--stone); outline-offset:3px; border-radius:4px;}

      .na-eyebrow{font-family:var(--mono); font-size:.72rem; letter-spacing:.14em;
        text-transform:uppercase; color:var(--stone); margin-bottom:.9rem;}
      .na-eyebrow-light{color:var(--stone-soft);}

      /* Header */
      .na-header{position:sticky; top:0; z-index:20; display:flex; align-items:center;
        justify-content:space-between; gap:1rem; padding:.85rem clamp(1rem,4vw,3rem);
        background:rgba(251,250,245,.86); backdrop-filter:blur(10px);
        border-bottom:1px solid var(--line); flex-wrap:wrap;}
      .na-brand{font-family:var(--display); font-weight:700; font-size:1.05rem;
        display:inline-flex; align-items:center; gap:.5rem; letter-spacing:-.01em;}
      .na-brand-text{display:flex; flex-direction:column; gap:1px; line-height:1.2;}
      .na-brand-desc{font-size:10px; color:var(--lake); letter-spacing:0.08em; font-weight:400; opacity:0.8;}
      .na-brand strong{color:var(--lake);}
      .na-brand-mark{color:var(--stone); font-size:.8em; transform:translateY(-1px);}
      .na-nav{display:flex; align-items:center; gap:clamp(.8rem,2vw,1.6rem);}
      .na-nav>a{font-size:.92rem; font-weight:500; color:var(--muted);}
      .na-nav>a:hover{color:var(--lake);}
      .na-lang{display:inline-flex; border:1px solid var(--line); border-radius:999px; overflow:hidden;}
      .na-lang-btn{font-family:var(--mono); font-size:.68rem; padding:.34rem .55rem; color:var(--muted);}
      .na-lang-btn.is-active{background:var(--lake); color:#fff;}

      /* Hero */
      .na-hero{position:relative; overflow:hidden; background:var(--lake-deep); color:#fff;
        padding:clamp(3.5rem,9vw,6.5rem) clamp(1rem,4vw,3rem);}
      .na-hero-contours{position:absolute; inset:0; width:100%; height:100%;
        fill:none; stroke:#3E7D8C; stroke-width:1.2; opacity:.34;}
      .na-hero-inner{position:relative; max-width:760px;}
      .na-hero-title{font-family:var(--display); font-weight:800; letter-spacing:-.025em;
        font-size:clamp(2.1rem,6vw,4rem); line-height:1.02; margin-bottom:1.1rem;}
      .na-hero-sub{font-size:clamp(1rem,2.2vw,1.22rem); color:#f5f2ec; max-width:560px; margin-bottom:1.8rem;}

      .na-btn{display:inline-block; font-weight:600; font-size:.95rem; padding:.8rem 1.5rem;
        border-radius:999px; transition:transform .15s, background .15s;}
      .na-btn:hover{transform:translateY(-2px);}
      .na-btn-stone{background:var(--stone); color:var(--lake-deep);}
      .na-btn-stone:hover{background:#c8d9c0;}
      .na-btn-dark{background:var(--lake-deep); color:#fff;}
      .na-btn-dark:hover{background:var(--lake);}

      /* Main + filtres */
      .na-main{max-width:1180px; margin:0 auto; padding:clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,3rem);}
      .na-filters{margin-bottom:2rem;}
      .na-filter-row{display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:.7rem;}
      .na-filter-types{padding-top:.7rem; border-top:1px dashed var(--line);}
      .na-chip{font-size:.85rem; font-weight:500; padding:.45rem .95rem; border-radius:999px;
        border:1px solid var(--line); color:var(--muted); background:#fff; transition:all .15s;}
      .na-chip:hover{border-color:var(--lake); color:var(--lake);}
      .na-chip.is-active{background:var(--lake); border-color:var(--lake); color:#fff;}
      .na-chip-cat{font-family:var(--display); font-weight:700; padding:.5rem 1.15rem;}
      .na-chip-cat.is-active{background:var(--stone); border-color:var(--stone); color:var(--lake-deep);}
      .na-count{font-family:var(--mono); font-size:.75rem; color:var(--muted); margin-top:.4rem;}

      /* Grille de cartes */
      .na-grid{display:grid; gap:1.4rem; grid-template-columns:repeat(auto-fill,minmax(290px,1fr));}
      .na-card{background:#fff; border:1px solid var(--line); border-radius:18px; overflow:hidden;
        display:flex; flex-direction:column; transition:transform .2s, box-shadow .2s;}
      .na-card:hover, .na-card:focus-visible{transform:translateY(-4px);
        box-shadow:0 18px 40px -22px rgba(15,76,92,.55);}

      .na-visual{position:relative; height:148px; overflow:hidden;}
      .na-visual-contours{position:absolute; inset:0; width:100%; height:100%;
        fill:none; stroke:rgba(255,255,255,.45); stroke-width:1.3;}
      .na-visual-icon{position:absolute; left:16px; bottom:14px; width:34px; height:34px;
        color:#fff; display:block;}
      .na-visual-icon svg{width:100%; height:100%;}
      .na-tone-water{background:linear-gradient(135deg,#a8c5d9,#1B7C8C);}
      .na-tone-forest{background:linear-gradient(135deg,#9fb5a3,#4C8559);}
      .na-tone-snow{background:linear-gradient(135deg,#a8c5d9,#8FB8C2);}
      .na-tone-vine{background:linear-gradient(135deg,#7A6A2E,#B79A45);}
      .na-tone-stone{background:linear-gradient(135deg,#C58D2C,#E6B860);}

      .na-card-body{padding:1.1rem 1.2rem 1.3rem; display:flex; flex-direction:column; flex:1;}
      .na-card-tags{display:flex; gap:.4rem; margin-bottom:.7rem; flex-wrap:wrap;}
      .na-tag{font-family:var(--mono); font-size:.64rem; letter-spacing:.06em; text-transform:uppercase;
        padding:.22rem .5rem; border-radius:6px;}
      .na-tag-out{background:#E6F0E9; color:var(--jura);}
      .na-tag-in{background:var(--stone-soft); color:#8A5E13;}
      .na-tag-type{background:#EAF1F2; color:var(--lake);}
      .na-card-title{font-family:var(--display); font-weight:700; font-size:1.16rem;
        line-height:1.15; letter-spacing:-.01em; margin-bottom:.45rem;}
      .na-card-loc{display:flex; align-items:center; gap:.32rem; font-size:.82rem;
        color:var(--muted); margin-bottom:.6rem;}
      .na-card-desc{font-size:.9rem; color:#3D4B50; flex:1; margin-bottom:1rem;}
      .na-card-meta{display:flex; gap:1.2rem; padding-top:.8rem; border-top:1px solid var(--line);
        font-size:.82rem;}
      .na-card-meta em{font-family:var(--mono); font-style:normal; font-size:.62rem;
        text-transform:uppercase; letter-spacing:.08em; color:var(--muted); display:block;}
        .na-card-action{display:flex; align-items:center; justify-content:space-between; gap:.8rem; padding:.9rem 1.2rem 1.2rem; border-top:1px solid var(--line);}
    .na-card-prix{font-family:var(--display); font-weight:700; font-size:1.1rem; color:var(--ink);}
    .na-card-wa{background:#25D366; color:#fff; font-size:.82rem; font-weight:600; padding:.5rem .9rem; border-radius:999px; white-space:nowrap; transition:transform .15s;}
    .na-card-wa:hover{transform:translateY(-2px);}

      .na-empty{text-align:center; color:var(--muted); padding:3rem 1rem; font-size:1rem;}

      /* Partenaires */
      .na-partner{position:relative; overflow:hidden; background:var(--stone);
        padding:clamp(3rem,7vw,5rem) clamp(1rem,4vw,3rem); margin-top:1rem;}
      .na-partner-contours{position:absolute; inset:0; width:100%; height:100%;
        fill:none; stroke:rgba(8,50,61,.18); stroke-width:1.3;}
      .na-partner-inner{position:relative; max-width:680px;}
      .na-partner .na-eyebrow{color:#8A5E13;}
      .na-partner-title{font-family:var(--display); font-weight:800; letter-spacing:-.02em;
        font-size:clamp(1.7rem,4.5vw,2.7rem); line-height:1.05; color:var(--lake-deep); margin-bottom:.9rem;}
      .na-partner-sub{font-size:clamp(1rem,2vw,1.12rem); color:#5A4413; max-width:520px; margin-bottom:1.6rem;}

      /* Footer */
      .na-footer{display:flex; align-items:center; justify-content:space-between; gap:1rem;
        flex-wrap:wrap; padding:1.6rem clamp(1rem,4vw,3rem); border-top:1px solid var(--line);
        background:var(--paper);}
      .na-footer-tag{font-size:.85rem; color:var(--muted);}

      @media (max-width:560px){
        .na-nav{gap:.7rem;}
        .na-nav>a{display:none;}
      }
      @media (prefers-reduced-motion:reduce){
        .na-root *{transition:none !important;}
        .na-btn:hover, .na-card:hover{transform:none;}
      }
    `}</style>
  );
}
