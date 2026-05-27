import { useState, useMemo, useRef, useEffect, useCallback } from "react";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

/* ── RESET & VARS ── */
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#07070f;overflow-x:hidden}

:root{
  --bg:#07070f; --s1:#0d0d1a; --s2:#141422; --s3:#1c1c2e;
  --gold:#c9a84c; --gl:#e8c86a; --gd:#7a6130; --glow:rgba(201,168,76,.25);
  --text:#f0ece0; --muted:#8a8470; --dim:#4a4638;
  --border:rgba(201,168,76,.12); --border2:rgba(201,168,76,.32);
  --red:#c94c4c; --blue:#4c7ac9; --purple:#9a6ae8; --green:#4caa70;
  --fd:'Cinzel',serif; --fb:'Lora',serif;
  --r:14px; --r2:10px;
}

/* ── KEYFRAMES ── */
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
@keyframes modalIn{from{opacity:0;transform:translateY(40px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes overlayIn{from{opacity:0}to{opacity:1}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes float0{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-28px) rotate(5deg)}}
@keyframes float1{0%,100%{transform:translateY(0) rotate(8deg)}50%{transform:translateY(-22px) rotate(-8deg)}}
@keyframes float2{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-32px) rotate(3deg)}}
@keyframes float3{0%,100%{transform:translateY(0) rotate(6deg)}50%{transform:translateY(-18px) rotate(-6deg)}}
@keyframes glow-pulse{0%,100%{box-shadow:0 0 0 0 var(--glow)}50%{box-shadow:0 0 20px 4px var(--glow)}}
@keyframes border-glow{0%,100%{border-color:var(--border2)}50%{border-color:var(--gold)}}
@keyframes ripple{0%{transform:scale(0);opacity:.6}100%{transform:scale(4);opacity:0}}
@keyframes countIn{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}
@keyframes gradMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes logoGlow{0%,100%{text-shadow:0 0 20px rgba(201,168,76,.3)}50%{text-shadow:0 0 40px rgba(201,168,76,.7),0 0 80px rgba(201,168,76,.3)}}
@keyframes dotBounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}

/* ── APP SHELL ── */
.app{min-height:100vh;background:var(--bg);color:var(--text);font-family:var(--fb);position:relative}

/* ── FLOATING BG ── */
.fbg{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.fbg-item{position:absolute;font-size:clamp(28px,4vw,52px);opacity:.025;filter:blur(1.5px);user-select:none}

/* ── HEADER ── */
.hdr{
  background:linear-gradient(180deg,rgba(4,4,12,.98) 0%,rgba(7,7,15,.9) 100%);
  border-bottom:1px solid var(--border);
  padding:0 20px;
  position:sticky;top:0;z-index:100;
  backdrop-filter:blur(24px);
  animation:slideDown .4s ease both;
}
.hdr::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--gold),transparent);
  animation:gradMove 4s ease infinite;
  background-size:200% 200%;
}
.hdr-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:16px;padding:14px 0;flex-wrap:wrap}
.logo{
  font-family:var(--fd);font-size:20px;font-weight:900;
  color:var(--gold);letter-spacing:.2em;text-transform:uppercase;
  white-space:nowrap;flex-shrink:0;cursor:default;
  animation:logoGlow 3s ease-in-out infinite;
}
.logo em{color:rgba(201,168,76,.4);font-style:normal;font-weight:400;font-size:.8em}

/* ── SEARCH ── */
.srch-w{flex:1;min-width:160px;max-width:320px;position:relative}
.srch{
  width:100%;background:var(--s2);
  border:1px solid var(--border);border-radius:50px;
  padding:9px 14px 9px 40px;
  color:var(--text);font-family:var(--fb);font-size:13px;
  outline:none;transition:border-color .2s,box-shadow .2s;
}
.srch:focus{border-color:var(--gd);box-shadow:0 0 0 3px rgba(201,168,76,.1)}
.srch-ico{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--dim);pointer-events:none;font-size:13px}

/* ── CATEGORY TABS ── */
.ctabs{display:flex;gap:2px;flex-shrink:0;flex-wrap:wrap;
  background:var(--s2);border:1px solid var(--border);border-radius:50px;padding:4px}
.ctab{
  background:none;border:none;border-radius:50px;
  padding:8px 14px;color:var(--muted);
  font-family:var(--fd);font-size:10px;letter-spacing:.1em;text-transform:uppercase;
  cursor:pointer;transition:all .25s;white-space:nowrap;position:relative;overflow:hidden;
}
.ctab::before{content:'';position:absolute;inset:0;background:rgba(201,168,76,.12);border-radius:50px;transform:scale(0);transition:transform .2s}
.ctab:hover{color:var(--text)}
.ctab:hover::before{transform:scale(1)}
.ctab.on{background:linear-gradient(135deg,rgba(201,168,76,.2),rgba(201,168,76,.08));color:var(--gl);border:1px solid var(--border2);animation:border-glow 2s ease infinite}

/* ── MAIN ── */
.main{max-width:1200px;margin:0 auto;padding:24px 20px;position:relative;z-index:1}

/* ── CATEGORY HERO ── */
.cat-hero{
  margin-bottom:24px;padding:20px 24px;
  background:linear-gradient(135deg,rgba(201,168,76,.06) 0%,transparent 60%);
  border:1px solid var(--border);border-radius:var(--r);
  animation:fadeUp .4s ease both;
  display:flex;align-items:center;gap:16px;
}
.cat-hero-emo{font-size:40px;filter:drop-shadow(0 4px 12px var(--glow))}
.cat-hero-title{font-family:var(--fd);font-size:22px;font-weight:700;color:var(--text);letter-spacing:.08em;margin-bottom:4px}
.cat-hero-sub{font-size:13px;color:var(--muted);font-style:italic;line-height:1.6}
.cat-hero-count{margin-left:auto;font-family:var(--fd);font-size:28px;font-weight:900;color:var(--gold);line-height:1}
.cat-hero-lbl{font-size:9px;color:var(--dim);letter-spacing:.1em;text-transform:uppercase;text-align:right;font-family:var(--fd)}

/* ── SUBCATEGORY BAR ── */
.subbar{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;animation:fadeUp .4s .1s ease both}
.sbtn{
  background:var(--s2);border:1px solid var(--border);border-radius:50px;
  padding:6px 14px;color:var(--muted);font-family:var(--fb);font-size:12px;
  cursor:pointer;transition:all .2s;position:relative;overflow:hidden;
}
.sbtn::after{content:'';position:absolute;inset:0;background:rgba(201,168,76,.08);transform:scaleX(0);transform-origin:left;transition:transform .25s;border-radius:50px}
.sbtn:hover{color:var(--text);border-color:var(--border2)}
.sbtn:hover::after{transform:scaleX(1)}
.sbtn.on{background:rgba(201,168,76,.12);border-color:var(--gd);color:var(--gl);animation:glow-pulse 2s ease infinite}

/* ── GRID ── */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(275px,1fr));gap:14px}

/* ── CARD ── */
.card{
  background:var(--s1);border:1px solid var(--border);border-radius:var(--r);
  overflow:hidden;cursor:pointer;
  animation:fadeUp .45s ease both;
  transition:border-color .3s,transform .25s,box-shadow .3s;
  position:relative;
}
.card::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(201,168,76,.08),transparent 60%);
  opacity:0;transition:opacity .3s;pointer-events:none;border-radius:var(--r);
}
.card:hover{
  border-color:var(--border2);
  transform:translateY(-4px) scale(1.01);
  box-shadow:0 12px 40px rgba(0,0,0,.5),0 0 0 1px rgba(201,168,76,.15),0 0 30px rgba(201,168,76,.08);
}
.card:hover::before{opacity:1}
.card:active{transform:translateY(-2px) scale(1.005)}

.card-hdr{padding:16px 18px 12px;display:flex;align-items:flex-start;gap:12px}
.card-emo{font-size:32px;flex-shrink:0;line-height:1;transition:transform .3s;filter:drop-shadow(0 2px 8px rgba(201,168,76,.2))}
.card:hover .card-emo{transform:scale(1.15) rotate(-5deg)}
.card-meta{flex:1}
.card-name{font-family:var(--fd);font-size:15px;font-weight:600;color:var(--text);letter-spacing:.05em;margin-bottom:3px;transition:color .2s}
.card:hover .card-name{color:var(--gl)}
.card-origin{font-size:10px;color:var(--dim);font-style:italic;margin-bottom:5px}
.card-badges{display:flex;gap:5px;flex-wrap:wrap}
.badge{
  font-size:9px;font-family:var(--fd);letter-spacing:.07em;text-transform:uppercase;
  padding:2px 7px;border-radius:50px;border:1px solid;
  transition:all .2s;
}
.bg{border-color:var(--gd);color:var(--gold);background:rgba(201,168,76,.08)}
.card:hover .bg{background:rgba(201,168,76,.15);border-color:var(--gold)}
.br{border-color:#6a2a2a;color:#e06060;background:rgba(201,76,76,.08)}
.bp{
  border-color:#4a2a6a;color:#aa6ae8;background:rgba(122,76,201,.08);
  background-size:200% auto;
}
.bb{border-color:#2a406a;color:#6a9ae8;background:rgba(76,122,201,.08)}
.bg2{border-color:#2a5a3a;color:#4caa70;background:rgba(76,170,112,.08)}

.card-desc{padding:0 18px 14px;font-size:12px;color:var(--muted);line-height:1.65;font-style:italic}
.card-ft{padding:10px 18px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.card-cta{font-size:10px;color:var(--dim);font-family:var(--fd);letter-spacing:.05em;transition:color .2s}
.card:hover .card-cta{color:var(--gold)}
.dots{display:flex;gap:3px}
.dot{width:5px;height:5px;border-radius:50%;background:var(--s3);border:1px solid var(--border);transition:all .2s}
.dot.on{background:var(--gold);border-color:var(--gold)}
.card:hover .dot.on{box-shadow:0 0 6px var(--gold)}

/* ── OVERLAY & MODAL ── */
.ov{
  position:fixed;inset:0;background:rgba(4,4,12,.88);
  z-index:200;display:flex;align-items:flex-start;
  justify-content:center;padding:20px;
  overflow-y:auto;
  animation:overlayIn .25s ease both;
  backdrop-filter:blur(12px);
}
.modal{
  background:linear-gradient(180deg,var(--s1) 0%,var(--bg) 100%);
  border:1px solid var(--border2);border-radius:18px;
  width:100%;max-width:760px;margin:auto;
  box-shadow:0 24px 80px rgba(0,0,0,.8),0 0 0 1px rgba(201,168,76,.08),0 0 60px rgba(201,168,76,.05);
  overflow:hidden;
  animation:modalIn .3s cubic-bezier(.22,1,.36,1) both;
}
.modal::before{
  content:'';display:block;height:2px;
  background:linear-gradient(90deg,transparent,var(--gold),var(--gl),var(--gold),transparent);
  animation:gradMove 3s ease infinite;background-size:200% 200%;
}
.mhdr{padding:22px 24px 18px;border-bottom:1px solid var(--border);display:flex;align-items:flex-start;gap:18px;position:relative}
.memo{font-size:50px;line-height:1;flex-shrink:0;filter:drop-shadow(0 4px 16px var(--glow));animation:float0 6s ease-in-out infinite}
.mtitle{font-family:var(--fd);font-size:23px;font-weight:700;color:var(--text);letter-spacing:.07em;margin-bottom:3px}
.morigin{font-size:11px;color:var(--dim);font-style:italic;margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.mdesc{font-size:13px;color:var(--muted);line-height:1.7;font-style:italic}
.mclose{
  position:absolute;top:18px;right:18px;
  background:var(--s3);border:1px solid var(--border);border-radius:50%;
  width:34px;height:34px;color:var(--muted);font-size:16px;
  cursor:pointer;display:flex;align-items:center;justify-content:center;
  transition:all .2s;
}
.mclose:hover{border-color:var(--gold);color:var(--gold);transform:rotate(90deg)}

/* ── EQUIP TOGGLE ── */
.etog{
  display:flex;background:var(--s2);border:1px solid var(--border);
  border-radius:50px;padding:3px;margin:16px 24px 0;
  width:fit-content;gap:0;
}
.ebtn{
  background:none;border:none;border-radius:50px;
  padding:7px 16px;font-family:var(--fd);font-size:10px;
  letter-spacing:.08em;text-transform:uppercase;color:var(--muted);
  cursor:pointer;transition:all .2s;
}
.ebtn.on{background:linear-gradient(135deg,rgba(201,168,76,.2),rgba(201,168,76,.1));color:var(--gl);border:1px solid var(--border2)}

/* ── MODAL BODY ── */
.mbody{padding:22px 24px 30px;display:flex;flex-direction:column;gap:22px}
.stitle{
  font-family:var(--fd);font-size:10px;letter-spacing:.18em;
  text-transform:uppercase;color:var(--gold);margin-bottom:10px;
  display:flex;align-items:center;gap:8px;
}
.stitle::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border2),transparent)}

/* ── INGREDIENTS ── */
.ings{display:flex;flex-direction:column;gap:7px}
.ing{background:var(--s2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;transition:border-color .2s}
.ing:hover{border-color:var(--border2)}
.ing-main{display:flex;align-items:center;gap:10px;padding:9px 12px}
.ing-amt{font-family:var(--fd);font-size:13px;font-weight:600;color:var(--gold);min-width:55px;flex-shrink:0}
.ing-name{font-size:13px;color:var(--text);flex:1}
.alt-tog{
  background:none;border:1px solid var(--border);border-radius:4px;
  padding:2px 8px;font-size:9px;color:var(--dim);cursor:pointer;
  font-family:var(--fd);letter-spacing:.05em;transition:all .2s;flex-shrink:0;
}
.alt-tog:hover,.alt-tog.on{border-color:var(--gd);color:var(--gold);background:rgba(201,168,76,.08)}
.altpanel{padding:8px 12px 11px;border-top:1px solid var(--border);background:rgba(201,168,76,.03);animation:fadeIn .2s ease}
.alt-lbl{font-size:9px;color:var(--gold);font-family:var(--fd);letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px}
.alt-item{font-size:11px;color:var(--muted);padding:2px 0;display:flex;align-items:flex-start;gap:7px}
.alt-item::before{content:'→';color:var(--gd);flex-shrink:0}

/* ── STEPS ── */
.steps{display:flex;flex-direction:column;gap:7px}
.step{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--s2);border:1px solid var(--border);border-radius:var(--r2);transition:border-color .2s;animation:fadeUp .3s ease both}
.step:hover{border-color:var(--border2)}
.snum{
  font-family:var(--fd);font-size:11px;color:var(--gold);
  background:rgba(201,168,76,.1);border:1px solid var(--gd);border-radius:50%;
  width:22px;height:22px;display:flex;align-items:center;justify-content:center;
  flex-shrink:0;font-weight:600;transition:all .2s;
}
.step:hover .snum{background:rgba(201,168,76,.2);box-shadow:0 0 8px rgba(201,168,76,.3)}
.stxt{font-size:12px;color:var(--text);line-height:1.6;padding-top:1px}

/* ── EQUIPMENT ── */
.eqlist{display:flex;flex-direction:column;gap:6px}
.eqitem{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:var(--muted);line-height:1.6;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.03)}
.eqitem:last-child{border:none}
.eqitem::before{content:'◆';color:var(--gd);font-size:7px;margin-top:4px;flex-shrink:0}

/* ── TIP ── */
.tip{background:rgba(201,168,76,.05);border:1px solid rgba(201,168,76,.2);border-radius:var(--r2);padding:14px 16px;font-size:12px;color:var(--muted);line-height:1.7;font-style:italic;display:flex;gap:10px;animation:fadeIn .3s ease}
.tip-ico{color:var(--gold);font-style:normal;flex-shrink:0;font-size:14px}

/* ── MEASURES BOX ── */
.msbox{background:var(--s2);border:1px solid var(--border);border-radius:var(--r2);padding:14px;margin-top:10px}
.ms-title{font-family:var(--fd);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.msrow{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.03);font-size:11px}
.msrow:last-child{border:none}
.mscl{color:var(--gl);font-family:var(--fd)}
.mseq{color:var(--muted)}

/* ── SERVICE GRID ── */
.sgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.scard{background:var(--s2);border:1px solid var(--border);border-radius:var(--r2);padding:12px;transition:border-color .2s}
.scard:hover{border-color:var(--border2)}
.slbl{font-size:9px;color:var(--gold);font-family:var(--fd);letter-spacing:.12em;text-transform:uppercase;margin-bottom:5px}
.sval{font-size:12px;color:var(--text);line-height:1.5}
.sval.big{font-size:18px;font-family:var(--fd);color:var(--gl)}

/* ── VARIATIONS ── */
.var-item{background:var(--s2);border:1px solid var(--border);border-radius:var(--r2);padding:10px 12px;margin-bottom:7px;transition:border-color .2s}
.var-item:hover{border-color:var(--border2)}
.var-name{font-family:var(--fd);font-size:12px;color:var(--gl);margin-bottom:3px}
.var-recipe{font-size:11px;color:var(--muted)}

/* ── ACCORDS ── */
.accords{display:flex;flex-wrap:wrap;gap:5px}
.accord{padding:3px 10px;background:var(--s2);border:1px solid var(--border);border-radius:50px;font-size:11px;color:var(--muted);transition:all .2s;cursor:default}
.accord:hover{border-color:var(--border2);color:var(--text)}

/* ── DOSAGE TABLE ── */
.dtable{display:flex;flex-direction:column;gap:5px}
.drow{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--s2);border:1px solid var(--border);border-radius:var(--r2)}
.dkey{font-size:12px;color:var(--muted)}
.dval{font-family:var(--fd);font-size:12px;color:var(--gl)}

/* ── LOADING ── */
.loading{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;gap:20px}
.ldots{display:flex;gap:8px}
.ldot{width:8px;height:8px;background:var(--gold);border-radius:50%;animation:dotBounce 1.4s ease-in-out infinite both}
.ldot:nth-child(1){animation-delay:-.32s}
.ldot:nth-child(2){animation-delay:-.16s}
.loading-txt{font-family:var(--fd);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);animation:pulse 1.5s ease infinite}

/* ── EMPTY ── */
.empty{text-align:center;padding:80px 20px;animation:fadeIn .4s ease}
.empty-ico{font-size:52px;margin-bottom:16px;opacity:.4}
.empty-txt{font-family:var(--fd);font-size:15px;letter-spacing:.1em;color:var(--dim)}

@media(max-width:640px){
  .hdr-inner{gap:10px}
  .ctabs{order:3;width:100%;border-radius:12px}
  .ctab{flex:1;text-align:center;font-size:9px;padding:7px 6px}
  .grid{grid-template-columns:1fr}
  .sgrid{grid-template-columns:1fr}
  .cat-hero{flex-wrap:wrap}
  .cat-hero-count{margin-left:0}
}
`;

// ── FLOATING BACKGROUND ──
const BG_ITEMS = [
  {e:"🍸",x:8,y:15,a:"float0",d:7,delay:0},
  {e:"🥃",x:85,y:10,a:"float1",d:9,delay:-2},
  {e:"🌿",x:92,y:55,a:"float2",d:6,delay:-4},
  {e:"🍋",x:5,y:70,a:"float3",d:8,delay:-1},
  {e:"🫧",x:50,y:5,a:"float0",d:10,delay:-3},
  {e:"🍷",x:75,y:85,a:"float1",d:7,delay:-5},
  {e:"☕",x:20,y:88,a:"float2",d:9,delay:-2.5},
  {e:"❄️",x:40,y:75,a:"float3",d:6,delay:-1.5},
  {e:"🍊",x:65,y:40,a:"float0",d:11,delay:-3.5},
  {e:"🌺",x:15,y:40,a:"float1",d:8,delay:-4.5},
];

function FloatingBg() {
  return (
    <div className="fbg" aria-hidden>
      {BG_ITEMS.map((it,i)=>(
        <div key={i} className="fbg-item" style={{
          left:`${it.x}%`,top:`${it.y}%`,
          animation:`${it.a} ${it.d}s ease-in-out infinite`,
          animationDelay:`${it.delay}s`,
        }}>{it.e}</div>
      ))}
    </div>
  );
}

// ── MEASURES ──
const MEASURES = [
  {cl:"1 cl",eq:"1 petite cuillère à café"},
  {cl:"1.5 cl",eq:"1 cuillère à soupe rase"},
  {cl:"2 cl",eq:"1 cuillère à soupe bombée"},
  {cl:"3 cl",eq:"¾ verre à shot"},
  {cl:"4 cl",eq:"1 verre à shot standard"},
  {cl:"5 cl",eq:"1 shot + ¼"},
  {cl:"6 cl",eq:"1 shot + ½"},
  {cl:"10 cl",eq:"1 petit verre à moutarde"},
  {cl:"15 cl",eq:"½ verre à eau"},
  {cl:"20 cl",eq:"1 verre à eau standard"},
];

// ── COCKTAILS INDEX (IBA COMPLET + POPULAIRES) ──
const COCKTAIL_INDEX = [
  // UNFORGETTABLES
  {id:"alexander",name:"Alexander",emoji:"🥛",origin:"États-Unis",sub:"Cognac",abv:22,iba:"Unforgettable",diff:2,desc:"Cognac, crème de cacao, crème fraîche. Le cocktail dessert par excellence."},
  {id:"americano",name:"Americano",emoji:"🍊",origin:"Italie",sub:"Apéritif",abv:10,iba:"Unforgettable",diff:1,desc:"Campari, vermouth rouge, soda. L'ancêtre léger du Negroni."},
  {id:"angel-face",name:"Angel Face",emoji:"🍑",origin:"UK, 1930",sub:"Gin",abv:30,iba:"Unforgettable",diff:1,desc:"Parts égales gin, brandy abricot, Calvados. Court et puissant."},
  {id:"aviation",name:"Aviation",emoji:"💜",origin:"New York",sub:"Gin",abv:22,iba:"Unforgettable",diff:2,desc:"Gin, marasquin, crème de violette, citron. Couleur lilas, floral et citronné."},
  {id:"between-sheets",name:"Between the Sheets",emoji:"🔥",origin:"Paris, 1920s",sub:"Rhum/Cognac",abv:26,iba:"Unforgettable",diff:2,desc:"Rhum blanc, cognac, triple sec, citron. La version riche du Sidecar."},
  {id:"boulevardier",name:"Boulevardier",emoji:"🥃",origin:"Paris, 1927",sub:"Whisky",abv:26,iba:"Unforgettable",diff:1,desc:"Bourbon, Campari, vermouth rouge. Le Negroni au whisky — plus chaleureux."},
  {id:"brandy-crusta",name:"Brandy Crusta",emoji:"🍋",origin:"New Orleans, 1850",sub:"Cognac",abv:28,iba:"Unforgettable",diff:3,desc:"Cognac, marasquin, curaçao, citron, Angostura. Ancêtre du Sidecar."},
  {id:"casino",name:"Casino",emoji:"🎰",origin:"UK",sub:"Gin",abv:24,iba:"Unforgettable",diff:2,desc:"Gin, marasquin, orange bitters, citron. Martini version citronnée."},
  {id:"clover-club",name:"Clover Club",emoji:"🌸",origin:"Philadelphie, 1900s",sub:"Gin",abv:18,iba:"Unforgettable",diff:2,desc:"Gin, citron, sirop framboise, blanc d'œuf. Rose, mousseux, élégant."},
  {id:"daiquiri",name:"Daiquiri",emoji:"🍓",origin:"Cuba",sub:"Rhum",abv:20,iba:"Unforgettable",diff:2,desc:"Rhum blanc, citron vert, sirop. La trinité parfaite du cocktail."},
  {id:"dry-martini",name:"Dry Martini",emoji:"🫒",origin:"USA/UK",sub:"Gin",abv:32,iba:"Unforgettable",diff:2,desc:"Gin, vermouth blanc sec, olive ou zeste. Le cocktail ultime."},
  {id:"gin-fizz",name:"Gin Fizz",emoji:"🫧",origin:"USA, 1880s",sub:"Gin",abv:12,iba:"Unforgettable",diff:1,desc:"Gin, citron, sucre, soda. Rafraîchissant et intemporel."},
  {id:"hanky-panky",name:"Hanky Panky",emoji:"✨",origin:"Londres, 1925",sub:"Gin",abv:24,iba:"Unforgettable",diff:1,desc:"Gin, vermouth rouge, Fernet-Branca. Herbal, amer, sophistiqué."},
  {id:"john-collins",name:"John Collins",emoji:"🍋",origin:"UK, 1860s",sub:"Gin",abv:12,iba:"Unforgettable",diff:1,desc:"Gin, citron, sucre, soda. Long drink fondateur du genre."},
  {id:"last-word",name:"Last Word",emoji:"🟢",origin:"Detroit, 1916",sub:"Gin",abv:24,iba:"Unforgettable",diff:2,desc:"Parts égales gin, Chartreuse verte, marasquin, citron vert."},
  {id:"manhattan",name:"Manhattan",emoji:"🌆",origin:"New York, 1880s",sub:"Whisky",abv:28,iba:"Unforgettable",diff:2,desc:"Rye whiskey, vermouth rouge, Angostura. L'archétype du cocktail mémorable."},
  {id:"martinez",name:"Martinez",emoji:"🍒",origin:"Californie, 1860s",sub:"Gin",abv:28,iba:"Unforgettable",diff:2,desc:"Gin, vermouth rouge, marasquin, orange bitters. Précurseur du Martini."},
  {id:"mary-pickford",name:"Mary Pickford",emoji:"🍍",origin:"La Havane, 1920s",sub:"Rhum",abv:20,iba:"Unforgettable",diff:2,desc:"Rhum blanc, ananas, grenadine, marasquin. Doux et tropical."},
  {id:"monkey-gland",name:"Monkey Gland",emoji:"🐒",origin:"Paris, 1920s",sub:"Gin",abv:22,iba:"Unforgettable",diff:2,desc:"Gin, jus d'orange, grenadine, absinthe. Créé à Harry's Bar Paris."},
  {id:"negroni",name:"Negroni",emoji:"🍊",origin:"Florence, 1919",sub:"Gin",abv:24,iba:"Unforgettable",diff:1,desc:"Parts égales gin, Campari, vermouth rouge. Le trio parfait."},
  {id:"old-fashioned",name:"Old Fashioned",emoji:"🥃",origin:"USA, 1800s",sub:"Whisky",abv:32,iba:"Unforgettable",diff:2,desc:"Whisky, sucre, Angostura, zeste d'orange. Le plus vieux cocktail."},
  {id:"paradise",name:"Paradise",emoji:"🌴",origin:"UK, 1930",sub:"Gin",abv:22,iba:"Unforgettable",diff:2,desc:"Gin 2 parts, brandy abricot, OJ. Fruité et tropical."},
  {id:"planters-punch",name:"Planter's Punch",emoji:"🌺",origin:"Jamaïque",sub:"Rhum",abv:18,iba:"Unforgettable",diff:2,desc:"Rhum jamaïcain, citron vert, jus de canne. Règle 1-2-3-4."},
  {id:"porto-flip",name:"Porto Flip",emoji:"🍷",origin:"UK",sub:"Cognac/Porto",abv:18,iba:"Unforgettable",diff:2,desc:"Cognac, porto ruby, jaune d'œuf. Crémeux et riche."},
  {id:"ramos-fizz",name:"Ramos Gin Fizz",emoji:"🥛",origin:"La Nouvelle-Orléans, 1888",sub:"Gin",abv:12,iba:"Unforgettable",diff:3,desc:"Gin, citrons, blanc d'œuf, crème, eau de fleur d'oranger, soda."},
  {id:"remember-maine",name:"Remember the Maine",emoji:"⚓",origin:"Nouvelle-Orléans",sub:"Whisky",abv:30,iba:"Unforgettable",diff:2,desc:"Rye whiskey, vermouth rouge, cherry brandy, absinthe."},
  {id:"rusty-nail",name:"Rusty Nail",emoji:"🔨",origin:"Écosse/USA, 1950s",sub:"Whisky",abv:30,iba:"Unforgettable",diff:1,desc:"Scotch whisky, Drambuie. Deux ingrédients, résultat remarquable."},
  {id:"sazerac",name:"Sazerac",emoji:"🟡",origin:"La Nouvelle-Orléans, 1830s",sub:"Whisky",abv:32,iba:"Unforgettable",diff:3,desc:"Rye whiskey, absinthe, Peychaud's bitters, sucre. Le premier cocktail."},
  {id:"sidecar",name:"Sidecar",emoji:"🏍️",origin:"Paris, 1920s",sub:"Cognac",abv:24,iba:"Unforgettable",diff:2,desc:"Cognac, Cointreau, citron. Sobre et puissant. Le classique français."},
  {id:"stinger",name:"Stinger",emoji:"🌿",origin:"USA, 1890s",sub:"Cognac",abv:28,iba:"Unforgettable",diff:1,desc:"Cognac, crème de menthe blanche. Simple, frais, digestif."},
  {id:"tuxedo",name:"Tuxedo",emoji:"🎩",origin:"USA, 1880s",sub:"Gin",abv:28,iba:"Unforgettable",diff:2,desc:"Gin, vermouth sec, orange bitters, marasquin, absinthe."},
  {id:"vieux-carre",name:"Vieux Carré",emoji:"🎷",origin:"Nouvelle-Orléans, 1930s",sub:"Whisky",abv:28,iba:"Unforgettable",diff:2,desc:"Rye, cognac, vermouth rouge, Bénédictine, bitters. La Louisiane."},
  {id:"whiskey-sour",name:"Whiskey Sour",emoji:"🍯",origin:"USA, 1870s",sub:"Whisky",abv:18,iba:"Unforgettable",diff:2,desc:"Bourbon, citron, sucre, blanc d'œuf. Mousse soyeuse signature."},
  {id:"white-lady",name:"White Lady",emoji:"🤍",origin:"Londres, 1919",sub:"Gin",abv:22,iba:"Unforgettable",diff:2,desc:"Gin, triple sec, citron. Élégante version sèche du Cosmopolitan."},
  // CONTEMPORARY CLASSICS
  {id:"aperol-spritz",name:"Aperol Spritz",emoji:"🧡",origin:"Vénétie",sub:"Apéritif",abv:11,iba:"Contemporary",diff:1,desc:"Aperol, Prosecco, soda. Règle 3-2-1. L'apéritif mondial de l'été."},
  {id:"bellini",name:"Bellini",emoji:"🍑",origin:"Venise, 1948",sub:"Champagne",abv:8,iba:"Contemporary",diff:1,desc:"Prosecco, purée de pêche blanche. Inventé à l'Harry's Bar de Venise."},
  {id:"black-russian",name:"Black Russian",emoji:"🖤",origin:"Bruxelles, 1949",sub:"Vodka",abv:28,iba:"Contemporary",diff:1,desc:"Vodka, Kahlúa. Deux ingrédients, un cocktail iconique."},
  {id:"bloody-mary",name:"Bloody Mary",emoji:"🍅",origin:"Paris/New York",sub:"Vodka",abv:12,iba:"Contemporary",diff:2,desc:"Vodka, jus de tomate épicé. Le cocktail brunch le plus personnalisable."},
  {id:"caipirinha",name:"Caipirinha",emoji:"🇧🇷",origin:"Brésil",sub:"Cachaça",abv:20,iba:"Contemporary",diff:2,desc:"Cachaça, citron vert pilé, sucre. Le cocktail national brésilien."},
  {id:"cardinale",name:"Cardinale",emoji:"🔴",origin:"Italie",sub:"Gin",abv:22,iba:"Contemporary",diff:1,desc:"Gin, vermouth sec, Campari. Le Negroni plus sec."},
  {id:"champagne-cocktail",name:"Champagne Cocktail",emoji:"🥂",origin:"USA, 1860s",sub:"Champagne",abv:14,iba:"Contemporary",diff:1,desc:"Champagne, morceau de sucre, Angostura, cognac. Festif et intemporel."},
  {id:"corpse-reviver",name:"Corpse Reviver #2",emoji:"💀",origin:"UK, 1930",sub:"Gin",abv:24,iba:"Contemporary",diff:2,desc:"Parts égales gin, Cointreau, Lillet, citron + absinthe. Anti-gueule de bois."},
  {id:"cosmopolitan",name:"Cosmopolitan",emoji:"💕",origin:"New York, 1988",sub:"Vodka",abv:22,iba:"Contemporary",diff:2,desc:"Vodka citron, Cointreau, cranberry, citron vert. Sex and the City."},
  {id:"cuba-libre",name:"Cuba Libre",emoji:"🇨🇺",origin:"Cuba, 1900",sub:"Rhum",abv:10,iba:"Contemporary",diff:1,desc:"Rhum, cola, citron vert. Simple, efficace, historique."},
  {id:"french-75",name:"French 75",emoji:"💣",origin:"Paris, 1915",sub:"Gin",abv:16,iba:"Contemporary",diff:2,desc:"Gin, champagne, citron, sucre. Nommé d'après le canon de 75mm."},
  {id:"french-connection",name:"French Connection",emoji:"🇫🇷",origin:"France",sub:"Cognac",abv:26,iba:"Contemporary",diff:1,desc:"Parts égales cognac et amaretto. Court, doux, chaleureux."},
  {id:"garibaldi",name:"Garibaldi",emoji:"🍊",origin:"Italie",sub:"Apéritif",abv:10,iba:"Contemporary",diff:1,desc:"Campari, jus d'orange pressé. Minimaliste et parfait."},
  {id:"grasshopper",name:"Grasshopper",emoji:"🟢",origin:"Nouvelle-Orléans, 1918",sub:"Crème de menthe",abv:20,iba:"Contemporary",diff:1,desc:"Crème de menthe verte, crème de cacao, crème. Vert et dessert."},
  {id:"hemingway",name:"Hemingway Special",emoji:"🎣",origin:"La Havane, 1920s",sub:"Rhum",abv:20,iba:"Contemporary",diff:2,desc:"Rhum blanc, citron vert, marasquin, pamplemousse. Sans sucre."},
  {id:"horses-neck",name:"Horse's Neck",emoji:"🐴",origin:"USA, 1890s",sub:"Cognac",abv:14,iba:"Contemporary",diff:1,desc:"Cognac ou bourbon, ginger ale, zeste de citron en spirale."},
  {id:"irish-coffee",name:"Irish Coffee",emoji:"☘️",origin:"Irlande, 1943",sub:"Whisky",abv:15,iba:"Contemporary",diff:2,desc:"Café chaud, Irish whiskey, sucre brun, crème flottante."},
  {id:"kir",name:"Kir",emoji:"🍇",origin:"Bourgogne",sub:"Vin blanc",abv:12,iba:"Contemporary",diff:1,desc:"Vin blanc, crème de cassis. Créé par le maire Félix Kir de Dijon."},
  {id:"lemon-drop",name:"Lemon Drop",emoji:"🍋",origin:"San Francisco, 1970s",sub:"Vodka",abv:22,iba:"Contemporary",diff:2,desc:"Vodka, triple sec, citron, sirop. Acide, sucré, bord de sucre."},
  {id:"long-island",name:"Long Island Iced Tea",emoji:"🫖",origin:"USA, 1970s",sub:"Multi",abv:22,iba:"Contemporary",diff:3,desc:"Vodka, tequila, rhum, gin, triple sec, citron, cola. 22% masqués."},
  {id:"mai-tai",name:"Mai Tai",emoji:"🌺",origin:"Oakland, 1944",sub:"Rhum",abv:20,iba:"Contemporary",diff:2,desc:"Rhum vieilli, curaçao, orgeat, citron vert. 'Hors du monde' en tahitien."},
  {id:"margarita",name:"Margarita",emoji:"🌵",origin:"Mexique, 1940s",sub:"Tequila",abv:20,iba:"Contemporary",diff:2,desc:"Tequila, triple sec, citron vert, sel. Le cocktail mexicain universel."},
  {id:"mimosa",name:"Mimosa",emoji:"🌻",origin:"Londres/Paris, 1925",sub:"Champagne",abv:8,iba:"Contemporary",diff:1,desc:"Champagne, jus d'orange frais. 50/50. Le brunch en flûte."},
  {id:"mojito",name:"Mojito",emoji:"🌿",origin:"Cuba",sub:"Rhum",abv:11,iba:"Contemporary",diff:2,desc:"Rhum blanc, menthe, citron vert, sucre, soda. Rafraîchissant universel."},
  {id:"moscow-mule",name:"Moscow Mule",emoji:"🫚",origin:"USA, 1941",sub:"Vodka",abv:8,iba:"Contemporary",diff:1,desc:"Vodka, ginger beer piquant, citron vert. Mug en cuivre."},
  {id:"penicillin",name:"Penicillin",emoji:"💉",origin:"New York, 2005",sub:"Whisky",abv:22,iba:"Contemporary",diff:3,desc:"Blended Scotch, Islay Scotch, citron, miel-gingembre. Chef-d'œuvre moderne."},
  {id:"pina-colada",name:"Piña Colada",emoji:"🍍",origin:"Porto Rico, 1954",sub:"Rhum",abv:13,iba:"Contemporary",diff:2,desc:"Rhum, crème de coco, ananas. Le goût des vacances."},
  {id:"pisco-sour",name:"Pisco Sour",emoji:"🇵🇪",origin:"Lima, 1920s",sub:"Pisco",abv:20,iba:"Contemporary",diff:2,desc:"Pisco, citron vert, sucre, blanc d'œuf, Angostura. Pérou/Chili."},
  {id:"sea-breeze",name:"Sea Breeze",emoji:"🌊",origin:"USA, 1970s",sub:"Vodka",abv:12,iba:"Contemporary",diff:1,desc:"Vodka, cranberry, pamplemousse. Frais, fruité, léger."},
  {id:"sex-beach",name:"Sex on the Beach",emoji:"🏖️",origin:"USA, 1987",sub:"Vodka",abv:14,iba:"Contemporary",diff:1,desc:"Vodka, schnapps pêche, OJ, cranberry. Fruité et festif."},
  {id:"singapore-sling",name:"Singapore Sling",emoji:"🇸🇬",origin:"Singapour, 1915",sub:"Gin",abv:15,iba:"Contemporary",diff:3,desc:"Gin, Cherry Heering, Cointreau, Bénédictine, ananas, citron."},
  {id:"tequila-sunrise",name:"Tequila Sunrise",emoji:"🌅",origin:"Arizona, 1970s",sub:"Tequila",abv:14,iba:"Contemporary",diff:1,desc:"Tequila, jus d'orange, grenadine. Le coucher de soleil en verre."},
  {id:"white-russian",name:"White Russian",emoji:"☁️",origin:"Belgique, 1949",sub:"Vodka",abv:22,iba:"Contemporary",diff:1,desc:"Vodka, Kahlúa, crème. The Dude approuve. Doux et réconfortant."},
  {id:"zombie",name:"Zombie",emoji:"🧟",origin:"Los Angeles, 1934",sub:"Rhum",abv:30,iba:"Contemporary",diff:3,desc:"3 rhums, brandy abricot, citrons, grenadine, absinthe. Limité à 2/client."},
  // NEW ERA
  {id:"b52",name:"B-52",emoji:"💥",origin:"Banff, Canada, 1977",sub:"Shooters",abv:24,iba:"New Era",diff:2,desc:"Kahlúa, Baileys, Grand Marnier. 3 couches superposées. Flambé optionnel."},
  {id:"barracuda",name:"Barracuda",emoji:"🐟",origin:"Italie, 1960s",sub:"Rhum",abv:16,iba:"New Era",diff:2,desc:"Rhum blanc, Galliano, ananas, citron vert, Prosecco. Tropical et pétillant."},
  {id:"bramble",name:"Bramble",emoji:"🫐",origin:"Londres, 1984",sub:"Gin",abv:18,iba:"New Era",diff:2,desc:"Gin, citron, sucre, crème de mûre. Dick Bradsell. Estival parfait."},
  {id:"dark-stormy",name:"Dark 'n' Stormy",emoji:"⛈️",origin:"Bermudes",sub:"Rhum",abv:10,iba:"New Era",diff:1,desc:"Rhum brun (Goslings), ginger beer. Cocktail national des Bermudes."},
  {id:"dirty-martini",name:"Dirty Martini",emoji:"🫒",origin:"USA, 1901",sub:"Gin/Vodka",abv:30,iba:"New Era",diff:2,desc:"Gin ou vodka, vermouth sec, eau de cornichons. Salé, sec, adulte."},
  {id:"espresso-martini",name:"Espresso Martini",emoji:"☕",origin:"Londres, 1983",sub:"Vodka",abv:20,iba:"New Era",diff:2,desc:"Vodka, espresso, Kahlúa. Mousse caféinée. Dick Bradsell encore."},
  {id:"french-martini",name:"French Martini",emoji:"🍇",origin:"New York, 1980s",sub:"Vodka",abv:18,iba:"New Era",diff:2,desc:"Vodka, Chambord, ananas. Léger, fruité, mousse naturelle."},
  {id:"gin-basil",name:"Gin Basil Smash",emoji:"🌿",origin:"Hambourg, 2008",sub:"Gin",abv:18,iba:"New Era",diff:2,desc:"Gin, basilic frais, citron, sucre. Moderne, herbacé, rafraîchissant."},
  {id:"hugo",name:"Hugo Spritz",emoji:"🌸",origin:"Tyrol du Sud, 2005",sub:"Elderflower",abv:9,iba:"New Era",diff:1,desc:"Prosecco, sirop de sureau, menthe, soda. L'Aperol Spritz floral."},
  {id:"kamikaze",name:"Kamikaze",emoji:"🎯",origin:"USA, 1970s",sub:"Vodka",abv:22,iba:"New Era",diff:1,desc:"Vodka, triple sec, citron vert. Un Cosmopolitan sans cranberry."},
  {id:"naked-famous",name:"Naked and Famous",emoji:"⭐",origin:"New York, 2011",sub:"Mezcal",abv:20,iba:"New Era",diff:2,desc:"Parts égales mezcal, Aperol, Chartreuse jaune, citron vert."},
  {id:"paper-plane",name:"Paper Plane",emoji:"✈️",origin:"New York, 2007",sub:"Whisky",abv:22,iba:"New Era",diff:2,desc:"Parts égales bourbon, Aperol, Amaro Nonino, citron. Moderniste."},
  {id:"porn-star",name:"Porn Star Martini",emoji:"🌟",origin:"Londres, 2002",sub:"Vodka",abv:18,iba:"New Era",diff:2,desc:"Vodka vanille, Passoa, fruit de la passion, ananas + shot Champagne."},
  {id:"russian-spring",name:"Russian Spring Punch",emoji:"🍓",origin:"Londres, 1988",sub:"Vodka",abv:14,iba:"New Era",diff:2,desc:"Vodka, crème de cassis, citron, sucre, Champagne. Pétillant."},
  {id:"spicy-fifty",name:"Spicy Fifty",emoji:"🌶️",origin:"Londres",sub:"Vodka",abv:18,iba:"New Era",diff:2,desc:"Vodka, elderflower, citron, miel, piment. Sucré-épicé-floral."},
  {id:"spritz-veneziano",name:"Spritz Veneziano",emoji:"🇮🇹",origin:"Venise",sub:"Apéritif",abv:10,iba:"New Era",diff:1,desc:"Vin blanc, soda, Campari ou Aperol. L'ancêtre de l'Aperol Spritz."},
  {id:"tommys",name:"Tommy's Margarita",emoji:"🌮",origin:"San Francisco, 1990",sub:"Tequila",abv:18,iba:"New Era",diff:2,desc:"Tequila 100% agave, citron vert, sirop d'agave. Sans triple sec."},
  {id:"vampiro",name:"Vampiro",emoji:"🧛",origin:"Mexique",sub:"Tequila",abv:16,iba:"New Era",diff:2,desc:"Tequila, jus de tomate, citronnade, grenadine, sauce piquante."},
  {id:"vesper",name:"Vesper Martini",emoji:"🎴",origin:"Fiction (Bond), 1953",sub:"Gin/Vodka",abv:30,iba:"New Era",diff:2,desc:"Gin, vodka, Lillet Blanc. La recette de Bond. Shaken not stirred."},
  {id:"yellow-bird",name:"Yellow Bird",emoji:"🐦",origin:"Antilles, 1950s",sub:"Rhum",abv:20,iba:"New Era",diff:2,desc:"Rhum blanc, Galliano, Cointreau, citron vert. Tropical et jaune."},
  // POPULAIRES HORS IBA
  {id:"amaretto-sour",name:"Amaretto Sour",emoji:"🍒",origin:"USA",sub:"Amaretto",abv:16,iba:null,diff:2,desc:"Amaretto, bourbon, citron, blanc d'œuf. La renaissance de l'amaretto."},
  {id:"bahama-mama",name:"Bahama Mama",emoji:"🌴",origin:"Bahamas",sub:"Rhum",abv:16,iba:null,diff:2,desc:"Rhum, café, coco, ananas, citron, grenadine. Tropical et festif."},
  {id:"bees-knees",name:"Bee's Knees",emoji:"🐝",origin:"USA, Prohibition",sub:"Gin",abv:22,iba:null,diff:2,desc:"Gin, miel, citron. Le cocktail Prohibition pour masquer le mauvais gin."},
  {id:"blue-lagoon",name:"Blue Lagoon",emoji:"🔵",origin:"USA, 1972",sub:"Vodka",abv:14,iba:null,diff:1,desc:"Vodka, Blue Curaçao, limonade. Bleu électrique, doux et visuel."},
  {id:"caipiroska",name:"Caipiroska",emoji:"🍋",origin:"Brésil/International",sub:"Vodka",abv:18,iba:null,diff:2,desc:"Vodka, citron vert pilé, sucre. La Caipirinha version vodka."},
  {id:"chilcano",name:"Chilcano",emoji:"🇵🇪",origin:"Pérou",sub:"Pisco",abv:14,iba:null,diff:1,desc:"Pisco, ginger ale, citron vert, Angostura. Le Moscow Mule péruvien."},
  {id:"dark-stormy2",name:"Dark & Stormy (classic)",emoji:"⛈️",origin:"Bermudes",sub:"Rhum",abv:10,iba:null,diff:1,desc:"Rhum brun, ginger beer, citron vert, Angostura. Variante classique."},
  {id:"el-presidente",name:"El Presidente",emoji:"🏛️",origin:"Cuba, 1920s",sub:"Rhum",abv:22,iba:null,diff:2,desc:"Rhum blanc, curaçao, vermouth blanc, grenadine. Raffiné et cubain."},
  {id:"fernet-cola",name:"Fernet & Cola",emoji:"🇦🇷",origin:"Argentine",sub:"Fernet",abv:12,iba:null,diff:1,desc:"Fernet-Branca, cola. Boisson nationale non-officielle de l'Argentine."},
  {id:"fuzzy-navel",name:"Fuzzy Navel",emoji:"🍑",origin:"USA, 1980s",sub:"Vodka",abv:12,iba:null,diff:1,desc:"Vodka, schnapps pêche, jus d'orange. Simple, fruité, festif."},
  {id:"gimlet",name:"Gimlet",emoji:"🎯",origin:"UK Royal Navy, 1928",sub:"Gin",abv:22,iba:null,diff:1,desc:"Gin, jus de citron vert, sirop. Classique du marin britannique."},
  {id:"godfather",name:"Godfather",emoji:"🎬",origin:"USA, 1970s",sub:"Whisky",abv:30,iba:null,diff:1,desc:"Scotch whisky, amaretto. Deux ingrédients. Le Parrain en verre."},
  {id:"greyhound",name:"Greyhound",emoji:"🐕",origin:"USA, 1945",sub:"Vodka",abv:12,iba:null,diff:1,desc:"Vodka, jus de pamplemousse. Version salée = Salty Dog."},
  {id:"harvey",name:"Harvey Wallbanger",emoji:"🏄",origin:"USA, 1950s",sub:"Vodka",abv:12,iba:null,diff:1,desc:"Vodka, jus d'orange, Galliano. Le Screwdriver version italienne."},
  {id:"hurricane",name:"Hurricane",emoji:"🌀",origin:"Nouvelle-Orléans, 1940s",sub:"Rhum",abv:24,iba:null,diff:2,desc:"3 rhums, citrons, OJ, ananas, passion, grenadine. Bourbon Street."},
  {id:"jungle-bird",name:"Jungle Bird",emoji:"🦜",origin:"Kuala Lumpur, 1978",sub:"Rhum",abv:20,iba:null,diff:2,desc:"Rhum noir, Campari, ananas, citron, sucre. L'apéritif tropical."},
  {id:"kalimotxo",name:"Kalimotxo",emoji:"🍷",origin:"Espagne Basque",sub:"Vin/Cola",abv:7,iba:null,diff:1,desc:"Vin rouge, cola 50/50. Boisson populaire espagnole sans prétention."},
  {id:"kir-royale",name:"Kir Royale",emoji:"👑",origin:"Bourgogne",sub:"Champagne",abv:13,iba:null,diff:1,desc:"Champagne brut, crème de cassis. La version festive et pétillante du Kir."},
  {id:"mezcal-negroni",name:"Mezcal Negroni",emoji:"🌵",origin:"Mexique/USA",sub:"Mezcal",abv:26,iba:null,diff:1,desc:"Mezcal, Campari, vermouth rouge. Le Negroni aux notes fumées."},
  {id:"mint-julep",name:"Mint Julep",emoji:"🏇",origin:"USA, 1800s",sub:"Whisky",abv:22,iba:null,diff:2,desc:"Bourbon, menthe fraîche, sucre, glace pilée. Le cocktail du Kentucky Derby."},
  {id:"mojito-royal",name:"Mojito Royal",emoji:"👑",origin:"France",sub:"Rhum/Champagne",abv:14,iba:null,diff:2,desc:"Mojito classique avec Champagne à la place du soda. Version luxe."},
  {id:"negroni-sbagliato",name:"Negroni Sbagliato",emoji:"🥂",origin:"Milan, 1972",sub:"Apéritif",abv:14,iba:null,diff:1,desc:"Campari, vermouth rouge, Prosecco. Le Negroni 'raté' — un chef-d'œuvre."},
  {id:"new-york-sour",name:"New York Sour",emoji:"🍷",origin:"Chicago, 1880s",sub:"Whisky",abv:18,iba:null,diff:2,desc:"Whiskey Sour avec float de vin rouge. Deux couches visuelles."},
  {id:"oaxacan-of",name:"Oaxacan Old Fashioned",emoji:"🌿",origin:"New York, 2007",sub:"Mezcal",abv:32,iba:null,diff:2,desc:"Tequila reposado, mezcal, agave, mole bitters. Phil Ward — PDT."},
  {id:"paloma",name:"Paloma",emoji:"🕊️",origin:"Mexique",sub:"Tequila",abv:12,iba:null,diff:1,desc:"Tequila, pamplemousse, sel. Plus populaire que la Margarita au Mexique."},
  {id:"painkiller",name:"Painkiller",emoji:"🌞",origin:"Îles Vierges, 1970s",sub:"Rhum",abv:18,iba:null,diff:1,desc:"Rhum, crème coco, ananas, OJ. Piña Colada plus musclée des Caraïbes."},
  {id:"rob-roy",name:"Rob Roy",emoji:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",origin:"New York, 1894",sub:"Whisky",abv:28,iba:null,diff:2,desc:"Scotch whisky, vermouth rouge, Angostura. Le Manhattan au scotch."},
  {id:"rum-runner",name:"Rum Runner",emoji:"🏃",origin:"Floride, 1950s",sub:"Rhum",abv:18,iba:null,diff:2,desc:"Rhum brun, banane, mûre, ananas, citron, grenadine. Tropical."},
  {id:"screwdriver",name:"Screwdriver",emoji:"🍊",origin:"USA, 1940s",sub:"Vodka",abv:12,iba:null,diff:1,desc:"Vodka, jus d'orange frais. Le plus simple des cocktails vodka."},
  {id:"sgroppino",name:"Sgroppino",emoji:"🍋",origin:"Venise",sub:"Vodka/Prosecco",abv:10,iba:null,diff:1,desc:"Sorbet citron, vodka, Prosecco. Dessert et cocktail en un. Venise."},
  {id:"sloe-gin-fizz",name:"Sloe Gin Fizz",emoji:"🫐",origin:"UK/USA",sub:"Gin",abv:12,iba:null,diff:1,desc:"Sloe gin, citron, sucre, soda. Fruité, rose, léger. Idéal en journée."},
  {id:"southside",name:"Southside",emoji:"🌿",origin:"Chicago, 1920s",sub:"Gin",abv:18,iba:null,diff:2,desc:"Gin, citron, sucre, menthe fraîche. Le Mojito du gin."},
  {id:"strawberry-daiquiri",name:"Strawberry Daiquiri",emoji:"🍓",origin:"Cuba/USA",sub:"Rhum",abv:14,iba:null,diff:2,desc:"Rhum blanc, fraises fraîches, citron vert, sirop. Blendé ou shaké."},
  {id:"tom-collins",name:"Tom Collins",emoji:"🍋",origin:"USA, 1870s",sub:"Gin",abv:12,iba:null,diff:1,desc:"Gin, citron, sucre, soda. Le long drink fondamental du gin."},
  {id:"vodka-sour",name:"Vodka Sour",emoji:"🟡",origin:"USA",sub:"Vodka",abv:16,iba:null,diff:2,desc:"Vodka, citron, sucre, blanc d'œuf. Le Whiskey Sour version neutre."},
  {id:"woo-woo",name:"Woo Woo",emoji:"💋",origin:"USA, 1980s",sub:"Vodka",abv:16,iba:null,diff:1,desc:"Vodka, schnapps pêche, cranberry. Le cocktail d'une nuit festive."},
];

const BEER_INDEX = [
  {id:"lager",name:"Lager / Blonde",emoji:"🍺",sub:"Service",desc:"Fermentation basse, dorée, légère. La bière mondiale de référence.",diff:1},
  {id:"ipa",name:"IPA",emoji:"🍻",sub:"Craft",desc:"Houblonnée, amère, aromatique. Agrumes et résine. La reine craft.",diff:2},
  {id:"double-ipa",name:"Double IPA",emoji:"🔥",sub:"Craft",desc:"IPA amplifiée : plus de houblon, plus d'alcool, plus d'arômes.",diff:2},
  {id:"neipa",name:"NEIPA (New England IPA)",emoji:"🥭",sub:"Craft",desc:"Trouble, douce, fruitée. Houblon juteux sans amertume agressive.",diff:2},
  {id:"stout",name:"Stout / Guinness",emoji:"🖤",sub:"Service",desc:"Noire, crémeuse, café et chocolat. La Guinness est la référence.",diff:2},
  {id:"imperial-stout",name:"Imperial Stout",emoji:"🔮",sub:"Craft",desc:"Stout extrême : alcool élevé, café intense, complexité maximale.",diff:3},
  {id:"blanche",name:"Blanche / Witbier",emoji:"☁️",sub:"Service",desc:"Trouble, épicée (coriandre, orange), légère. Hoegaarden.",diff:1},
  {id:"saison",name:"Saison / Farmhouse Ale",emoji:"🌾",sub:"Craft",desc:"Fermentation haute, épicée, fruitée, légèrement acide. Belge.",diff:2},
  {id:"ambree",name:"Ambrée / Red Ale",emoji:"🍂",sub:"Service",desc:"Robe acajou, caramel, légèrement maltée. Entre blonde et brune.",diff:1},
  {id:"brune",name:"Brune / Dark Ale",emoji:"🍫",sub:"Service",desc:"Maltée, caramel, toffee, fruits secs. Plus douce que la stout.",diff:1},
  {id:"trappiste",name:"Bière Trappiste",emoji:"⛪",sub:"Spéciale",desc:"Brassée par des moines cisterciens. Complexe, forte, refermentée.",diff:3},
  {id:"kriek",name:"Kriek / Lambic",emoji:"🍒",sub:"Spéciale",desc:"Lambic fermenté sur cerises. Acidulé, fruité. Gueuse = sans fruits.",diff:3},
  {id:"sour",name:"Sour Beer",emoji:"🍋",sub:"Craft",desc:"Délibérément acide. Gose, Berliner Weisse, Flanders Red.",diff:2},
  {id:"pale-ale",name:"Pale Ale / APA",emoji:"🌟",sub:"Craft",desc:"Équilibre malts/houblon. Moins amère que l'IPA, plus florale.",diff:1},
  {id:"session",name:"Session IPA",emoji:"💧",sub:"Craft",desc:"IPA légère (<4.5% ABV). Arômes intenses sans alcool excessif.",diff:1},
];

const WINE_INDEX = [
  {id:"rouge",name:"Vin Rouge",emoji:"🍷",sub:"Service",desc:"Des légers fruités aux puissants tanniques. Complexe et indispensable.",diff:2},
  {id:"blanc",name:"Vin Blanc",emoji:"🥂",sub:"Service",desc:"Vif et minéral ou beurré et boisé. Idéal avec la mer.",diff:2},
  {id:"rose",name:"Vin Rosé",emoji:"🌸",sub:"Service",desc:"Sec de Provence ou moelleux. Servir très frais.",diff:1},
  {id:"champagne",name:"Champagne & Effervescents",emoji:"🍾",sub:"Service",desc:"Bulles, fraîcheur, fête. Champagne, Prosecco, Crémant, Cava.",diff:2},
  {id:"porto",name:"Porto & Vins Fortifiés",emoji:"🔮",sub:"Fortifiés",desc:"Porto, Madère, Sherry, Banyuls, Muscat. Fortifiés et complexes.",diff:2},
  {id:"sake",name:"Saké",emoji:"🍶",sub:"Japon",desc:"Alcool de riz japonais. Junmai, Ginjo, Daiginjo. Froid ou chaud.",diff:3},
  {id:"nature",name:"Vin Nature / Bio",emoji:"🌱",sub:"Tendance",desc:"Sans intrants. Levures indigènes, SO2 minimal. Goûts francs.",diff:3},
  {id:"orange-wine",name:"Vin Orange",emoji:"🟠",sub:"Tendance",desc:"Vin blanc macéré sur peaux. Ambre, tannique, oxydatif.",diff:3},
  {id:"dessert",name:"Vins Moelleux & Doux",emoji:"🍯",sub:"Dessert",desc:"Sauternes, Monbazillac, Coteaux d'Alsace. Sucrosité et complexité.",diff:2},
  {id:"sherry",name:"Sherry / Xérès",emoji:"🏺",sub:"Fortifiés",desc:"Fino, Manzanilla, Oloroso, PX. Vin fortifié d'Andalousie.",diff:3},
];

const COFFEE_INDEX = [
  {id:"espresso",name:"Espresso",emoji:"☕",sub:"Base",desc:"7g café, 9 bars, 25-30s, 25-30ml. La crema noisette est la signature.",diff:2},
  {id:"cappuccino",name:"Cappuccino",emoji:"☕",sub:"Lait",desc:"⅓ espresso, ⅓ lait vapeur, ⅓ mousse sèche. La règle des tiers.",diff:2},
  {id:"latte",name:"Café Latte / Flat White",emoji:"🥛",sub:"Lait",desc:"Espresso noyé dans lait vapeur soyeux. La toile du latte art.",diff:2},
  {id:"americano",name:"Americano / Allongé",emoji:"☕",sub:"Long",desc:"Espresso + eau chaude APRÈS. Long, moins concentré.",diff:1},
  {id:"macchiato",name:"Macchiato / Noisette",emoji:"☕",sub:"Court",desc:"'Taché' en italien. Espresso avec nuage de lait. La noisette française.",diff:1},
  {id:"cortado",name:"Cortado",emoji:"☕",sub:"Court",desc:"Espresso 'coupé' avec lait vapeur 1:1. Micro-mousse. Espagne.",diff:2},
  {id:"ristretto",name:"Ristretto",emoji:"☕",sub:"Court",desc:"Espresso très court : 15-20ml. Plus concentré, moins amer, plus sucré.",diff:3},
  {id:"cold-brew",name:"Cold Brew",emoji:"🧊",sub:"Froid",desc:"Infusion à froid 12-24h. Doux, peu acide, concentré. Jamais chauffé.",diff:2},
  {id:"affogato",name:"Affogato",emoji:"🍦",sub:"Dessert",desc:"Glace vanille noyée dans un espresso chaud. Dessert et café en un.",diff:1},
  {id:"irish-coffee",name:"Irish Coffee",emoji:"🥃",sub:"Alcoolisé",desc:"Café chaud, whiskey irlandais, sucre brun, crème flottante.",diff:2},
  {id:"viennois",name:"Viennois",emoji:"🎵",sub:"Crème",desc:"Double espresso, généreuse chantilly. Le café des salons de Vienne.",diff:1},
  {id:"cafe-brulot",name:"Café Brûlot",emoji:"🔥",sub:"Alcoolisé",desc:"Café fort, cognac flambé, clous de girofle, cannelle, zeste d'orange.",diff:3},
  {id:"drip",name:"Café Filtre / V60",emoji:"☕",sub:"Méthode",desc:"Eau chaude sur café moulu. V60, Chemex, percolateur. Extraction douce.",diff:2},
  {id:"aeropress",name:"AeroPress",emoji:"🔧",sub:"Méthode",desc:"Pression manuelle. Résultat proche espresso. Portable et polyvalent.",diff:2},
  {id:"turkish",name:"Café Turc / Ibrik",emoji:"🫖",sub:"Traditionnel",desc:"Café très fin bouilli 3 fois dans une cézve. Concentré, non filtré.",diff:3},
];

const AUTRES_INDEX = [
  // Mocktails
  {id:"virgin-mojito",name:"Virgin Mojito",emoji:"🌿",sub:"Mocktail",desc:"Mojito sans alcool. Menthe, citron vert, sirop de canne, soda. Aussi rafraîchissant.",diff:1},
  {id:"virgin-mary",name:"Virgin Mary",emoji:"🍅",sub:"Mocktail",desc:"Bloody Mary sans vodka. Toutes les épices, zéro alcool. Le 'Red Snapper'."},
  {id:"arnold-palmer",name:"Arnold Palmer",emoji:"🍋",sub:"Mocktail",desc:"50/50 thé glacé et limonade. Inventé par le golfeur. Simple et parfait.",diff:1},
  {id:"shirley-temple",name:"Shirley Temple",emoji:"🍒",sub:"Mocktail",desc:"Ginger ale, grenadine, jus d'orange. Créé pour la petite actrice.",diff:1},
  {id:"nojito",name:"Nojito",emoji:"🌱",sub:"Mocktail",desc:"Mojito sans alcool au concombre et basilic. Frais et original.",diff:1},
  {id:"virgin-pina-colada",name:"Virgin Piña Colada",emoji:"🍍",sub:"Mocktail",desc:"Ananas, crème de coco, glace mixée. Vacances garanties sans alcool.",diff:1},
  {id:"agua-fresca",name:"Agua Fresca",emoji:"🍉",sub:"Mocktail",desc:"Eau infusée fruits frais mexicaine. Pastèque, hibiscus, citron vert.",diff:1},
  // Shots & Shooters
  {id:"tequila-shot",name:"Tequila Shot",emoji:"🌵",sub:"Shot",desc:"Tequila avec sel et citron vert. La technique sel-shot-citron.",diff:1},
  {id:"jager-bomb",name:"Jäger Bomb",emoji:"💣",sub:"Shot",desc:"Red Bull + Jägermeister. Shot tombé dans le verre de Red Bull.",diff:1},
  {id:"sambuca-fly",name:"Sambuca Flambée",emoji:"🔥",sub:"Shot",desc:"Sambuca flambée avec 3 grains de café (la Mosca). Rituel italien.",diff:2},
  {id:"slippery",name:"Slippery Nipple",emoji:"🍑",sub:"Shot",desc:"Baileys, Sambuca. Deux couches superposées. Doux et anisé.",diff:2},
  {id:"boilermaker",name:"Boilermaker",emoji:"🍺",sub:"Shot",desc:"Shot de whiskey dans une pinte de bière. Le chaser classique américain.",diff:1},
  {id:"lemon-drop-shot",name:"Lemon Drop Shot",emoji:"🍋",sub:"Shot",desc:"Vodka, triple sec, citron. Froid avec bord de sucre. Festif.",diff:1},
  // Sangrias & Punches
  {id:"sangria-rouge",name:"Sangria Rouge",emoji:"🍷",sub:"Sangria/Punch",desc:"Vin rouge, brandy, oranges, citrons, sucre, soda. L'espagnol classique.",diff:1},
  {id:"sangria-blanche",name:"Sangria Blanche",emoji:"🍊",sub:"Sangria/Punch",desc:"Vin blanc, Triple sec, fruits blancs, soda, menthe. Version fraîche.",diff:1},
  {id:"sangria-cava",name:"Sangria Cava",emoji:"🥂",sub:"Sangria/Punch",desc:"Cava, pêches, fraises, brandy. Pétillante et festive. Estivale.",diff:1},
  {id:"punch-iles",name:"Punch des Îles",emoji:"🌴",sub:"Sangria/Punch",desc:"Rhum, ananas, passion, orange, grenadine. Le punch tropical de fête.",diff:1},
  {id:"vin-chaud",name:"Vin Chaud",emoji:"🫖",sub:"Sangria/Punch",desc:"Vin rouge, épices, oranges, cannelle, girofle. Réconfort hivernal.",diff:1},
  {id:"clerico",name:"Clericó / Tereré",emoji:"🍃",sub:"Sangria/Punch",desc:"Sangria uruguayenne ou mate glacé paraguayen. Grands formats festifs.",diff:1},
  // Digestifs
  {id:"cognac-dig",name:"Cognac / Armagnac",emoji:"🥃",sub:"Digestif",desc:"Eau-de-vie de raisin. Verre ballon, main sous le verre, 3cl. Après repas.",diff:2},
  {id:"calvados-dig",name:"Calvados",emoji:"🍎",sub:"Digestif",desc:"Eau-de-vie de pomme normande. Le trou normand — servi entre les plats.",diff:2},
  {id:"grappa-dig",name:"Grappa / Marc",emoji:"🍇",sub:"Digestif",desc:"Eau-de-vie de marc. Grappa italienne ou marc français. Robuste.",diff:2},
  {id:"chartreuse-dig",name:"Chartreuse",emoji:"🌿",sub:"Digestif",desc:"Liqueur de moines aux 130 plantes. Verte (55%) ou jaune (40%).",diff:1},
  {id:"fernet-dig",name:"Fernet / Amaro",emoji:"🌑",sub:"Digestif",desc:"Amers italiens complexes. Fernet-Branca, Averna, Cynar. Digestifs.",diff:1},
  {id:"absinthe-dig",name:"Absinthe",emoji:"💚",sub:"Digestif",desc:"La fée verte. Rituel de dilution avec eau glacée et sucre sur cuillère.",diff:3},
];

// ── CATEGORIES ──
const CATEGORIES = [
  {id:"cocktails",label:"Cocktails",emoji:"🍸",items:COCKTAIL_INDEX,tagline:"Tous les cocktails IBA officiels + les grands classiques populaires"},
  {id:"bieres",label:"Bières",emoji:"🍺",items:BEER_INDEX,tagline:"Service, styles et accords gastronomiques"},
  {id:"vins",label:"Vins",emoji:"🍷",items:WINE_INDEX,tagline:"Service, températures, accords et régions"},
  {id:"cafes",label:"Cafés",emoji:"☕",items:COFFEE_INDEX,tagline:"Techniques, dosages et méthodes d'extraction"},
  {id:"autres",label:"Autres",emoji:"✨",items:AUTRES_INDEX,tagline:"Mocktails, shots, sangrias, digestifs"},
];

const EQUIP_MODES = [{id:"ideal",label:"Idéal"},{id:"debrouille",label:"Débrouille"},{id:"rien",label:"Sans rien"}];

// ── AI GENERATION ──
async function generateRecipe(item, category) {
  const prompts = {
    cocktails: `Tu es un barman expert. Fiche cocktail "${item.name}" (${item.origin}).
JSON uniquement, sans markdown:
{"glass":"verre exact","ingredients":[{"name":"...","amount":"...cl ou unité","alternatives":["alt1","alt2","alt3"]}],"equipment":{"ideal":["..."],"debrouille":["subst concrète 1","subst 2"],"rien":["étape sans matériel + mesures improvisées"]},"steps":["étape 1","étape 2","étape 3","étape 4"],"variations":[{"name":"...","recipe":"..."}],"tips":"conseil pro"}`,
    bieres: `Expert bière. Fiche service "${item.name}".
JSON uniquement: {"temperature":"...","glass":"...","service_steps":["..."],"bouteille_steps":["..."],"alternatives":{"pb":"solution"},"accord":["..."],"style_notes":"...","examples":["marque1","marque2","marque3"]}`,
    vins: `Sommelier expert. Fiche service "${item.name}".
JSON uniquement: {"temperature":{"type":"temp"},"glass":"...","service_steps":["..."],"decantation":"...","alternatives":{"pb":"solution"},"accord":["..."],"cepages":["..."],"regions":["..."],"conservation":"..."}`,
    cafes: `Barista expert. Fiche "${item.name}".
JSON uniquement: {"dosage":{"param":"valeur"},"equipment":{"ideal":["..."],"debrouille":["..."],"rien":["..."]},"steps":["..."],"technique_lait":["..."],"alternatives_lait":["..."],"variations":[{"name":"...","recipe":"..."}],"tips":"..."}`,
    autres: `Barman expert. Fiche complète "${item.name}" (catégorie: ${item.sub}).
JSON uniquement: {"description_complete":"...","ingredients":[{"name":"...","amount":"...","alternatives":["..."]}],"equipment":{"ideal":["..."],"debrouille":["..."],"rien":["..."]},"steps":["..."],"tips":"...","notes":"info culturelle ou historique courte"}`,
  };

  const r = await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      model:"claude-sonnet-4-20250514",
      max_tokens:1000,
      messages:[{role:"user",content:prompts[category]||prompts.autres}]
    })
  });
  const data = await r.json();
  const txt = data.content.map(b=>b.text||"").join("");
  const clean = txt.replace(/```json|```/g,"").trim();
  const s = clean.indexOf("{"), e = clean.lastIndexOf("}");
  return JSON.parse(clean.slice(s,e+1));
}

// ── COMPONENTS ──
function Dots({n,max=3}) {
  return <div className="dots">{Array.from({length:max},(_,i)=><div key={i} className={`dot${i<n?" on":""}`}/>)}</div>;
}

function IngRow({ing}) {
  const [open,setOpen] = useState(false);
  const ha = ing.alternatives?.length>0;
  return (
    <div className="ing">
      <div className="ing-main">
        <span className="ing-amt">{ing.amount}</span>
        <span className="ing-name">{ing.name}</span>
        {ha&&<button className={`alt-tog${open?" on":""}`} onClick={()=>setOpen(!open)}>{open?"▲":"▼"} alts</button>}
      </div>
      {open&&ha&&(
        <div className="altpanel">
          <div className="alt-lbl">Alternatives</div>
          {ing.alternatives.map((a,i)=><div key={i} className="alt-item">{a}</div>)}
        </div>
      )}
    </div>
  );
}

function CocktailBody({data,equipMode}) {
  const eq = data.equipment||{};
  const equip = eq[equipMode]||eq.ideal||[];
  return(<>
    <div>
      <div className="stitle">Matériel — {equipMode==="ideal"?"Idéal":equipMode==="debrouille"?"Débrouille":"Sans rien"}</div>
      <div className="eqlist">{equip.map((e,i)=><div key={i} className="eqitem">{e}</div>)}</div>
      {equipMode==="rien"&&<div className="msbox"><div className="ms-title">Guide mesures improvisées</div>{MEASURES.map((m,i)=><div key={i} className="msrow"><span className="mscl">{m.cl}</span><span className="mseq">{m.eq}</span></div>)}</div>}
    </div>
    {data.ingredients&&<div><div className="stitle">Ingrédients & dosages</div><div className="ings">{data.ingredients.map((ing,i)=><IngRow key={i} ing={ing}/>)}</div></div>}
    {data.steps&&<div><div className="stitle">Préparation</div><div className="steps">{data.steps.map((s,i)=><div key={i} className="step" style={{animationDelay:`${i*60}ms`}}><div className="snum">{i+1}</div><div className="stxt">{s}</div></div>)}</div></div>}
    {data.variations?.length>0&&<div><div className="stitle">Variations</div>{data.variations.map((v,i)=><div key={i} className="var-item"><div className="var-name">{v.name}</div><div className="var-recipe">{v.recipe}</div></div>)}</div>}
    {data.tips&&<div className="tip"><span className="tip-ico">💡</span>{data.tips}</div>}
  </>);
}

function BeerBody({data}) {
  return(<>
    {data.temperature&&<div><div className="stitle">Température</div><div className="scard" style={{background:"var(--s2)",border:"1px solid var(--border)",borderRadius:"var(--r2)",padding:"14px"}}><div className="sval big">{typeof data.temperature==="string"?data.temperature:Object.values(data.temperature).join(" / ")}</div></div></div>}
    {data.glass&&<div className="tip"><span className="tip-ico">🥂</span>{data.glass}</div>}
    {data.style_notes&&<div className="tip"><span className="tip-ico">📝</span>{data.style_notes}</div>}
    {data.service_steps&&<div><div className="stitle">Service pression</div><div className="steps">{data.service_steps.map((s,i)=><div key={i} className="step" style={{animationDelay:`${i*60}ms`}}><div className="snum">{i+1}</div><div className="stxt">{s}</div></div>)}</div></div>}
    {data.bouteille_steps&&<div><div className="stitle">Service bouteille</div><div className="steps">{data.bouteille_steps.map((s,i)=><div key={i} className="step" style={{animationDelay:`${i*60}ms`}}><div className="snum">{i+1}</div><div className="stxt">{s}</div></div>)}</div></div>}
    {data.alternatives&&<div><div className="stitle">Dépannage</div><div className="eqlist">{Object.entries(data.alternatives).map(([k,v],i)=><div key={i} className="eqitem"><strong style={{color:"var(--text)",marginRight:"6px"}}>{k} :</strong>{v}</div>)}</div></div>}
    {data.accord&&<div><div className="stitle">Accords</div><div className="accords">{data.accord.map((a,i)=><span key={i} className="accord">{a}</span>)}</div></div>}
    {data.examples&&<div><div className="stitle">Exemples emblématiques</div><div className="accords">{data.examples.map((e,i)=><span key={i} className="accord">{e}</span>)}</div></div>}
  </>);
}

function WineBody({data}) {
  return(<>
    {data.temperature&&<div><div className="stitle">Températures de service</div><div className="sgrid">{typeof data.temperature==="string"?<div className="scard"><div className="sval big">{data.temperature}</div></div>:Object.entries(data.temperature).map(([k,v],i)=><div key={i} className="scard"><div className="slbl">{k}</div><div className="sval big">{v}</div></div>)}</div></div>}
    {data.glass&&<div className="tip"><span className="tip-ico">🥂</span>{data.glass}</div>}
    {data.decantation&&<div className="tip"><span className="tip-ico">🫙</span>{data.decantation}</div>}
    {data.service_steps&&<div><div className="stitle">Service</div><div className="steps">{data.service_steps.map((s,i)=><div key={i} className="step" style={{animationDelay:`${i*60}ms`}}><div className="snum">{i+1}</div><div className="stxt">{s}</div></div>)}</div></div>}
    {data.alternatives&&<div><div className="stitle">Dépannage</div><div className="eqlist">{Object.entries(data.alternatives).map(([k,v],i)=><div key={i} className="eqitem"><strong style={{color:"var(--text)",marginRight:"6px"}}>{k} :</strong>{v}</div>)}</div></div>}
    {data.cepages&&<div><div className="stitle">Cépages</div><div className="accords">{data.cepages.map((c,i)=><span key={i} className="accord">{c}</span>)}</div></div>}
    {data.regions&&<div><div className="stitle">Régions</div><div className="accords">{data.regions.map((r,i)=><span key={i} className="accord">{r}</span>)}</div></div>}
    {data.accord&&<div><div className="stitle">Accords mets</div><div className="accords">{data.accord.map((a,i)=><span key={i} className="accord">{a}</span>)}</div></div>}
    {data.conservation&&<div className="tip"><span className="tip-ico">📦</span>{data.conservation}</div>}
  </>);
}

function CoffeeBody({data,equipMode}) {
  const eq=data.equipment||{};
  const equip=eq[equipMode]||eq.ideal||[];
  return(<>
    {data.dosage&&<div><div className="stitle">Dosages</div><div className="dtable">{Object.entries(data.dosage).map(([k,v],i)=>typeof v==="string"?<div key={i} className="drow"><span className="dkey">{k}</span><span className="dval">{v}</span></div>:null)}</div></div>}
    {eq&&<div><div className="stitle">Matériel — {equipMode==="ideal"?"Idéal":equipMode==="debrouille"?"Débrouille":"Sans rien"}</div><div className="eqlist">{equip.map((e,i)=><div key={i} className="eqitem">{e}</div>)}</div></div>}
    {data.steps&&<div><div className="stitle">Préparation</div><div className="steps">{data.steps.map((s,i)=><div key={i} className="step" style={{animationDelay:`${i*60}ms`}}><div className="snum">{i+1}</div><div className="stxt">{s}</div></div>)}</div></div>}
    {data.technique_lait&&<div><div className="stitle">Technique lait vapeur</div><div className="eqlist">{data.technique_lait.map((t,i)=><div key={i} className="eqitem">{t}</div>)}</div></div>}
    {data.alternatives_lait&&<div><div className="stitle">Laits alternatifs</div><div className="eqlist">{data.alternatives_lait.map((a,i)=><div key={i} className="eqitem">{a}</div>)}</div></div>}
    {data.variations?.length>0&&<div><div className="stitle">Variations</div>{data.variations.map((v,i)=><div key={i} className="var-item"><div className="var-name">{v.name}</div><div className="var-recipe">{v.recipe}</div></div>)}</div>}
    {data.tips&&<div className="tip"><span className="tip-ico">💡</span>{data.tips}</div>}
  </>);
}

function AutresBody({data,equipMode}) {
  const eq=data.equipment||{};
  const equip=eq[equipMode]||eq.ideal||[];
  return(<>
    {data.description_complete&&<div className="tip"><span className="tip-ico">📖</span>{data.description_complete}</div>}
    {eq&&<div><div className="stitle">Matériel — {equipMode==="ideal"?"Idéal":equipMode==="debrouille"?"Débrouille":"Sans rien"}</div><div className="eqlist">{equip.map((e,i)=><div key={i} className="eqitem">{e}</div>)}</div></div>}
    {data.ingredients&&<div><div className="stitle">Ingrédients</div><div className="ings">{data.ingredients.map((ing,i)=><IngRow key={i} ing={ing}/>)}</div></div>}
    {data.steps&&<div><div className="stitle">Préparation</div><div className="steps">{data.steps.map((s,i)=><div key={i} className="step" style={{animationDelay:`${i*60}ms`}}><div className="snum">{i+1}</div><div className="stxt">{s}</div></div>)}</div></div>}
    {data.tips&&<div className="tip"><span className="tip-ico">💡</span>{data.tips}</div>}
    {data.notes&&<div className="tip"><span className="tip-ico">📚</span>{data.notes}</div>}
  </>);
}

function Modal({item,category,equipMode,setEquipMode,onClose}) {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const loaded = useRef(false);

  const load = useCallback(async()=>{
    try { setLoading(true); setError(null);
      const r = await generateRecipe(item,category);
      setData(r);
    } catch(e) { setError("Génération échouée. Réessayez."); }
    finally { setLoading(false); }
  },[item.id,category]);

  useEffect(()=>{ if(!loaded.current){ loaded.current=true; load(); } },[]);

  const showEquip = category==="cocktails"||category==="cafes"||category==="autres";
  const dlabel = n=>n===1?"Facile":n===2?"Moyen":"Expert";

  return(
    <div className="ov" onClick={e=>{if(e.target.classList.contains("ov"))onClose()}}>
      <div className="modal">
        <div className="mhdr">
          <div className="memo">{item.emoji}</div>
          <div style={{flex:1}}>
            <div className="mtitle">{item.name}</div>
            <div className="morigin">
              {item.origin&&<span>{item.origin}</span>}
              {item.iba&&<span className="badge bp">{item.iba}</span>}
              {item.abv&&<span className="badge br">{item.abv}% ABV</span>}
              {item.diff&&<span className="badge bb">{dlabel(item.diff)}</span>}
            </div>
            <div className="mdesc">{item.desc}</div>
          </div>
          <button className="mclose" onClick={onClose}>✕</button>
        </div>
        {showEquip&&(
          <div className="etog">
            {EQUIP_MODES.map(m=><button key={m.id} className={`ebtn${equipMode===m.id?" on":""}`} onClick={()=>setEquipMode(m.id)}>{m.label}</button>)}
          </div>
        )}
        <div className="mbody">
          {loading&&(
            <div className="loading">
              <div className="ldots"><div className="ldot"/><div className="ldot"/><div className="ldot"/></div>
              <div className="loading-txt">Génération en cours…</div>
            </div>
          )}
          {error&&(
            <div style={{textAlign:"center",padding:"40px 20px"}}>
              <div style={{color:"#c94c4c",marginBottom:"12px"}}>{error}</div>
              <button onClick={load} style={{background:"var(--s3)",border:"1px solid var(--border2)",borderRadius:"8px",padding:"8px 20px",color:"var(--gl)",cursor:"pointer",fontFamily:"var(--fd)",fontSize:"11px",letterSpacing:".08em"}}>↻ Réessayer</button>
            </div>
          )}
          {data&&!loading&&!error&&(
            <>
              {category==="cocktails"&&<CocktailBody data={data} equipMode={equipMode}/>}
              {category==="bieres"&&<BeerBody data={data}/>}
              {category==="vins"&&<WineBody data={data}/>}
              {category==="cafes"&&<CoffeeBody data={data} equipMode={equipMode}/>}
              {category==="autres"&&<AutresBody data={data} equipMode={equipMode}/>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──
export default function BarGuide() {
  const [activeCat,setActiveCat] = useState("cocktails");
  const [selected,setSelected] = useState(null);
  const [equipMode,setEquipMode] = useState("ideal");
  const [searchQ,setSearchQ] = useState("");
  const [activeSub,setActiveSub] = useState("Tous");

  const cat = CATEGORIES.find(c=>c.id===activeCat);
  const items = cat?.items||[];

  const subcats = useMemo(()=>{
    const sc=[...new Set(items.map(i=>i.sub).filter(Boolean))];
    return["Tous",...sc];
  },[items]);

  const filtered = useMemo(()=>{
    let list=items;
    if(activeSub!=="Tous") list=list.filter(i=>i.sub===activeSub);
    if(searchQ.trim()){
      const q=searchQ.toLowerCase();
      list=list.filter(i=>
        i.name.toLowerCase().includes(q)||
        (i.desc||"").toLowerCase().includes(q)||
        (i.sub||"").toLowerCase().includes(q)||
        (i.origin||"").toLowerCase().includes(q)||
        (i.iba||"").toLowerCase().includes(q)
      );
    }
    return list;
  },[items,activeSub,searchQ]);

  const dlabel = n=>n===1?"Facile":n===2?"Moyen":"Expert";

  // Mouse glow on cards
  const handleMouseMove = useCallback((e,el)=>{
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX-rect.left)/rect.width)*100;
    const my = ((e.clientY-rect.top)/rect.height)*100;
    el.style.setProperty("--mx",`${mx}%`);
    el.style.setProperty("--my",`${my}%`);
  },[]);

  return(
    <div className="app">
      <style>{STYLES}</style>
      <FloatingBg/>

      {/* HEADER */}
      <div className="hdr">
        <div className="hdr-inner">
          <div className="logo">Bar<em>Guide</em></div>
          <div className="srch-w">
            <span className="srch-ico">🔍</span>
            <input className="srch" placeholder="Rechercher un cocktail, ingrédient…"
              value={searchQ}
              onChange={e=>{setSearchQ(e.target.value);setActiveSub("Tous")}}/>
          </div>
          <div className="ctabs">
            {CATEGORIES.map(c=>(
              <button key={c.id} className={`ctab${activeCat===c.id?" on":""}`}
                onClick={()=>{setActiveCat(c.id);setActiveSub("Tous");setSearchQ("")}}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* HERO */}
        <div className="cat-hero" key={activeCat+"hero"}>
          <div className="cat-hero-emo">{cat?.emoji}</div>
          <div>
            <div className="cat-hero-title">{cat?.label}</div>
            <div className="cat-hero-sub">{cat?.tagline}</div>
          </div>
          <div style={{marginLeft:"auto",textAlign:"right"}}>
            <div className="cat-hero-count">{items.length}</div>
            <div className="cat-hero-lbl">fiches</div>
          </div>
        </div>

        {/* SUBCATS */}
        <div className="subbar" key={activeCat+"sub"}>
          {subcats.map(s=>(
            <button key={s} className={`sbtn${activeSub===s?" on":""}`}
              onClick={()=>setActiveSub(s)}>{s}</button>
          ))}
        </div>

        {/* GRID */}
        {filtered.length===0?(
          <div className="empty">
            <div className="empty-ico">{cat?.emoji}</div>
            <div className="empty-txt">Aucun résultat pour "{searchQ}"</div>
          </div>
        ):(
          <div className="grid" key={activeCat+activeSub+searchQ}>
            {filtered.map((item,idx)=>(
              <div key={item.id} className="card"
                style={{animationDelay:`${Math.min(idx*45,500)}ms`}}
                onClick={()=>setSelected(item)}
                onMouseMove={e=>handleMouseMove(e,e.currentTarget)}>
                <div className="card-hdr">
                  <div className="card-emo">{item.emoji}</div>
                  <div className="card-meta">
                    <div className="card-name">{item.name}</div>
                    {item.origin&&<div className="card-origin">{item.origin}</div>}
                    <div className="card-badges">
                      {item.sub&&<span className="badge bg">{item.sub}</span>}
                      {item.abv&&<span className="badge br">{item.abv}%</span>}
                      {item.iba&&<span className="badge bp">{item.iba}</span>}
                      {item.diff&&<span className="badge bb">{dlabel(item.diff)}</span>}
                    </div>
                  </div>
                </div>
                <div className="card-desc">{item.desc}</div>
                <div className="card-ft">
                  <div className="card-cta">Voir la recette complète →</div>
                  {item.diff&&<Dots n={item.diff}/>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selected&&(
        <Modal item={selected} category={activeCat} equipMode={equipMode} setEquipMode={setEquipMode} onClose={()=>setSelected(null)}/>
      )}
    </div>
  );
}
