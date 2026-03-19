export function ThemeProvider() {
  const script = `(function(){
    var stored = localStorage.getItem('vd-theme');
    var theme;
    if (stored === 'dark' || stored === 'light') {
      theme = stored;
    } else {
      var h = new Date().getHours();
      theme = (h >= 7 && h < 19) ? 'light' : 'dark';
    }
    if (theme === 'dark') document.documentElement.classList.add('dark');
  })()`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
