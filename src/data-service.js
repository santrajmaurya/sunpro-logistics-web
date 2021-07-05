let origin  =  window.location.origin;
let baseUrl  =  "";
let context = "/sunpro";

if(origin.match('localhost')) {
    baseUrl = "http://localhost:8096";
}

baseUrl = `${baseUrl}${context}`;

export default baseUrl; 