interface PreviewProps {
  html: string
  customCss: string
  veloraCss: string
}

export default function Preview({ html, customCss, veloraCss }: PreviewProps) {
  const doc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${veloraCss}</style>
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
