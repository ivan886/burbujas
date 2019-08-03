import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Text,Rect } from 'react-konva';

class Texto extends Component {
  
   state={
    
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
  render() {
    
    
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
           <Rect
            x={120}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
        
          <Text 
             text="Some text on canvas" 
             fontSize={15} 
             x= {20}
            y={60}
            text="texto palabra"
            fontSize= {18}
            fontFamily= 'Calibri'
            fill= '#555'
            width= {300}
            padding= {20}
            align= 'center'
            
           />
          
          
          
        </Layer>
      </Stage>
    );
  }
}

export default Texto;
