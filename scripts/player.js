let player;

class Player {
    constructor(classType, health, magic, strength, dexerity, speed) {
        this.classType = classType;
        this.health = health;
        this.magic = magic;
        this.strength = strength;
        this.dexerity = dexerity;
        this.speed = speed;
    }
}

let PlayerMoves = {
    calcAttack: function() {
        // Determine Attack Order
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    // Player damage calculation
    let playerAttack = function() {
        let calcBaseDamage;
        let critDamage;
        let critChance = Math.floor(Math.random() * Math.floor(100));
        if (player.magic > 0) {
            calcBaseDamage = player.strength * player.magic / 1000;
        } else {
            calcBaseDamage = player.strength * player.dexerity / 1000;
        }
        if (player.dexerity >= 300 && critChance <= 15){
            critDamage = 5;
        } else if (player.dexerity >= 200 && critChance <= 10) {
            critDamage = 4;
        } else if (player.dexerity >= 100 && critChance <= 5) {
            critDamage = 3;
        } else {
            critDamage = 0;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage + critDamage;
        // Number of hits calculation
        let numberHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberHits];
        return attackValues; 
    }
    let enemyAttack = function() {
        let calcBaseDamage;
        let critDamage;
        let critChance = Math.floor(Math.random() * Math.floor(100));
        if (enemy.magic > 0) {
            calcBaseDamage = enemy.strength * enemy.magic / 1000;
        } else {
            calcBaseDamage = enemy.strength * enemy.dexerity / 1000;
        }
        if (enemy.dexerity >= 300 && critChance <= 15){
            critDamage = 5;
        } else if (enemy.dexerity >= 200 && critChance <= 10) {
            critDamage = 4;
        } else if (enemy.dexerity >= 100 && critChance <= 5) {
            critDamage = 3;
        } else {
            critDamage = 0;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage + critDamage;
        // Number of hits calculation
        let numberHits = Math.floor(Math.random() * Math.floor(enemy.speed / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberHits];
        return attackValues; 
    }
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // Attack first calculation
    if (getPlayerSpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        window.alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if (enemy.health <= 0) {
            alert("Enemy defeated. Refresh browser to play again.");
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            window.alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            } 
            if (player.health <= 0) {
                alert("You lost. Refresh browser to play again.");
                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
        } else if (getEnemySpeed > getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            window.alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                } 
            if (player.health <= 0) {
                alert("You lost. Refresh browser to play again.");
                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                window.alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                } 
                if (enemy.health <= 0) {
                    alert("Enemy defeated. Refresh browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + player.health;
                }
    }
}
