/**
 * MAGKAHIUSA–TALIBON Shared Domain Types
 * Baseline typing adhering to ADR-001 and ADR-002
 */

export type BarangayCode =
  | 'TLB-01' | 'TLB-02' | 'TLB-03' | 'TLB-04' | 'TLB-05'
  | 'TLB-06' | 'TLB-07' | 'TLB-08' | 'TLB-09' | 'TLB-10'
  | 'TLB-11' | 'TLB-12' | 'TLB-13' | 'TLB-14' | 'TLB-15'
  | 'TLB-16' | 'TLB-17' | 'TLB-18' | 'TLB-19' | 'TLB-20'
  | 'TLB-21' | 'TLB-22' | 'TLB-23' | 'TLB-24' | 'TLB-25';

export interface BarangayInfo {
  code: BarangayCode;
  name: string;
  isIsland: boolean;
}

export type IncidentStatusType = 'DRAFT' | 'OPEN' | 'CLOSED' | 'ARCHIVED';

export type AssessmentStateType = 'REPORTED' | 'UNDER_REVIEW' | 'VERIFIED' | 'REJECTED';

export type DamageSeverity = 'NONE' | 'PARTIALLY_DAMAGED' | 'TOTALLY_DESTROYED';

export type SyncStatus = 'IDLE' | 'SYNCING' | 'OFFLINE' | 'CONFLICT' | 'ERROR';

export interface DraftQueueEntry<T = unknown> {
  id: string;
  entityType: string;
  payload: T;
  createdAt: string;
  clientRevision: number;
}

