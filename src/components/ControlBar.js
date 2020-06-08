import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import {  Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class ControlBar extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

 

   makeStyles = {
    root: {
      width: 300,
    },
  };

  handleUpdate = (event, value) => {
      console.log(event,value);
      console.log('handleupdate');
      console.log(this.props);
      this.props.setValue(event,value);
    
  }

  



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
        {icons}
        {/* <hr style={{padding:'10px'}}/> */}
        <div>
            <label htmlFor="slider">
                Twist Effect
                <input
                    id="twistAmp"
                    type="range"
                    min={0}
                    max={1}
                    step={.001}
                    defaultvalue={0}
                    onChange={event => this.props.setValue(event)}
                />
               
            </label>
            

        </div>
        
          
        
        
      </div>
    );
  }
}

export default ControlBar;
// onChange={this.props.updateSpeed()}

// onChange={handleChange}

/* <Slider
            style={this.makeStyles}
                className='slider'
                id='twistSpeed'
                min={-10}
                max={10}
                defaultValue={[0]}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="slider"
                onChange={this.handleUpdate}
            ></Slider>
            <Slider
                        style={this.makeStyles}

                className='slider'
                id='twistAmp'
                min={0}
                max={10}
                defaultValue={[0]}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="continuous-slider"
                onChange={this.handleUpdate}
            ></Slider> */