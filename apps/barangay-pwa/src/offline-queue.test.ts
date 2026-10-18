import { describe, expect, it } from 'vitest';
import { validateDemoDraft } from './offline-queue';
describe('illustrative draft envelope', () => {
 it('rejects oversized notes', () => expect(validateDemoDraft({id:'x',entity:'sample',action:'draft',payload:{note:'x'.repeat(141)},state:'pending'})).toBe(false));
});
