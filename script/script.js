//Status codes with messages
let HTTP_STATUS_CODES = {
  '200' : 'OK',
  '201' : 'Created',
  '202' : 'Accepted',
  '203' : 'Non-Authoritative Information',
  '204' : 'No Content',
  '205' : 'Reset Content',
  '206' : 'Partial Content',
  '300' : 'Multiple Choices',
  '301' : 'Moved Permanently',
  '302' : 'Found',
  '303' : 'See Other',
  '304' : 'Not Modified',
  '305' : 'Use Proxy',
  '307' : 'Temporary Redirect',
  '400' : 'Bad Request',
  '401' : 'Unauthorized',
  '402' : 'Payment Required',
  '403' : 'Forbidden',
  '404' : 'Not Found',
  '405' : 'Method Not Allowed',
  '406' : 'Not Acceptable',
  '407' : 'Proxy Authentication Required',
  '408' : 'Request Timeout',
  '409' : 'Conflict',
  '410' : 'Gone',
  '411' : 'Length Required',
  '412' : 'Precondition Failed',
  '413' : 'Request Entity Too Large',
  '414' : 'Request-URI Too Long',
  '415' : 'Unsupported Media Type',
  '416' : 'Requested Range Not Satisfiable',
  '417' : 'Expectation Failed',
  '500' : 'Internal Server Error',
  '501' : 'Not Implemented',
  '502' : 'Bad Gateway',
  '503' : 'Service Unavailable',
  '504' : 'Gateway Timeout',
  '505' : 'HTTP Version Not Supported'
};

/**Function to send response and status
 * 
*/
async function sendQuery() {

  // get the value of textarea where we need to display
  let value = document.getElementById('searchBar').value;

  // set headersList to send using fetch
  let headersList = {
  "Accept": "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
  };

  // fetch the data and throw error if present
  let response = "not found"
  try{
   response=await fetch(value, { 
    method: "GET",
    headers: headersList 
  }
  );
}catch(e){
  console.log(e)     //Error
}
  
  // convert the response to text
  let data = await response.text()
  document.getElementById('output').value= data //send the response
  document.getElementById("resStatus").innerHTML=`${response.status}
   ${HTTP_STATUS_CODES[response.status]}`    //send status
}


/**Handle the change in param text section */
function handleParamChange(){
  let stringUrl= document.getElementById('searchBar').value
  let stringToAppend= document.getElementById('text1').value
  if(stringUrl!==""){

    stringUrl= stringUrl.concat(`?${stringToAppend}`)
    document.getElementById('searchBar').value= stringUrl
  }
}

/**Handle the change in value text section */
function handleValueChange(){
  let stringUrl= document.getElementById('searchBar').value
  let stringToAppend= document.getElementById('text2').value
  if(stringUrl!==""){

    stringUrl= stringUrl.concat(`=${stringToAppend}`)
    document.getElementById('searchBar').value= stringUrl
  }
}