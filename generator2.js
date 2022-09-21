
    var canvas = document.getElementById('c2');
    var cx= canvas.getContext('2d');



    x=0
    y=0
    // cx.moveTo(0,0)
    // cx.lineTo(2000,0)
    // cx.stroke()
    
   
    document.querySelector(".sub").onclick=global
    var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute("height",500);
    svg1.setAttribute("width",500);
    
    
    document.body.appendChild(svg1);
  

   
function global(){   
     k=document.querySelector('.inp1').value 
     p=document.querySelector('.inp2').value
     time=document.querySelector('.inp4').value
     
    t=1
    
    s=0
function spawn(){
    s=s+1

    t1=+document.querySelector('.inp3').value
    console.log(k)
    k=document.querySelector('.inp1').value
    // x=x+0.01;
    t=t+(0.7-t1)
    x=(2*p*Math.cos(t))-(p*Math.cos(2*t))
    y=(2*p*Math.sin(t))-(p*Math.sin(2*t))
    // y=x+(x*x)
            // y=0.01*(x*x) 
            // y=Math.sin(p*x)+2
  console.log((x),(y))
    // cx.moveTo((a+40),(b+40))
    // cx.lineTo((x+40),(y+40))
    // cx.stroke();
	

}

    i=1
        
        arr=[]
        arr2=[]
	time=(500-time);
        var interval = setInterval(() => {
            
	    a=x
            b=y
            console.log(a,b)
            spawn()
            
            arr[i]=x;
            arr2[i]=y;
            i++
            if(i>k){
                ul =document.createElement('ul')
                ul.innerHTML = "Begin"
                document.body.appendChild(ul)
                for(f=1; f<k;f++){
                doc =document.createElement('li')
                doc.innerHTML=arr[f]
                document.body.appendChild(doc)
                }
                ul =document.createElement('ul')
                ul.innerHTML = "+"
                document.body.appendChild(ul)
                for(f=1; f<k;f++){
                    doc =document.createElement('li')
                    doc.innerHTML=arr2[f]
                    document.body.appendChild(doc)
                    }
                
                
                clearInterval(interval)
		
            }
        
        
	
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("id","ss")
            line.setAttribute("x1",(300+x));
            line.setAttribute("y1",(200+y));
            line.setAttribute("x2",(300+a));
            line.setAttribute("y2",(200+b));
            
            line.setAttribute("stroke-width",3)        
            svg1.appendChild(line);
		
		if (s<2){
		document.getElementById('ss').style.visibility = "hidden"; 
		console.log('delete');
		console.log(s);
		}
	
            
            
    }, time); 


   
}


