#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

// 1. Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your template folder inside this package
const templateDir = path.resolve(__dirname, '../template');

// Get project name from command line arguments (e.g., npx create-node-breeze my-app)
const targetDirName = process.argv[2] || '.';
const targetDir = path.resolve(process.cwd(), targetDirName);

console.log(`\nCreating project in ${targetDir}...`);

// 2. Create target folder if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 3. Copy everything from template folder to target directory
// (fs.cpSync is built into modern Node.js versions)
fs.cpSync(templateDir, targetDir, { recursive: true });

// Optional: rename .env.example to .env automatically for the user
const envExamplePath = path.join(targetDir, '.env.example');
const envPath = path.join(targetDir, '.env');
if (fs.existsSync(envExamplePath) && !fs.existsSync(envPath)) {
  fs.copyFileSync(envExamplePath, envPath);
}

// 4. Install dependencies inside the newly created project
console.log('\nInstalling dependencies...');
try {
  execSync('npm install', { stdio: 'inherit', cwd: targetDir });
  console.log('\nSuccess! Project setup is complete.\n');
  if (targetDirName !== '.') {
    console.log(`Next steps:\n  cd ${targetDirName}\n  npm run dev\n`);
  } else {
    console.log(`Next steps:\n  npm run dev\n`);
  }
} catch (error) {
  console.error('\nFailed to install dependencies automatically. Please run "npm install" manually.');
}