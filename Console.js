class Console {
    constructor() {
        // multiple object tracking implementation needed
        this.window = document.getElementById("console");
        this.window.style.backgroundColor = "grey"
        // 2d array, first item is label, second item key of object, third is the object being queried
        this.data = []
    }

    addTracker(label, key, object){
        this.data.push([label, key, object]);
        let div = document.createElement("div");
        let lab = document.createElement("p");
        let val = document.createElement("p");
        lab.innerText = label;
        val.id = label;
        div.appendChild(lab);
        div.appendChild(val);
        div.style.display = "flex";
        this.window.appendChild(div);
    }

    update(){
        this.data.forEach(([label,key, obj])=> {
            let doc = document.getElementById(label);
            doc.innerHTML = obj[key].toFixed(4)
        })
    }
}