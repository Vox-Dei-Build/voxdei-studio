export function ThemeProvider() {
  const script = `(function(){
    try {
      var stored = localStorage.getItem('vd-theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })()`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
