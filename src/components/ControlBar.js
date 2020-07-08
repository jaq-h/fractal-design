import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
// import Tooltip from '@material-ui/core/Tooltip';
import {  Button, Label, Icon } from 'semantic-ui-react'
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
    if(this.state.menu !== 'effect'){
      this.setState({menu:'effect'});
    }
    else{
      this.setState({menu:''});

    }
  }
  toggleColorMenu = () => {
    if(this.state.menu !== 'color'){
      this.setState({menu:'color'});    }
    else{
      this.setState({menu:''});
    }
    
  }
  hideMenu = () => {
    this.setState({menu:''});
  }
   

  effectMenu(){
    const effectSliders = <>
        {/* <span className='desc'> Adjust motion effects:</span> */}
         
         <Label  style={{minWidth:'80%',marginTop:'10px', color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
             Twist
          
           <Slider
               style={{selfAlign:'right',marginTop:'5px',verticalAlign:'middle', color:'rgb(109, 149, 204)'}}
               id="twistRate"
        
             min={-1}
             max={1}
             step={.01}
            defaultValue={this.props.state.twistRate}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
             onChange={(event, value) => this.props.setValue('twistRate',value)}
             ></Slider>
        </Label>
      
         <Label  style={{minWidth:'80%',marginTop:'10px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
             Spiral
          
           <Slider
               style={{selfAlign:'right',marginTop:'5px',verticalAlign:'middle', color:'rgb(109, 149, 204)'}}
               id="twistAmp"
               min={-1000}
               max={1000}
               step={1}
               defaultValue={this.props.state.twistAmp}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                onChange={(event, value) => this.props.setValue('twistAmp',value)}

            ></Slider>
                  </Label>

           
         
         
          <Label  style={{minWidth:'80%',marginTop:'10px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
             Spin
          
           <Slider
               style={{selfAlign:'right',marginTop:'5px',verticalAlign:'middle', color:'rgb(109, 149, 204)'}}
               id="spinRate"
                min={-0.1}
                max={.1}
                step={.001}
                defaultValue={this.props.state.spinRate}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                onChange={(event, value) => this.props.setValue('spinRate',value)}

            ></Slider>
                    </Label>

            <h4 className='hide'>
            <Icon onClick={this.hideMenu} title='Hide' color='grey' size='big' name='angle up'/>
            </h4>

         
    </>
    return effectSliders;
    
  }

  colorMenu()
  {
    const colorSliders = <>
    {/* <span className='desc'>Color Range:</span> */}
         <div>
         <Label  style={{minWidth:'80%',marginTop:'10px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
            Red
          <Slider
              title='Red'
               style={{color:'whitesmoke', marginTop:'5px',backgroundImage:'linear-gradient(to right, rgb(0,0,0),rgb(255,0,0))'}}
               className='colorSlider'
                id='redRange'
                min={0}
                max={255}
                defaultValue={this.props.state.redRange}
                // value = {}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="ranges-slider"
                onChange={(event, value) => this.handleRangeUpdate('red', value)}
          ></Slider>
         </Label>
         <Label  style={{minWidth:'80%',marginTop:'10px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
            Green
          <Slider
              title='Green'
               style={{color:'whitesmoke',marginTop:'5px', backgroundImage:'linear-gradient(to right, rgb(0,0,0),rgb(0,255,0))'}}
               className='colorSlider'
                id='greenRange'
                min={0}
                max={255}
                defaultValue={this.props.state.greenRange}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="ranges-slider"
                onChange={(event, value) => this.handleRangeUpdate('green', value)}
          ></Slider>
          </Label>
          <Label  style={{minWidth:'80%',marginTop:'10px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
          Blue
          <Slider
              title='Blue'
               style={{color:'whitesmoke',marginTop:'5px', backgroundImage:'linear-gradient(to right, rgb(0,0,0),rgb(0,0,255))'}}
               className='colorSlider'
                id='blueRange'
                min={0}
                max={255}
                defaultValue={this.props.state.blueRange}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                onChange={(event, value) => this.handleRangeUpdate('blue', value)}
          ></Slider>
          </Label>
          <Label  style={{minWidth:'80%',marginTop:'10px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)', textAlign:'center'}} >
          Opacity
          <Slider
                title='Opacity'
               style={{color:'whitesmoke',marginTop:'5px', backgroundImage:'linear-gradient(to right, rgb(255,255,255),rgb(100,100,100),rgb(0,0,0))'}}
               className='colorSlider'
                id='opacity'
                min={0}
                max={255}
                defaultValue={this.props.state.opacity}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="continuous-slider"
                onChange={(event, value) => this.props.setValue('opacity', value)}
          ></Slider>
          </Label>
          <h4 className='hide'>
            <Icon onClick={this.hideMenu} title='Hide' color='grey' size='big' name='angle up'/>
            </h4>        </div>
    </>
         
      
    return colorSliders;
    
  }

  



  render(){
      const icons = [];
      
      
      if(this.props.state.playing){
       icons.push( <Icon onClick={this.props.pause} title='Pause' color='purple' size='big' name='pause circle outline'/>);
       
      }
      else{
       icons.push( <Icon onClick={this.props.play} title='Play' color='purple' size='big' name='play circle outline'/>);
      }

     

    let sliders = null;

      if(this.state.menu === 'effect')
      {
        sliders = this.effectMenu();
        icons.unshift( 
          <Button className='nav-button' icon labelPosition='left' onClick={this.toggleColorMenu}
          style={{margin:'5px', color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)'}}
      >
              <Icon name='tint' size='large' color='blue'/>Color
          </Button>);
        icons.push( 
          <Button className='nav-button' icon labelPosition='left' onClick={this.toggleEffectMenu}
          style={{margin:'5px',color:'rgb(109, 149, 204)',backgroundColor:'whitesmoke'}}
      >
              <Icon  name='magic icon' size='large' color='blue'/>Effects
          </Button>);
      }
      else if(this.state.menu === 'color')
      {
        sliders = this.colorMenu();
        icons.unshift( 
          <Button className='nav-button' icon labelPosition='left' onClick={this.toggleColorMenu}
              style={{margin:'5px',color:'rgb(109, 149, 204)',backgroundColor:'whitesmoke'}}
          >
              <Icon name='tint' size='large' color='blue'/>Color
          </Button>);
        icons.push( 
          <Button className='nav-button' icon labelPosition='left' onClick={this.toggleEffectMenu}
          style={{margin:'5px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)'}}
      >
              <Icon  name='magic icon' size='large' color='blue'/>Effects
          </Button>);
      }
      else{
        icons.unshift( 
          <Button className='nav-button' icon labelPosition='left' onClick={this.toggleColorMenu}
          style={{margin:'5px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)'}}
      >
              <Icon name='tint' size='large' color='blue'/>Color
          </Button>);
        icons.push( 
          <Button className='nav-button' icon labelPosition='left' onClick={this.toggleEffectMenu}
          style={{margin:'5px',color:'rgb(109, 149, 204)',backgroundColor:'rgba(255,255,255,0.1)'}}
      >
              <Icon  name='magic icon' size='large' color='blue'/>Effects
          </Button>);

      }
  

      
     
    
    
    return(
      <div  className="Control-Bar">
        <div className="icons">
          {icons}
        </div>
        <div  >
            { sliders}
        </div>
        
       
        
        
          
        
        
      </div>
    );
  }
}

export default ControlBar;