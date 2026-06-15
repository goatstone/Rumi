const DATA_URL = './data/example_1.json';

async function loadData(){
  try{
    const res = await fetch(DATA_URL);
    const item = await res.json();
    // for demo, duplicate a few items with small variations
    const items = [item];
    for(let i=2;i<=8;i++){
      const clone = JSON.parse(JSON.stringify(item));
      clone.properties.stone_id = `RUMI-2026-CH-${String(i).padStart(2,'0')}`;
      clone.attributes = clone.attributes.map(a=>a);
      clone.attributes.push({trait_type:'Listing', value:`Demo ${i}`});
      items.push(clone);
    }
    return items;
  }catch(e){console.error('Failed loading data',e);return[]}
}

function el(tag,cls,txt){const d=document.createElement(tag);if(cls)d.className=cls;if(txt!==undefined)d.textContent=txt;return d}

function renderCard(item){
  const card = el('div','card');
  const thumb = el('div','thumb','🪨');
  card.appendChild(thumb);
  const meta = el('div','meta');
  meta.innerHTML = `<strong>${item.properties.stone_id}</strong><div>${item.attributes.find(a=>a.trait_type==='Artisan')?.value||''}</div><div class="badge">${item.attributes.find(a=>a.trait_type==='Stone Cut')?.value||''}</div>`;
  card.appendChild(meta);
  card.addEventListener('click',()=>openModal(item));
  return card;
}

function populateFilters(items){
  const types=new Set();const regions=new Set();const cuts=new Set();
  items.forEach(i=>{types.add(i.attributes.find(a=>a.trait_type==='Stone Type')?.value||i.properties.stone_id);regions.add(i.properties.mining_concession||i.properties.mining_concession);cuts.add(i.attributes.find(a=>a.trait_type==='Stone Cut')?.value||'')});
  const selType=document.getElementById('filter-type');const selRegion=document.getElementById('filter-region');const selCut=document.getElementById('filter-cut');
  for(const t of Array.from(types)) selType.appendChild(new Option(t,t));
  for(const r of Array.from(regions)) selRegion.appendChild(new Option(r,r));
  for(const c of Array.from(cuts)) selCut.appendChild(new Option(c,c));
}

function applyFilters(items){
  const type=document.getElementById('filter-type').value;
  const region=document.getElementById('filter-region').value;
  const cut=document.getElementById('filter-cut').value;
  const mounted=document.getElementById('filter-mounted').value;
  const q=document.getElementById('search').value.toLowerCase();
  const filtered = items.filter(i=>{
    if(type && !i.attributes.some(a=>a.trait_type==='Stone Type' && a.value===type)) return false;
    if(region && i.properties.mining_concession!==region) return false;
    if(cut && !i.attributes.some(a=>a.trait_type==='Stone Cut' && a.value===cut)) return false;
    if(mounted==='true' && !i.attributes.some(a=>a.trait_type==='Artisan')) return false;
    if(mounted==='false' && i.attributes.some(a=>a.trait_type==='Artisan')) return false;
    if(q){
      const hay = (i.properties.stone_id+' '+(i.attributes.find(a=>a.trait_type==='Artisan')?.value||'')+' '+(i.properties.vendor_ruc||'')).toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
  renderMarketplace(filtered);
}

function renderMarketplace(items){
  const container=document.getElementById('marketplace');container.innerHTML='';
  items.forEach(it=>container.appendChild(renderCard(it)));
  // update hero with first item
  if(items[0]){
    document.getElementById('hero-title').textContent = items[0].name;
    document.getElementById('hero-provenance').textContent = `Origin: ${items[0].properties.mining_concession} · Artisan: ${items[0].attributes.find(a=>a.trait_type==='Artisan')?.value || '—'} · Cut: ${items[0].attributes.find(a=>a.trait_type==='Stone Cut')?.value || '—'}`;
  }
}

function openModal(item){
  const modal=document.getElementById('modal');
  const body=document.getElementById('modal-body');
  body.innerHTML = `<h2>${item.properties.stone_id} — ${item.name}</h2>
  <div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:240px"><div class=\"thumb\" style=\"height:260px;font-size:48px\">🪨</div></div><div style=\"flex:1;min-width:260px\"><h3>Metadata</h3><pre style=\"white-space:pre-wrap;max-height:240px;overflow:auto\">${JSON.stringify(item.properties,null,2)}</pre>
  <p><strong>Compliance HCS:</strong> ${item.properties.hcs_compliance_topic||item.properties.compliance_proof_hcs||'—'}</p>
  <p><a href="#" id=\"download-certificate\">Download Compliance Certificate (PDF)</a></p>
  <p><a href=\"https://hedera.com\" target=\"_blank\">View Hedera Audit Trail</a></p></div></div>`;
  modal.classList.remove('hidden');
}

function closeModal(){document.getElementById('modal').classList.add('hidden');}

document.getElementById('modal-close').addEventListener('click',closeModal);
document.getElementById('btn-browse').addEventListener('click',()=>window.scrollTo({top:400,behavior:'smooth'}));

async function boot(){
  const items = await loadData();
  populateFilters(items);
  renderMarketplace(items);
  // wire filters
  document.getElementById('filter-type').addEventListener('change',()=>applyFilters(items));
  document.getElementById('filter-region').addEventListener('change',()=>applyFilters(items));
  document.getElementById('filter-cut').addEventListener('change',()=>applyFilters(items));
  document.getElementById('filter-mounted').addEventListener('change',()=>applyFilters(items));
  document.getElementById('search').addEventListener('input',()=>applyFilters(items));
}

boot();
