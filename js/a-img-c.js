
var index = 0;
var element = 1;

function slide(elem){
    var g = document.getElementsByClassName(elem);

    for(var x = 0; x < g.length; x++){ 
        if(g[x] != g[index-1]){
            g[x].style.display = "none";
        }else{
            g[index-1].style.display = "block";
        }
    }
    index++;
    if(index > g.length){
        index = 1;
    }

}

window.addEventListener('scroll', reveal);
var rev = document.getElementsByClassName("sec");

function reveal(){

    for(var i = 0; i < rev.length; i++){
        var height = window.innerHeight;
        var revTop = rev[i].getBoundingClientRect().top;
        var revBottom = rev[i].getBoundingClientRect().bottom;
        var revPoint = 200;

        // && revBottom > height - revPoint
        if(revTop < height - revPoint ){
            rev[i].classList.add('active');
            element = i+1;
        }else{
            rev[i].classList.remove('active');
        }
    }
}


function set(){
    var i = "img_sec" + element;
    slide(i);
}

setInterval(set,1000);

