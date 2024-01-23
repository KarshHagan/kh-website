var stableVersion = '3.2.0';
var devVersion = '3.2.0';
// ------------------
var isDev = window.location.search.includes('dev');
var isTunnel = window.location.search.includes('tunnel');

var stableURL =
  'https://cdn.jsdelivr.net/gh/KarshHagan/kh-website@' + stableVersion + '/dist/index.js';
var devURL = 'https://cdn.jsdelivr.net/gh/KarshHagan/kh-website@' + devVersion + '/dist/index.js';
var localURL = 'http://localhost:3000/index.js';
var tunnelURL = 'https://khtunnel.loca.lt/index.js';

var url = stableURL;
var currentEnv = window.location.hostname;

if (currentEnv.includes('.webflow.io')) {
  url = devURL;
  if (isDev) {
    console.log('// dev //');
    url = localURL;
  }

  if (isTunnel) {
    console.log('tunnel');
    url = tunnelURL;
  }
}

console.log('here', url);
var script = document.createElement('script');
script.src = url;
script.setAttribute('defer', '');
document.head.append(script);
