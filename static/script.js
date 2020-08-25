async function getConfig() {
  let url = 'http://localhost:3000/api/get-config';
  let response = await fetch(url);
  let config = await response.text();
  document.getElementById('root').innerHTML = config;
}
async function readb() {
  let response2 = await fetch('http://localhost:3000/api/readb');
  let readb = await response2.text();
  document.getElementById('readb').innerHTML = readb;
}
