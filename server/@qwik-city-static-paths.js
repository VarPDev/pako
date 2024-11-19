const staticPaths = new Set([
  '/',
  '/.DS_Store',
  '/404.html/',
  '/OLD_OLD_Pako.jpeg',
  '/OLD_Pako.jpeg',
  '/OLD_resume_me.png',
  '/OLD_rick_and_morty.png',
  '/Pako.jpeg',
  '/Pako.jpg',
  '/Pasquale_De_Lucia-Resume.pdf',
  '/aliens-alien.gif',
  '/blog/',
  '/button-game/',
  '/dejizen.svg',
  '/dynamic-sitemap.xml',
  '/favicon.ico',
  '/favicon.svg',
  '/finance/',
  '/finance/budgeting/',
  '/finance/pension_fund/',
  '/fonts/.DS_Store',
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
