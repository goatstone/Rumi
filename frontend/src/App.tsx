import React, { useEffect, useState } from 'react'

type Attribute = { trait_type: string; value: string }
type Properties = { [k: string]: any; stone_id?: string; mining_concession?: string; hcs_compliance_topic?: string; compliance_proof_hcs?: string }
type Item = { name: string; properties: Properties; attributes: Attribute[] }

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <h1>Rumi</h1>
        <p className="tagline">Automating compliance, illuminating provenance.</p>
      </div>
      <nav className="quick-actions">
        <button>Browse Stones</button>
        <button>Mint New NFT</button>
        <button>Compliance Dashboard</button>
      </nav>
    </header>
  )
}

function App(): JSX.Element {
  const [items, setItems] = useState<Item[]>([])
  const [filters, setFilters] = useState({ types: [] as string[], regions: [] as string[], cuts: [] as string[], type: '', region: '', cut: '', mounted: '', q: '' })
  const [open, setOpen] = useState<Item | null>(null)

  useEffect(() => {
    fetch('/data/example_1.json')
      .then((r) => r.json())
      .then((item: Item) => {
        const list: Item[] = [item]
        for (let i = 2; i <= 8; i++) {
          const clone = JSON.parse(JSON.stringify(item)) as Item
          clone.properties.stone_id = `RUMI-2026-CH-${String(i).padStart(2, '0')}`
          clone.name = `${item.name} Demo ${i}`
          list.push(clone)
        }
        setItems(list)
        const types = new Set<string>()
        const regions = new Set<string>()
        const cuts = new Set<string>()
        list.forEach((i) => {
          types.add(i.attributes.find((a) => a.trait_type === 'Stone Type')?.value || i.properties.stone_id || '')
          regions.add(i.properties.mining_concession || '')
          cuts.add(i.attributes.find((a) => a.trait_type === 'Stone Cut')?.value || '')
        })
        setFilters((f) => ({ ...f, types: Array.from(types), regions: Array.from(regions), cuts: Array.from(cuts) }))
      })
      .catch((e) => console.error(e))
  }, [])

  const filtered = items.filter((i) => {
    if (filters.type && !i.attributes.some((a) => a.trait_type === 'Stone Type' && a.value === filters.type)) return false
    if (filters.region && i.properties.mining_concession !== filters.region) return false
    if (filters.cut && !i.attributes.some((a) => a.trait_type === 'Stone Cut' && a.value === filters.cut)) return false
    if (filters.mounted === 'true' && !i.attributes.some((a) => a.trait_type === 'Artisan')) return false
    if (filters.mounted === 'false' && i.attributes.some((a) => a.trait_type === 'Artisan')) return false
    if (filters.q) {
      const hay = (i.properties.stone_id + ' ' + (i.attributes.find((a) => a.trait_type === 'Artisan')?.value || '') + ' ' + (i.properties.vendor_ruc || '')).toLowerCase()
      if (!hay.includes(filters.q.toLowerCase())) return false
    }
    return true
  })

  return (
    <div>
      <Header />
      <main className="container">
        <section className="hero">
          <div className="hero-image">🪨</div>
          <div className="hero-info">
            <h2>{filtered[0]?.name || 'Featured stone'}</h2>
            <p>
              Origin: {filtered[0]?.properties.mining_concession || '—'} · Artisan:{' '}
              {filtered[0]?.attributes.find((a) => a.trait_type === 'Artisan')?.value || '—'} · Cut:{' '}
              {filtered[0]?.attributes.find((a) => a.trait_type === 'Stone Cut')?.value || '—'}
            </p>
            <div className="hero-actions">
              <button onClick={() => setOpen(filtered[0] || null)}>View Stone</button>
              <button>Buy with RUMI</button>
            </div>
          </div>
        </section>

        <section className="filters">
          <label>
            Type:{' '}
            <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
              <option value="">All</option>
              {filters.types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label>
            Region:{' '}
            <select value={filters.region} onChange={(e) => setFilters({ ...filters, region: e.target.value })}>
              <option value="">All</option>
              {filters.regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label>
            Cut:{' '}
            <select value={filters.cut} onChange={(e) => setFilters({ ...filters, cut: e.target.value })}>
              <option value="">All</option>
              {filters.cuts.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mounted:{' '}
            <select value={filters.mounted} onChange={(e) => setFilters({ ...filters, mounted: e.target.value })}>
              <option value="">Any</option>
              <option value="true">Mounted</option>
              <option value="false">Unmounted</option>
            </select>
          </label>
          <input placeholder="Search by stone id, artisan or miner" value={filters.q} onChange={(e) => setFilters({ ...filters, q: e.target.value })} />
        </section>

        <section className="marketplace">
          {filtered.map((it) => (
            <div className="card" key={it.properties.stone_id} onClick={() => setOpen(it)}>
              <div className="thumb">🪨</div>
              <div className="meta">
                <strong>{it.properties.stone_id}</strong>
                <div>{it.attributes.find((a) => a.trait_type === 'Artisan')?.value}</div>
                <div className="badge">{it.attributes.find((a) => a.trait_type === 'Stone Cut')?.value}</div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(null)}>
              ×
            </button>
            <h2>
              {open.properties.stone_id} — {open.name}
            </h2>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="thumb" style={{ height: 260, fontSize: 48 }}>
                  🪨
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <h3>Metadata</h3>
                <pre style={{ whiteSpace: 'pre-wrap', maxHeight: 240, overflow: 'auto' }}>{JSON.stringify(open.properties, null, 2)}</pre>
                <p>
                  <strong>Compliance HCS:</strong> {open.properties.hcs_compliance_topic || open.properties.compliance_proof_hcs || '—'}
                </p>
                <p>
                  <a href="#">Download Compliance Certificate (PDF)</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
