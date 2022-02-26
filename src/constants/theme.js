const palette = {
  green: '#13B178',
  lightGreen: '#00FFA3',
  veryLightGreen: '#00FFA322',
  white: '#FFFFFF',
  grey: '#5C5C5C',
  black: '#1B1B1B',
  red: '#ff0015',
};

export const lightTheme = {
  type: 'light',
  borderRadius: 8,
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.green,
    secondary: palette.lightGreen,
    circleBackground: palette.veryLightGreen,
    link: palette.grey,
    time: palette.grey,
    input: palette.grey,
    warnning: palette.red,
  },
  spacing: {
    xxs: 4,
    xs: 8,
    s: 12,
    m: 24,
    l: 36,
    xl: 48,
    xxl: 52,
    bw: 14,
    bh: 12,
  },
  textVariant: {
    header: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 36,
    },
    regular: {
      fontFamily: 'Quicksand-Medium',
      fontSize: 18,
    },
    regularBold: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 18,
    },
    small: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 14,
    },
    subHeader: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 24,
    },
    inputItalic: {
      fontFamily: 'Montserrat-Italic',
      fontSize: 18,
    },
    smallerItalic: {
      fontFamily: 'Montserrat-Italic',
      fontSize: 15,
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  type: 'dark',
  colors: {
    ...lightTheme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
