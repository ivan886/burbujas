import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';
import Axios from 'axios';

class Estrella extends Component {
  
   state={
       words:[],
       numbersWords:0
     }
     
     
  componentDidMount() {
   Axios.get('http://18.220.205.35:8000/api/words')
   //Axios.get('http://18.216.11.156:8000/api/proyectos')
   
      .then(res => {
        
        const words = res.data;
        console.log(words);
        const numbersWords=words.length;
        this.setState({ words });
        this.setState({numbersWords});
        
      })
  }
  
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1,
      scaleY: 1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };
  
  /* crearElemento(){
    for( var i=0;i<this.state.words.length;i++)
    {alert(this.state.words[i])
      
    }     
  }*/
  
  render() {
    
    console.log("numero de elementos "+this.state.numbersWords);
    //  this.crearElemento();
    
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try to drag a star" />
          
          
          {[...Array(this.state.numbersWords)].map(i => (
            
          
            
            <Star
              
              key={i}
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerHeight}
              numPoints={4}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

export default Estrella;
