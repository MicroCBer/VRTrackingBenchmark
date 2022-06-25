class ShakeTest {
    scene=null;
    constructor(scene){
        this.scene=scene
    }
    async doTest() {

    }
    async drawIntroduction() {
        let entity = document.createElement("a-entity")
        setAttrs(entity, {
            position: "-0.41 1.5 -1",
            text: "shader: msdf; anchor: left; width: 1.9; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: black; value: Micro\naa\nbbbb",
        })
        entity.classList.add("MBTestIntroduction")
        scene.querySelector(".mainMenu").appendChild(entity)

    }
}