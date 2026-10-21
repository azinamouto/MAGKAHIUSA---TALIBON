import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  badge?: string;
  badgeType?: 'info' | 'warning' | 'neutral';
}

interface SidebarProps {
  activePath: string;
  onNavigate: (path: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Command Center', path: '/', icon: '🏛️' },
  { id: 'barangays', label: 'Barangay Directory', path: '/barangays', icon: '📍', badge: '25' },
  {
    id: 'incidents',
    label: 'Disaster Operations',
    path: '/incidents',
    icon: '🚨',
    badge: '1 Monitoring',
    badgeType: 'warning',
  },
  { id: 'assistance', label: 'Relief & Assistance', path: '/assistance', icon: '📦' },
  { id: 'status', label: 'System Audit & Status', path: '/status', icon: '🛡️' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activePath,
  onNavigate,
  isOpen = false,
  onClose,
}) => {
  return (
    <aside
      className={`gov-sidebar ${isOpen ? 'open' : ''}`}
      aria-label="Municipal command navigation"
      role="navigation"
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
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    onNavigate(item.path);
                    if (onClose) onClose();
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

      <div className="sidebar-footer">
        <div className="compliance-note">
          <strong>ADR-001 Compliance</strong>
          <p>Authoritative writes strictly gated. Deny by default.</p>
        </div>
        <div className="version-tag">Version 0.2.0-alpha · PSGC 071243000</div>
      </div>
    </aside>
  );
};

