import React from 'react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeaderBarProps {
  breadcrumbs: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  systemStatus?: 'operational' | 'monitoring' | 'offline';
  lastUpdated?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  breadcrumbs,
  onNavigate,
  systemStatus = 'operational',
  lastUpdated = 'Live Foundation',
}) => {
  return (
    <header className="gov-header-bar" role="region" aria-label="Page Header and Breadcrumbs">
      <nav className="gov-breadcrumbs-nav" aria-label="Breadcrumb">
        <ol className="gov-breadcrumbs-list">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <li key={crumb.label} className="breadcrumb-item">
                {idx > 0 && (
                  <span className="breadcrumb-separator" aria-hidden="true">
                    /
                  </span>
                )}
                {crumb.path && !isLast ? (
                  <button
                    type="button"
                    className="breadcrumb-button"
                    onClick={() => onNavigate(crumb.path!)}
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="breadcrumb-active" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="gov-header-status-area">
        <div className="status-indicator-badge">
          <span
            className={`status-pulse-dot ${systemStatus}`}
            aria-hidden="true"
          />
          <span className="status-label">
            {systemStatus === 'operational'
              ? 'Operational Mode'
              : systemStatus === 'monitoring'
                ? 'Incident Monitoring'
                : 'Offline Cache'}
          </span>
          <span className="status-timestamp" aria-label={`Status updated: ${lastUpdated}`}>
            ({lastUpdated})
          </span>
        </div>

        <div className="lgu-tenant-pill" title="Talibon Municipal Jurisdiction">
          <span className="tenant-id">TALIBON-MDRRMC</span>
        </div>
      </div>
    </header>
  );
};

