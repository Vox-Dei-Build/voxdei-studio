export function ThemeProvider() {
  const script = `(function(){
    var stored = localStorage.getItem('vd-theme');
    if (stored === 'light') return;
    if (stored === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })()`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
