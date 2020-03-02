let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Rogue":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case "Mage":
                player = new Player(classType, 80, 200, 50, 200, 50);
                break;
            case "Hunter":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
            case "Knight":
                player = new Player(classType, 180, 0, 180, 120, 100);
                break;
            default:
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/char/' + classType.toLowerCase() + '.jpg" alt="Your Character" class="img-char"><div><h3' + classType + '</h3><p>Health: ' + player.health + '</p><p>Health: ' + player.magic + '</p><p>Strength: ' + player.strength + '</p><p>Dexerity: ' + player.dexerity + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight();">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
        let enemy02 = new Enemy("Wolf", 100, 0, 100, 120, 180);
        let enemy03 = new Enemy("Thief", 200, 0, 100, 150, 200);
        /* let enemy04 = new Enemy("Dragon", 400, 0, 200, 150, 150); */
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
        console.log(chooseRandomEnemy);
        switch(chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            default:
                break;
        }
        getHeader.innerHTML ='<p>Task: Defeat the enemy!</p>'
        getActions.innerHTML = '<a href="#" class="btn-attack" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        /* getActions.innerHTML = '<a href="#" class="btn-magic" onclick="PlayerMoves.calcMagic()">Magic!</a>'; */
        /* getActions.innerHTML = '<a href="#" class="btn-defend" onclick="PlayerMoves.calcDefend()">Defend!</a>'; */
        getInterface.innerHTML = '<img src="img/enemies/' + enemyType.toLowerCase() + '.jpg" alt="Your Character" class="img-char"><div><h3' + enemyType + '</h3><p>Health: ' + enemy.health + '</p><p>Health: ' + enemy.magic + '</p><p>Strength: ' + enemy.strength + '</p><p>Dexerity: ' + enemy.dexerity + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}