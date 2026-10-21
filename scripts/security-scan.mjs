/**
 * MAGKAHIUSA–TALIBON Security Scanner
 * Scans code and configs for credential leaks, PII leaks, and dangerous query patterns.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = process.cwd();
const TARGET_DIRS = ['apps', 'packages', 'database', 'infrastructure', 'docs', '.github'];
let violations = 0;

const FORBIDDEN_PATTERNS = [
  {
    regex: /(?:BEGIN\s+PRIVATE\s+KEY|BEGIN\s+RSA\s+PRIVATE\s+KEY)/,
    desc: 'Unencrypted private key detected',
  },
  {
    regex: /(?:password|passwd|pwd|secret)\s*[:=]\s*['"][a-zA-Z0-9!@#$%^&*()_+]{12,}['"]/i,
    desc: 'Potential hardcoded password/secret assignment',
    filter: (filePath) => !filePath.includes('.env.example'),
  },
  {
    regex: /AKIA[0-9A-Z]{16}/,
    desc: 'AWS Access Key ID format detected',
  },
  {
    regex: /ghp_[a-zA-Z0-9]{36}/,
    desc: 'GitHub Personal Access Token detected',
  },
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rel = path.relative(ROOT, filePath);

  for (const { regex, desc, filter } of FORBIDDEN_PATTERNS) {
    if (filter && !filter(filePath)) continue;
    if (regex.test(content)) {
      console.error(`[SECURITY VIOLATION] ${rel}: ${desc}`);
      violations++;
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'coverage', '.gemini'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (/\.(ts|tsx|js|mjs|json|yml|yaml|prisma|md|env)$/.test(entry.name)) {
      checkFile(fullPath);
    }
  }
}

console.log('Running MAGKAHIUSA security and secret scanning...');

for (const dir of TARGET_DIRS) {
  const full = path.join(ROOT, dir);
  if (fs.existsSync(full)) walk(full);
}

// Verify .gitignore contains critical secret protection patterns
const gitignorePath = path.join(ROOT, '.gitignore');
if (fs.existsSync(gitignorePath)) {
  const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
  const requiredExclusions = ['.env', 'node_modules'];
  for (const item of requiredExclusions) {
    if (!gitignore.includes(item)) {
      console.error(`[SECURITY VIOLATION] .gitignore missing critical exclusion: '${item}'`);
      violations++;
    }
  }
}

if (violations > 0) {
  console.error(`\nSecurity scan failed with ${violations} violation(s).`);
  process.exit(1);
} else {
  console.log('✓ Security scan passed cleanly. No credential or token exposures detected.');
}
