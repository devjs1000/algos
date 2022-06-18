
let completion=0;
let loadingSpeed=100;
function loading(){
  if(completion<=100 ){
    console.clear()
    loadingSpeed=Math.abs(Math.random()*100)
    let value=completion
      console.log('|'.repeat(value)+`[ ${completion}% ]` )
    completion++;
  };
};

setInterval(loading, loadingSpeed);
