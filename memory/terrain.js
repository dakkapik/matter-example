const lvlAnnabellaMoerbeck = ()=> {
    gm = new Game(1800, 1000, "AnnabellaMoerbeck");
    rectMode(CENTER);
    imageMode(CENTER);

    engine = Engine.create();
    runner = Runner.create();
    Runner.run(runner, engine);

    let options = {skin: "IsabelaRivera-t"}

    let ground1 = gm.addGround(250, 400, 350, 50, options)
    let ground2 = gm.addGround(590, 800, 420, 50)

    gm.addGround(900, 550, 400, 50)
    gm.addGround(1200, 900,600, 40)
    gm.addGround(1750, 520, 150, 20)

    player1 = gm.addPlayer(300,80, 120, 120, "Aurelian")
    player2 = gm.addPlayer(500,80, 30, 80, "Bastilan")

    player2.setColor("green")
    player1.addAttack("q")

    player2.setSprite('ShannaRose')
    gm.console.addTracker("x pos","x", player1.body.position)

}

const lvlDaniellaRodrigues = () => {
    gm = new Game(1800, 1000, "DaniellaRodrigues");
    rectMode(CENTER);
    imageMode(CENTER);
    engine = Engine.create();
    runner = Runner.create();
    Runner.run(runner, engine);

    let options = {skin: "MichaelBalius-t"}

    let ground1 = gm.addGround(250, 400, 350, 50, options)
    let ground2 = gm.addGround(590, 800, 420, 50)

    gm.addGround(900, 550, 400, 50)
    gm.addGround(1200, 900,600, 40)
    gm.addGround(1750, 520, 150, 20)

    player2 = gm.addPlayer(500,80, 30, 80, "Bastilan")

    player2.setColor("green")

    player2.setSprite('ShannaRose')
}

const lvlDaniellaRodriguez1 = () => {

}
const lvlEmilySmith = () => {

}
const lvlMatiasLatorre = () => {

}
const lvlMaximusGarcia = () => {

}
const lvlNoahArevalo = () => {

}
const lvlPaulPascatore = () => {

}
const lvlRoberDiaz = () => {

}
const lvlTateLarsen = () => {

}