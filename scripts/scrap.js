let critDamage;
let critChance = Math.floor(Math.random() * Math.floor(100));
        if (player.dexerity >= 300 && critChance <= 15){
            critDamage = 5;
        } else if (player.dexerity >= 200 && critChance <= 10) {
            critDamage = 4;
        } else if (player.dexerity >= 100 && critChance <= 5) {
            critDamage = 3;
        } else {
            critDamage = 0;
        }