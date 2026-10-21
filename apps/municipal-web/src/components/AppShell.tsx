import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

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

        {/* Sidebar Navigation for Desktop */}
        <Sidebar activePath={activePath} onNavigate={onNavigate} />

        {/* Dedicated Accessible Mobile Drawer */}
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          activePath={activePath}
          onNavigate={onNavigate}
        />

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
