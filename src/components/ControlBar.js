import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import {  Label, Icon } from 'semantic-ui-react'
// import Framework7 from 'framework7';
// import { Range } from 'framework7-react'
import 'semantic-ui-css/semantic.min.css';

class ControlBar extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      menu:'',


    };
    
  }

 

   makeStyles = {
    root: {
      width: 300,
    },
  };

  handleRangeUpdate = (color, values) => {
      console.log(color,values);
      console.log('handleupdate');
      //console.log(this.props);
      this.props.setColor(color,values);
  }
  toggleEffectMenu = () => {
    this.setState({menu:'effect'});
  }
  toggleColorMenu = () => {
    this.setState({menu:'color'});
  }
   

  effectMenu(){
    const effectSliders = <>
        
         <li>
         <Label  className='ui label' >
             Twist
          </Label>
           <Slider
              style={{width:'80%'}}
             id="twistRate"
        
             min={-1}
             max={1}
             step={.01}
            defaultValue={this.props.state.twistRate}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
             onChange={(event, value) => this.props.setValue('twistRate',value)}
             ></Slider>
      
      </li>
         <li>
         <Label  className='ui label' >
             Spiral
          </Label>
           <Slider
               style={{width:'80%'}}
               id="twistAmp"
               min={-1000}
               max={1000}
               step={1}
               defaultValue={this.props.state.twistAmp}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                onChange={(event, value) => this.props.setValue('twistAmp',value)}

            ></Slider>
          
           
         
          </li>
         <li>
        
         <Label  className='ui label' >
             Spin
          </Label>
            <Slider
                style={{width:'80%'}}
                id="spinRate"
                min={-0.1}
                max={.1}
                step={.001}
                defaultValue={this.props.state.spinRate}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                onChange={(event, value) => this.props.setValue('spinRate',value)}

            ></Slider>
            </li>
    </>
    return effectSliders;
    
  }

  colorMenu()
  {
    const colorSliders = 
       
         <>
          <li>
        <Label  className='ui label' >
             Red
          </Label>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='redRange'
                min={0}
                max={255}
                defaultValue={this.props.state.redRange}
                // value = {}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="ranges-slider"
                onChange={(event, value) => this.handleRangeUpdate('red', value)}
          ></Slider>
         </li>
         <li>

           <Label  className='ui label' >
            Green 
          </Label>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='greenRange'
                min={0}
                max={255}
                defaultValue={this.props.state.greenRange}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="ranges-slider"
                onChange={(event, value) => this.handleRangeUpdate('green', value)}
          ></Slider>
          </li>
         <li>
           <Label  className='ui label' >
             Blue
          </Label>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='blueRange'
                min={0}
                max={255}
                defaultValue={this.props.state.blueRange}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                onChange={(event, value) => this.handleRangeUpdate('blue', value)}
          ></Slider>
          </li>
         <li>
           <Label  className='ui label' >
             Opacity
          </Label>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='opacity'
                min={0}
                max={255}
                defaultValue={this.props.state.opacity}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="continuous-slider"
                onChange={(event, value) => this.props.setValue('opacity', value)}
          ></Slider>
          </li>
    </>
         
      
    return colorSliders;
    
  }

  



  render(){
      const icons = [];
      
      icons.push( <Icon onClick={this.toggleColorMenu} title='Color' name='tint' size='big' color='blue'/>);

      if(this.props.state.playing){
       icons.push( <Icon onClick={this.props.pause} title='Pause' color='purple' size='big' name='pause'/>);
       
      }
      else{
       icons.push( <Icon onClick={this.props.play} title='Play' color='purple' size='big' name='play'/>);
      }

      icons.push( <Icon onClick={this.toggleEffectMenu} title='Effects' name='magic icon' size='big' color='blue'/>);

    const sliders = [];

      if(this.state.menu === 'effect')
      {
        sliders.push(this.effectMenu());
      }
      else
      {
        sliders.push(this.colorMenu());
      }
     
    
    
    return(
      <div  className="Control-Bar">
        <div className="icons">
          {icons}
        </div>
        <div className="menu">
            {sliders}
        </div>
        
       
        
        
          
        
        
      </div>
    );
  }
}

export default ControlBar;