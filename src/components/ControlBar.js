import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import {  Icon } from 'semantic-ui-react'
// import Framework7 from 'framework7';
// import { Range } from 'framework7-react'
import 'semantic-ui-css/semantic.min.css';

class ControlBar extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      menu:[],


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

  toggleEffectMenu = () =>{
    let arr = [];
    arr.push(
       <>
         <li>
        <label htmlFor="slider">
         Twist Rate
         <input
              style={{width:'80%'}}
             id="twistRate"
             type="range"
             min={-1}
             max={1}
             step={.01}
            defaultValue={0}
             onChange={(event) => this.props.setValue('twistRate',+event.target.value)}
         />
        </label>
        </li>
         <li>
         <label htmlFor="slider">
           Twist Offset
           </label>
           <input
            style={{width:'80%'}}
               id="twistAmp"
               type="range"
               min={-1000}
               max={1000}
               step={1}
               defaultValue={0}
               onChange={(event) => this.props.setValue('twistAmp',+event.target.value)}
           />
          
         </li>
         <li>
          <label htmlFor="slider">
          Spin Rate
          <input
           style={{width:'80%'}}
              id="spinRate"
              type="range"
              min={-0.1}
              max={.1}
              step={.001}
              defaultValue={0}
              onChange={(event) => this.props.setValue('spinRate',+event.target.value)}
          />
         </label>
         </li>

         </>
       
       );
    this.setState({ menu:arr});
    
  }

  toggleColorMenu = () =>{
    let arr = [];
    arr.push(
       <>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='redRange'
                min={0}
                max={255}
                defaultValue={[0,255]}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="ranges-slider"
                onChange={(event, value) => this.handleRangeUpdate('red', value)}
          ></Slider>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='greenRange'
                min={0}
                max={255}
                defaultValue={[0,255]}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="ranges-slider"
                onChange={(event, value) => this.handleRangeUpdate('green', value)}
          ></Slider>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='blueRange'
                min={0}
                max={255}
                defaultValue={[0,255]}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                onChange={(event, value) => this.handleRangeUpdate('blue', value)}
          ></Slider>
          <Slider
               style={{width:'80%'}}
                className='colorSlider'
                id='opacity'
                min={0}
                max={255}
                defaultValue={50}
                step={1}
                // valueLabelDisplay="auto"
                aria-labelledby="continuous-slider"
                onChange={(event, value) => this.props.setValue('opacity', value)}
          ></Slider>
         </>
       
       );
    this.setState({ menu:arr});
    
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
      
     
    
    
    return(
      <div  className="Control-Bar">
        <div className="icons">
          {icons}
        </div>
        <div className="menu">
            {this.state.menu.length === 0 ?  null : this.state.menu }
        </div>
        
       
        
        
          
        
        
      </div>
    );
  }
}

export default ControlBar;
// onChange={this.props.updateSpeed()}

// onChange={handleChange}

{/* f7 <Range
              min={0}
              max={255}
              step={1}
              label={true}
              dual={true}
              color="green"
              // onRangeChange={this.onPriceChange.bind(this)}
         ></Range> */}

/* <Slider

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

        //     <div>
        //     <label htmlFor="slider">
        //         Twist angle
        //         <input
        //             id="twistAngle"
        //             type="range"
        //             min={-1000}
        //             max={1000}
        //             step={1}
        //             defaultvalue={0}
        //             value={+this.props.state.twistAngle}
                    
        //         />
               
        //     </label>
        //     <span> <p> {this.props.state.twistAngle}</p></span>
            

        // </div>
