import { execSync } from 'child_process';
import fs from 'fs';
try {
  const result = execSync('npm run build', { encoding: 'utf8' });
  fs.writeFileSync('build_debug.txt', result);
} catch (error) {
  fs.writeFileSync('build_debug.txt', (error.stdout || '') + '\n+++\n' + (error.stderr || '') + '\n+++\n' + error.message);
}
