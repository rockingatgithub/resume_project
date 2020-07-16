function funscroll(num)
{
    if(num==1)
    {

    }
    else
    if(num==2)
    {

    }
    else
    if(num==3)
    {
       var target=20;
       var current=0;
       var id= setInterval(function(){
           if(target<=current)
           {
               clearInterval(id);
               return;
           }
           current+=5;
            window.scrollBy(0,5);
        }, 50)

    }
    else
    if(num==4)
    {

    }
    else
    if(num==5)
    {

    }
    else
    if(num==6)
    {

    }
    else
    if(num==7)
    {

    }
} 

//we will style the progress bar...

var progressBar=document.querySelectorAll('.progress-div>div');    //we get an array of all classes specified
//window.addEventListener('scroll', checkScroll);
var animationDone= false;
//we will initially set width to 0...
function initScroll()
{
    for(let bar of progressBar)     
    {
        bar.style.width= 0 + '%' ;      
    }
}

initScroll();
//now we will implement the fill bars function

function fillBars()
{
    for(let bar of progressBar)
    {
        console.log(bar);
        let targetwidth=bar.getAttribute('data-bar-width');
        console.log(targetwidth);
        let currentwidth=0;
        let interval=setInterval(function()
        {
            if(currentwidth>=targetwidth)
            {
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width= currentwidth + '%' ;
        }, 5);
    }
}

//now we will create function to dectect visibility of skill section 
var container= document.querySelector("#skill-container")
console.log("container ",container);
function checkScroll()
{
    var cord= container.getBoundingClientRect;
    if(!animationDone && cord.top <= window.innerHeight)
    {
        animationDone=true;
        fillBars(); 
    }
    else
        if(cord.top> window.innerHeight)
    {
        animationDone=false;
        initScroll();
    }
}