import Tri from './Triangle.js';


 function sketch (p) {
  let triangles = [];
  let listSize = 300.0;
  let twistSpeed = 0;
  let twistAmp = 0;
  let twistAngle = 0;
  let twistRate = 0;
  let spinAngle =0;
  let spinRate = 0;
  let count =0;
  let opacity = 25;
  let redRange = [0,255];
  let greenRange = [0,255];
  let blueRange = [0,255];

  p.setup = ()  => {
    
    console.log('setup');
   p.createCanvas(p.windowWidth,p.windowHeight);
   p.frameRate(60);
   p.colorMode(p.RGB, 255)
   for(var i = 0; i< listSize-1; i++)
   {
     let temp = new Tri(p);
     temp.setSize(i);
     temp.setColor(p.random(redRange[0],redRange[1]),p.random(greenRange[0],greenRange[1]),p.random(blueRange[0],blueRange[1]));
     triangles.push(temp);
     
   }
  //  p.noLoop();
    // alert("Warning this animation contains flashing colors which may not be suitable for photosensitive epilepsy.");
  };

  p.windowResized = () =>  {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    console.log(props.state);

      twistSpeed = props.state.twistSpeed/10.0;
 
      twistAmp = props.state.twistAmp;
    
  
      twistRate = props.state.twistRate;
    
    spinRate = props.state.spinRate;
  
    redRange = props.state.redRange;
    greenRange = props.state.greenRange;

   opacity = props.state.opacity;

    if(props.state.playing === false){
      console.log('paused');
      p.noLoop();
      p.resizeCanvas(p.windowWidth, p.windowHeight);

      // p.textSize(32);
      //p.text('Click to resume!');
    }
    else if (props.state.playing === true){
      p.loop();
      console.log('playing');
    
    }
    

   };

   p.draw = () => {
      p.clear();
      p.background(255);
      p.translate(p.windowWidth/2,p.windowHeight/2);
      
      count+=twistSpeed;
      twistAngle = count + twistAmp;
      spinAngle += spinRate;
      p.rotate(spinAngle);
      //draw resize and rotate
      for(var i =0.0; i<triangles.length-2; i++)
      { 
        triangles[i].drawTriangle();
        triangles[i].setSize(i);
        p.rotate(  (twistRate)*i/(1500) +  (twistAngle)/(1500) );
    
      }
    
      for(var j=0; j<triangles.length-2; j++) //shift array 
      {
          triangles[j] = triangles[j+1];   
      }

      triangles[triangles.length-2] = new Tri(p);
      triangles[triangles.length-2].setSize(triangles.length);
      triangles[triangles.length-2].setColor(p.random(redRange[0],redRange[1]),p.random(greenRange[0],greenRange[1]),p.random(blueRange[0],blueRange[1]),opacity);

      //p.rotate(count*-1.5);
      // p.background(100);
      // p.normalMaterial();
      // p.noStroke();
      // p.push();
      // p.rotateY(rotation);
      // p.box(100);
      // p.pop();
  };


}

export default sketch;












// function setup()
// {
   
//    createCanvas(1920,1080);
//    frameRate(10);
//    colorMode(RGB, 255)
//    //img = loadImage("texture1.png");
//    for(var i = 0; i< listSize-1; i++)
//    {
//      let temp = new Tri();
//      temp.setSize(i);
//      temp.randomColor();
//      triangles.push(temp);
     
//    }
//      // let voidTri = new Tri();
//      // voidTri.setSize(listSize);
//      // // triangles[triangles.length-1].rotate(675/360*(triangles.length-2));
//      // voidTri.r=0;
//      // voidTri.g=0;
//      // voidTri.b=0;
//      // voidTri.o=200;
//     //triangles.push(voidTri);
   
   
   
// }

// function draw()
// {
//   clear();
//   background(200,0,255);
//           translate(width/2,height/2);
//           count+=2;

//      for(var i =0; i<triangles.length-2; i++)
//      { 
//       triangles[i].drawT();
//       triangles[i].setSize(i);
//       //triangles[i].o = (255)/(i+1);
 
//       rotate((i/1500)+count/1000 );
   
//      }
//    //  triangles[triangles.length-1].drawT();
   
//      for(var j=0; j<triangles.length-2; j++)
//      {
//         triangles[j] = triangles[j+1];
           
//      }
//      triangles[triangles.length-2] = new Tri();
//       triangles[triangles.length-2].setSize(triangles.length);
//       triangles[triangles.length-2].randomColor();
//      // // triangles[triangles.length-2].rotate(675/360*(triangles.length-2));
//      // triangles[triangles.length-1].setSize(triangles.length-1);
//      // // triangles[triangles.length-1].rotate((675/360*(triangles.length-2))+count);
//      //filter(BLUR,1);
     
    
//   // delay(10);
// }
