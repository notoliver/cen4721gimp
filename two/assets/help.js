var gifs = ['size', 'angle', 'spacing', 'aspectratio', 'force', 'hardness'];
var usePopup = true;
var useFixed = false;

function loadGifs(){
    var temptext1 = ''
    var temptext2 = ''
    for(var i=0;i<gifs.length;i++){
       temptext1+='<div class=\'gif\' id=\''+gifs[i]+'\' style=\'display:none\'>\r\n\t\t\t<img src=\'assets\/'+gifs[i]+'.gif\'\/>\r\n\t\t<\/div>'
       temptext2+='<div class=\'fgif\' id=\'f'+gifs[i]+'\' style=\'display:none\'>\r\n\t\t\t<img src=\'assets\/'+gifs[i]+'.gif\'\/>\r\n\t\t<\/div>'
    }
    document.getElementById('popupgifs').innerHTML+=temptext1;
    document.getElementById('fixedgifs').innerHTML+=temptext2;
}

loadGifs();

function getMousePos(e) {
    return {x:e.clientX,y:e.clientY};
}

function showBox(id,x,y){
    //console.log(document.getElementById(id));
    if(usePopup){
        document.getElementById(id).style.top = y+'px';
        document.getElementById(id).style.left = x+'px';
        document.getElementById(id).style.position = 'absolute';
        document.getElementById(id).style.display = 'block';
    }
    if(useFixed){
        document.getElementById('f'+id).style.top = 900+'px';
        document.getElementById('f'+id).style.left = 0+'px';
        document.getElementById('f'+id).style.position = 'absolute';
        document.getElementById('f'+id).style.display = 'block';
    }
}

document.onmousemove=function(e) {
    var mousecoords = getMousePos(e);
    var mouseX = mousecoords.x;
    var mouseY = mousecoords.y;
    //document.getElementById('installpopup').innerHTML=mouseX + ','+mouseY;

    for(var i=0;i<gifs.length;i++){
        document.getElementsByClassName('gif')[i].style.display='none';
        document.getElementsByClassName('fgif')[i].style.display='none';
    }

    if(mouseX>2 && mouseX<185){
        if(mouseY>299 && mouseY<315){//size
            showBox('size',mouseX,mouseY);            
        }
        if(mouseY>324 && mouseY<342){//aspect ratio
            showBox('aspectratio',mouseX,mouseY);
        }
        if(mouseY>353 && mouseY<370){//angle
            showBox('angle',mouseX,mouseY);
        }
        if(mouseY>378 && mouseY<396){//spacing
            showBox('spacing',mouseX,mouseY);
        }
        if(mouseY>404 && mouseY<423){//hardness
            showBox('hardness',mouseX,mouseY);
        }
        if(mouseY>432 && mouseY<449){//force
            showBox('force',mouseX,mouseY);
        }
    }
};