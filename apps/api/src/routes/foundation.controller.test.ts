import { describe, expect, it } from 'vitest';
import { FoundationController } from './foundation.controller';
describe('foundation endpoints', () => {
  const controller = new FoundationController();
  it('provides a liveness result', () => expect(controller.health().status).toBe('ok'));
  it('never reports fabricated live status', () => expect(controller.meta().status).toBe('foundation-only'));
});
