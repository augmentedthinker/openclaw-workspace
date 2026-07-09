import React from 'react';
import {Composition, staticFile} from 'remotion';
import {FromMarkToMotion, type FromMarkToMotionProps} from './compositions/FromMarkToMotion';

const defaultProps: FromMarkToMotionProps = {
  title: 'From Mark To Motion',
  kicker: 'R-001 / Remotion Experiments',
  sourceImage: staticFile('kron-evolution-iteration-020.png'),
  displayText:
    'Start where the mark already exists. Code the motion around it, then let the template teach us what repeats.',
  footer: 'OpenClaw Workshop · Iteration 1',
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="FromMarkToMotion"
      component={FromMarkToMotion}
      durationInFrames={600}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={defaultProps}
    />
  );
};
