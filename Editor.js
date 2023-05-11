class Editor extends Input {
    constructor() { 
      super()
    }
    
    getItem(x, y) {
      let items = Query.point(engine.world.bodies, Vector.create(x,y))
      if(items !== []) {
        return items[0]
      } else {
        return false
      }
    }


    moveItem(body, position) {
      Body.set(body, "position", position)
    }

    changeWidth (label, arrayPosition, x, body) {
      let item = this[label][arrayPosition]

      let delta = (x - item.body.position.x) - item.width
      item.width = delta;
    }
  
    changeHeight(label, arrayPosition, y, body) {
      let item = this[label][arrayPosition]

      let delta = (y - item.body.position.y) - item.width
      item.height = delta;
    }
    
    deleteItem(label, arrayPosition, object){
      this[label].slice(arrayPosition, 1)
      Composite.remove(engine.world, object)
    }
  
    addGround(g) {
      this.ground.push(g);
    }
  }
  
  function mousePressed() {
    gm.addKey("mouse-down")
  
    if(gm.values.editStage) {
      let item = gm.getItem(mouseX, mouseY)
      if(item) {
        gm.values.selectedBody = item
        gm.values.selectedItemId = item.id
        gm.values.selectedItemLabel = item.label
      } else {
        gm.values.selectedItem = -1
      }
    } 
  }
  
  function mouseReleased() {
    gm.rmKey("mouse-down")
  }
  
  function mouseHeld() {
    if(gm.inputQueue.has("mouse-down")){
      if(gm.values.editStage || gm.values.selectedItemId > -1) {
        if(gm.getItem(mouseX, mouseY)) {
          console.log(gm.values.editMode)
          switch(gm.values.editMode) {
            case 0:
              gm.moveItem(gm.values.selectedBody, Vector.create(mouseX, mouseY))
            break;
            case 1:
            break;
            case 2: 
            break;
          }
        }
      }
    }
  }