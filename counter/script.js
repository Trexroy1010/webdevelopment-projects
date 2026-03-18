let number = 0;

document.getElementById("add").onclick = function(){
    number+=1;
    document.getElementById("myH1").textContent = number;

}

document.getElementById("reset").onclick = function(){
    number=0;
    document.getElementById("myH1").textContent = number;

}
document.getElementById("decrease").onclick = function(){
    number-=1;
    document.getElementById("myH1").textContent = number;

}


