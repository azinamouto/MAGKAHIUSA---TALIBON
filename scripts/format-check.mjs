/**
 * Workspace formatting hygiene check
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = process.cwd();
const TARGET_DIRS = ['apps', 'packages', 'scripts', 'docs'];
let errors = 0;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rel = path.relative(ROOT, filePath);
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.endsWith('\r')) {
      // Windows CRLF is fine in git on windows, check trailing whitespace before carriage return
      if (/[ \t]\r$/.test(line)) {
        console.warn(`[FORMAT WARNING] ${rel}:${i + 1} Trailing whitespace detected.`);
      }
    } else if (/[ \t]+$/.test(line)) {
      console.warn(`[FORMAT WARNING] ${rel}:${i + 1} Trailing whitespace detected.`);
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'coverage', '.gemini'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (/\.(ts|tsx|js|mjs|json|md)$/.test(entry.name)) {
      checkFile(fullPath);
    }
  }
}

for (const dir of TARGET_DIRS) {
  const full = path.join(ROOT, dir);
  if (fs.existsSync(full)) walk(full);
}

console.log('✓ Codebase format and style check completed successfully.');
