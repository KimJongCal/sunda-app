const NAMACACHE = 'sunda';
const filesToCache = [
    '.',
    '../../index.html',
    '../../manifest.json',
    '../../pages/about.html',
    '../../pages/bahasa.html',
    '../../pages/kesenian.html',
    '../../pages/menu.html',
    '../../pages/sunda.html',
    '../../pages/tokoh.html',
    '../../pages/tulisan.html',
    '../css/font-awesome/css/font-awesome.min.css',
    '../css/font-awesome/fonts/fontawesome-webfont.woff2',
    '../css/about.css',
    '../css/bahasa.css',
    '../css/float.css',
    '../css/kesenian.css',
    '../css/main.css',
    '../css/main.less',
    '../css/main.scss',
    '../css/sunda.css',
    '../css/tokoh.css',
    '../css/tulisan.css',
    'imagesloaded.js',
    'jquery.js',
    'kesenian.js',
    'less.min.js',
    'main.js',
    'mansory.js',
    'serviceworker.js',
    'sunda.js',
    'tulisan.js',
    '../images/kesenian/angklung.jpg',
    '../images/kesenian/Bangbarongan.jpg',
    '../images/kesenian/calung.jpg',
    '../images/kesenian/jaipong.jpg',
    '../images/kesenian/karinding.jpg',
    '../images/kesenian/kuda.jpg',
    '../images/kesenian/wayang.jpg',
    '../images/tokoh/dk.jpg',
    '../images/tokoh/doel.jpg',
    '../images/tokoh/kis.jpg',
    '../images/tokoh/musa.jpg',
    '../images/tokoh/mustapa.jpg',
    '../images/tokoh/oto.jpg',
    '../images/tokoh/soewanda.jpg',
    '../images/tokoh/sri.jpg',
    '../images/tokoh/tini.jpg',
    '../images/tokoh/yuhana.jpg',
    '../images/tulisan/rarangken.png',
    '../images/tulisan/utama.png',
    '../images/tulisan/vokal.png',
    '../images/wall/angklung-blur.jpg',
    '../images/wall/KampungCikondang-blur.jpg',
    '../images/wall/kudalumping-blur.jpg',
    '../images/wall/warga-blur.jpg',
    '../images/load.gif',
    '../images/logo.png',
    '../images/sunda1-blur.jpg',
    '../images/sunda2-blur.jpg',
    '../images/sunda3-blur.jpg',
    '../images/sunda4-blur.jpg',
    '../images/sunda5-blur.jpg',
    '../images/utama-blur.jpg',
    '../images/wallpaper-tokoh.jpg',
];
self.addEventListener('install', event => {
    console.log('Persiapan Cache');
    event.waitUntil(
        caches.open(NAMACACHE)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(ada_response => {
            if (ada_response) {
                return ada_response;
            }
            // tidak ada response, ambil ke jaringan
            else {
                return fetch(event.request)
            }

        })
        .catch(error => {
            return new Response("Waduh " + error);
        })
    );
});