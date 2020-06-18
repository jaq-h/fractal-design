import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import {  Icon } from 'semantic-ui-react'
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

  handleUpdate = (event, value) => {
      console.log(event,value);
      console.log('handleupdate');
      console.log(this.props);
      this.props.setValue(event,value);
    
  }

  toggleEffectMenu = () =>{
    let arr = [];
    arr.push(
       <>
         <li>
        <label htmlFor="slider">
         Twist Rate
         <input
             id="twistRate"
             type="range"
             min={-1}
             max={1}
             step={.01}
            defaultValue={0}
             onChange={event => this.props.setValue(event)}
         />
        </label>
        </li>
         <li>
         <label htmlFor="slider">
           Twist Offset
           <input
               id="twistAmp"
               type="range"
               min={-1000}
               max={1000}
               step={1}
               defaultValue={0}
               onChange={event => this.props.setValue(event)}
           />
          </label>
         </li>
         <li>
          <label htmlFor="slider">
          Spin Rate
          <input
              id="spinRate"
              type="range"
              min={-0.1}
              max={.1}
              step={.001}
              defaultValue={0}
              onChange={event => this.props.setValue(event)}
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
         <li>
        <label htmlFor="slider">
         Red
         <input
             id="twistRate"
             type="range"
             min={-1}
             max={1}
             step={.01}
            defaultValue={0}
             onChange={event => this.props.setValue(event)}
         />
        </label>
        </li>
         </>
       
       );
    this.setState({ menu:arr});
    
  }

  



  render(){
      const icons = [];
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
        {/* <hr style={{padding:'10px'}}/> */}
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
