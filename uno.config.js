import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    rules: [
    ],
    shortcuts: [
      {
        'absolute-center': 'absolute top-1/2 left-1/2 -translate-1/2',
        'absolute-full': 'absolute inset-0',
      },
    ],
    extendTheme: (theme) => ({
     ...theme,
     breakpoints: {
       ...theme.breakpoints,
       xs: '375px',
       '3xl': '1920px',
       '4xl': '2560px'
     },
     keyframes: {
       ...theme.keyframes
     }
    }),
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        autoInstall: true,
        // cdn: 'https://esm.sh/',
      }),
      presetTypography(),
      presetWebFonts(),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })