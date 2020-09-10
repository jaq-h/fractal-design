class Tri {
  
  
    constructor(p)
    {
      this.g=0; //red
      this.r=0; //green
      this.b=0; //blue
      this.w = 50; //width
      this.o = 1; //opacity
      this.p = p; //P5 Canvas
      
    }
  
    setColor(red,green,blue, opacity=25)
    {
        
        this.r= red;
        this.g= green; 
        this.b= blue; 
        this.o= opacity;
    
    }
    setSize(i)
    {
      this.w = 7*this.p.width/(i+1);
      
    }

    drawTriangle(rMin=0,rMax=255,gMin=0,gMax=255,bMin=0,bMax=255,opacity=25)
    {
      let r,g,b;
      if(this.r > rMax)
      {
        r = rMax 
      }else if( this.r < rMin)
      {
        r = rMin 
      }
      else
      {
          r = this.r
      }
      if(this.g > gMax)
      {
        g = gMax 
      }else if( this.g < gMin)
      {
        g = gMin 
      }
      else
      {
          g = this.g
      }
      if(this.b >= bMax)
      {
        b = bMax 
      }else if( this.b <= bMin)
      {
        b = bMin 
      }
      else
      {
          b = this.b
      }

      this.p.fill([r,g,b,opacity]);
      this.p.noStroke();
      let h = Math.sqrt(3)/2*this.w;
      this.p.triangle( (-1/2.0)*this.w,(-1/3.0)*h, (1/2.0)*this.w, (-1/3.0)*h, 0, (2/3.0)*h); 
    }
   
  }

export default Tri;


   //var rand = random(0,1);
      // if(rand<.5)
      // {
        // this.r= random(50,150);
        // this.g= 0; 
        // this.b= random(150,255); 
        
    //}
    //else
    //{
        //this.r= random(100,150); 
        //this.g= 0;
        //this.b= random(50,200); 
        //this.o =opacity;
      
    //}
    //else{
    //  this.r= 255; 
    //  this.g= random(200,255);
    //  this.b= 255; 
    //  this.o =opacity;
    //}