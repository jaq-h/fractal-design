import React, { Component } from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/sketch.js';
import ControlBar from './components/ControlBar';

class App extends Component {
  constructor(props){
    super(props);
    //console.log(props);
    // if(this.props.currentUser.access_token === undefined ){
    //   this.props.history.go('http://localhost:3001/api/auth');


    this.state = {
    
     twistSpeed: 0,
     twistAmp: 0,
     twistAngle:0,
     
     playing: false
    }

    // this.togglePlay = this.togglePlay.bind(this);



  }
   updateValue = (event) => {
      console.log(event.target);

      this.setState({ [event.target.id]:+event.target.value });
 

    
     
  }

  play = () => {
    this.setState({playing: true});
    console.log('play function');
  }
  pause = () => {
    console.log('pause function');
    this.setState({playing: false});



  }
  render(){
    return (
      <div className="App">
        <ControlBar state={this.state}  setValue={this.updateValue} play={this.play}  pause={this.pause} />
        <P5Wrapper sketch={sketch} state={this.state} className="sketch"  />

      </div>
    );
  } 
}
export default App;
// updateSpeed={this.updateSpeed}
      // value={10}
      // // onChange={handleChange}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function RangeSlider() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography id="range-slider" gutterBottom>
//         Temperature range
//       </Typography>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//       />
//     </div>
//   );
// }
