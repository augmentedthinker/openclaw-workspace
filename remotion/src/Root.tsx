import React from 'react';
import {Composition} from 'remotion';
import {FromMarkToMotion} from './compositions/FromMarkToMotion';
import {remotionIterations} from './data/iterations';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {remotionIterations.map((iteration) => (
        <Composition
          key={iteration.id}
          id={iteration.compositionId}
          component={FromMarkToMotion}
          durationInFrames={iteration.durationInFrames}
          fps={iteration.fps}
          width={iteration.width}
          height={iteration.height}
          defaultProps={iteration.props}
        />
      ))}
    </>
  );
};
