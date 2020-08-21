async function getConfig() {
  let url = 'http://localhost:3000/api/get-config';
  let response = await fetch(url);
  let config = await response.text();
  //alert(config);
  document.getElementById('root').innerHTML = config;
}
getConfig();
