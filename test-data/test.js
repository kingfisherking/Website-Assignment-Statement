let speed = 0.15;

function callAlert(e){
    e.style.display = "none";
}

let objective = "objective";

function fadeOut(e){
    let op = 1;
    let timer = setInterval(function (){
        if(op < 0.05){
            
            e.style.display = "none";
            clearInterval(timer);
        }
        e.style.opacity = op;
        op -= op * speed;
        console.log(op);
    }, 50);

}

function fadeIn(e) {
    let op = 0.05;
    e.style.opacity = op;
    e.style.display = "inline";

    let timer = setInterval(function (){
        e.style.opacity = op;
        op += op * speed;
        console.log(op);
        console.log(e.style.display)
        if(op > 0.95){
            e.style.display = "inline";
            clearInterval(timer);
        }
    }, 50);

}

function fadeOut2(e){
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

function fadeIn2(e) {
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

function trans(e){
    fadeOut(e);
    timer = setInterval(function (){}, 500);
    fadeIn(e);
}

async function trans2(e){
    await fadeOut2(e);
    await fadeIn2(e);
}

async function trans3(e, target){
    console.log(target);

    await fadeOut2(e.parentElement);
    await fadeIn2(document.getElementById(target));

}

// Intervals are interfering with each other, siwtching code to promises