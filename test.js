const scene = document.querySelector("body > a-scene")
// scene.querySelector(".left-ctrl").object3D.position.set(...scene.querySelector(".left-ctrl").object3D.position)
// scene.querySelector(".left-ctrl").object3D.attach(scene.querySelector(".left-ctrl").object3D)

function setAttrs(obj,attrs){
    for(let i in attrs){
        obj.setAttribute(i,attrs[i]) 
    }
}

function waitUntil(obj,eventName){
    return new Promise((rs)=>{
        obj.addEventListener(eventName,()=>{
            rs()
        })
    })
}

scene.querySelector(".btnStart").onclick=()=>{
    scene.querySelector(".mainMenu").setAttribute("visible","false")
    startTest()
    scene.querySelector("#testingInformation").setAttribute("text","value",`Testing...`)
}

function startTest(sec=10) {
    let last = scene.querySelector(".left-ctrl").object3D.position;

    let delta = 0;

    let handle = setInterval(() => {
        delta += last.distanceTo(scene.querySelector(".left-ctrl").object3D.position)
        last = scene.querySelector(".left-ctrl").object3D.position.clone();
    })

    setTimeout(() => {
        clearInterval(handle);
        scene.querySelector("#testingInformation").setAttribute("text","value",`Result: ${delta/sec*1000}mm (Smaller=Better)`)
        scene.querySelector(".btnStart").setAttribute("visible","true")
        console.log(`Result: ${delta/sec*1000}mm`)
    }, sec * 1000)
}

