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
  
    setColor(red,green,blue)
    {
 
        this.r= red;
        this.g= green; 
        this.b= blue; 
    
    }
    setSize(i)
    {
      this.w = 7*this.p.width/(i+1);
      
    }

    drawTriangle()
    {
      this.p.fill([this.r,this.g,this.b, 155]);
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