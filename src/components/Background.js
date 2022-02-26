import React from 'react';
import Box from './Box';
import SafeBox from './SafeBox';

const Circle = ({position = 'bottom left', size = 0, ...rest}) => {
  const positions = position.split(' ');

  const horizontal = positions[1];
  const vertical = positions[0];

  const positionSize = -1 * (size * 0.5);
  const borderRadius = size / 2;

  return (
    <Box
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: borderRadius,
        bottom: vertical === 'bottom' ? positionSize : null,
        top: vertical === 'top' ? positionSize : null,
        left: horizontal === 'left' ? positionSize : null,
        right: horizontal === 'right' ? positionSize : null,
      }}
      {...rest}></Box>
  );
};

const Background = ({style, spacing, backgroundColor, children}) => {
  return (
    <SafeBox
      backgroundColor={backgroundColor}
      spacing={spacing}
      style={{
        flex: 1,
        ...style,
      }}>
      <Circle
        position="bottom left"
        size={300}
        backgroundColor="circleBackground"
      />
      <Circle
        position="top right"
        size={300}
        backgroundColor="circleBackground"
      />
      {children && children}
    </SafeBox>
  );
};

export default Background;
