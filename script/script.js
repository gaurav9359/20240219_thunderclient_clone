console.log('orneo')

async function sendQuery() {
  console.log('orneo');
  let value = document.getElementById('searchBar').value;
  console.log(typeof value);
  let headersList = {
    "Accept": "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
  };

  let response = await fetch(value, { 
method: "GET",
headers: headersList
  });
  
  let data = await response.text();
  console.log(data);
  
  console.log(value);
}
