import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..');
const manifestPath = resolve(projectRoot, 'src/data/iterations.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const id = process.argv[2] ?? manifest[0]?.id;
const iteration = manifest.find((entry) => entry.id === id);

if (!iteration) {
  console.error(`Unknown Remotion iteration: ${id}`);
  console.error(`Known iterations: ${manifest.map((entry) => entry.id).join(', ')}`);
  process.exit(1);
}

const remotionBin = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const entryPoint = 'src/index.ts';

execFileSync(
  remotionBin,
  [
    'remotion',
    'render',
    entryPoint,
    iteration.compositionId,
    iteration.output.videoPath,
    '--overwrite',
  ],
  {cwd: projectRoot, stdio: 'inherit'},
);

execFileSync(
  remotionBin,
  [
    'remotion',
    'still',
    entryPoint,
    iteration.compositionId,
    iteration.output.posterPath,
    `--frame=${iteration.output.posterFrame}`,
    '--overwrite',
  ],
  {cwd: projectRoot, stdio: 'inherit'},
);
