var stableVersion = '3.1.8';
var devVersion = '3.1.8.2';
// ------------------
var isDev = window.location.search.includes('dev');
var isTunnel = window.location.search.includes('tunnel');
var prodURL = 'https://cdn.jsdelivr.net/gh/KarshHagan/kh-website@' + version + '/dist/index.js';

var url = prodURL;
var currentEnv = window.location.hostname;

if (currentEnv.includes('.webflow.io')) {
  console.log('// Staging //');
  if (isDev) {
    var localURL = 'http://localhost:3000/index.js';
    url = localURL;
  }

  if (isTunnel) {
    console.log('tunnel');
    var tunnelURL = 'https://khtunnel.loca.lt/index.js';
    url = tunnelURL;
  }
} else {
  console.log('// Production //');
}
var script = document.createElement('script');
script.src = url;
script.setAttribute('defer', '');
document.head.append(script);
