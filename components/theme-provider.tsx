export function ThemeProvider() {
  const script = `(function(){
    if (localStorage.getItem('vd-theme') !== 'light') {
      document.documentElement.classList.add('dark');
    }
  })()`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
