/**
 * Workspace artifact clean utility
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

const ROOT = process.cwd();
const TARGETS_TO_REMOVE = ['dist', 'coverage'];
const FILE_EXT_TO_REMOVE = ['.tsbuildinfo'];

function cleanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (TARGETS_TO_REMOVE.includes(entry.name)) {
        console.log(`Removing directory: ${path.relative(ROOT, fullPath)}`);
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        cleanDir(fullPath);
      }
    } else if (FILE_EXT_TO_REMOVE.some((ext) => entry.name.endsWith(ext))) {
      console.log(`Removing file: ${path.relative(ROOT, fullPath)}`);
      fs.rmSync(fullPath, { force: true });
    }
  }
}

console.log('Cleaning build artifacts...');
cleanDir(ROOT);
console.log('✓ Clean completed.');

