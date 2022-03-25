var count=1;
document.getElementById('item1').style.zIndex = 1;

document.getElementById('left-arrow').onclick = function() {
    document.getElementById(`item${count}`).style.zIndex = 0;
    count=count-1;
    if(count==0)
        count=5;

    console.log(count)
    document.getElementById(`item${(count)}`).style.zIndex = 1;
    
}

document.getElementById('right-arrow').onclick = function() {
    document.getElementById(`item${count}`).style.zIndex = 0;
    count=count+1;
    if(count==6)
    count=1;

    console.log(count)
    document.getElementById(`item${(count)}`).style.zIndex = 1;
   
}


