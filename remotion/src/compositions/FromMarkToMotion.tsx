import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export type FromMarkToMotionProps = {
  title: string;
  kicker: string;
  sourceImage: string;
  displayText: string;
  footer: string;
  templateLabel: string;
};

const colors = {
  ink: '#fff2d8',
  muted: 'rgba(255, 242, 216, 0.72)',
  cyan: '#5dd6ff',
  amber: '#ffc36b',
  deep: '#05070c',
};

export const FromMarkToMotion: React.FC<FromMarkToMotionProps> = ({
  title,
  kicker,
  sourceImage,
  displayText,
  footer,
  templateLabel,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const progress = frame / Math.max(1, durationInFrames - 1);
  const drift = interpolate(progress, [0, 1], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const backgroundScale = interpolate(drift, [0, 1], [1.1, 1.22]);
  const imageScale = interpolate(drift, [0, 1], [1, 1.045]);
  const imageY = interpolate(drift, [0, 1], [0, -20]);
  const textOpacity = interpolate(frame, [80, 150], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const textY = interpolate(frame, [80, 150], [38, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const markGlow = interpolate(frame, [410, 560], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scanY = interpolate(frame, [0, durationInFrames - 1], [-260, 1780]);

  return (
    <AbsoluteFill style={{backgroundColor: colors.deep, overflow: 'hidden'}}>
      <AbsoluteFill>
        <Img
          src={sourceImage}
          style={{
            position: 'absolute',
            inset: '-9%',
            width: '118%',
            height: '118%',
            objectFit: 'cover',
            transform: `scale(${backgroundScale})`,
            filter: 'blur(18px) saturate(1.08) contrast(1.08)',
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(3, 5, 10, 0.46), rgba(3, 5, 10, 0.18) 42%, rgba(3, 5, 10, 0.94))',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 68,
          right: 68,
          top: 188,
          height: 720,
          border: '1px solid rgba(255, 242, 216, 0.2)',
          borderRadius: 26,
          overflow: 'hidden',
          background: 'rgba(5, 7, 12, 0.46)',
          boxShadow: '0 34px 120px rgba(0, 0, 0, 0.42)',
          transform: `translateY(${imageY}px) scale(${imageScale})`,
        }}
      >
        <Img
          src={sourceImage}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 54% 42%, rgba(93, 214, 255, ${
            0.14 + markGlow * 0.22
          }), transparent 31%)`,
          mixBlendMode: 'screen',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: scanY,
          height: 340,
          background:
            'linear-gradient(180deg, transparent, rgba(255, 242, 216, 0.10), transparent)',
          opacity: 0.42,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          top: 96,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          color: colors.muted,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: 28,
          letterSpacing: 0,
        }}
      >
        <span>{kicker}</span>
        <span>{String(Math.round(frame)).padStart(3, '0')} / 600</span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 118,
          padding: '44px 44px 48px',
          border: '1px solid rgba(255, 242, 216, 0.2)',
          borderRadius: 22,
          background: 'rgba(5, 7, 12, 0.78)',
          boxShadow: '0 34px 120px rgba(0, 0, 0, 0.44)',
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            color: colors.cyan,
            fontSize: 29,
            marginBottom: 20,
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}
        >
          {templateLabel}
        </div>
        <h1
          style={{
            margin: '0 0 26px',
            color: colors.ink,
            fontSize: 78,
            lineHeight: 1.02,
            letterSpacing: 0,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: 0,
            color: colors.ink,
            fontSize: 42,
            lineHeight: 1.32,
            letterSpacing: 0,
          }}
        >
          {displayText}
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 48,
          color: colors.muted,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: 26,
          letterSpacing: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>{footer}</span>
        <span>1080x1920 · 30fps</span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 26,
          height: 6,
          borderRadius: 99,
          background: 'rgba(255, 242, 216, 0.18)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: '100%',
            borderRadius: 99,
            background: `linear-gradient(90deg, ${colors.cyan}, ${colors.amber})`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
