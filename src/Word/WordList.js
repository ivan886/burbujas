import React from 'react';
import Axios from 'axios';

class WordList extends React.Component{
    
     state={
       words:[]
}   
  componentDidMount() {
   Axios.get('http://18.191.143.217:8000/api/words')
      .then(res => {
        const words = res.data;
        this.setState({ words });
      })
  }

  render() {
    return (
      <ul>
      { this.state.words.map(word => <li>{word.palabra}</li>)}
      </ul>
    )
  }
}

export default WordList;