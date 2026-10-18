import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const pages = [
  { title: 'Household registry', description: 'Identity model pending ADR-002. No records shown.', icon: '⌂' },
  { title: 'Disaster operations', description: 'Incident reporting and verification are not enabled.', icon: '◈' },
  { title: 'Ayuda traceability', description: 'Distribution ledger and approvals are design-only.', icon: '▤' },
  { title: 'Public accountability', description: 'No unverified population or budget figures.', icon: '◎' },
];
function App() {
  return <div className="shell">
    <aside className="sidebar"><div className="mark">M</div><div className="brand">MAGKAHIUSA<span>TALIBON</span></div><div className="sidebar-bottom">ENGINEERING FOUNDATION<br/>v0.1.0</div></aside>
    <main className="content"><div className="topline"><span>BARANGAY OPERATIONS</span><span className="dot">● FOUNDATION ONLY</span></div>
      <section className="hero"><div className="eyebrow">ONE MUNICIPALITY · CONNECTED BARANGAYS</div><h1>Barangay Operations</h1><p>Offline-ready foundation, not authorized for resident data.</p><div className="warning">Prototype shell. No production authentication, barangay sync, disaster reports, or resident data are active.</div></section>
      <div className="section-head"><h2>Planned capabilities</h2><span>Design phase</span></div>
      <div className="cards">{pages.map((p)=><article className="card" key={p.title}><div className="card-icon">{p.icon}</div><h3>{p.title}</h3><p>{p.description}</p><div className="status">NOT IMPLEMENTED</div></article>)}</div>
      <footer>ALZA.Net IT Solutions · MAGKAHIUSA–TALIBON · No official LGU records</footer>
    </main></div>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
