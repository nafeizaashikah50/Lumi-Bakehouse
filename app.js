// Ganti dengan nomor WhatsApp toko (format 62..., tanpa +, spasi, atau tanda -)
var WA="6281234567890";
var MIN=50000,ONGKIR=10000;
var HINT="Pesanan akan dikirim ke WhatsApp untuk dikonfirmasi admin.";

var S=function(b){return '<svg viewBox="0 0 120 100" aria-hidden="true"><ellipse cx="60" cy="91" rx="42" ry="6" fill="#7a3f4f" opacity=".14"/>'+b+'</svg>'};
var art={
layer:function(a,b,f){return S('<rect x="22" y="62" width="76" height="27" rx="11" fill="'+a+'"/><rect x="21" y="60" width="78" height="9" rx="4.5" fill="'+b+'"/><rect x="26" y="44" width="68" height="17" rx="8" fill="'+a+'"/><path d="M24 45q36-30 72 0z" fill="'+b+'"/><circle cx="60" cy="31" r="12" fill="'+f+'"/><path d="M53 21q7-7 14 0q-7 3-14 0z" fill="#4FA66F"/><circle cx="56" cy="31" r="1.5" fill="#fff" opacity=".7"/><circle cx="64" cy="34" r="1.5" fill="#fff" opacity=".7"/>')},
burnt:function(a,b){return S('<path d="M18 84V56q42-26 84 0v28q0 5-5 5H23q-5 0-5-5z" fill="'+a+'"/><path d="M18 58q42-28 84 0q-6 12-14 8q-8 8-18 2q-10 8-20 2q-10 6-20-2q-8 4-12-10z" fill="'+b+'"/><path d="M32 60q6-6 12-3M70 54q8-4 14 2" stroke="#B26A3F" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="18" y="72" width="84" height="4" fill="#fff" opacity=".35"/>')},
cup:function(a,b,c){return S('<path d="M32 62h56l-6 27H38z" fill="'+a+'"/><path d="M42 62l3 27M54 62l1 27M66 62l-1 27M78 62l-3 27" stroke="#fff" stroke-opacity=".4" stroke-width="3"/><path d="M28 62q-4-14 14-16q2-14 18-16q16 2 18 16q18 2 14 16z" fill="'+b+'"/><circle cx="60" cy="24" r="7" fill="'+c+'"/><path d="M60 17q2-6 7-8" stroke="#4FA66F" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="46" cy="50" r="2" fill="#FFD966"/><circle cx="76" cy="46" r="2" fill="#7FD1A8"/>')},
glass:function(a,b,c){return S('<path d="M30 36h60l-5 53q0 4-5 4H40q-5 0-5-4z" fill="#fff" fill-opacity=".7" stroke="#F0CFC0" stroke-width="2"/><path d="M33 42h54l-1 12H34z" fill="'+a+'"/><path d="M34 54h52l-1 14H35z" fill="'+b+'"/><path d="M35 68h50l-1 14H36z" fill="'+a+'"/><path d="M36 82h48l-.5 7q0 2-3 2H39.500q-3 0-3.500-2z" fill="'+b+'"/><path d="M30 36q30-14 60 0z" fill="'+b+'"/><circle cx="46" cy="30" r="3.5" fill="'+c+'"/><circle cx="62" cy="27" r="3.5" fill="'+c+'"/><circle cx="77" cy="31" r="3.5" fill="'+c+'"/>')},
roll:function(a,b){var s='';[34,27,20,13,6].forEach(function(r,i){s+='<circle cx="60" cy="52" r="'+r+'" fill="'+(i%2?b:a)+'"/>'});return S(s+'<path d="M96 70q8 8 4 16" stroke="'+a+'" stroke-width="6" fill="none" stroke-linecap="round"/>')},
tart:function(a,b,c){return S('<path d="M20 58h80l-8 30q-1 3-4 3H32q-3 0-4-3z" fill="'+a+'"/><path d="M30 62l3 24M44 62l2 26M60 62v27M76 62l-2 26M90 62l-3 24" stroke="#fff" stroke-opacity=".35" stroke-width="2"/><ellipse cx="60" cy="58" rx="40" ry="12" fill="'+a+'"/><ellipse cx="60" cy="57" rx="35" ry="9" fill="'+b+'"/><circle cx="46" cy="52" r="7" fill="'+c+'"/><circle cx="62" cy="48" r="8" fill="'+c+'"/><circle cx="77" cy="53" r="6" fill="'+c+'"/>')},
cookie:function(a,b){return S('<circle cx="80" cy="46" r="24" fill="'+a+'" stroke="#fff" stroke-opacity=".3" stroke-width="2"/><circle cx="44" cy="58" r="28" fill="'+a+'" stroke="#fff" stroke-opacity=".3" stroke-width="2"/><g fill="'+b+'"><ellipse cx="36" cy="52" rx="5" ry="4"/><ellipse cx="52" cy="66" rx="5" ry="4"/><ellipse cx="50" cy="48" rx="4" ry="3.5"/><ellipse cx="34" cy="70" rx="4" ry="3"/><ellipse cx="78" cy="38" rx="4.5" ry="4"/><ellipse cx="88" cy="52" rx="4" ry="3.5"/></g>')},
mac:function(a,b,c){var m=function(x,y,k){return '<rect x="'+x+'" y="'+y+'" width="32" height="10" rx="5" fill="'+k+'"/><rect x="'+(x+3)+'" y="'+(y+10)+'" width="26" height="5" rx="2.5" fill="#fff"/><rect x="'+x+'" y="'+(y+15)+'" width="32" height="9" rx="4.5" fill="'+k+'"/>'};return S(m(14,64,a)+m(54,64,b)+m(34,40,c))},
cinn:function(a,b){return S('<circle cx="60" cy="54" r="34" fill="'+a+'"/><path d="M60 54a5 5 0 1 1 5 5a11 11 0 1 1-11-11a17 17 0 1 1 17 17a23 23 0 1 1-23-23" stroke="'+b+'" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M30 44q30-16 60 0q6 12-10 16q-10 8-20 2q-14 6-26-4q-8-6-4-14z" fill="#fff" opacity=".85"/>')}
};

var P=[
{id:"strawberry",n:"Strawberry Shortcake",d:"Sponge lembut, krim vanila, dan stroberi segar.",t:"Best Seller",bg:"#FFE3EA",v:[{n:"16 cm",p:55000},{n:"20 cm",p:78000}],s:art.layer("#FFE1A0","#fff","#E8365D")},
{id:"cheesecake",n:"Burnt Cheesecake",d:"Creamy di dalam, karamel gosong di atas.",p:48000,t:"Favorit",bg:"#FFF0C9",s:art.burnt("#F6CF8F","#7A3E24")},
{id:"cupcake",n:"Berry Cupcake",d:"Cupcake moist dengan frosting berry.",t:"Mini",bg:"#E7F0FF",v:[{n:"Strawberry",p:22000},{n:"Blueberry",p:22000},{n:"Mix",p:24000}],s:art.cup("#FF8FAB","#FFC7D5","#D9304F")},
{id:"tiramisu",n:"Tiramisu Box",d:"Lapisan krim, kopi, dan kakao.",p:35000,t:"Baru",bg:"#F6E6DA",s:art.glass("#8B5A3C","#FFF1D6","#8B5A3C")},
{id:"chocolate",n:"Chocolate Fudge Cake",d:"Cake cokelat moist dengan ganache.",t:"Cokelat",bg:"#F4DED2",v:[{n:"16 cm",p:52000},{n:"20 cm",p:75000}],s:art.layer("#6B3A2A","#4A2419","#E8365D")},
{id:"redvelvet",n:"Red Velvet Cake",d:"Lembut dengan cream cheese frosting.",t:"Populer",bg:"#FFE3E8",v:[{n:"16 cm",p:50000},{n:"20 cm",p:72000}],s:art.layer("#C42A4B","#fff","#F5A0B3")},
{id:"matcha",n:"Matcha Roll Cake",d:"Sponge matcha dengan isian krim lembut.",p:39000,t:"Matcha",bg:"#E3F3D8",s:art.roll("#8DBF6B","#FFF8EA")},
{id:"lemon",n:"Lemon Tart",d:"Pastry renyah dengan lemon curd segar.",p:32000,t:"Segar",bg:"#FFF5C7",s:art.tart("#EBC27F","#FFD84D","#fff")},
{id:"cookies",n:"Choco Chunk Cookies",d:"Cookies chewy dengan potongan cokelat.",p:18000,t:"Camilan",bg:"#FBEBD2",s:art.cookie("#D9A15B","#4A2A1C")},
{id:"macaron",n:"French Macaron Box",d:"Macaron mungil aneka rasa dan warna.",t:"Untuk hadiah",bg:"#E9E4FF",v:[{n:"Isi 6",p:45000},{n:"Isi 12",p:85000}],s:art.mac("#FFB3C6","#BFE6CF","#FFE08A")},
{id:"cinnamon",n:"Cinnamon Roll",d:"Roti lembut dengan kayu manis dan glaze.",p:25000,t:"Hangat",bg:"#FFEBD6",s:art.cinn("#E3A66B","#8A4B2A")},
{id:"mango",n:"Mango Mousse Cup",d:"Mousse mangga yang ringan dan segar.",p:28000,t:"Tropis",bg:"#FFEFC9",s:art.glass("#FFB02E","#FFF1D6","#FF9D1F")}
];
var cart={},$=function(i){return document.getElementById(i)};
var rp=function(n){return "Rp"+n.toLocaleString("id-ID")};
var find=function(id){return P.filter(function(x){return x.id===id})[0]};
// Satu sumber harga: produk bervarian pakai v[0].p, produk satuan pakai p
var base=function(x){return x.v?x.v[0].p:x.p};
var BULAN=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
function fdate(v){if(!v)return "belum dipilih";var d=v.split("-");return Number(d[2])+" "+BULAN[Number(d[1])-1]+" "+d[0]}
function sunday(v){var d=v.split("-");return new Date(d[0],d[1]-1,d[2]).getDay()===0}
function salahTanggal(v){
  if(v<HARIINI)return "Tanggal lampau tidak bisa dipilih.";
  if(v<$("date").min)return "Pre-order minimal H-1. Pilih tanggal mulai besok, ya.";
  if(sunday(v))return "Hari Minggu kami tutup. Pilih tanggal lain, ya.";
  return "";
}
var val=function(i){return $(i).value.trim()};
function total(){var t=0;Object.keys(cart).forEach(function(k){t+=keyInfo(k).p*cart[k]});return t}

$("heroArt").innerHTML=art.layer("#FFE1A0","#fff","#E8365D");
$("year").textContent=new Date().getFullYear();
var iso=function(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
var td=new Date(),tm=new Date(td);
tm.setDate(tm.getDate()+1);
var HARIINI=iso(td);
$("date").min=iso(tm);
$("poInfo").innerHTML="<strong>Aturan pre-order</strong>Pesan minimal H-1, cut-off pukul 15.00. Minimum order "+rp(MIN)+". Antar area Bandung kota, ongkir "+rp(ONGKIR)+".";
$("grid").innerHTML=P.map(function(x){
  var o=x.v?'<select class="pv" data-id="'+x.id+'" aria-label="Pilih ukuran atau rasa '+x.n+'">'+x.v.map(function(v,i){return '<option value="'+i+'">'+v.n+'</option>'}).join("")+'</select>':"";
  return '<article class="product"><div class="pic" style="background:'+x.bg+'">'+x.s+'<span class="tag">'+x.t+'</span></div><div class="pb"><h3>'+x.n+'</h3><p class="pd">'+x.d+'</p>'+o+'<div class="pbt"><span class="price" id="pr_'+x.id+'">'+rp(base(x))+'</span><button class="add-btn" data-add="'+x.id+'" aria-label="Tambah '+x.n+'">+</button></div></div></article>'}).join("");

function keyInfo(k){
  var s=k.split("|"),x=find(s[0]),v=s.length>1?x.v[Number(s[1])]:null;
  return {p:v?v.p:x.p,label:v?x.n+" ("+v.n+")":x.n};
}
function render(){
  var rows=Object.keys(cart).map(function(k){var ki=keyInfo(k);return {k:k,ki:ki,q:cart[k]}}),n=0,t=total();
  rows.forEach(function(r){n+=r.q});
  $("count").textContent=n+" item";$("total").textContent=rp(t);
  $("barCart").textContent=n?"Keranjang ("+n+")":"Keranjang";
  $("list").innerHTML=rows.length?rows.map(function(r){return '<div class="cart-row"><span>'+r.ki.label+'<br><small>'+rp(r.ki.p)+' / item</small></span><span class="qty"><button data-q="-1" data-id="'+r.k+'" aria-label="Kurangi '+r.ki.label+'">−</button><strong>'+r.q+'</strong><button data-q="1" data-id="'+r.k+'" aria-label="Tambah '+r.ki.label+'">+</button></span></div>'}).join(""):'<p class="cart-empty">Belum ada pesanan. Pilih kue di atas dulu, ya.</p>';
  var m="Halo Lumi Bakehouse, aku mau pesan:\n\n"+rows.map(function(r){return "• "+r.ki.label+" x"+r.q+" — "+rp(r.ki.p*r.q)}).join("\n")+"\n\nTotal: "+rp(t)+"\n\nTanggal ambil/antar: "+fdate($("date").value)+"\nMetode: "+$("mode").value+"\n\nNama: "+val("nama")+"\nAlamat/pengambilan: "+val("alamat")+"\nCatatan: "+val("catatan");
  $("wa").href=rows.length?"https://wa.me/"+WA+"?text="+encodeURIComponent(m):"#pesan";
}
document.addEventListener("click",function(ev){
  var a=ev.target.closest("[data-add]");
  if(a){var pv=a.closest(".product").querySelector(".pv"),k=pv?a.dataset.add+"|"+pv.value:a.dataset.add;
    cart[k]=(cart[k]||0)+1;render();$("hint").textContent="Ditambahkan ke keranjang.";return}
  var q=ev.target.closest("[data-q]");
  if(q){var ck=q.dataset.id;cart[ck]=(cart[ck]||0)+Number(q.dataset.q);if(cart[ck]<=0)delete cart[ck];render()}
});
document.addEventListener("change",function(ev){
  var t=ev.target;
  if(t.classList.contains("pv")){var x=find(t.dataset.id);$("pr_"+x.id).textContent=rp(x.v[Number(t.value)].p);return}
  if(t.id==="date"){
    var s=t.value?salahTanggal(t.value):"";
    if(s){t.value="";render();$("hint").textContent=s;return}
    $("hint").textContent=HINT;render();return;
  }
  if(t.id==="mode")render();
});
document.addEventListener("input",function(ev){
  var t=ev.target;
  if(t.id==="nama"||t.id==="alamat"||t.id==="catatan")render();
});
function cek(){
  if(!Object.keys(cart).length)return "Keranjang masih kosong. Pilih kue dulu, ya.";
  var t=total();
  if(t<MIN)return "Minimum order "+rp(MIN)+". Tambah "+rp(MIN-t)+" lagi, ya.";
  if(!val("nama"))return "Isi nama kamu dulu, ya.";
  if(!val("alamat"))return "Isi alamat, atau tulis “ambil sendiri”, dulu ya.";
  if(!val("date"))return "Pilih tanggal ambil/antar dulu, ya.";
  var s=salahTanggal(val("date"));
  if(s)return s;
  if(WA==="6281234567890")return "Ini versi contoh: ganti nomor WA di bagian JavaScript dengan nomor WhatsApp toko.";
  return "";
}
$("wa").addEventListener("click",function(ev){
  var pesan=cek();
  if(pesan){ev.preventDefault();$("hint").textContent=pesan;return}
  $("wa").target="_blank";$("wa").rel="noopener";
});
document.querySelectorAll("[data-wa]").forEach(function(l){l.href="https://wa.me/"+WA+"?text="+encodeURIComponent("Halo Lumi Bakehouse, aku mau tanya menu hari ini.");l.target="_blank";l.rel="noopener"});
$("hint").textContent=HINT;
render();
