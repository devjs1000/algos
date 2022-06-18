import * as p5 from 'p5'


let sketch = function (_) {
  let currPos=_.createVector(0,0)
  let black=[0,0,0,255]
  let white=[255,255,255,255]
  let textColor='unknown';
  let size=1;
  function checkRgb(color1, color2){
    if(color1[0]==color2[0] && color1[1]==color2[1] && color1[2]==color2[2]){
      return true
    }
    return false
  }

  function numToColor(bool){
    if(bool){
      return 'white'
    }
    return 'black'
  }

  async function fillShape(x,y, prevs=new Set()){
    
    let [myColor, leftColor, rightColor, topColor, bottomColor]=[_.get(x,y),_.get(x-size,y),_.get(x+size,y),_.get(x,y-size),_.get(x,y+size)]
    let key=x+','+y

    if(prevs.has()) return 0;

    if(!checkRgb(myColor,white)){
    return 0;
    }else{
      prevs[key]=[x,y]
      _.noStroke()
      await _.rect(x,y,size,size)
    }
    if(checkRgb(leftColor,white)){
      const [x1,y1]=[x-size,y]
      if(!prevs[x1+','+y1]){
      await fillShape(x1,y1, prevs)
      }
    }
    if(checkRgb(rightColor,white)){
      
      const [x1,y1]=[x+size,y]
      if(!prevs[x1+','+y1]){
      await fillShape(x1,y1, prevs)
      }
    }
    if(checkRgb(topColor,white)){
      
      const [x1,y1]=[x,y-size]
      if(!prevs[x1+','+y1]){
      await fillShape(x1,y1, prevs)
      }
    }
    if(checkRgb(bottomColor,white)){
      
      const [x1,y1]=[x,y+size]
      if(!prevs[x1+','+y1]){
      await fillShape(x1,y1, prevs) 
      }
    }
 return 0
  }

  let canvas=_.setup = function () {
    _.createCanvas(800, 500)
    _.background(0)
    _.noStroke()
    _.fill(255,255,0,255)
    _.ellipse(100,100,100,100)
    _.fill(255)
    
    _.ellipse(0 + 2*12*2,_.height/2,10,10)
    _.ellipse(0 + 4*14*2,_.height/2,20,20)
    _.ellipse(0 + 6*16*2,_.height/2,30,30)
    _.ellipse(0 + 8*18*2,_.height/2,40,40)
    _.ellipse(0 + 10*20*2,_.height/2,50,50)
    _.ellipse(0 + 12*22*2,_.height/2,100,100)
    _.ellipse(0 + 14*24*2,_.height/2,200,200)
    _.ellipse(0 + 16*26*2,_.height/2,80,80)
    _.ellipse(0 + 18*28*2,_.height/2,0,200)
    _.ellipse(0 + 20*30*2,_.height/2,100,100)
        _.noLoop()
  }
  
  _.mousePressed = async function () {
    console.time()
    currPos.set(_.mouseX, _.mouseY)
    let pixel=_.get(_.mouseX, _.mouseY)
    //color in text black and white
    textColor=checkRgb(pixel,black)?'black':checkRgb(pixel, white)?'white':'unknown';
    _.fill(255,0,0,255)
    await fillShape(currPos.x,currPos.y)
    console.timeEnd()
    }
}

let myp5 = new p5(sketch, 'sketch')


