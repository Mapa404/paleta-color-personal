(function(){
"use strict";

/* ---------- Datos de estaciones ---------- */
const SEASONS = [
 {id:"pc", family:"Primavera", name:"Primavera clara", v:[0.55,-1,0.15],
  desc:"Tu colorido es claro y luminoso, con un subtono cálido suave. Te favorecen los colores livianos y frescos, como un helado de frutas: nada muy oscuro ni pesado.",
  colors:[["#F7C6B4","Durazno"],["#F4A493","Coral claro"],["#FFD39B","Damasco"],["#F9E58C","Amarillo manteca"],["#B5DDA4","Verde pistacho"],["#7FB8A4","Verde agua"],["#8FD3C7","Aguamarina"],["#9CC3E8","Celeste"],["#6FA8DC","Azul cielo"],["#C7B3E5","Lavanda cálida"],["#F2A7C3","Rosa chicle claro"],["#E9967A","Salmón"]],
  neutrals:[["#F5EBDC","Marfil"],["#D8C3A5","Camel claro"],["#B9A28A","Taupe cálido"],["#8C7B6B","Gris topo"]],
  avoid:[["#111111","Negro"],["#2B2B52","Marino oscuro"],["#800020","Bordó"],["#4B5320","Oliva oscuro"]],
  tips:["Reemplazá el negro por camel claro, gris topo o un azul medio.","Telas livianas y con algo de brillo suave: lino, algodón, seda.","Estampados chicos y alegres funcionan mejor que los grandes y oscuros.","Pocos contrastes fuertes: combinaciones de claros con claros."],
  acc:["Metales: dorado claro y oro rosa.","Perlas color crema, carey claro, madera clara.","Labiales durazno, coral o rosa cálido."]},
 {id:"pk", family:"Primavera", name:"Primavera cálida", v:[1,-0.2,0.35],
  desc:"Tu rasgo dominante es la calidez: piel con matiz dorado y colores con energía. Te favorecen los tonos cálidos y alegres, con un punto de brillo.",
  colors:[["#FF7F50","Coral"],["#F28C28","Mandarina"],["#FFC93C","Girasol"],["#E25B45","Rojo tomate"],["#FFB07C","Durazno"],["#DAA520","Dorado"],["#9ACD32","Verde lima"],["#3CB371","Verde hoja"],["#20B2AA","Turquesa"],["#40A4D8","Azul turquesa"],["#F4A460","Arena"],["#E97451","Terracota claro"]],
  neutrals:[["#F3E5C8","Crema"],["#C89B6D","Camel"],["#9A6B3F","Caramelo"],["#5C4033","Chocolate"]],
  avoid:[["#111111","Negro"],["#C0C0C0","Gris plata"],["#E6E6FA","Lavanda helada"],["#6A1B6A","Púrpura frío"]],
  tips:["Tu reemplazo del negro: chocolate, camel o marino cálido.","Prendas en coral, turquesa o verde hoja levantan la cara al instante.","Tejidos con textura natural: algodón, gamuza, lino.","Animal print cálido y estampados florales vivos te quedan bien."],
  acc:["Metales: dorado amarillo, bronce.","Carey, madera, cuero color suela.","Labiales coral, durazno o rojo tomate."]},
 {id:"pb", family:"Primavera", name:"Primavera brillante", v:[0.45,-0.1,1],
  desc:"Tenés contraste y colores vivos, con un matiz cálido. Los tonos intensos y limpios te iluminan; los apagados te apagan a vos.",
  colors:[["#FF4F5E","Rojo sandía"],["#FF6F3C","Naranja vivo"],["#FFD600","Amarillo limón"],["#7ED957","Verde manzana"],["#00A86B","Jade"],["#00CED1","Turquesa"],["#00B5D8","Celeste vivo"],["#1E6FD9","Azul francia"],["#8A4FFF","Violeta"],["#FF5FA2","Fucsia cálido"],["#FF9E80","Coral"],["#FFFFF0","Marfil"]],
  neutrals:[["#FFFFF0","Marfil"],["#A89F91","Gris cálido"],["#3B3B3B","Carbón"],["#1F3A5F","Marino"]],
  avoid:[["#C8B8A6","Beige apagado"],["#8E8E7E","Gris verdoso"],["#6B4E3D","Marrón tierra"],["#B9A9C9","Malva polvoriento"]],
  tips:["Podés usar contraste: un color vivo con marino o carbón.","Evitá los looks totalmente apagados o en tonos tierra suaves.","Estampados nítidos y gráficos, con colores bien definidos.","Un solo color intenso cerca de la cara ya alcanza."],
  acc:["Metales: dorado brillante; el plateado brillante también funciona.","Piedras de color vivo, acrílicos de color.","Labiales coral vivo, rojo sandía o fucsia cálido."]},
 {id:"vc", family:"Verano", name:"Verano claro", v:[-0.55,-1,-0.15],
  desc:"Tu colorido es claro y delicado, con subtono frío. Te favorecen los pasteles fríos y los tonos empolvados, livianos y frescos.",
  colors:[["#F4C2C2","Rosa bebé"],["#E8A0B4","Rosa frío"],["#D7A9C6","Malva claro"],["#C9A0DC","Lila"],["#B0A8E6","Lavanda"],["#9FC5E8","Celeste"],["#8AB6D6","Azul empolvado"],["#7FA7C9","Azul acero claro"],["#A8DADC","Aguamarina"],["#9ED2C6","Menta"],["#F7E7A1","Amarillo pálido"],["#E6B8C8","Rosa ceniza"]],
  neutrals:[["#F7F3EE","Blanco suave"],["#C9C3BD","Gris perla"],["#8E9AAF","Gris azulado"],["#5B6B82","Pizarra"]],
  avoid:[["#111111","Negro"],["#FF8C00","Naranja"],["#8B4513","Marrón óxido"],["#DAA520","Mostaza"]],
  tips:["Gris perla, pizarra o marino suave en lugar de negro.","Looks tono sobre tono en pasteles fríos te quedan muy bien.","Telas fluidas y livianas: gasa, algodón fino, tejidos suaves.","Estampados delicados, acuarelados o de flores chicas."],
  acc:["Metales: plateado, oro blanco, oro rosa frío.","Perlas blancas, cuarzo rosa, piedras celestes.","Labiales rosa frío, frambuesa claro o malva."]},
 {id:"vf", family:"Verano", name:"Verano frío", v:[-1,-0.25,-0.35],
  desc:"Tu rasgo dominante es el frío: piel con matiz rosado o neutro azulado. Te favorecen los tonos fríos de intensidad media, ni muy vivos ni muy apagados.",
  colors:[["#E68FAC","Rosa"],["#D6658C","Rosa frambuesa"],["#B03060","Frambuesa"],["#C48BAF","Malva"],["#8E7CC3","Lavanda profunda"],["#6A5ACD","Azul pizarra"],["#4682B4","Azul acero"],["#87AFC7","Celeste grisáceo"],["#5F9EA0","Azul cadete"],["#2E8B8B","Verde azulado"],["#A4C3B2","Salvia fría"],["#7A2E4D","Ciruela"]],
  neutrals:[["#F2F2F2","Blanco roto"],["#9EA3AD","Gris medio"],["#4A5568","Gris pizarra"],["#2F3E5C","Marino suave"]],
  avoid:[["#FF6600","Naranja"],["#F4C430","Amarillo azafrán"],["#8B5A2B","Caramelo"],["#556B2F","Oliva"]],
  tips:["Marino y gris pizarra son tu base, mejor que el negro puro.","Combinaciones frías: azul acero con rosa, gris con frambuesa.","Jean en lavado medio o azulado te queda mejor que el amarronado.","Evitá los tonos tierra y anaranjados cerca de la cara."],
  acc:["Metales: plateado, oro blanco, peltre.","Piedras: amatista, zafiro claro, perlas grises.","Labiales rosa frío, frambuesa o berry."]},
 {id:"vs", family:"Verano", name:"Verano suave", v:[-0.4,0,-1],
  desc:"Tu rasgo dominante es la suavidad: poco contraste y colores empolvados, con un matiz levemente frío. Te favorecen los tonos grisáceos y elegantes, como vistos a través de la niebla.",
  colors:[["#C38D9E","Rosa viejo"],["#C9A9A6","Rosa ceniza"],["#A87C9F","Malva"],["#8C6F80","Ciruela suave"],["#9B8BB4","Lavanda grisácea"],["#B6A5C2","Lila humo"],["#7B8FB1","Azul tormenta"],["#6E8FA6","Azul gris"],["#A3B1C6","Celeste humo"],["#7FA69F","Verde salvia"],["#8FA89B","Eucalipto"],["#5E8C88","Petróleo suave"]],
  neutrals:[["#EDE6E3","Hueso suave"],["#B5ABA4","Taupe frío"],["#7D7A80","Gris humo"],["#4D5360","Carbón suave"]],
  avoid:[["#111111","Negro puro"],["#FF0000","Rojo intenso"],["#FFA500","Naranja"],["#FFEA00","Amarillo vivo"]],
  tips:["Looks de bajo contraste: tonos vecinos entre sí.","Gris humo, taupe y carbón suave reemplazan al negro.","Telas mate y con textura: lana, gamuza, lino lavado.","Estampados difusos y de poco contraste."],
  acc:["Metales: plateado mate, oro rosa, peltre.","Perlas grises, piedras opacas como jade o labradorita.","Labiales rosa viejo, malva o berry suave."]},
 {id:"os", family:"Otoño", name:"Otoño suave", v:[0.4,0.05,-1],
  desc:"Tu rasgo dominante es la suavidad, con un matiz cálido. Te favorecen los tonos tierra empolvados y naturales, sin estridencias.",
  colors:[["#C88A65","Terracota suave"],["#D4A373","Caramelo"],["#B5835A","Canela"],["#9C6B5E","Palo de rosa tostado"],["#D9A5A0","Durazno apagado"],["#B5655D","Ladrillo suave"],["#C9B37E","Mostaza suave"],["#A3A86B","Oliva claro"],["#7A8B5A","Musgo"],["#8DA399","Salvia"],["#6B8E8E","Verde agua apagado"],["#6F7D8C","Azul pizarra cálido"]],
  neutrals:[["#EDE3D1","Avena"],["#C2B280","Arena"],["#8F7E64","Taupe cálido"],["#5A4E3C","Marrón musgo"]],
  avoid:[["#111111","Negro"],["#FF1493","Fucsia"],["#0000FF","Azul eléctrico"],["#FFFFFF","Blanco puro"]],
  tips:["Crudo y avena en lugar de blanco óptico.","Combinaciones tono sobre tono en tierras suaves.","Telas naturales y mate: lino, algodón lavado, punto.","Estampados orgánicos, de poco contraste."],
  acc:["Metales: dorado mate, oro viejo, bronce.","Madera, carey, piedras como ámbar o jaspe.","Labiales nude cálido, terracota suave o rosa tostado."]},
 {id:"ok", family:"Otoño", name:"Otoño cálido", v:[1,0.3,-0.4],
  desc:"Tu rasgo dominante es la calidez, con profundidad media. Te favorecen los colores de la naturaleza en otoño: especias, tierras y verdes de bosque.",
  colors:[["#C4622D","Terracota"],["#B7410E","Naranja quemado"],["#CC7722","Ocre"],["#E1A140","Mostaza"],["#B5651D","Cobre"],["#A0522D","Siena"],["#8C1C13","Rojo ladrillo"],["#6B8E23","Oliva"],["#556B2F","Verde musgo"],["#2E6F57","Verde bosque"],["#1F6F78","Petróleo"],["#8B4513","Óxido"]],
  neutrals:[["#F0E2C4","Crema"],["#B8865B","Camel"],["#7B4B2A","Chocolate"],["#4E3B24","Marrón oscuro"]],
  avoid:[["#FF69B4","Rosa chicle"],["#E6E6FA","Lavanda"],["#C0C0C0","Plata"],["#00BFFF","Celeste eléctrico"]],
  tips:["Chocolate, oliva y camel como base del placard.","Combinaciones de tierras con un verde o petróleo de acento.","Texturas ricas: gamuza, pana, tweed, cuero.","Estampados étnicos, cachemira y animal print cálido."],
  acc:["Metales: dorado amarillo, cobre, bronce.","Ámbar, carey, madera, cuero marrón.","Labiales terracota, ladrillo o caramelo."]},
 {id:"op", family:"Otoño", name:"Otoño profundo", v:[0.45,1,-0.15],
  desc:"Tu rasgo dominante es la profundidad: rasgos oscuros con matiz cálido. Te favorecen los colores ricos e intensos, oscuros y cálidos.",
  colors:[["#8B0000","Rojo oscuro"],["#7B2D26","Borgoña cálido"],["#B5452A","Óxido"],["#D2691E","Calabaza"],["#C68E17","Oro viejo"],["#5B5B1F","Oliva oscuro"],["#2F4F2F","Verde pino"],["#0F5257","Petróleo profundo"],["#1C3F60","Azul noche"],["#6B2D5C","Ciruela"],["#A0522D","Siena"],["#4A2C1D","Espresso"]],
  neutrals:[["#EADBC8","Marfil cálido"],["#8B6B4A","Camel oscuro"],["#4A2C1D","Espresso"],["#2B2B2B","Negro carbón"]],
  avoid:[["#FFB6C1","Rosa pastel"],["#E0FFFF","Celeste pastel"],["#C8A2C8","Lila"],["#F5F5F5","Blanco frío"]],
  tips:["Podés usar casi negro y espresso; el marfil cálido mejor que el blanco.","Contrastes de oscuro con un color rico: pino con oro viejo.","Telas con cuerpo: lana, cuero, terciopelo, pana.","Evitá los pasteles: te apagan."],
  acc:["Metales: dorado, oro viejo, cobre, bronce.","Piedras: granate, ojo de tigre, ámbar oscuro.","Labiales borgoña cálido, ladrillo o chocolate."]},
 {id:"ip", family:"Invierno", name:"Invierno profundo", v:[-0.45,1,0.25],
  desc:"Tu rasgo dominante es la profundidad, con un matiz frío y buen contraste. Te favorecen los colores oscuros e intensos, como joyas.",
  colors:[["#9B111E","Rubí"],["#7B1E3A","Borgoña"],["#C2185B","Fucsia profundo"],["#E0115F","Rosa rubí"],["#6A0F49","Berenjena"],["#3D2B56","Violeta oscuro"],["#4B0082","Índigo"],["#0F52BA","Zafiro"],["#006A4E","Esmeralda"],["#00575A","Pino azulado"],["#008B8B","Verde azulado"],["#F8F8FF","Blanco óptico"]],
  neutrals:[["#F8F8FF","Blanco óptico"],["#4B4B4B","Carbón"],["#2C2F4A","Marino"],["#1A1A1A","Negro"]],
  avoid:[["#F5DEB3","Trigo"],["#D2B48C","Beige"],["#FFA07A","Salmón"],["#DAA520","Mostaza"]],
  tips:["El negro es tu aliado, igual que el marino y el carbón.","Blanco y negro o negro con un color joya: tus looks más fuertes.","Telas con cuerpo o brillo: satén, terciopelo, cuero.","Evitá beige, camel claro y tonos tierra suaves cerca de la cara."],
  acc:["Metales: plateado, oro blanco; dorado solo si es brillante y frío.","Piedras: rubí, zafiro, esmeralda, ónix.","Labiales borgoña, berry profundo o rojo frío."]},
 {id:"if", family:"Invierno", name:"Invierno frío", v:[-1,0.35,0.5],
  desc:"Tu rasgo dominante es el frío, con contraste marcado. Te favorecen los colores puros y helados, y el blanco y el negro.",
  colors:[["#DC143C","Carmín"],["#E0218A","Fucsia"],["#800080","Púrpura"],["#8E44AD","Violeta"],["#4169E1","Azul real"],["#0047AB","Cobalto"],["#00A3A3","Turquesa frío"],["#009473","Esmeralda"],["#50C878","Verde esmeralda claro"],["#B0E0E6","Azul hielo"],["#F4C2D7","Rosa hielo"],["#E6E6FA","Lavanda hielo"]],
  neutrals:[["#FFFFFF","Blanco"],["#6E7B8B","Gris acero"],["#1C2841","Marino"],["#000000","Negro"]],
  avoid:[["#CC7722","Ocre"],["#8B4513","Marrón óxido"],["#F4A460","Arena"],["#808000","Oliva"]],
  tips:["Blanco puro y negro te quedan perfectos, solos o juntos.","Un color helado (rosa o azul hielo) con marino o negro.","Líneas limpias y telas lisas o con brillo frío.","Evitá los marrones, ocres y anaranjados cerca de la cara."],
  acc:["Metales: plateado, platino, oro blanco.","Piedras: zafiro, amatista, diamante, cristal.","Labiales rojo frío, fucsia o rosa azulado."]},
 {id:"ib", family:"Invierno", name:"Invierno brillante", v:[-0.45,0.15,1],
  desc:"Tu rasgo dominante es la intensidad: mucho contraste y ojos vivos, con matiz frío. Te favorecen los colores saturados, puros y luminosos.",
  colors:[["#FF0040","Rojo vivo"],["#FF1493","Fucsia"],["#FF69B4","Rosa vivo"],["#9400D3","Violeta"],["#0066FF","Azul eléctrico"],["#00BFFF","Celeste vivo"],["#00CED1","Turquesa"],["#00A86B","Esmeralda"],["#32CD32","Verde intenso"],["#FFE135","Amarillo limón"],["#7DF9FF","Hielo eléctrico"],["#FFFFFF","Blanco"]],
  neutrals:[["#FFFFFF","Blanco"],["#36454F","Carbón"],["#1B1F5E","Marino intenso"],["#000000","Negro"]],
  avoid:[["#C2B280","Arena"],["#8F7E64","Taupe"],["#A0522D","Siena"],["#BC8F8F","Rosa viejo"]],
  tips:["Contrastes fuertes: negro con fucsia, blanco con azul eléctrico.","Los colores apagados o empolvados te restan luz.","Estampados gráficos y nítidos, de alto contraste.","Telas con brillo: satén, charol, seda."],
  acc:["Metales: plateado brillante, cromo; dorado brillante en menor medida.","Piedras de color intenso, cristal, acrílicos vivos.","Labiales rojo vivo, fucsia o coral frío."]}
];

const EN = {pc:"Light Spring",pk:"Warm Spring",pb:"Bright Spring",vc:"Light Summer",vf:"Cool Summer",vs:"Soft Summer",os:"Soft Autumn",ok:"Warm Autumn",op:"Deep Autumn",ip:"Deep Winter",if:"Cool Winter",ib:"Bright Winter"};
const PIN_SEARCHES = [
  ["Outfits","Looks y combinaciones de ropa","{en} outfits"],
  ["Paleta de colores","Paletas para guardar de referencia","{en} color palette"],
  ["Looks casuales","Ropa para el día a día","{en} casual outfits"],
  ["Maquillaje","Labiales, sombras y rubor","{en} makeup"],
  ["Color de pelo","Tonos de tintura que te favorecen","{en} hair color"],
  ["En español","Resultados con el nombre en castellano","{es} looks"]
];
const pinURL = q => "https://www.pinterest.com/search/pins/?q="+encodeURIComponent(q);

const NATURAL_HAIR = [
  ["Rubio claro",[76,4,22]],["Rubio oscuro",[56,6,18]],["Castaño claro",[44,8,16]],
  ["Castaño oscuro",[30,6,10]],["Negro",[16,1,2]],["Pelirrojo",[46,24,32]],["Canoso",[72,0,2]]
];

const TARGETS = [
  {id:"skin",  label:"Piel", hint:"Mejilla o frente, sin brillo ni sombra.", r:0.006},
  {id:"eyes",  label:"Ojos", hint:"El iris, lejos de la pupila y del reflejo de luz.", r:0.0018},
  {id:"hair",  label:"Pelo", hint:"Un mechón con luz pareja, mejor cerca de la raíz.", r:0.007},
  {id:"white", label:"Algo blanco (opcional)", hint:"Remera, hoja o pared. Corrige el color de la luz.", r:0.006}
];

/* ---------- Estado ---------- */
const S = { work:null, wctx:null, W:0, H:0, pts:{}, rgb:{}, active:"skin", q:{}, dyed:"yes", natural:null, result:null, shown:null };

/* ---------- Utilidades ---------- */
const $ = id => document.getElementById(id);
const clamp = (v,a=-1,b=1) => Math.max(a,Math.min(b,v));
const hex = rgb => "#"+rgb.map(v=>Math.round(clamp(v,0,255)).toString(16).padStart(2,"0")).join("");
function toLin(c){ c/=255; return c<=0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4); }
function linToLab(r,g,b){
  const X=(0.4124*r+0.3576*g+0.1805*b)/0.95047, Y=0.2126*r+0.7152*g+0.0722*b, Z=(0.0193*r+0.1192*g+0.9505*b)/1.08883;
  const f=t=> t>0.008856 ? Math.cbrt(t) : 7.787*t+16/116;
  const fx=f(X), fy=f(Y), fz=f(Z);
  return [116*fy-16, 500*(fx-fy), 200*(fy-fz)];
}
function toast(msg){ const t=$("toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove("show"),1800); }
function setStep(n){
  document.querySelectorAll("#steps li").forEach(li=>{
    const s=+li.dataset.step; li.classList.toggle("on",s===n); li.classList.toggle("done",s<n);
  });
}

/* ---------- Paso 1: carga ---------- */
const drop=$("drop"), file=$("file");
file.addEventListener("change",()=>{ if(file.files[0]) loadFile(file.files[0]); });
["dragenter","dragover"].forEach(e=>drop.addEventListener(e,ev=>{ev.preventDefault();drop.classList.add("over");}));
["dragleave","drop"].forEach(e=>drop.addEventListener(e,ev=>{ev.preventDefault();drop.classList.remove("over");}));
drop.addEventListener("drop",ev=>{ const f=ev.dataTransfer.files[0]; if(f) loadFile(f); });

function loadFile(f){
  $("fileErr").textContent="";
  if(!/^image\//.test(f.type)){ $("fileErr").textContent="Ese archivo no parece una imagen. Probá con JPG o PNG."; return; }
  const url=URL.createObjectURL(f), img=new Image();
  img.onload=()=>{
    const max=1600, sc=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));
    const W=Math.round(img.naturalWidth*sc), H=Math.round(img.naturalHeight*sc);
    const c=document.createElement("canvas"); c.width=W; c.height=H;
    const ctx=c.getContext("2d",{willReadFrequently:true}); ctx.drawImage(img,0,0,W,H);
    URL.revokeObjectURL(url);
    Object.assign(S,{work:c,wctx:ctx,W,H,pts:{},rgb:{},active:"skin",result:null});
    const v=$("view"); v.width=W; v.height=H;
    file.value="";
    redraw(); renderTargets(); updateReady();
    $("s1").classList.add("hidden"); $("s3").classList.add("hidden"); $("s2").classList.remove("hidden");
    setStep(2); $("s2").scrollIntoView({behavior:"smooth",block:"start"});
  };
  img.onerror=()=>{ URL.revokeObjectURL(url); $("fileErr").textContent="No se pudo abrir la imagen. Si es HEIC (iPhone), probá exportarla como JPG."; };
  img.src=url;
}

/* ---------- Paso 2: marcar ---------- */
const view=$("view"), vctx=view.getContext("2d"), loupe=$("loupe"), lctx=loupe.getContext("2d");

function radiusFor(id){ const t=TARGETS.find(t=>t.id===id); return Math.max(2,Math.round(t.r*Math.max(S.W,S.H))); }

function redraw(){
  if(!S.work) return;
  vctx.drawImage(S.work,0,0);
  const k=S.W/(view.getBoundingClientRect().width||S.W);
  TARGETS.forEach(t=>{
    const p=S.pts[t.id]; if(!p) return;
    const r=Math.max(radiusFor(t.id),6*k);
    vctx.lineWidth=4*k; vctx.strokeStyle="#fff"; vctx.beginPath(); vctx.arc(p.x,p.y,r,0,Math.PI*2); vctx.stroke();
    vctx.lineWidth=1.8*k; vctx.strokeStyle="#1F1B16"; vctx.stroke();
    vctx.font=`600 ${13*k}px Inter, sans-serif`; vctx.textBaseline="middle";
    const label=t.label.split(" ")[0], tw=vctx.measureText(label).width, px=p.x+r+6*k, py=p.y;
    vctx.fillStyle="rgba(31,27,22,.85)"; vctx.beginPath();
    if(vctx.roundRect) vctx.roundRect(px,py-10*k,tw+12*k,20*k,10*k); else vctx.rect(px,py-10*k,tw+12*k,20*k);
    vctx.fill(); vctx.fillStyle="#fff"; vctx.fillText(label,px+6*k,py);
  });
}
window.addEventListener("resize",redraw);

function imgCoords(ev){
  const r=view.getBoundingClientRect();
  return { x:(ev.clientX-r.left)*(S.W/r.width), y:(ev.clientY-r.top)*(S.H/r.height), px:ev.clientX-r.left, py:ev.clientY-r.top, rw:r.width, rh:r.height };
}
function sampleAt(x,y,rad){
  const x0=Math.max(0,Math.round(x-rad)), y0=Math.max(0,Math.round(y-rad));
  const x1=Math.min(S.W-1,Math.round(x+rad)), y1=Math.min(S.H-1,Math.round(y+rad));
  const w=x1-x0+1, h=y1-y0+1, d=S.wctx.getImageData(x0,y0,w,h).data;
  const R=[],G=[],B=[];
  for(let j=0;j<h;j++)for(let i=0;i<w;i++){
    const dx=x0+i-x, dy=y0+j-y; if(dx*dx+dy*dy>rad*rad+0.5) continue;
    const o=(j*w+i)*4; R.push(d[o]);G.push(d[o+1]);B.push(d[o+2]);
  }
  const med=a=>{ a.sort((p,q)=>p-q); return a.length? a[Math.floor(a.length/2)] : 0; };
  return [med(R),med(G),med(B)];
}

view.addEventListener("pointermove",ev=>{
  if(!S.work) return;
  const c=imgCoords(ev), z=8, src=120/z;
  lctx.imageSmoothingEnabled=false;
  lctx.fillStyle="#ddd"; lctx.fillRect(0,0,120,120);
  lctx.drawImage(S.work,c.x-src/2,c.y-src/2,src,src,0,0,120,120);
  const rr=radiusFor(S.active)*z;
  lctx.strokeStyle="#fff"; lctx.lineWidth=2; lctx.beginPath(); lctx.arc(60,60,Math.min(rr,56),0,Math.PI*2); lctx.stroke();
  lctx.strokeStyle="rgba(0,0,0,.6)"; lctx.lineWidth=1; lctx.beginPath(); lctx.moveTo(60,52);lctx.lineTo(60,68);lctx.moveTo(52,60);lctx.lineTo(68,60);lctx.stroke();
  let lx=c.px+18, ly=c.py-138;
  if(lx+120>c.rw) lx=c.px-138; if(ly<0) ly=c.py+18;
  loupe.style.left=lx+"px"; loupe.style.top=ly+"px"; loupe.style.display="block";
});
view.addEventListener("pointerleave",()=>loupe.style.display="none");
view.addEventListener("pointerup",ev=>{
  if(!S.work) return;
  if(ev.pointerType!=="mouse") loupe.style.display="none";
  const c=imgCoords(ev), id=S.active;
  S.pts[id]={x:c.x,y:c.y};
  S.rgb[id]=sampleAt(c.x,c.y,radiusFor(id));
  const next=["skin","eyes","hair"].find(k=>!S.pts[k] && !(k==="hair" && S.dyed==="no"));
  if(next) S.active=next;
  redraw(); renderTargets(); updateReady();
  toast({skin:"Piel marcada",eyes:"Ojos marcados",hair:"Pelo marcado",white:"Blanco marcado"}[id]);
});

function renderTargets(){
  const box=$("targets"); box.innerHTML="";
  TARGETS.forEach(t=>{
    const b=document.createElement("button"); b.type="button"; b.className="target"+(S.active===t.id?" active":"");
    b.setAttribute("aria-pressed",S.active===t.id);
    const set=!!S.rgb[t.id];
    const skipHair = t.id==="hair" && S.dyed==="no";
    b.innerHTML=`<span class="dot${set?" set":""}" style="${set?"background:"+hex(S.rgb[t.id]):""}"></span>
      <span><strong>${t.label}</strong><small>${skipHair?"No hace falta: usamos tu color natural.":t.hint}</small></span>
      <span class="state">${S.active===t.id?"Tocá la foto":(set?"Listo ✓":"")}</span>`;
    b.addEventListener("click",()=>{ S.active=t.id; renderTargets(); });
    box.appendChild(b);
  });
}

/* Preguntas */
document.querySelectorAll(".q").forEach(q=>{
  const key=q.dataset.q;
  q.querySelectorAll(".seg > button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      q.querySelectorAll(":scope > .seg > button").forEach(x=>x.setAttribute("aria-pressed","false"));
      btn.setAttribute("aria-pressed","true");
      if(key==="dyed"){
        S.dyed=btn.dataset.v; $("natural").classList.toggle("show",S.dyed==="no");
        if(S.dyed==="no" && S.active==="hair") S.active=S.pts.eyes? "white":"eyes";
        renderTargets(); updateReady();
      } else S.q[key]=+btn.dataset.v;
    });
  });
});
NATURAL_HAIR.forEach(([name],i)=>{
  const b=document.createElement("button"); b.type="button"; b.textContent=name; b.setAttribute("aria-pressed","false");
  b.addEventListener("click",()=>{ $("naturalOpts").querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed","false")); b.setAttribute("aria-pressed","true"); S.natural=i; updateReady(); });
  $("naturalOpts").appendChild(b);
});

function updateReady(){
  const miss=[];
  if(!S.rgb.skin) miss.push("piel");
  if(!S.rgb.eyes) miss.push("ojos");
  if(S.dyed==="no"){ if(S.natural===null) miss.push("tu color de pelo natural"); }
  else if(!S.rgb.hair) miss.push("pelo");
  $("analyze").disabled=miss.length>0;
  $("missing").textContent= miss.length? "Falta marcar: "+miss.join(", ")+"." : "";
}

$("changePhoto").addEventListener("click",()=>file.click());

/* ---------- Análisis ---------- */
function labFromRGB(rgb){
  let l=rgb.map(toLin);
  if(S.rgb.white){
    const w=S.rgb.white.map(toLin), m=(w[0]+w[1]+w[2])/3;
    if(m>0.05){ l=l.map((v,i)=>v*clamp(m/Math.max(w[i],1e-4),0.6,1.6)); }
  }
  return linToLab(...l);
}
function analyze(){
  const skin=labFromRGB(S.rgb.skin), eyes=labFromRGB(S.rgb.eyes);
  const hair= S.dyed==="no" ? NATURAL_HAIR[S.natural][1] : labFromRGB(S.rgb.hair);
  const C=l=>Math.hypot(l[1],l[2]), H=l=>Math.atan2(l[2],l[1])*180/Math.PI;

  // Temperatura
  const skinWarm=clamp((H(skin)-54)/9);
  let hairWarm=0, hairW=0;
  if(hair[0]>28){ hairWarm=clamp((C(hair)-11)/10); hairW=0.15; }
  const qs=["veins","sun","metal"].filter(k=>k in S.q).map(k=>S.q[k]);
  const qAvg= qs.length? qs.reduce((a,b)=>a+b,0)/qs.length : 0;
  const qW= qs.length? 0.12*qs.length : 0;
  const T=clamp((skinWarm*0.55+hairWarm*hairW+qAvg*qW)/(0.55+hairW+qW));

  // Profundidad
  const Lavg=skin[0]*0.35+hair[0]*0.45+eyes[0]*0.2;
  const D=clamp((50-Lavg)/18);

  // Intensidad / claridad
  const contrast=Math.max(Math.abs(skin[0]-hair[0]), Math.abs(skin[0]-eyes[0])*0.9);
  const Cl=clamp(0.6*clamp((contrast-28)/18)+0.3*clamp((C(eyes)-14)/12)+0.1*clamp((C(skin)-20)/8));

  const me=[T,D,Cl], wts=[1.3,1,1];
  const ranked=SEASONS.map(s=>({s,d:Math.sqrt(s.v.reduce((a,v,i)=>a+wts[i]*(v-me[i])**2,0))})).sort((a,b)=>a.d-b.d);
  return {T,D,C:Cl,ranked};
}

$("analyze").addEventListener("click",()=>{
  S.result=analyze();
  showSeason(S.result.ranked[0].s,true);
  $("s2").classList.add("hidden"); $("s3").classList.remove("hidden"); setStep(3);
  $("s3").scrollIntoView({behavior:"smooth",block:"start"});
});
$("back").addEventListener("click",()=>{ $("s3").classList.add("hidden"); $("s2").classList.remove("hidden"); setStep(2); redraw(); });
$("restart").addEventListener("click",()=>{
  Object.assign(S,{work:null,wctx:null,pts:{},rgb:{},q:{},dyed:"yes",natural:null,result:null});
  document.querySelectorAll(".q .seg button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.v==="yes"?"true":"false"));
  $("natural").classList.remove("show");
  vctx.clearRect(0,0,view.width,view.height); view.width=view.height=0;
  $("s3").classList.add("hidden"); $("s2").classList.add("hidden"); $("s1").classList.remove("hidden"); setStep(1);
  window.scrollTo({top:0,behavior:"smooth"});
});

/* ---------- Resultado ---------- */
function swatchBtn([h,n],cls){
  const b=document.createElement("button"); b.type="button"; b.className="sw"+(cls?" "+cls:"");
  b.setAttribute("aria-pressed","false"); b.setAttribute("aria-label",`${n} ${h}. Probar en la cara`);
  b.innerHTML=`<div class="c" style="background:${h}"></div><div class="n">${n}<span>${h}</span></div>`;
  b.addEventListener("click",()=>drape(h,n,cls==="avoid",b));
  return b;
}
function showSeason(s,isMain){
  S.shown=s;
  const r=S.result, isTop= r && r.ranked[0].s.id===s.id;
  $("rFamily").textContent= isTop? "Tu estación es" : "Explorando";
  $("rName").textContent=s.name;
  if(r && isTop){
    const gap=r.ranked[1].d-r.ranked[0].d;
    $("rConf").textContent= gap>0.35? "Coincidencia alta." : gap>0.15? "Coincidencia media: vale la pena comparar con la segunda opción." : "Coincidencia ajustada: conviene probar los colores de las estaciones cercanas con la prueba de abajo.";
  } else $("rConf").textContent= r? "Esta no es tu estación principal, pero podés comparar sus colores en tu cara." : "";
  $("rDesc").textContent=s.desc;

  // Ejes
  const ax=$("axes"); ax.innerHTML="";
  if(r){
    [["t","Frío","Cálido",r.T],["d","Claro","Profundo",r.D],["c","Suave","Brillante",r.C]].forEach(([k,a,b,v])=>{
      ax.insertAdjacentHTML("beforeend",`<div class="axis"><div class="lbl"><span>${a}</span><span>${b}</span></div><div class="bar ${k}" role="img" aria-label="${a} a ${b}: ${Math.round((v+1)*50)}%"><span class="mark" style="left:${(v+1)*50}%"></span></div></div>`);
    });
    const alts=$("alts"); alts.innerHTML="";
    r.ranked.slice(0,3).forEach((x,i)=>{
      const c=document.createElement("button"); c.type="button"; c.className="chip"; c.textContent=x.s.name+(i===0?" (tu resultado)":"");
      c.setAttribute("aria-pressed",x.s.id===s.id); c.addEventListener("click",()=>showSeason(x.s)); alts.appendChild(c);
    });
  }

  const fill=(id,arr,cls)=>{ const el=$(id); el.innerHTML=""; arr.forEach(c=>el.appendChild(swatchBtn(c,cls))); };
  fill("palette",s.colors); fill("neutrals",s.neutrals); fill("avoid",s.avoid,"avoid");

  const c=s.colors, n=s.neutrals;
  const combos=[
    [[n[2][0],c[0][0],n[0][0]],"Diario: neutro de base con un color cerca de la cara."],
    [[n[3][0],c[7][0],c[3][0]],"Con acento: neutro oscuro, color principal y un detalle."],
    [[c[5][0],c[9][0],n[1][0]],"Para salir: dos colores de la paleta y un neutro."],
    [[n[0][0],c[1][0],c[2][0]],"Tono sobre tono: colores vecinos para un look armónico."]
  ];
  $("combos").innerHTML=combos.map(([cols,txt])=>`<div class="combo"><div class="strip">${cols.map(h=>`<div style="background:${h}"></div>`).join("")}</div><p>${txt}</p></div>`).join("");
  $("enName").textContent=EN[s.id];
  const pinIcon='<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#E60023"/><path d="M12.3 5.5c-3.7 0-5.6 2.6-5.6 4.8 0 1.3.5 2.5 1.6 2.9.2.1.3 0 .4-.2l.1-.6c.1-.2 0-.3-.1-.5-.3-.4-.5-.9-.5-1.6 0-2.1 1.6-4 4.1-4 2.3 0 3.5 1.4 3.5 3.2 0 2.4-1.1 4.5-2.7 4.5-.9 0-1.5-.7-1.3-1.6.2-1.1.7-2.2.7-3 0-.7-.4-1.3-1.2-1.3-.9 0-1.7 1-1.7 2.3 0 .8.3 1.4.3 1.4l-1.1 4.6c-.3 1.4 0 3 0 3.2 0 .1.1.1.2 0 .1-.1 1-1.3 1.4-2.5l.5-2.1c.3.5 1 .9 1.8.9 2.4 0 4-2.2 4-5.1 0-2.2-1.9-4.3-4.6-4.3z" fill="#fff"/></svg>';
  $("pins").innerHTML=PIN_SEARCHES.map(([t,d,q])=>{
    const query=q.replace("{en}",EN[s.id]).replace("{es}",s.name);
    return `<a class="pin" href="${pinURL(query)}" target="_blank" rel="noopener noreferrer"><div><b>${t}</b><span>${query}</span><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)"> (se abre en otra pestaña)</span></div>${pinIcon}</a>`;
  }).join("");
  $("tips").innerHTML=s.tips.map(t=>`<li>${t}</li>`).join("");
  $("acc").innerHTML=s.acc.map(t=>`<li>${t}</li>`).join("");

  const all=$("all"); all.innerHTML="";
  SEASONS.forEach(x=>{ const b=document.createElement("button"); b.type="button"; b.className="chip"; b.textContent=x.name; b.setAttribute("aria-pressed",x.id===s.id); b.addEventListener("click",()=>{ showSeason(x); }); all.appendChild(b); });

  const first=$("palette").querySelector(".sw"); drape(s.colors[0][0],s.colors[0][1],false,first);
}

function drape(h,n,isAvoid,btn){
  document.querySelectorAll(".sw[aria-pressed='true']").forEach(b=>b.setAttribute("aria-pressed","false"));
  if(btn) btn.setAttribute("aria-pressed","true");
  $("frame").style.background=h;
  $("drapeLabel").innerHTML=`Probando: <b>${n}</b> (${h})${isAvoid?" — de la lista para evitar":""}.`;
  const cv=$("drapeCv"), ctx=cv.getContext("2d");
  ctx.clearRect(0,0,cv.width,cv.height);
  if(!S.work) return;
  const pts=[S.pts.skin,S.pts.eyes].filter(Boolean);
  let cx=S.W/2, cy=S.H/2, size=Math.min(S.W,S.H)*0.6;
  if(pts.length){
    cx=pts.reduce((a,p)=>a+p.x,0)/pts.length; cy=pts.reduce((a,p)=>a+p.y,0)/pts.length;
    if(pts.length===2){ const d=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y); size=Math.max(d*4.2,Math.min(S.W,S.H)*0.3); }
  }
  size=Math.min(size,S.W,S.H);
  const sx=clamp(cx-size/2,0,S.W-size), sy=clamp(cy-size/2,0,S.H-size);
  ctx.drawImage(S.work,sx,sy,size,size,0,0,cv.width,cv.height);
}

$("copy").addEventListener("click",async()=>{
  const s=S.shown; if(!s) return;
  const txt=`${s.name}\nPaleta: ${s.colors.map(c=>c[1]+" "+c[0]).join(", ")}\nNeutros: ${s.neutrals.map(c=>c[1]+" "+c[0]).join(", ")}\nEvitar: ${s.avoid.map(c=>c[1]+" "+c[0]).join(", ")}`;
  try{ await navigator.clipboard.writeText(txt); toast("Paleta copiada"); }
  catch(e){ toast("No se pudo copiar en este navegador"); }
});

/* ---------- Modal de privacidad ---------- */
const dlg=$("privacy");
function openPrivacy(){ try{ dlg.showModal(); }catch(e){ dlg.setAttribute("open",""); } }
$("openPrivacy").addEventListener("click",openPrivacy);
$("closePrivacy").addEventListener("click",()=>dlg.close ? dlg.close() : dlg.removeAttribute("open"));
openPrivacy();

/* ---------- PDF ---------- */
let jsPDFReady=null;
function loadJsPDF(){
  if(window.jspdf) return Promise.resolve();
  if(!jsPDFReady) jsPDFReady=new Promise((res,rej)=>{
    const sc=document.createElement("script"); sc.src="vendor/jspdf.umd.min.js";
    sc.onload=res; sc.onerror=()=>{ jsPDFReady=null; rej(); }; document.head.appendChild(sc);
  });
  return jsPDFReady;
}
const rgbOf=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];
const lum=h=>{ const [r,g,b]=rgbOf(h); return (0.299*r+0.587*g+0.114*b)/255; };

function faceImage(frameHex){
  if(!S.work) return null;
  const src=$("drapeCv"), c=document.createElement("canvas"), N=500, pad=40;
  c.width=c.height=N; const x=c.getContext("2d");
  x.fillStyle=frameHex; x.fillRect(0,0,N,N);
  x.save(); x.beginPath(); x.arc(N/2,N/2,N/2-pad,0,Math.PI*2); x.clip();
  x.drawImage(src,pad,pad,N-2*pad,N-2*pad); x.restore();
  return c.toDataURL("image/jpeg",0.9);
}

async function makePDF(){
  const s=S.shown; if(!s) return;
  const btn=$("pdf"); btn.disabled=true; btn.textContent="Armando el PDF…";
  try{
    await loadJsPDF();
    const { jsPDF }=window.jspdf, doc=new jsPDF({unit:"mm",format:"a4"});
    const W=210, M=16, CW=W-2*M; let y=M;
    const ink=[31,27,22], muted=[107,98,89];
    const need=h=>{ if(y+h>297-M){ doc.addPage(); y=M; } };
    const text=(t,size,style,color,maxW)=>{
      doc.setFont("helvetica",style||"normal"); doc.setFontSize(size); doc.setTextColor(...(color||ink));
      const lines=doc.splitTextToSize(t,maxW||CW); const lh=size*0.42;
      need(lines.length*lh); doc.text(lines,M,y+size*0.32); y+=lines.length*lh; return lines.length*lh;
    };
    const isTop=S.result && S.result.ranked[0].s.id===s.id;

    // Encabezado
    text("TU PALETA DE COLOR · ANÁLISIS DE COLOR PERSONAL",8,"bold",muted); y+=3;
    text(isTop? "Tu estación es" : "Estación explorada",10,"normal",muted); y+=1;
    text(s.name,26,"bold"); y+=2;
    const fecha=new Date().toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"});
    text(s.family+" · "+fecha,9,"normal",muted); y+=6;

    // Foto + descripción
    const img=faceImage(s.colors[0][0]);
    const top=y;
    if(img){ doc.addImage(img,"JPEG",M,y,48,48); }
    const tx=img? M+56 : M, tw=img? CW-56 : CW;
    doc.setFont("helvetica","normal"); doc.setFontSize(10.5); doc.setTextColor(...ink);
    const dl=doc.splitTextToSize(s.desc,tw); doc.text(dl,tx,y+4); let yy=y+4+dl.length*4.6+4;
    if(S.result){
      [["Frío","Cálido",S.result.T],["Claro","Profundo",S.result.D],["Suave","Brillante",S.result.C]].forEach(([a,b,v])=>{
        doc.setFontSize(8); doc.setTextColor(...muted); doc.text(a,tx,yy); doc.text(b,tx+tw,yy,{align:"right"});
        doc.setFillColor(231,224,214); doc.roundedRect(tx,yy+1.5,tw,1.8,0.9,0.9,"F");
        const px=tx+(v+1)/2*tw; doc.setFillColor(255,255,255); doc.setDrawColor(...ink); doc.setLineWidth(0.6); doc.circle(px,yy+2.4,1.8,"FD");
        yy+=9;
      });
    }
    y=Math.max(yy,top+(img?48:0))+8;

    // Grillas de colores
    const grid=(title,arr,cross)=>{
      const cols=6, gap=3, sw=(CW-gap*(cols-1))/cols, sh=16, rows=Math.ceil(arr.length/cols);
      need(8+rows*(sh+11)); text(title,12,"bold"); y+=3;
      arr.forEach(([h,n],i)=>{
        const cx=M+(i%cols)*(sw+gap), cy=y+Math.floor(i/cols)*(sh+11);
        doc.setFillColor(...rgbOf(h)); doc.setDrawColor(220,214,205); doc.setLineWidth(0.2); doc.roundedRect(cx,cy,sw,sh,2,2,"FD");
        if(cross){ doc.setDrawColor(...(lum(h)>0.6?[120,110,100]:[255,255,255])); doc.setLineWidth(0.6); doc.line(cx+2,cy+sh-2,cx+sw-2,cy+2); }
        doc.setFont("helvetica","normal"); doc.setFontSize(7.5); doc.setTextColor(...ink);
        doc.text(doc.splitTextToSize(n,sw)[0],cx,cy+sh+3.6);
        doc.setFontSize(6.5); doc.setTextColor(...muted); doc.text(h,cx,cy+sh+7);
      });
      y+=rows*(sh+11)+4;
    };
    grid("Tu paleta",s.colors);
    grid("Neutros (la base del placard)",s.neutrals);
    grid("Colores para evitar cerca de la cara",s.avoid,true);

    // Combinaciones
    const c=s.colors, n=s.neutrals;
    const combos=[[[n[2][0],c[0][0],n[0][0]],"Diario"],[[n[3][0],c[7][0],c[3][0]],"Con acento"],[[c[5][0],c[9][0],n[1][0]],"Para salir"],[[n[0][0],c[1][0],c[2][0]],"Tono sobre tono"]];
    need(34); text("Combinaciones para empezar",12,"bold"); y+=3;
    const cw=(CW-9)/4;
    combos.forEach(([cols,lbl],i)=>{
      const cx=M+i*(cw+3); let ox=cx; const parts=[2,1,1], unit=cw/4;
      cols.forEach((h,j)=>{ doc.setFillColor(...rgbOf(h)); doc.rect(ox,y,unit*parts[j],12,"F"); ox+=unit*parts[j]; });
      doc.setDrawColor(220,214,205); doc.setLineWidth(0.2); doc.rect(cx,y,cw,12);
      doc.setFontSize(8); doc.setTextColor(...muted); doc.text(lbl,cx,y+16);
    });
    y+=24;

    // Consejos
    const list=(title,items)=>{
      need(14); text(title,12,"bold"); y+=2;
      items.forEach(t=>{ doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(...ink);
        const l=doc.splitTextToSize(t,CW-5); need(l.length*4.4+1.5); doc.text("•",M,y+3.2); doc.text(l,M+5,y+3.2); y+=l.length*4.4+1.5; });
      y+=4;
    };
    list("Ropa y estilo",s.tips);
    list("Accesorios",s.acc);
    list("Para buscar en Pinterest",[`Tu estación en inglés es "${EN[s.id]}". Búsquedas útiles: "${EN[s.id]} outfits", "${EN[s.id]} color palette" y "${EN[s.id]} makeup".`]);

    // Nota
    need(16); doc.setDrawColor(231,224,214); doc.line(M,y,W-M,y); y+=4;
    text("El resultado es una orientación, no un diagnóstico profesional. La cámara, la pantalla y la luz alteran los colores. Este PDF se generó en tu dispositivo: la foto no se envió a ningún servidor.",8,"normal",muted);
    text("paleta-color.vercel.app",8,"normal",muted);

    const slug=s.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"-");
    doc.save("mi-paleta-"+slug+".pdf");
    toast("PDF descargado");
  }catch(e){
    console.error(e); toast("No se pudo generar el PDF. Probá de nuevo.");
  }finally{ btn.disabled=false; btn.textContent="Descargar PDF"; }
}
$("pdf").addEventListener("click",makePDF);

renderTargets();
})();
