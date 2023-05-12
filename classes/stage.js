class Stage {
  constructor() {
    this.w = 0;
    this.h = 0;

    // BACKGROUND SETTER TAKES AN ARRAY OF NAMES FOR ANIMAITON
    this.background = [];

    this.name = '';
    this.player = [];
    this.ground = [];
    this.block = [];
  }

  saveStage(name, width, height, backgrounds, players, grounds, blocks){
    this.setName(name) 
    this.setDimentions(width, height)
    this.setbackground(backgrounds)
    this.setPlayers(players)
    this.setGround(grounds)
    this.setBlocks(blocks)
    this.downloadStage();
  }
  
  downloadStage() {
    console.log(this)
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      name: this.name,
      player: this.player,
      ground: this.ground,
      block: this.block,
      background: this.background,
      width: this.w,
      height: this.h
    }));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  }

  setDimentions(w, h) {
    this.w = w;
    this.h = h;
  }

  setName(name) {
    this.name = name
  } 

  setbackground(backgrounds) {
    backgrounds.forEach(b => this.background.push(b))
  }

  setPlayers(players) {
    players.forEach(p => this.player.push(p))
  }

  setGround(grounds) {
    grounds.forEach(g => this.ground.push(g))
  }

  setBlocks(blocks) {
    blocks.forEach(b => this.block.push(b))
  }


  // getname() {
  //   return this.name;
  // }
  // setname(inname) {
  //   this.name = inname;
  // }
  
  // getbackground() {
  //   return this.background;
  // }

  // setbackground(bgArray) {
  //   bgArray.forEach(bg => {
  //     this.background.push(bg);
  //   })
  // }
  
  // getground() {
  //   return this.ground;
  // }

  // deleteGround(id) {
  //   this.ground.filter( g => g.body.id !== id)
  // }

  // addGround(g) {
  //   this.ground.push(g);
  // }

  // moveItem(label, arrayPosition, position) {
  //   //requires to know the array position of wanted block
  //   this[label][arrayPosition].body.position = position
  // }
  
  // changeWidth (label, arrayPosition, x) {
  //   let item = this[label][arrayPosition]
  //   let delta = (x - item.body.position.x) - item.width
  //   item.width = delta;
  // }

  // changeHeight(label, arrayPosition, y) {
  //   let item = this[label][arrayPosition]
  //   let delta = (y - item.body.position.y) - item.width
  //   item.height = delta;
  // }

  // getblocks() {
  //   return this.blocks;
  // }
  // setblocks(inblocks) {
  //   this.blocks = inblocks;
  // }
}
