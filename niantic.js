let speed = 0.55;

function fadeOut(e){
    let op = 1;
    
    return new Promise((resolve) => {
        let timer = setInterval(function (){
            if(op < 0.05){
                e.style.opacity = 0;
                e.style.display = "none";
                clearInterval(timer);
                console.log("Faded out");
                resolve("Fade Out complete");
            }
            e.style.opacity = op;
            op -= op * speed;
            console.log(op);
        }, 50);

    })
}

function fadeIn(e) {
    let op = 0.05;
    e.style.opacity = op;
    e.style.display = "inline";

    return new Promise((resolve) => {
        let timer = setInterval(function (){
            e.style.opacity = op;
            op += op * speed;
            console.log(op);
            //console.log(e.style.display)
            if(op > 0.95){
                e.style.display = "inline";
                e.style.opacity = 1;
                clearInterval(timer);
                console.log("Faded In");
                resolve("Fade In Complete");
            }
        }, 50);
    })
}

async function trans(e, target){
    console.log(target);

    await fadeOut(document.getElementById(e));
    await fadeIn(document.getElementById(target));

}

function toggle() {
    var e = document.getElementById("accessibility");
    if(e.style.display == 'block')
       {e.style.display = 'none';}
    else
       {e.style.display = 'block';}
 }

