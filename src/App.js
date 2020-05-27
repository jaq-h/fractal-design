import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/sketch.js';
import Slider from '@material-ui/core/Slider';

function App() {
  // let 
  const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 255,
      label: '100%',
    },
  ];
  return (
    <div className="App">
      <P5Wrapper sketch={sketch} />
      <Slider
       defaultValue={[0, 255]}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      marks={marks}
     />

    </div>
  );
}

export default App;

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
