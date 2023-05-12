const lvlLoad = [
     lvlTest = () => {
        gm = new Game(1800, 1000, "DaniellaRodrigues");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "MichaelBalius-t"}
    
        gm.addGround(900, 800, 1800, 190, options)
    },
     lvlAnnabellaMoerbeck = ()=> {
        gm = new Game(1800, 1000, "AnnabellaMoerbeck");
        rectMode(CENTER);
        imageMode(CENTER);
    
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        // let options = {skin: "IsabelaRivera-t"}
        let options = {color: "rgba(51, 255, 249, 0.27)"}
    
        gm.addGround(250, 400, 350, 50, options)
        gm.addGround(590, 800, 420, 50,options)
    
        gm.addGround(900, 550, 400, 50, options)
        gm.addGround(1200, 900,600, 40, options)
        gm.addGround(1750, 520, 150, 20, options)
    },
     lvlDaniellaRodrigues = () => {
        gm = new Game(1800, 1000, "DaniellaRodrigues");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "MichaelBalius-t"}
    
        gm.addGround(180, 800, 300, 190, options)
        gm.addGround(640, 680, 300, 200, options)
    
        gm.addGround(1140, 750, 300, 200, options)
        gm.addGround(1620, 620, 300, 200, options)
    },
    
     lvlEmilySmith = () => {
        gm = new Game(1800, 1000, "EmilySmith");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "NicolasFeo-t"}
    
        gm.addGround(180, 800, 300, 190, options)
        gm.addGround(640, 680, 300, 200, options)
    
        gm.addGround(1140, 750, 300, 200, options)
        gm.addGround(1620, 620, 300, 200, options)
    },
    
     lvlMatiasLatorre = () => {
        gm = new Game(1800, 1000, "MatiasLatorre");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {color: "rgba(237, 159, 55, 1)"}
    
        gm.addGround(180, 800, 300, 15, options)
        gm.addGround(640, 680, 300, 15, options)
        
        gm.addGround(900, 300, 300, 15, options)
    
        gm.addGround(1140, 750, 300, 15, options)
        gm.addGround(1620, 620, 300, 15, options)
    },
     lvlMaximusGarcia = () => {
        gm = new Game(1800, 1000, "MaximusGarcia");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "NicolasFeo-t"}
    
        gm.addGround(180, 800, 300, 190, options)
        gm.addGround(640, 680, 300, 200, options)
    
        gm.addGround(1140, 750, 300, 200, options)
        gm.addGround(1620, 620, 300, 200, options)
    },
     lvlNoahArevalo = () => {
        gm = new Game(1800, 1000, "NoahArevalo");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {color:"blue"}
    
        gm.addGround(180, 800, 300, 20, options)
        gm.addGround(640, 680, 300, 20, options)
    
        gm.addGround(180, 400, 300, 20, options)
        gm.addGround(640, 280, 300, 20, options)
    
        gm.addGround(1140, 750, 300, 20, options)
        gm.addGround(1620, 620, 300, 20, options)
    },
     lvlPaulPascatore = () => {
        gm = new Game(1800, 1000, "PaulPascatore");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "NicolasFeo-t"}
    
        gm.addGround(180, 800, 300, 190, options)
        gm.addGround(640, 680, 300, 200, options)
    
        gm.addGround(1140, 750, 300, 200, options)
        gm.addGround(1620, 620, 300, 200, options)
    },
     lvlRoberDiaz = () => {
        gm = new Game(1800, 1000, "RoberDiaz");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "NicolasFeo-t"}
    
        gm.addGround(180, 800, 300, 190, options)
        gm.addGround(640, 680, 300, 200, options)
    
        gm.addGround(1140, 750, 300, 200, options)
        gm.addGround(1620, 620, 300, 200, options)
    },
     lvlTateLarsen = () => {
        gm = new Game(1800, 1000, "TateLarsen");
        rectMode(CENTER);
        imageMode(CENTER);
        engine = Engine.create();
        runner = Runner.create();
        Runner.run(runner, engine);
    
        let options = {skin: "NicolasFeo-t"}
    
        gm.addGround(180, 800, 300, 190, options)
        gm.addGround(640, 680, 300, 200, options)
    
        gm.addGround(1140, 750, 300, 200, options)
        gm.addGround(1620, 620, 300, 200, options)
    }
]
