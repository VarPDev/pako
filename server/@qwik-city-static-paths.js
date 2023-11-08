const staticPaths = new Set(["/","/.DS_Store","/404.html/","/Pako.jpeg","/Pako.jpg","/Pasquale_De_Lucia-Resume.pdf","/aliens-alien.gif","/blog/","/button-game/","/favicon.ico","/favicon.svg","/history/","/links/","/manifest.json","/pako-cartoon.png","/projects/","/q-manifest.json","/resume_me.png","/rick_and_morty.png","/robots.txt","/service-worker.js","/sitemap.xml","/stack/","/test/"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };