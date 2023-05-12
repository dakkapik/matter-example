const charLoad = [
    AdrianPena = () => {
        let player = gm.addPlayer(300,80, 70, 100, "AdrianPena")

        // player.setSprite('AdrianPena')
        // player.addAttack("q")

        return player
    },
    AnnabellaMoerbeck  = (p1) => {
        let player
        if(p1) {
            player = gm.addPlayer(100,80, 70, 100, "AnnabellaMoerbeck",p1)
        } else {
            player = gm.addPlayer(1600,80, 70, 100, "AnnabellaMoerbeck",p1)
        }

        let profile = new AttackProfile(10, 0.2, 20, 4)
        let attack = new Attack(20,20,30,-20, player, profile)
        player.addAttack('p', attack)

        profile = new AttackProfile(10, 0.2, 20, 4)
        attack = new Attack(40,20,30,20, player, profile)
        player.addAttack('k', attack)

        profile = new AttackProfile(10, 0.2, 20, 4)
        attack = new Attack(60,80,0,0, player, profile)
        player.addAttack('b', attack)


        // console.log(player.attacks)
        return player
    },
    CarlyMcInerney = (p1) => {
        let player
        if(p1) {
            player = gm.addPlayer(100,80, 70, 100, "CarlyMcInerney",p1)
        } else {
            player = gm.addPlayer(1600,80, 70, 100, "CarlyMcInerney",p1)
        }

        let profile = new AttackProfile(10, 0.2, 20, 4)
        let attack = new Attack(20,20,0,0, player, profile)
        player.addAttack('p', attack)

        profile = new AttackProfile(10, 0.2, 20, 4)
        attack = new Attack(20,40,0,0, player, profile)
        player.addAttack('k', attack)

        profile = new AttackProfile(10, 0.2, 20, 4)
        attack = new Attack(20,20,0,0, player, profile)
        player.addAttack('b', attack)


        // console.log(player.attacks)
        return player
    },
    DaniellaRodriguez = () => {},
    DiegoShea = () => {},
    EmilioCorales = () => {},
    EmilySmith  = () => {},
    ethan = () => {},
    IsabelaRivera = () =>{}, 
    MariellaCinglio = () => {},
    MaximusGarcia = () => {},
    MichaelBalius = () => {},
    NicolasFernandez = () => {},
    PrestonGonzales = () => {},
    VanessaGomez = () => {},
]

