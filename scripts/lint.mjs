/**
 * Codebase linting and hygiene validation runner
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = process.cwd();
const TARGET_DIRS = ['apps', 'packages'];
let errors = 0;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rel = path.relative(ROOT, filePath);

  if (/\.(ts|tsx|js|mjs)$/.test(filePath)) {
    // Rule 1: No debugger statements
    if (/\bdebugger\b/.test(content)) {
      console.error(`[LINT ERROR] ${rel}: Found 'debugger' statement.`);
      errors++;
    }

    // Rule 2: No hardcoded secret tokens
    if (/AWS_SECRET_ACCESS_KEY|SECRET_KEY\s*=\s*['"][a-zA-Z0-9_\-]{16,}['"]/i.test(content)) {
      console.error(`[LINT ERROR] ${rel}: Potential hardcoded secret found.`);
      errors++;
    }
  } else if (filePath.endsWith('.json')) {
    try {
      JSON.parse(content);
    } catch (e) {
      console.error(`[LINT ERROR] ${rel}: Invalid JSON syntax`);
      errors++;
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'coverage', '.gemini'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (/\.(ts|tsx|js|mjs|json)$/.test(entry.name)) {
      checkFile(fullPath);
    }
  }
}

for (const target of TARGET_DIRS) {
  const targetPath = path.join(ROOT, target);
  if (fs.existsSync(targetPath)) {
    walk(targetPath);
  }
}

if (errors > 0) {
  console.error(`\nLint verification failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('✓ Codebase linting passed cleanly with 0 violations.');
}

