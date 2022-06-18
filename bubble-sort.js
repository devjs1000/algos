

let data=[7,9,3,5,1,2,4,6,8];


function bubbleSort(arr){
let n=arr.length
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(arr[j]>arr[j+1]){ 
      let temVal=arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=temVal;
      round2++;
    }
  }
}
return arr;
}

let result=bubbleSort(data);
console.log(result);


