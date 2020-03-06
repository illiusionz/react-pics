import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

   onSearchSubmit(term){
      console.log(term);
      axios.get('https://api.unsplash.com/search/photos', {
         params: { query: term },
         headers: {
            Authorization: 'Client-ID uPdl-jlL3nPNM_5oEzLlWOWwHZNKnNI7XlrzcUE3LGw'
         }
      }).then((response) => {
         
         console.log(response.data.results); 
      })
   }

   render(){
      return (
         <div className="ui container" style={{marginTop: '10px '}}>
            <SearchBar onSubmit={this.onSearchSubmit } />
         </div>
      );
   }
}

export default App; 