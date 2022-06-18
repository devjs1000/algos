let completion=0;
let loadingSpeed=Math.abs(Math.random()*100);

function Canvas({material, width, height, maxWidth=100,  maxHeight=26}){
this.sheetData=''
this.width=width
this.height=height
this.material=material
this.maxWidth=maxWidth
this.maxHeight=maxHeight

this.sheet=function(){
this.sheetData=''
let w=this.material.repeat(this.width)+'\n';
  for(let i=0; i<this.height; i++){
    if(i<this.maxHeight){
      this.sheetData+=w;
    }
  }
  return this.sheetData
}

};

let canvas=new Canvas({
  material:"0",
  width:60,
  height:20
});



function mold2d(arr){
 let newSheet=arr.split('\n');
  for(let k in newSheet){
    newSheet[k]=newSheet[k]?.split('');
  };
  return newSheet;
};

function dryMold2d(arr){
  let structure=arr;
  for(let k in arr){
    structure[k]=structure[k]?.join('');
  };
  structure=structure.join('\n');
  return structure;
};


function box({canvas, w, h, material='*', x=0, y=0}){
  let newSheet=mold2d(canvas);

  for(let i=0; i<h+x; i++){
    for(let j=0; j<w+y; j++){
      if(y-1<j && x-1<i){
      let val=newSheet[i]?.at(j)
      if(val){
        newSheet[i][j]=material
      }}
    }
  }
  return dryMold2d(newSheet)
};

function loop(){
  console.clear()
  let sinVal=completion;
  console.log(box({
  canvas:canvas.sheet(),
  w:4,
  h:2, 
  material:' ',
  x:sinVal,
  y:sinVal
}))

  if(completion> (canvas.height+4) ){
    canvas.height+=10;
  completion=0;
  }else{
    completion++
  }
}

setInterval(loop, 100)
