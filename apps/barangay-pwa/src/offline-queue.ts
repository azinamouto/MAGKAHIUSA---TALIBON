// Illustrative envelope only. Not used for personally identifiable information.
export type DraftOperation = { id: string; entity: 'sample'; action: 'draft'; payload: { note: string }; state: 'pending' };
export function validateDemoDraft(op: DraftOperation): boolean {
  return op.entity === 'sample' && op.action === 'draft' && op.state === 'pending' && op.payload.note.length <= 140;
}
// Implement persistent secure queue only after ADR-003, device threat model, and tenant authentication.
