interface PreviewProps {
  html: string
  customCss: string
  veloraCss: string
  tokenCss?: string
}

const SCROLLBAR_CSS = `
  ::-webkit-scrollbar             { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track       { background: #060b17; }
  ::-webkit-scrollbar-thumb       { background: #1e2d45; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #2d4060; }
  ::-webkit-scrollbar-corner      { background: #060b17; }
  * { scrollbar-width: thin; scrollbar-color: #1e2d45 #060b17; }
`

export default function Preview({ html, customCss, veloraCss, tokenCss = '' }: PreviewProps) {
  const doc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${veloraCss}</style>
  <style>${SCROLLBAR_CSS}</style>
  ${tokenCss ? `<style>${tokenCss}</style>` : ''}
  <style>${customCss}</style>
</head>
<body>
${html}
</body>
</html>`

  return (
    <iframe
      srcDoc={doc}
      title="VeloraCSS Preview"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        background: '#ffffff',
        display: 'block',
      }}
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
