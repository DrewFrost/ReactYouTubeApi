import axios from 'axios';


const KEY = 'AIzaSyAW69s4x0ivV99JvpSErBKEbtlSsHPSpsk';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY

   } 
});