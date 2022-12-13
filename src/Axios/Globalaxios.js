
import axios from 'axios'

let data = localStorage.getItem("user");
let p = JSON.parse(data);

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = "bearer "+ p?.jwtToken;
alert("dddd");