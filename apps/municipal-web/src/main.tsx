import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from './components/AppShell';
import './style.css';

export function App() {
  const [activePath, setActivePath] = useState('/');

  return (
    <AppShell activePath={activePath} onNavigate={(path) => setActivePath(path)}>
      <div className="command-center-root">
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--gov-green-900)' }}>
            Municipal Command Center
          </h1>
          <p style={{ color: 'var(--gov-slate-600)', marginTop: '0.25rem' }}>
            Talibon Municipal Disaster Risk Reduction & Management Council (MDRRMC)
          </p>
        </div>

        <div
          style={{
            background: 'var(--gov-amber-50)',
            border: '1px solid var(--gov-amber-200)',
            borderRadius: '6px',
            padding: '1rem',
            color: 'var(--gov-amber-700)',
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
          }}
        >
          <strong>Notice:</strong> Operating under ADR-001 Foundation Mode. Privileged write actions
          are gated. No live citizen PII is rendered.
        </div>
      </div>
    </AppShell>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
