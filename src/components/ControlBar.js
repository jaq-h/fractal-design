import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import {  Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class ControlBar extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

   marks = [
    {
      value: -10,
      label: '-10',
    },
    {
      value: 10,
      label: '10',
    },
  ];

   makeStyles = {
    root: {
      width: 300,
    },
  };

  



  render(){
      const icons = [];
      if(this.props.state.playing){
       icons.push( <Icon onClick={this.props.pause} color='purple' size='large' name='pause'/>);
      }
      else{
       icons.push( <Icon onClick={this.props.play} color='purple' size='large' name='play'/>);

      }

    
    
    return(
      <div  className="Control-Bar">
        <Slider
            min={-10}
            max={10}
            defaultValue={[0]}
            step={.1}
            valueLabelDisplay="auto"
            aria-labelledby="slider"
            marks={this.marks}
        />
          
        {icons}
        
      </div>
    );
  }
}

export default ControlBar;
// onChange={this.props.updateSpeed()}

// onChange={handleChange}