var version = '3.1.8.1';
// ------------------
var isDev = window.location.search.includes('dev');
var isTunnel = window.location.search.includes('tunnel');
var prodURL = 'https://cdn.jsdelivr.net/gh/KarshHagan/kh-website@' + version + '/dist/index.js';
var localURL = 'http://localhost:3000/index.js';
var tunnelURL = 'https://khtunnel.loca.lt/index.js';
var url = prodURL;
var currentEnv = window.location.hostname;

if (currentEnv.includes('.webflow.io')) {
  console.log('// Staging //');
  if (isDev) {
    url = localURL;
  }

  if (isTunnel) {
    console.log('tunnel');
    url = tunnelURL;
  }
}
var script = document.createElement('script');
script.src = url;
script.setAttribute('defer', '');
document.head.append(script);
