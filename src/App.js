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
      values:{
        twistSpeed: 0
     },
     playing: false
    }

    // this.togglePlay = this.togglePlay.bind(this);



  }
   updateSpeed = (value) => {
     this.setState({values: {twistSpeed:value}})

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
        <P5Wrapper sketch={sketch} attributes={this.state.values} playing={this.state.playing} />
        <ControlBar state={this.state}  play={this.play}  pause={this.pause} />

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
