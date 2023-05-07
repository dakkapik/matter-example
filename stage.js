class Stage {
  constructor(width, height, name) {

    this.w = width
    this.h = height

    // BACKGROUND SETTER TAKES AN ARRAY OF NAMES FOR ANIMAITON
    this.background = [];

    this.name = name;
    this.players = [];
    this.ground = [];
    this.blocks = [];
    this.keys = [];
  }
  
  getItemId(x, y) {
    let itemFound = this.checkHitboxByLabel("characters", x, y)

    if(itemFound) { return itemFound }
    itemFound = this.checkHitboxByLabel("ground", x, y)
    if(itemFound) { return itemFound }
    itemFound = this.checkHitboxByLabel("blocks", x, y)
    if(itemFound) { return itemFound }

    return -1;
  }

  checkHitboxByLabel(label, x, y){
    this[label].forEach(element => {
      if(
        x > element.body.position.x - element.width/2 &&
        x < element.body.position.x + element.width/2 &&
        y > element.body.position.y - element.height/2 &&
        y < element.body.position.y + element.height/2
        ){
          return element
        }
    })
    return false;
  }

  getname() {
    return this.name;
  }
  setname(inname) {
    this.name = inname;
  }
  
  getcharacters() {
    return this.players;
  }

  setcharacters(incharacters) {
    this.players = incharacters;
  }
  
  getbackground() {
    return this.background;
  }

  setbackground(bgArray) {
    bgArray.forEach(bg => {
      this.background.push(bg);
    })
  }
  
  getground() {
    return this.ground;
  }

  deleteGround(id) {
    this.ground.filter( g => g.body.id !== id)
  }

  addGround(g) {
    this.ground.push(g);
  }

  moveItem(label, arrayPosition, position) {
    //requires to know the array position of wanted block
    this[label][arrayPosition].body.position = position
  }
  
  changeWidth (label, arrayPosition, x) {
    let item = this[label][arrayPosition]
    let delta = (x - item.body.position.x) - item.width
    item.width = delta;
  }

  changeHeight(label, arrayPosition, y) {
    let item = this[label][arrayPosition]
    let delta = (y - item.body.position.y) - item.width
    item.height = delta;
  }

  getblocks() {
    return this.blocks;
  }
  setblocks(inblocks) {
    this.blocks = inblocks;
  }
}

function mousePressed() {
  gm.addKey("mouse-down")
}

function mouseReleased() {
  gm.rmKey("mouse-down")
  if(gm.values.editStage) {
    let item = gm.stage.getItemId(mouseX, mouseY)
    console.log(item)
    gm.values.selectedItem = item
  }
}

function mouseHeld() {
  if(gm.inputQueue.has("mouse-down")){
    if(gm.values.editStage || gm.values.selectedItem > -1) {

    }
  }
}