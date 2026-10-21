import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('Prisma Schema Validation', () => {
  const schemaPath = path.resolve(__dirname, '../../../database/prisma/schema.prisma');

  it('schema file exists and is non-empty', () => {
    expect(fs.existsSync(schemaPath)).toBe(true);
    const content = fs.readFileSync(schemaPath, 'utf-8');
    expect(content.length).toBeGreaterThan(100);
  });

  it('contains expected models and enums with multi-line blocks', () => {
    const content = fs.readFileSync(schemaPath, 'utf-8');
    expect(content).toContain('generator client {');
    expect(content).toContain('datasource db {');
    expect(content).toContain('model Barangay {');
    expect(content).toContain('model Household {');
    expect(content).toContain('model Resident {');
    expect(content).toContain('model HouseholdMember {');
    expect(content).toContain('model Incident {');
    expect(content).toContain('model Assessment {');
    expect(content).toContain('model IncidentReport {');
    expect(content).toContain('enum IncidentStatus {');
    expect(content).toContain('enum AssessmentState {');
  });

  it('does not contain invalid single-line block definitions', () => {
    const content = fs.readFileSync(schemaPath, 'utf-8');
    expect(content).not.toMatch(/generator\s+\w+\s*\{[^\n]+\}/);
    expect(content).not.toMatch(/datasource\s+\w+\s*\{[^\n]+\}/);
    expect(content).not.toMatch(/enum\s+\w+\s*\{[^\n]+\}/);
  });
});
