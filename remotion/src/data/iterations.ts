import {staticFile} from 'remotion';
import rawIterations from './iterations.json';
import type {FromMarkToMotionProps} from '../compositions/FromMarkToMotion';

type IterationManifestRecord = {
  id: string;
  compositionId: string;
  title: string;
  kicker: string;
  sourceImage: string;
  displayText: string;
  footer: string;
  templateLabel: string;
  durationInFrames: number;
  fps: number;
  width: number;
  height: number;
  output: {
    videoPath: string;
    posterPath: string;
    posterFrame: number;
  };
};

export type RemotionIteration = Omit<IterationManifestRecord, 'sourceImage'> & {
  props: FromMarkToMotionProps;
};

const records = rawIterations as IterationManifestRecord[];

export const remotionIterations: RemotionIteration[] = records.map((record) => ({
  ...record,
  props: {
    title: record.title,
    kicker: record.kicker,
    sourceImage: staticFile(record.sourceImage),
    displayText: record.displayText,
    footer: record.footer,
    templateLabel: record.templateLabel,
  },
}));
