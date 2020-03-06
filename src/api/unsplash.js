import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID uPdl-jlL3nPNM_5oEzLlWOWwHZNKnNI7XlrzcUE3LGw'
   }
});