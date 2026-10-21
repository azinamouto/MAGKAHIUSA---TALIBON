import React, { useEffect, useRef } from 'react';
import { NavItem, navItems } from './Sidebar';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
  onNavigate: (path: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activePath,
  onNavigate,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Accessibility: Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-nav-root"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="mobile-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="mobile-drawer" ref={drawerRef}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <span className="brand-logo-seal" aria-hidden="true">
              TLB
            </span>
            <div className="brand-copy">
              <span className="brand-title">MAGKAHIUSA</span>
              <span className="brand-subtitle">TALIBON LGU</span>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="mobile-close-btn"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile Main Navigation">
          <ul className="mobile-nav-list">
            {navItems.map((item: NavItem) => {
              const isActive = activePath === item.path;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    type="button"
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => {
                      onNavigate(item.path);
                      onClose();
                    }}
                  >
                    <span className="nav-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="nav-label">{item.label}</span>
                    {item.badge && (
                      <span className={`nav-badge ${item.badgeType ?? 'neutral'}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-lgu-info">
            <strong>MDRRMC Operations</strong>
            <p>Talibon, Bohol · Hotlines: 911 / (038) 515-0012</p>
          </div>
        </div>
      </div>
    </div>
  );
};

