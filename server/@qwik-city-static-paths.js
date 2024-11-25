const staticPaths = new Set([
  '/',
  '/404.html/',
  '/OLD_OLD_Pako.jpeg',
  '/OLD_Pako.jpeg',
  '/OLD_resume_me.png',
  '/OLD_rick_and_morty.png',
  '/Pako.jpeg',
  '/Pako.jpg',
  '/Pasquale_De_Lucia-Resume.pdf',
  '/aliens-alien.gif',
  '/blog/dev/',
  '/blog/dev/all/',
  '/blog/dev/bot-telegram/',
  '/blog/dev/bruno-new-http-client/',
  '/blog/dev/create-fade-animation-qwik/',
  '/blog/dev/essential-free-developer-tools/',
  '/blog/dev/essential-tools/',
  '/blog/dev/my-qwik-journey-begins/',
  '/blog/dev/qwik-impressions/',
  '/blog/dev/save-money-with-github-package-manager/',
  '/blog/dev/to-10-vs-code-extensions/',
  '/blog/dev/verdaccio-locally-npm-packages/',
  '/blog/dev/web-components-debut/',
  '/blog/finance/',
  '/blog/finance/all/',
  '/blog/finance/budgeting/',
  '/blog/finance/crypto-cashback/',
  '/blog/finance/motivi-per-avere-diverse-banche/',
  '/blog/finance/pac/',
  '/blog/finance/pension_fund/',
  '/blog/finance/zero-commissioni-cambio-valuta-e-vantaggi-revolut/',
  '/button-game/',
  '/dejizen.svg',
  '/dynamic-sitemap.xml',
  '/favicon.ico',
  '/favicon.svg',
  '/fonts/Poppins-Black.ttf',
  '/fonts/Poppins-BlackItalic.ttf',
  '/fonts/Poppins-Bold.ttf',
  '/fonts/Poppins-BoldItalic.ttf',
  '/fonts/Poppins-ExtraBold.ttf',
  '/fonts/Poppins-ExtraBoldItalic.ttf',
  '/fonts/Poppins-ExtraLight.ttf',
  '/fonts/Poppins-ExtraLightItalic.ttf',
  '/fonts/Poppins-Italic.ttf',
  '/fonts/Poppins-Light.ttf',
  '/fonts/Poppins-LightItalic.ttf',
  '/fonts/Poppins-Medium.ttf',
  '/fonts/Poppins-MediumItalic.ttf',
  '/fonts/Poppins-Regular.ttf',
  '/fonts/Poppins-SemiBold.ttf',
  '/fonts/Poppins-SemiBoldItalic.ttf',
  '/fonts/Poppins-Thin.ttf',
  '/fonts/Poppins-ThinItalic.ttf',
  '/manifest.json',
  '/pako-cartoon.png',
  '/price-list.jpeg',
  '/projects/',
  '/q-manifest.json',
  '/qwik-logo.png',
  '/qwik-prefetch-service-worker.js',
  '/resume_me.png',
  '/rick_and_morty.png',
  '/robots.txt',
  '/service-worker.js',
  '/sitemap.xml',
])
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false
  }
  const p = url.pathname
  if (p.startsWith('/build/')) {
    return true
  }
  if (p.startsWith('/assets/')) {
    return true
  }
  if (staticPaths.has(p)) {
    return true
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '')
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true
    }
  }
  return false
}
export { isStaticPath }
