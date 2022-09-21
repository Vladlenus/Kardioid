
var arr3=[];
var arr2=[];


var canvas = document.getElementById('c1');
var cx= canvas.getContext('2d');




function spawn(){
    cx.moveTo(a+1,b+1)
    cx.lineTo(150,150)
    cx.stroke();
}
function spawn2(){
    cx.moveTo(d+1,c+1)
    cx.lineTo(a+1,b+1)
    cx.stroke();
}

k=Math.floor(Math.random()*(8-1))

for (i=0; i<k; i++){
    arr2[i]=[]
    for (j=0; j<2; j++){   
        arr2[i][j]=Math.floor(Math.random()*(120-1))
    }
} 
a=arr2[0][0]  
console.log(a)
console.log(arr2)
//main

for(x=0;x<5;x++){
    
    a=Math.floor(Math.random()*(500-0)-100);//lanka1
    b=Math.floor(Math.random()*(500-0)-100);//lanka1
    
    spawn()
    for (y=0; y<5;y++){
        d=Math.floor(Math.random()*(500-0)-100);//lanka2
        c=Math.floor(Math.random()*(500-0)-100);//lanka2
        spawn2()}
    
}
for (i=0; i<k; i++){
    arr3[i]=[]
    for (j=0; j<2; j++){   
        arr3[i][j]=arr2[i][j]+10
    }
}

console.log(arr3)
