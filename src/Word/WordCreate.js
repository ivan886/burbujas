import React from 'react';
import axios from 'axios';

class WordCreate extends React.Component{
    
    
    constructor(props) {
      super(props);
      this.state = {
        palabra: '',
        tema: '',
        sound: '',
        message: '',
      }
    }
    
   handleFormSubmit = e => {
      e.preventDefault();
      axios({
         method: 'post',
         url:   'http://18.191.143.217:8000/api/words',
         headers: { 'content-type': 'application/json' },
         data: this.state
      })
      .then(res => {
        const words = res.data;
          console.log(words);
      })
      .catch(error => this.setState({ error: error.message }));
   };
    
    render(){
        return (
                <form action="#" >
                    <label>palabra</label>
                    <br/>
                     <input type="text" name="palabra" placeholder="palabra"
                        value={this.state.palabra}
                        onChange={e => this.setState({ palabra: e.target.value })}
                    />
                    
                    <br/>
                    <label>tema</label>
                    <br/>
                    <input type="text" name="tema" placeholder="tema"
                        value={this.state.tema}
                        onChange={e => this.setState({ tema: e.target.value })}
                    />
                    <br/>
                    <label >Sonido</label>
                    <br/>
                    <input type="text" name="sound" placeholder="sound"
                        value={this.state.sound}
                        onChange={e => this.setState({ sound: e.target.value })}
                    />
                    <br/>
                     <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
              </form>
            );
    }
}


export default WordCreate;
