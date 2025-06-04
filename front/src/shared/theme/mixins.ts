import { css } from 'styled-components'
import { fonts } from './fonts'
import { colors } from './colors'

export const mixins = {
  textH1: css`
    ${fonts.archivoBold('clamp(32px, 5vw, 48px)', '1.2')};
    text-align: center;
    color: ${colors.text.grayscale};
  `,

  textH2: css`
    ${fonts.archivoSemiBold('clamp(28px, 4vw, 40px)', '1.3')};
    text-align: center;
    color: ${colors.text.grayscale};
  `,

  textH3: css`
    ${fonts.archivoSemiBold('clamp(24px, 3.5vw, 32px)', '1.35')};
    text-align: center;
    color: ${colors.text.grayscale};
  `,

  textH4: css`
    ${fonts.archivoMedium('clamp(20px, 3vw, 28px)', '1.4')};
    text-align: center;
    color: ${colors.text.grayscale};
  `,

  textH5: css`
    ${fonts.archivoMedium('clamp(18px, 2.5vw, 24px)', '1.45')};
    text-align: center;
    color: ${colors.text.grayscale};
  `,

  textH6: css`
    ${fonts.archivoRegular('clamp(16px, 2vw, 20px)', '1.5')};
    text-align: center;
    color: ${colors.text.grayscale};
  `,

  textP: css`
    ${fonts.interRegular('clamp(16px, 1.8vw, 18px)', '1.6')};
    color: ${colors.text.grayscale};
  `,

  textSpan: css`
    ${fonts.interRegular('clamp(14px, 1.5vw, 16px)', '1.4')};
    color: ${colors.text.grayscale};
  `,
}
