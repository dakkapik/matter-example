const charAdrianPena = () => {
    let player = gm.addPlayer(500,80, 30, 80, "Bastilan")

    
    player.setSprite('AdrianPena')
    player.addAttack("q")
    gm.console.addTracker("x pos","x", player.body.position)

    return player
}