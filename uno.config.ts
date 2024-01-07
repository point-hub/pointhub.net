// uno.config.ts
import { defineConfig, presetUno, presetTypography, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetPappIcon from '@point-hub/preset-papp-icon'

export default defineConfig({
  presets: [
    presetUno({ mode: 'vue-scoped' }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        roboto: [
          {
            name: 'Roboto',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true
          }
        ],
        inter: [
          {
            name: 'Inter',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true
          }
        ],
        poppins: [
          {
            name: 'Poppins',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true
          }
        ]
      }
    }),
    presetTypography(),
    presetPappIcon()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: '#321fda',
      secondary: '#9da5b1',
      info: '#3399ff',
      success: '#2eb85c',
      warning: '#f9b115',
      danger: '#e55353'
    }
  }
})
