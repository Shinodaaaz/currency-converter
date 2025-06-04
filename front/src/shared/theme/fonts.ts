export const fonts = {
  archivoBold: (size: string, lineHeight = '1.5') => `
    font-family: 'ArchivoNarrow', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  archivoSemiBold: (size: string, lineHeight = '1.5') => `
    font-family: 'ArchivoNarrow', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  archivoMedium: (size: string, lineHeight = '1.5') => `
    font-family: 'ArchivoNarrow', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  archivoRegular: (size: string, lineHeight = '1.5') => `
    font-family: 'ArchivoNarrow', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  interRegular: (size: string, lineHeight = '1.5') => `
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  interMedium: (size: string, lineHeight = '1.5') => `
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  interItalic: (size: string, lineHeight = '1.5') => `
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
  interBold: (size: string, lineHeight = '1.5') => `
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: ${size};
    line-height: ${lineHeight};
  `,
}
