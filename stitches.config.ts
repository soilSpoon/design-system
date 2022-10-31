import { createStitches } from '@stitches/react';
import * as colors from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } =
  createStitches({
    theme: {
      colors: {
        ...colors.gray,
        ...colors.mauve,
        ...colors.slate,
        ...colors.sage,
        ...colors.olive,
        ...colors.sand,
        ...colors.tomato,
        ...colors.red,
        ...colors.crimson,
        ...colors.pink,
        ...colors.plum,
        ...colors.purple,
        ...colors.violet,
        ...colors.indigo,
        ...colors.blue,
        ...colors.sky,
        ...colors.mint,
        ...colors.cyan,
        ...colors.teal,
        ...colors.green,
        ...colors.grass,
        ...colors.lime,
        ...colors.yellow,
        ...colors.amber,
        ...colors.orange,
        ...colors.brown,
        ...colors.bronze,
        ...colors.gold,

        ...colors.grayA,
        ...colors.mauveA,
        ...colors.slateA,
        ...colors.sageA,
        ...colors.oliveA,
        ...colors.sandA,
        ...colors.tomatoA,
        ...colors.redA,
        ...colors.crimsonA,
        ...colors.pinkA,
        ...colors.plumA,
        ...colors.purpleA,
        ...colors.violetA,
        ...colors.indigoA,
        ...colors.blueA,
        ...colors.skyA,
        ...colors.mintA,
        ...colors.cyanA,
        ...colors.tealA,
        ...colors.greenA,
        ...colors.grassA,
        ...colors.limeA,
        ...colors.yellowA,
        ...colors.amberA,
        ...colors.orangeA,
        ...colors.brownA,
        ...colors.bronzeA,
        ...colors.goldA,

        ...colors.whiteA,
        ...colors.blackA,

        // Semantic colors
        hiContrast: '$slate12',
        loContrast: 'white',
        canvas: 'hsl(0 0% 93%)',
        panel: 'white',
        transparentPanel: 'hsl(0 0% 0% / 97%)',
        shadowLight: 'hsl(206 22% 7% / 35%)',
        shadowDark: 'hsl(206 22% 7% / 20%)',
      },
      fonts: {
        untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
      },
      sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
        7: '27px',
        8: '35px',
        9: '59px',
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
      shadows: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        none: 'none',
        'dark-lg':
          'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
      },
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),

      ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

      fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
      fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

      ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
      ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
      jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
      as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
      fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
      fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
      fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

      bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),

      br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
      }),

      bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

      lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

      ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
      oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

      pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
      us: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),

      appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...colors.grayDark,
    ...colors.mauveDark,
    ...colors.slateDark,
    ...colors.sageDark,
    ...colors.oliveDark,
    ...colors.sandDark,
    ...colors.tomatoDark,
    ...colors.redDark,
    ...colors.crimsonDark,
    ...colors.pinkDark,
    ...colors.plumDark,
    ...colors.purpleDark,
    ...colors.violetDark,
    ...colors.indigoDark,
    ...colors.blueDark,
    ...colors.skyDark,
    ...colors.mintDark,
    ...colors.cyanDark,
    ...colors.tealDark,
    ...colors.greenDark,
    ...colors.grassDark,
    ...colors.limeDark,
    ...colors.yellowDark,
    ...colors.amberDark,
    ...colors.orangeDark,
    ...colors.brownDark,
    ...colors.bronzeDark,
    ...colors.goldDark,

    ...colors.grayDarkA,
    ...colors.mauveDarkA,
    ...colors.slateDarkA,
    ...colors.sageDarkA,
    ...colors.oliveDarkA,
    ...colors.sandDarkA,
    ...colors.tomatoDarkA,
    ...colors.redDarkA,
    ...colors.crimsonDarkA,
    ...colors.pinkDarkA,
    ...colors.plumDarkA,
    ...colors.purpleDarkA,
    ...colors.violetDarkA,
    ...colors.indigoDarkA,
    ...colors.blueDarkA,
    ...colors.skyDarkA,
    ...colors.mintDarkA,
    ...colors.cyanDarkA,
    ...colors.tealDarkA,
    ...colors.greenDarkA,
    ...colors.grassDarkA,
    ...colors.limeDarkA,
    ...colors.yellowDarkA,
    ...colors.amberDarkA,
    ...colors.orangeDarkA,
    ...colors.brownDarkA,
    ...colors.bronzeDarkA,
    ...colors.goldDarkA,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});
