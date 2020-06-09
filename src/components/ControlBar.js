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
                Twist angle
                <input
                    id="twistAngle"
                    type="range"
                    min={-1000}
                    max={1000}
                    step={1}
                    defaultvalue={0}
                    value={+this.props.state.twistAngle}
                    
                />
               
            </label>
            <span> <p> {this.props.state.twistAngle}</p></span>
            

        </div>

        <div>
            <label htmlFor="slider">
                Twist Speed
                <input
                    id="twistSpeed"
                    type="range"
                    min={-10}
                    max={10}
                    step={.001}
                    defaultvalue={0}
                    value={this.props.state.twistSpeed}
                    onChange={event => this.props.setValue(event)}
                />
               
            </label>
            <span> <p> {this.props.state.twistSpeed}</p></span>
            

        </div>
        <div>
            <label htmlFor="slider">
                Twist Amp
                <input
                    id="twistAmp"
                    type="range"
                    min={-1000}
                    max={1000}
                    step={.001}
                    defaultvalue={0}
                    value={this.props.state.twistAmp}
                    onChange={event => this.props.setValue(event)}
                />
               
            </label>
            <span> <p> {this.props.state.twistAmp}</p></span>
            

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