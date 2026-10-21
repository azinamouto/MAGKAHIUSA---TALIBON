import React, { useState } from 'react';

interface AppShellProps {
  children: React.ReactNode;
  activePath: string;
  onNavigate: (path: string) => void;
  breadcrumbs?: Array<{ label: string; path?: string }>;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  activePath,
  onNavigate,
  breadcrumbs = [{ label: 'Command Center', path: '/' }],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Command Center', path: '/', icon: '🏛️' },
    { label: 'Barangay Directory', path: '/barangays', icon: '📍' },
    { label: 'Disaster Operations', path: '/incidents', icon: '🚨' },
    { label: 'Relief & Assistance', path: '/assistance', icon: '📦' },
    { label: 'System Audit & Status', path: '/status', icon: '🛡️' },
  ];

  return (
    <div className="gov-shell">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Top Government Official Strip */}
      <header className="gov-topbar" role="banner">
        <div className="topbar-inner">
          <div className="lgu-identification">
            <span className="republic-text">Republic of the Philippines</span>
            <span className="divider">·</span>
            <span className="lgu-text">Municipality of Talibon, Province of Bohol</span>
          </div>
          <div className="topbar-badges">
            <span className="gov-tag-demo" title="Operating under ADR-001 Foundation Mode">
              FOUNDATION MODE · NO LIVE PII
            </span>
          </div>
        </div>
      </header>

      <div className="gov-body-layout">
        {/* Mobile Navigation Header */}
        <div className="mobile-header">
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
            <span className="menu-text">Menu</span>
          </button>
          <div className="mobile-title">MAGKAHIUSA TALIBON</div>
        </div>

        {/* Sidebar Navigation */}
        <aside
          className={`gov-sidebar ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Sidebar navigation"
        >
          <div className="sidebar-brand">
            <div className="brand-logo-seal" aria-hidden="true">
              TLB
            </div>
            <div className="brand-copy">
              <span className="brand-title">MAGKAHIUSA</span>
              <span className="brand-subtitle">MUNICIPAL COMMAND</span>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = activePath === item.path;
                return (
                  <li key={item.path} className="nav-item">
                    <button
                      type="button"
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => {
                        onNavigate(item.path);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <span className="nav-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="nav-label">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="sidebar-footer">
            <div className="compliance-note">
              <strong>ADR-001 Compliance</strong>
              <p>Authoritative writes strictly gated. Deny by default.</p>
            </div>
            <div className="version-tag">Version 0.2.0-alpha</div>
          </div>
        </aside>

        {/* Mobile Backdrop */}
        {mobileMenuOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content Area */}
        <div className="gov-main-wrapper">
          {/* Header & Breadcrumb Bar */}
          <div className="gov-subnav-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ol>
                {breadcrumbs.map((crumb, idx) => (
                  <li key={crumb.label}>
                    {idx > 0 && <span className="breadcrumb-separator">/</span>}
                    {crumb.path && idx < breadcrumbs.length - 1 ? (
                      <button
                        type="button"
                        className="breadcrumb-link"
                        onClick={() => onNavigate(crumb.path!)}
                      >
                        {crumb.label}
                      </button>
                    ) : (
                      <span className="breadcrumb-current" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <div className="system-live-indicator">
              <span className="indicator-dot online" aria-hidden="true" />
              <span className="indicator-text">System Active</span>
            </div>
          </div>

          <main id="main-content" className="gov-content" tabIndex={-1}>
            {children}
          </main>

          <footer className="gov-footer" role="contentinfo">
            <div className="footer-content">
              <p>
                <strong>MAGKAHIUSA — TALIBON MUNICIPAL DISASTER & AID COORDINATION PLATFORM</strong>
              </p>
              <p className="footer-disclaimer">
                In strict compliance with Philippine Data Privacy Act of 2012 (RA 10173). No real
                resident PII, household coordinates, or unverified relief ledgers are published.
              </p>
              <p className="footer-copyright">
                © {new Date().getFullYear()} Municipality of Talibon, Bohol. Engineering baseline
                maintained by ALZA.Net IT Solutions.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
