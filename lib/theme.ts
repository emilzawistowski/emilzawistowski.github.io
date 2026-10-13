export type Theme = 'light' | 'dark'

// Browser chrome colours; keep in step with --background in app/globals.css.
export const themeColors: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#0f0f0f',
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', themeColors[theme])
}

export function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem('theme')
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

// Inlined at the top of <body> so the theme is set before anything is painted:
// a saved choice wins, otherwise the system setting decides. It also adds the
// theme-color meta, which is kept out of React's hands so that it can be updated.
export const themeScript = `(function(){var t=null;try{t=localStorage.getItem('theme')}catch(e){}var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';var m=document.createElement('meta');m.name='theme-color';m.content=d?'${themeColors.dark}':'${themeColors.light}';document.head.appendChild(m)})()`
