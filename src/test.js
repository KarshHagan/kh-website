var version = '0.0.2';
// ------------------
var prodCode = 'https://cdn.jsdelivr.net/gh/KarshHagan/kh-website@' + version + '/dist/index.js';
var localCode = 'http://localhost:3000/index.js';

var currentEnv = window.location.hostname;
var isDev = window.location.search.includes('dev');

var exportCode = prodCode;

if (currentEnv.includes('.webflow.io')) {
  console.log('// Staging //');
  if (isDev) {
    console.log('// Localhost //');
    exportCode = localCode;
  }
}

var script = document.createElement('script');
script.src = exportCode;
document.head.append(script);
